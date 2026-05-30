import { cert, getApps, initializeApp, type App, type ServiceAccount } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

export class FirebaseAdminConfigError extends Error {
  constructor(message = 'Firebase Admin is not configured.') {
    super(message);
    this.name = 'FirebaseAdminConfigError';
  }
}

function parseServiceAccountKey(serviceAccountKey: string): ServiceAccount {
  const trimmedKey = serviceAccountKey.trim();
  const candidates = [
    trimmedKey,
    trimmedKey.replace(/\n/g, '\\n'),
  ];

  for (const candidate of candidates) {
    try {
      const parsed = JSON.parse(candidate) as ServiceAccount | string;
      const serviceAccount =
        typeof parsed === 'string'
          ? (JSON.parse(parsed) as ServiceAccount)
          : parsed;

      const normalizedServiceAccount = serviceAccount as ServiceAccount & {
        client_email?: string;
        private_key?: string;
        project_id?: string;
      };
      const privateKey = normalizedServiceAccount.privateKey ?? normalizedServiceAccount.private_key;

      return {
        ...normalizedServiceAccount,
        clientEmail: normalizedServiceAccount.clientEmail ?? normalizedServiceAccount.client_email,
        privateKey: privateKey?.replace(/\\n/g, '\n'),
        projectId: normalizedServiceAccount.projectId ?? normalizedServiceAccount.project_id,
      };
    } catch {
      continue;
    }
  }

  throw new FirebaseAdminConfigError('Invalid FIREBASE_SERVICE_ACCOUNT_KEY JSON.');
}

function getFirebaseAdminCredential() {
  const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

  if (!serviceAccountKey) {
    return null;
  }

  return cert(parseServiceAccountKey(serviceAccountKey));
}

export function getFirebaseAdminApp(): App {
  const existingApp = getApps()[0];

  if (existingApp) return existingApp;

  const credential = getFirebaseAdminCredential();

  if (!credential) {
    throw new FirebaseAdminConfigError();
  }

  return initializeApp({
    credential,
  });
}

export const adminAuth = {
  verifyIdToken: (token: string) => getAuth(getFirebaseAdminApp()).verifyIdToken(token),
};

export function getAdminFirestore() {
  return getFirestore(getFirebaseAdminApp());
}
