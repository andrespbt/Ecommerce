import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: 'AIzaSyDt8KnKBiSCk33QtW3rP2f6HYmCjMExpv0',
  authDomain: 'ecommerce-app-practice.firebaseapp.com',
  projectId: 'ecommerce-app-practice',
  storageBucket: 'ecommerce-app-practice.appspot.com',
  messagingSenderId: '746333423520',
  appId: '1:746333423520:web:2c254d0213f88c6cb446c5',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
