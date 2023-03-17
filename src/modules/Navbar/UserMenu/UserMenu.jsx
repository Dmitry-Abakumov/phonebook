import { useDispatch } from 'react-redux';

import Box from 'shared/components/Box/Box';
import Button from 'shared/components/Button/Button.styled';

import { logout } from 'redux/auth/auth-operations';
import useAuth from 'shared/hooks/useAuth';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box
      display="flex"
      gridGap={10}
      alignItems="center"
      fontSize={20}
      fontWeight="bold"
      color="#bec02a"
    >
      <span>Welcome, {user?.name}</span>
      <Button onClick={() => dispatch(logout())} type="button">
        Logout
      </Button>
    </Box>
  );
};

export default UserMenu;
