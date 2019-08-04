import firebase from 'firebase'

var app = {
    apiKey: "AIzaSyDXEWp2b0qMhYJMLYUpC_5Evc-CwpvyBBE",
    authDomain: "menu-scheduler.firebaseapp.com",
    databaseURL: "https://menu-scheduler.firebaseio.com",
    projectId: "menu-scheduler",
    storageBucket: "menu-scheduler.appspot.com",
    messagingSenderId: "792365426776"
};

const firebaseApp = firebase.initializeApp(app);
const db = firebaseApp.database();
const storage = firebaseApp.storage();

export default db