import { User } from 'firebase/auth';
import { atom, useAtom } from 'jotai';
import { UserExtended } from '../types';

export type UserAtom = User | null;
const authUserDefaultState: UserAtom = null;

export const userAtom = atom<UserAtom>(authUserDefaultState);

export const useUser = () => {
  const [currentUser, setCurrentUser] = useAtom(userAtom);

  return { currentUser, setCurrentUser };
};

export type UserDataAtom = UserExtended | null;
const userDataDefaultState: UserDataAtom = null;

export const userDataAtom = atom<UserDataAtom>(userDataDefaultState);

export const useUserData = () => {
  const [userData, setUserData] = useAtom(userDataAtom);

  return { userData, setUserData };
};
