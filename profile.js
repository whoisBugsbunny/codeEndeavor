import {
    initializeApp
} from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js'

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import {
    getAnalytics
} from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js'

// Add Firebase products that you want to use
import {
    getAuth
} from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js'
import {
    getFirestore
} from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0eRK6pFyX5Sz8-ZF7FjpLdoEeaCU7ECs",
    authDomain: "codeendeavor.firebaseapp.com",
    projectId: "codeendeavor",
    storageBucket: "codeendeavor.appspot.com",
    messagingSenderId: "502133308074",
    appId: "1:502133308074:web:582ea78c320c2070e46ed3",
    measurementId: "G-XX8MPR794Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/v8/firebase.User
        var uid = user.uid;
        console.log(uid);
        console.log(user.email);
        // ...
    } else {
        window.open("home.html", "_self");
    }
});