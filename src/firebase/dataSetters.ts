import {
  addDoc,
  collection,
  doc,
  setDoc,
  writeBatch,
} from 'firebase/firestore';
import { firestoreAPI } from './client';
import { GroupAPI, Subject, UserExtended } from '../types';

export const setUser = async ({
  newUserData,
  userId,
}: {
  newUserData: UserExtended;
  userId: string;
}) => {
  return await setDoc(doc(firestoreAPI, 'users', userId), newUserData);
};

export const setSubject = async ({ data }: { data: Subject }) => {
  return await addDoc(collection(firestoreAPI, 'subjects'), {
    title: data.title,
  });
};

export const setGroup = async ({ data }: { data: GroupAPI }) => {
  return await addDoc(collection(firestoreAPI, 'groups'), data);
};

export const updateUsersWithGroup = async ({
  userIds,
  groupId,
}: {
  userIds: string[];
  groupId: string;
}) => {
  const batch = writeBatch(firestoreAPI);

  userIds.forEach((id) => {
    const userRef = doc(firestoreAPI, 'users', id);
    batch.update(userRef, { groupId });
  });

  batch.commit();
};
