const burgericon = document.getElementsByName('burgericon');
const lefthiddennav = document.querySelector('.lefthiddennav');
const loginback = document.querySelector('.loginback');
const closeloginbtn = document.getElementById('closelogin');
const email = document.getElementById('email');
const password = document.getElementById('password');

const googleloginbtn = document.getElementById('googlelogin');

closeloginbtn.addEventListener('click', e => {
    loginback.classList.add("loginback-hide");
});
burgericon.forEach(ele => {
    ele.addEventListener('click', e => {
        lefthiddennav.classList.toggle("hideleft");
    });
});

// firebase starts

import {
    initializeApp
} from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js'

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import {
    getAnalytics
} from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js'

// Add Firebase products that you want to use
import { getAuth, signInWithPopup, GoogleAuthProvider }
    from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js'
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
        loginback.classList.remove("loginback-hide");
    }
});



googleloginbtn.addEventListener('click', signingoogle);
function signingoogle() {
    signInWithPopup(auth)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log("log");
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + ": " + errorMessage);
            // The email of the user's account used.
            // const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
}