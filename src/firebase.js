import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp( {
    apiKey: "AIzaSyAGnN3_7mUF76fHG6gA074xBxv30KakMbQ",
    authDomain: "rjchat-a6ddc.firebaseapp.com",
    projectId: "rjchat-a6ddc",
    storageBucket: "rjchat-a6ddc.appspot.com",
    messagingSenderId: "1017726036559",
    appId: "1:1017726036559:web:d276fd42fda6c1863f983a"
}).auth();