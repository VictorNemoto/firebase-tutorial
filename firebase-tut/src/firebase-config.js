import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBXcdv6B5mnezYkYFx4ehJFJCgkjWscq_o",
    authDomain: "tutorial-firebase-9501b.firebaseapp.com",
    projectId: "tutorial-firebase-9501b",
    storageBucket: "tutorial-firebase-9501b.appspot.com",
    messagingSenderId: "546102756771",
    appId: "1:546102756771:web:d6b45f1170cca45d2f8616",
    measurementId: "G-H57CJQMX9D"
  };

  const app = initializeApp(firebaseConfig);

   export const db = getFirestore(app);