// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, getDocs
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAdCzRRlNQWNGOTYShz9AGM2Zt8gI0ByeM",
    authDomain: "rewardqr.firebaseapp.com",
    projectId: "rewardqr",
    storageBucket: "rewardqr.appspot.com",
    messagingSenderId: "671276723965",
    appId: "1:671276723965:web:95963df28aa45429269894",
    measurementId: "G-8ELLN1V1SH"
  };

  // init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()

// collection ref
const colRef = collection(db, 'email')

// get collection data
getDocs(colRef)
  .then(snapshot => {
    // console.log(snapshot.docs)
    let email = []
    snapshot.docs.forEach(doc => {
      email.push({ ...doc.data(), id: doc.id })
    })
    console.log(email)
  })
/*   .catch(err => {
    console.log(err.message)
  }) */