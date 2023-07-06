import { StyledLink } from '../Navbar.styled';

const AuthMenu = () => {
  return (
    <div>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
    </div>
  );
};

export default AuthMenu;
