import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';

import PrivateRoute from 'modules/PrivateRoute/PrivateRoute';
import PublicRoute from 'modules/PublicRoute/PublicRoute';

const PhoneBookPage = lazy(() => import('pages/PhoneBookPage/PhoneBookPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));
const RedirectPage = lazy(() => import('pages/RedirectPage/RedirectPage'));

const UserRoutes = () => {
  return (
    <Suspense
      fallback={
        <TailSpin
          height="30"
          width="30"
          color="#d3d3d3"
          wrapperClass="spinner"
        />
      }
    >
      <Routes>
        <Route path="/" element={<RedirectPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<PhoneBookPage />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
