import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAVbwSoYaf-BFa2U3StRlL8LGh38IeIy7M",
  authDomain: "nst-website-3bfcc.firebaseapp.com",
  projectId: "nst-website-3bfcc",
  storageBucket: "nst-website-3bfcc.firebasestorage.app",
  messagingSenderId: "13557208298",
  appId: "1:13557208298:web:9be15ca4449c6966d5b393",
  measurementId: "G-T85HC7X0EF"
};

// ตรวจสอบว่า Firebase ถูก initialize แล้วหรือยัง
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const storage = firebase.storage();

export { db, storage };
