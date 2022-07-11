// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, onSnapshot,
  addDoc, doc
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

/* // get collection data
getDocs(colRef)
  .then(snapshot => {
    // console.log(snapshot.docs)
    let email = []
    snapshot.docs.forEach(doc => {
      email.push({ ...doc.data(), id: doc.id })
    })
    console.log(email)
  }) */

  // realtime collection data
onSnapshot(colRef, (snapshot) => {
  let books = []
  snapshot.docs.forEach(doc => {
    books.push({ ...doc.data(), id: doc.id })
  })
  console.log(books)
})

// adding docs
const addMailForm = document.querySelector('.add')
addMailForm.addEventListener('submit', (e) => {
e.preventDefault()

addDoc(colRef, {
  email: addMailForm.email.value,
})
.then(() => {
  addMailForm.reset()
})
})

function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.add.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.add.text1.focus();
return false;
}
}
