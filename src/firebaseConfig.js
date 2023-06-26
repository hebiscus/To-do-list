import { initializeApp} from 'firebase/app';
import {
    getFireStore, collection, getDocs
} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCrzGh1-ICTqQXDr_68Bwlll8nAddBOF0U",
    authDomain: "fir-test-99c46.firebaseapp.com",
    projectId: "fir-test-99c46",
    storageBucket: "fir-test-99c46.appspot.com",
    messagingSenderId: "698997768246",
    appId: "1:698997768246:web:ecc43db04b76ef0c0d1897"
  };

  initializeApp(firebaseConfig);

  const db = getFireStore();

  const colRef = collection(db, 'tasks');

  getDocs(colRef)
    .then((snapshot) => {
        console.log(snapshot.docs)
    })

