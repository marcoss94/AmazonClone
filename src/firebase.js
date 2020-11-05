import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBlvFRVWKNN54HYY0h3nuLMrqA3zjTkiMg",
    authDomain: "clonereact-c4d27.firebaseapp.com",
    databaseURL: "https://clonereact-c4d27.firebaseio.com",
    projectId: "clonereact-c4d27",
    storageBucket: "clonereact-c4d27.appspot.com",
    messagingSenderId: "936541939073",
    appId: "1:936541939073:web:a6fb7984c0db5f4e73b480"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };