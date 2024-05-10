import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyD9vFdjYF9XKHFiSKCxk22dufWrNxiwmlM",
    authDomain: "task-management-d1ca3.firebaseapp.com",
    projectId: "task-management-d1ca3",
    storageBucket: "task-management-d1ca3.appspot.com",
    messagingSenderId: "524321504136",
    appId: "1:524321504136:web:d67322a4b9623b62c4583d",
    measurementId: "G-N9SMLVDMNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;


