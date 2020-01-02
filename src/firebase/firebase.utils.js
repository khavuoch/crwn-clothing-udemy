import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAKPEowHHJXbtb1wUJuj0VvT6k3pVcwuFo",
    authDomain: "crwn-db-ddf3d.firebaseapp.com",
    databaseURL: "https://crwn-db-ddf3d.firebaseio.com",
    projectId: "crwn-db-ddf3d",
    storageBucket: "crwn-db-ddf3d.appspot.com",
    messagingSenderId: "563427009687",
    appId: "1:563427009687:web:a7baf466147b0cc5ecf5d2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const singInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;