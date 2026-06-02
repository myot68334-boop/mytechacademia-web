import { FieldValue } from 'firebase-admin/firestore';
import { getAdminFirestore } from './firebase-admin';
import type { TechAcademiaProfile, UserMemory } from '../../types/tech-academia';

const MEMORY_FIELD_LIMIT = 180;
const MEMORY_ARRAY_LIMIT = 6;

type RawMemoryInput = Partial<Record<keyof UserMemory, unknown>>;

function cleanString(value: unknown, limit = MEMORY_FIELD_LIMIT) {
  if (typeof value !== 'string') return undefined;

  const trimmed = value.trim();
  return trimmed ? trimmed.slice(0, limit) : undefined;
}

function cleanBoolean(value: unknown) {
  return typeof value === 'boolean' ? value : undefined;
}

function cleanStringList(value: unknown) {
  if (!Array.isArray(value)) return undefined;

  const items = value
    .flatMap((item) => {
      const cleanItem = cleanString(item, 80);
      return cleanItem ? [cleanItem] : [];
    })
    .slice(0, MEMORY_ARRAY_LIMIT);

  return items.length ? items : undefined;
}

function removeUndefinedFields<T extends Record<string, unknown>>(value: T) {
  return Object.fromEntries(
    Object.entries(value).filter(([, fieldValue]) => fieldValue !== undefined),
  ) as Partial<T>;
}

function sanitizeMemoryInput(input: RawMemoryInput): Partial<UserMemory> {
  return removeUndefinedFields({
    preferredLanguage: cleanString(input.preferredLanguage, 40),
    primaryInterest: cleanString(input.primaryInterest),
    skillLevel: cleanString(input.skillLevel, 80),
    learningGoal: cleanString(input.learningGoal),
    locationJapan: cleanBoolean(input.locationJapan),
    knownWeaknesses: cleanStringList(input.knownWeaknesses),
    preferredExplanationStyle: cleanString(input.preferredExplanationStyle),
  });
}

function memoryFromProfile(profile: TechAcademiaProfile | undefined): Partial<UserMemory> {
  if (!profile) return {};

  const progressKeys = profile.progress ? Object.keys(profile.progress) : [];

  return removeUndefinedFields({
    primaryInterest: progressKeys[0],
  });
}

function mapMemory(data: FirebaseFirestore.DocumentData | undefined): UserMemory | null {
  if (!data) return null;

  const memory = sanitizeMemoryInput(data as RawMemoryInput);

  if (!Object.keys(memory).length) {
    return null;
  }

  return {
    ...memory,
    updatedAt: data.updatedAt,
  };
}

export async function readUserMemory(uid: string): Promise<UserMemory | null> {
  try {
    const db = getAdminFirestore();
    const snapshot = await db.doc(`users/${uid}/memory/profile`).get();
    return mapMemory(snapshot.data());
  } catch {
    return null;
  }
}

export async function writeUserMemory(uid: string, input: RawMemoryInput): Promise<UserMemory | null> {
  const db = getAdminFirestore();
  const userSnapshot = await db.doc(`users/${uid}`).get();
  const profileMemory = memoryFromProfile(userSnapshot.data() as TechAcademiaProfile | undefined);
  const memory = {
    ...profileMemory,
    ...sanitizeMemoryInput(input),
  };

  if (!Object.keys(memory).length) {
    const existingMemory = await readUserMemory(uid);
    return existingMemory;
  }

  await db.doc(`users/${uid}/memory/profile`).set(
    {
      ...memory,
      updatedAt: FieldValue.serverTimestamp(),
      userId: uid,
    },
    { merge: true },
  );

  return readUserMemory(uid);
}

export function formatMemoryForPrompt(memory: UserMemory | null) {
  if (!memory) return '';

  const lines = [
    memory.preferredLanguage ? `Preferred language: ${memory.preferredLanguage}` : '',
    memory.primaryInterest ? `Primary interest: ${memory.primaryInterest}` : '',
    memory.skillLevel ? `Skill level: ${memory.skillLevel}` : '',
    memory.learningGoal ? `Learning goal: ${memory.learningGoal}` : '',
    typeof memory.locationJapan === 'boolean'
      ? `Lives or studies in Japan context: ${memory.locationJapan ? 'yes' : 'no'}`
      : '',
    memory.knownWeaknesses?.length ? `Known weaknesses: ${memory.knownWeaknesses.join(', ')}` : '',
    memory.preferredExplanationStyle
      ? `Preferred explanation style: ${memory.preferredExplanationStyle}`
      : '',
  ].filter(Boolean);

  if (!lines.length) return '';

  return [
    'User memory for personalization:',
    ...lines,
    'Use this memory only when helpful. Keep responses concise and respect explicit user instructions in the current message.',
    'If preferred language is present and the user did not request another language, respond in that preferred language.',
  ].join('\n');
}
