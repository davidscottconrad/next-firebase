
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCXE58SQHjt-_JBcPM-ROKCg8gnhPuJUkU",
    authDomain: "next-firebase-8ddc4.firebaseapp.com",
    projectId: "next-firebase-8ddc4",
    storageBucket: "next-firebase-8ddc4.appspot.com",
    messagingSenderId: "1091030721255",
    appId: "1:1091030721255:web:f83c050cab6ccfb0623842",
    measurementId: "G-8SMER5PBL8"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();