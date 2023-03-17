import Box from 'shared/components/Box/Box';

import UserMenu from './UserMenu/UserMenu';
import AuthMenu from './AuthMenu/AuthMenu';

import useAuth from 'shared/hooks/useAuth';

const Navbar = () => {
  const { isLoggedIn, token } = useAuth();

  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      pt={15}
      pb={15}
      pr={20}
      bg="rgba(0, 0, 0, 0.3)"
    >
      {isLoggedIn && <UserMenu />}
      {!isLoggedIn && !token && <AuthMenu />}
    </Box>
  );
};

export default Navbar;
