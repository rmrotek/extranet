import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useUserData } from '../atoms';

interface Props extends PropsWithChildren {}

export const ProtectedRoute = ({ children }: Props) => {
  const { userData } = useUserData();
  const isAdmin = userData?.role === 'ADMIN';
  if (!isAdmin) {
    return <Navigate to={'/'} replace />;
  }

  return <>{children}</>;
};
