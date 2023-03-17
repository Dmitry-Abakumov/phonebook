import { Navigate, Outlet } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';

import useAuth from 'shared/hooks/useAuth';

const PrivateRoute = () => {
  const { isLoggedIn, token } = useAuth();
  if (!isLoggedIn && token) {
    return (
      <TailSpin height="30" width="30" color="#d3d3d3" wrapperClass="spinner" />
    );
  }

  if (!isLoggedIn && !token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
