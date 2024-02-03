import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfigTeste = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
}
const firebaseConfig = {
  apiKey: "AIzaSyBTtlMfSy-3ZhOvL1G-LbalTK2-Cmr4vQ8",
  authDomain: "next-vote.firebaseapp.com",
  projectId: "next-vote",
  storageBucket: "next-vote.appspot.com",
  messagingSenderId: "1032924889786",
  appId: "1:1032924889786:web:0e5e5e249d6b9dd687f883",
  measurementId: "G-EJ8DFEW8DN"
};

export const app = initializeApp(firebaseConfig)

export const db = getFirestore()
// const analytics = getAnalytics(app)
