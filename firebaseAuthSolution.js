import { onAuthStateChanged, auth } from './firebaseConfig'; //Import firebase config

let unsubscribe; // Declare unsubscribe variable

const authStateChanged = () =>{
  unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/auth/web/user-properties
      const uid = user.uid;
      console.log(uid);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}

// Call function to set the listener
authStateChanged();

// ... later, when you need to unsubscribe (e.g., in a cleanup function)
export const unsubscribeAuth = () =>{
  if(unsubscribe) {
    unsubscribe();
  }
}