// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";


const dotenv = require('dotenv')
dotenv.config({ path:'./config/config.env'})

const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket:process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID
  };

  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const messageRef = firebase.database().ref('messages')

const us = document.querySelector('.username')
const pw = document.querySelector('.password')
const sm = document.querySelector('.submit')


sm.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log(`the username is ${us.value} and the password is ${pw.value}`)
    console.log(document.body)

    savedatabase(username,password)
});




function savedatabase (us,pw){
    newmessageRef = messageRef.push();
    newmessageRef.set({
        username: us,
        password: pw
    }
    )
}