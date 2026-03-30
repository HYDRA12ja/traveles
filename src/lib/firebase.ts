import { initializeApp, getApp, getApps } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import type { Auth, User } from "firebase/auth";

const env = import.meta.env;
let authInstance: Auth | null = null;

function getRequiredEnv(name: string): string {
  const value = env[name as keyof ImportMetaEnv] as string | undefined;
  if (!value) {
    throw new Error(
      `Missing ${name}. Add it to your .env file before using Firebase.`
    );
  }
  return value;
}

function getFirebaseAuth() {
  if (authInstance) {
    return authInstance;
  }

  const firebaseConfig = {
    apiKey: getRequiredEnv("VITE_FIREBASE_API_KEY"),
    authDomain: getRequiredEnv("VITE_FIREBASE_AUTH_DOMAIN"),
    projectId: getRequiredEnv("VITE_FIREBASE_PROJECT_ID"),
    storageBucket: getRequiredEnv("VITE_FIREBASE_STORAGE_BUCKET"),
    messagingSenderId: getRequiredEnv("VITE_FIREBASE_MESSAGING_SENDER_ID"),
    appId: getRequiredEnv("VITE_FIREBASE_APP_ID"),
  };

  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  authInstance = getAuth(app);
  return authInstance;
}

export async function signInWithGooglePopup() {
  const auth = getFirebaseAuth();

  // Sign out current Firebase user first so Google always asks which account to use.
  if (auth.currentUser) {
    await signOut(auth);
  }

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: "select_account" });

  return signInWithPopup(auth, googleProvider);
}

export function signInWithEmailPassword(email: string, password: string) {
  return signInWithEmailAndPassword(getFirebaseAuth(), email, password);
}

export async function registerWithEmailPassword(
  fullName: string,
  email: string,
  password: string
) {
  const credential = await createUserWithEmailAndPassword(
    getFirebaseAuth(),
    email,
    password
  );

  if (fullName.trim()) {
    await updateProfile(credential.user, { displayName: fullName.trim() });
  }

  return credential;
}

export function signOutUser() {
  return signOut(getFirebaseAuth());
}

export function subscribeToAuthState(listener: (user: User | null) => void) {
  return onAuthStateChanged(getFirebaseAuth(), listener);
}