import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import config from '../firebasecfg.json';

export const firebaseApp = initializeApp(config);
export const firestoreAPI = getFirestore(firebaseApp);