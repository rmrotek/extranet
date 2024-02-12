import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { firestoreAPI } from './client';
import { Subject, UserExtended } from '../types';

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

export const setSubject = async ({ data }: { data: Subject }) => {
  await addDoc(collection(firestoreAPI, 'subjects'), {
    title: data.title,
  });
  return;
};
