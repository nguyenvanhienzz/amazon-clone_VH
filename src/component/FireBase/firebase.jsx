import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD66auD-pvBy9dr8CvuSCrGR6yjyqSPZCE",
    authDomain: "clone-da9fc.firebaseapp.com",
    projectId: "clone-da9fc",
    storageBucket: "clone-da9fc.appspot.com",
    messagingSenderId: "63380229652",
    appId: "1:63380229652:web:feefed8a71f17b556c6101",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };