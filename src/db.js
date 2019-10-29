import firebase from 'firebase'

var app = {
    apiKey: "",
    authDomain: "menu-scheduler.firebaseapp.com",
    databaseURL: "https://menu-scheduler.firebaseio.com",
    projectId: "menu-scheduler",
    storageBucket: "menu-scheduler.appspot.com",
    messagingSenderId: ""
};

const firebaseApp = firebase.initializeApp(app);
const db = firebaseApp.database();
const storage = firebaseApp.storage();

export default db
