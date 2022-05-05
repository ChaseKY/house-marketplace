import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'house-marketplace-app-a6d7b.firebaseapp.com',
  projectId: 'house-marketplace-app-a6d7b',
  storageBucket: 'house-marketplace-app-a6d7b.appspot.com',
  messagingSenderId: '327276784689',
  appId: '1:327276784689:web:234c40c89b7c2ec2abb910',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
