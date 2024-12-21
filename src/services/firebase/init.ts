import { initializeApp } from 'firebase/app';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { showMessage } from '../../components/common/ThemedMessage';
import { FirebaseError } from './errors';
import { ERROR_CODES } from './constants';

// Validate environment variables
const requiredEnvVars = [
  'VITE_FIREBASE_API_KEY',
  'VITE_FIREBASE_AUTH_DOMAIN',
  'VITE_FIREBASE_PROJECT_ID',
  'VITE_FIREBASE_STORAGE_BUCKET',
  'VITE_FIREBASE_MESSAGING_SENDER_ID',
  'VITE_FIREBASE_APP_ID'
] as const;

// Check if Firebase is properly configured
const isFirebaseConfigured = requiredEnvVars.every(varName => 
  import.meta.env[varName] && import.meta.env[varName].length > 0
);

if (!isFirebaseConfigured) {
  throw new FirebaseError(
    'Firebase configuration is incomplete. Please check your environment variables.',
    ERROR_CODES.INITIALIZATION_ERROR
  );
}

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Enable offline persistence
enableIndexedDbPersistence(db).catch((err) => {
  if (err.code === 'failed-precondition') {
    showMessage.warning('Multiple tabs open, offline mode disabled');
  } else if (err.code === 'unimplemented') {
    showMessage.warning('Browser doesn\'t support offline persistence');
  }
});

// Export initialization status
export const isInitialized = true;