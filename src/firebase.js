import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAarqDT9Kmz0hpvHnUVEAfu3P64CQQHXQc",
    authDomain: "facebook-clone-6e495.firebaseapp.com",
    projectId: "facebook-clone-6e495",
    storageBucket: "facebook-clone-6e495.appspot.com",
    messagingSenderId: "177782382492",
    appId: "1:177782382492:web:17f16d82e33d4454c6b259",
    measurementId: "G-3SB9WMEPH5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;