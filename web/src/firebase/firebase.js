// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB5sH2NtnXye8eXPCc8iowrV8bzawNLnfo",
    authDomain: "chaseyourdreamsindia-df28e.firebaseapp.com",
    projectId: "chaseyourdreamsindia-df28e",
    storageBucket: "chaseyourdreamsindia-df28e.appspot.com",
    messagingSenderId: "126078101435",
    appId: "1:126078101435:web:776db4f8f1dd5550f3869e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };