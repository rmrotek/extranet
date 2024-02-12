import { User } from 'firebase/auth';
import { atom, useAtom, useAtomValue } from 'jotai';

export type UserAtom = User | null;
const defaultState: UserAtom = null;

export const userAtom = atom<UserAtom>(defaultState);

export const useUser = () => {
  const [currentUser, setCurrentUser] = useAtom(userAtom);

  return { currentUser, setCurrentUser };
};
