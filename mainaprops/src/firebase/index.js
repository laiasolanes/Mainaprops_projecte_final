import firebase from 'firebase/app';
import firebaseConfig from './firebase.config';
import 'firebase/auth';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth();
