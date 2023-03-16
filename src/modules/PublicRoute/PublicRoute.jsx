import useAuth from 'shared/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';

const PublicRoute = () => {
  const { isLoggedIn, token } = useAuth();

  if (isLoggedIn) return <Navigate to="/contacts" />;

  if (!isLoggedIn && token) {
    return (
      <TailSpin height="30" width="30" color="black" wrapperClass="spinner" />
    );
  }

  return <Outlet />;
};

export default PublicRoute;
