import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAJQuPt9tBn-LCu7EB5MuzDLHn9h01oGmQ",
    authDomain: "restaurantec19.firebaseapp.com",
    projectId: "restaurantec19",
    storageBucket: "restaurantec19.appspot.com",
    messagingSenderId: "306380454574",
    appId: "1:306380454574:web:cded725f094cb3fe4c8b3f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;