import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Navbar from 'modules/Navbar/Navbar';
import UserRoutes from 'UserRoutes';
import Container from 'shared/components/Container/Container.styled';

import { getCurrentUser } from 'redux/auth/auth-operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <div>
        <Navbar />
        <UserRoutes />
      </div>
    </Container>
  );
};

export default App;
