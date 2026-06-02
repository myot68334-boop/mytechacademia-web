import { FieldValue, Timestamp } from 'firebase-admin/firestore';
import { getAdminFirestore } from './firebase-admin';
import type { TechAcademiaPlan } from '../../types/tech-academia';

export type QuotaErrorCode = 'DAILY_QUOTA_EXCEEDED' | 'RATE_LIMITED';

type PlanLimits = {
  dailyRequests: number;
  requestsPerMinute: number;
};

type QuotaCheckResult = {
  dailyRemaining: number;
  limits: PlanLimits;
  minuteRemaining: number;
  periodKey: string;
  plan: TechAcademiaPlan;
  windowKey: string;
};

const PLAN_LIMITS: Record<TechAcademiaPlan, PlanLimits> = {
  free: {
    dailyRequests: 20,
    requestsPerMinute: 5,
  },
  premium: {
    dailyRequests: 200,
    requestsPerMinute: 20,
  },
  enterprise: {
    dailyRequests: 1000,
    requestsPerMinute: 60,
  },
};

export class QuotaError extends Error {
  code: QuotaErrorCode;
  limit: number;
  status: 403 | 429;

  constructor(code: QuotaErrorCode, message: string, status: 403 | 429, limit: number) {
    super(message);
    this.name = 'QuotaError';
    this.code = code;
    this.limit = limit;
    this.status = status;
  }
}

function isTechAcademiaPlan(plan: unknown): plan is TechAcademiaPlan {
  return plan === 'free' || plan === 'premium' || plan === 'enterprise';
}

function getUtcDateKey(date: Date) {
  return date.toISOString().slice(0, 10);
}

function getUtcMinuteKey(date: Date) {
  return date.toISOString().slice(0, 16);
}

function getNextUtcDay(date: Date) {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + 1));
}

function getNextUtcMinute(date: Date) {
  const nextMinute = new Date(date);
  nextMinute.setUTCSeconds(0, 0);
  nextMinute.setUTCMinutes(nextMinute.getUTCMinutes() + 1);
  return nextMinute;
}

function getCounterValue(value: unknown) {
  return typeof value === 'number' && Number.isFinite(value) ? value : 0;
}

export async function checkAndIncrementChatQuota(uid: string): Promise<QuotaCheckResult> {
  const db = getAdminFirestore();
  const now = new Date();
  const periodKey = getUtcDateKey(now);
  const windowKey = getUtcMinuteKey(now);
  const userRef = db.doc(`users/${uid}`);
  const usageRef = db.doc(`users/${uid}/usage/${periodKey}`);
  const rateLimitRef = db.doc(`users/${uid}/rateLimits/${windowKey}`);

  return db.runTransaction(async (transaction) => {
    const [userSnapshot, usageSnapshot, rateLimitSnapshot] = await Promise.all([
      transaction.get(userRef),
      transaction.get(usageRef),
      transaction.get(rateLimitRef),
    ]);

    const userPlan = userSnapshot.data()?.plan;
    const plan: TechAcademiaPlan = isTechAcademiaPlan(userPlan) ? userPlan : 'free';
    const limits = PLAN_LIMITS[plan];
    const dailyUsed = getCounterValue(usageSnapshot.data()?.requestsUsed);
    const minuteUsed = getCounterValue(rateLimitSnapshot.data()?.requestsUsed);

    if (minuteUsed >= limits.requestsPerMinute) {
      throw new QuotaError(
        'RATE_LIMITED',
        'Too many messages. Please wait a minute before sending again.',
        429,
        limits.requestsPerMinute,
      );
    }

    if (dailyUsed >= limits.dailyRequests) {
      throw new QuotaError(
        'DAILY_QUOTA_EXCEEDED',
        'Daily AI message limit reached. Please try again tomorrow.',
        403,
        limits.dailyRequests,
      );
    }

    const nextDailyUsed = dailyUsed + 1;
    const nextMinuteUsed = minuteUsed + 1;
    const serverTimestamp = FieldValue.serverTimestamp();

    transaction.set(
      usageRef,
      {
        limit: limits.dailyRequests,
        periodKey,
        plan,
        requestsUsed: nextDailyUsed,
        resetAt: Timestamp.fromDate(getNextUtcDay(now)),
        updatedAt: serverTimestamp,
        userId: uid,
      },
      { merge: true },
    );

    transaction.set(
      rateLimitRef,
      {
        limit: limits.requestsPerMinute,
        plan,
        requestsUsed: nextMinuteUsed,
        resetAt: Timestamp.fromDate(getNextUtcMinute(now)),
        updatedAt: serverTimestamp,
        userId: uid,
        windowKey,
      },
      { merge: true },
    );

    return {
      dailyRemaining: limits.dailyRequests - nextDailyUsed,
      limits,
      minuteRemaining: limits.requestsPerMinute - nextMinuteUsed,
      periodKey,
      plan,
      windowKey,
    };
  });
}
