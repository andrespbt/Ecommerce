import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  signInAnonymously,
} from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const signInAnon = async () => {
  try {
    const { user } = await signInAnonymously(FirebaseAuth);

    return {
      ok: true,
      status: 5,
      uid: user.uid,
    };
  } catch (error) {
    return {
      ok: false,
      error: error.message,
    };
  }
};

export const signUpWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);

    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      status: 3,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    return {
      ok: false,
      error: error.message,
    };
  }
};

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
  try {
    const { user } = await createUserWithEmailAndPassword(FirebaseAuth, email, password);

    const { uid, photoURL } = user;

    await updateProfile(FirebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const logInWithEmailPassword = async ({ email, password }) => {
  try {
    const { user } = await signInWithEmailAndPassword(FirebaseAuth, email, password);

    const { displayName, photoURL, uid } = user;

    return {
      ok: true,
      status: 3,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};
