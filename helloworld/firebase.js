import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId, } from '@env'

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };