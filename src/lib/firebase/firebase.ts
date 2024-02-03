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
export const firebaseConfig = {
  apiKey: "AIzaSyDpU85MEnwDiLzO2-yP8QPZikr7HFQSV64",
  authDomain: "eco-league-356911.firebaseapp.com",
  databaseURL: "https://eco-league-356911-default-rtdb.firebaseio.com",
  projectId: "eco-league-356911",
  storageBucket: "eco-league-356911.appspot.com",
  messagingSenderId: "159965280867",
  appId: "1:159965280867:web:c42c071742b1c573bed656"
};

export const app = initializeApp(firebaseConfig)

export const db = getFirestore()
// const analytics = getAnalytics(app)
