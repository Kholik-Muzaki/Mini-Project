import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCpcgelbo4gzmCbDm2jPTnmqhQuOuF_roU",
    authDomain: "signup-56d2b.firebaseapp.com",
    databaseURL: "https://signup-56d2b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "signup-56d2b",
    storageBucket: "signup-56d2b.appspot.com",
    messagingSenderId: "155171970825",
    appId: "1:155171970825:web:b2ca39c0efe1ae6f903dd8",
    measurementId: "G-BCPE45E0Q6"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export { auth };
