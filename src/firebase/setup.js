
// import { initializeApp } from "firebase/app"; // dateApp firebase Config
// import {getAuth} from 'firebase/auth'
// const firebaseConfig = {
//   apiKey: "AIzaSyBVz1Z2mYvUjNE_6KPa70EB-nlUUrHMhp8",
//   authDomain: "dateappfrontend.firebaseapp.com",
//   projectId: "dateappfrontend",
//   storageBucket: "dateappfrontend.appspot.com",
//   messagingSenderId: "834917198757",
//   appId: "1:834917198757:web:55a50d60ee65769f1e564c"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth=getAuth(app)


import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCqBpV9OGv4hFG2rrkiPqT9wE_D6OHfqgY",
  authDomain: "datingapp-89d4f.firebaseapp.com",
  projectId: "datingapp-89d4f",
  storageBucket: "datingapp-89d4f.appspot.com",
  messagingSenderId: "987330131475",
  appId: "1:987330131475:web:7dbe5aa206385aa13571e6"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)

// import firebase from "firebase/compat/app";
// import 'firebase/compat/auth'
// const firebaseConfig = {
//   apiKey: "AIzaSyBVz1Z2mYvUjNE_6KPa70EB-nlUUrHMhp8",
//   authDomain: "dateappfrontend.firebaseapp.com",
//   projectId: "dateappfrontend",
//   storageBucket: "dateappfrontend.appspot.com",
//   messagingSenderId: "834917198757",
//   appId: "1:834917198757:web:55a50d60ee65769f1e564c"
// };

// firebase.initializeApp(firebaseConfig)
// export default firebase