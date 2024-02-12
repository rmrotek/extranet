import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
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

export const logInAuthUser = ({ email, password }: AuthDataPlain) => {
  return signInWithEmailAndPassword(auth, email, password);
  // .then((userCredential) => {
  //   // Signed in
  //   const user = userCredential.user;
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  // });
};
