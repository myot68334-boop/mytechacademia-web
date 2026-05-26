import { applicationDefault, cert, getApps, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

function getFirebaseAdminCredential() {
  const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

  if (!serviceAccountKey) {
    return applicationDefault();
  }

  try {
    return cert(JSON.parse(serviceAccountKey));
  } catch {
    throw new Error('Invalid FIREBASE_SERVICE_ACCOUNT_KEY JSON.');
  }
}

const firebaseAdminApp = getApps().length
  ? getApps()[0]
  : initializeApp({
      credential: getFirebaseAdminCredential(),
    });

export const adminAuth = getAuth(firebaseAdminApp);
