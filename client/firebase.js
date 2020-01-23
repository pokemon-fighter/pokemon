import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBNXobNcOq80kR52tPuaWqXoaPbI5NfkTA",
  authDomain: "pokemon-fighter.firebaseapp.com",
  databaseURL: "https://pokemon-fighter.firebaseio.com",
  projectId: "pokemon-fighter",
  storageBucket: "pokemon-fighter.appspot.com",
  messagingSenderId: "704355420951",
  appId: "1:704355420951:web:c9747a60b6d20647f6c552"
};

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
export default db
