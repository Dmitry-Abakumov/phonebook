import UserMenu from './UserMenu/UserMenu';
import AuthMenu from './AuthMenu/AuthMenu';

import { Wrap, StyledLink } from './Navbar.styled';

import useAuth from 'shared/hooks/useAuth';

const Navbar = () => {
  const { isLoggedIn, token } = useAuth();

  return (
    <Wrap>
      <div>
        <StyledLink to="/">Home</StyledLink>
        {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
      </div>

      {isLoggedIn && <UserMenu />}
      {!isLoggedIn && !token && <AuthMenu />}
    </Wrap>
  );
};

export default Navbar;
