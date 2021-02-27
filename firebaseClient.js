import firebase from "firebase";

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    messagingSenderId: process.env.REACT_APPMESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID
  };

export default function firebaseClient(){
    if(!firebase.apps.length){
        firebase.initializeApp(config)
    }
}
