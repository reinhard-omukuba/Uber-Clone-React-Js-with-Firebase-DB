import firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyBQevv-pQDhjY0ld_QrNqWcK4jGPSdEUi0",
  authDomain: "uber-507fb.firebaseapp.com",
  projectId: "uber-507fb",
  storageBucket: "uber-507fb.appspot.com",
  messagingSenderId: "1056140663023",
  appId: "1:1056140663023:web:b3d1a109202e5135cc631a",
  measurementId: "G-3QTHPLL3HJ"
};

   const firebaseApp = firebase.initializeApp(firebaseConfig);

   const auth = firebase.auth();
   const db = firebase.firestore();

  // //firestore
  const mydDb = firebase.firestore();

  
  export {auth};
  export {mydDb}


  export default db;
