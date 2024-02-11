import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import config from '../firebasecfg.json';
console.log(config)
const app = initializeApp(config);

export const API = getFirestore(app);