import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Navbar from 'modules/Navbar/Navbar';
import UserRoutes from 'UserRoutes';

import { getCurrentUser } from 'redux/auth/auth-operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <main>
      <Navbar />
      <UserRoutes />
    </main>
  );
};

export default App;
