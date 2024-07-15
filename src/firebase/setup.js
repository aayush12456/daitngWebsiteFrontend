
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBVz1Z2mYvUjNE_6KPa70EB-nlUUrHMhp8",
  authDomain: "dateappfrontend.firebaseapp.com",
  projectId: "dateappfrontend",
  storageBucket: "dateappfrontend.appspot.com",
  messagingSenderId: "834917198757",
  appId: "1:834917198757:web:55a50d60ee65769f1e564c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)