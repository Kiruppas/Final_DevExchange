import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDpZuusAtocvhUKRwJzUuK5lcuimurO6Yw",
    authDomain: "devexchange-7568a.firebaseapp.com",
    projectId: "devexchange-7568a",
    storageBucket: "devexchange-7568a.appspot.com",
    messagingSenderId: "246353090070",
    appId: "1:246353090070:web:c964055451206b74fd4737",
    measurementId: "G-E5RNVMRKM0"  
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase;