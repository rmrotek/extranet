import {
  DocumentData,
  DocumentSnapshot,
  QuerySnapshot,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { firestoreAPI } from './client';
import { Role, Subject, UserExtended } from '../types';

const convertDocs = <T>(
  snap: QuerySnapshot<DocumentData, DocumentData>
): T[] => {
  const data = snap.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    } as T;
  });
  return data;
};
const convertDoc = <T>(
  snap: DocumentSnapshot<DocumentData, DocumentData>
): T => {
  const data = { id: snap.id, ...snap.data() } as T;
  return data;
};

export const getAllUsers = async () => {
  const snapshot = await getDocs(collection(firestoreAPI, 'users'));

  return convertDocs<UserExtended>(snapshot);
};

export const getUsersByRole = async (role: Role) => {
  const snapshot = await getDocs(
    query(collection(firestoreAPI, 'users'), where('role', '==', role))
  );

  return convertDocs<UserExtended>(snapshot);
};

export const getUser = async (id: string) => {
  const snapshot = await getDoc(doc(firestoreAPI, 'users', id));

  return convertDoc<UserExtended>(snapshot);
};

export const getAllSubjects = async () => {
  const snapshot = await getDocs(collection(firestoreAPI, 'subjects'));

  return convertDocs<Subject>(snapshot);
};
