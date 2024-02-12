import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseApp } from './client';

interface AuthDataPlain {
  email: string;
  password: string;
}

const auth = getAuth(firebaseApp);

export const createAuthUser = ({ email, password }: AuthDataPlain) => {
  const promise = createUserWithEmailAndPassword(auth, email, password);

  return promise;
};
