import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { firestoreAPI } from './client';
import { UserExtended } from '../types';

export const setUser = async ({
  newUserData,
  userId,
}: {
  newUserData: UserExtended;
  userId: string;
}) => {
  await setDoc(doc(firestoreAPI, 'users', userId), newUserData);
  return;
};

// TODO FINISH AUTH - logging in