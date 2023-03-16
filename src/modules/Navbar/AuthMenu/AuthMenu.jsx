import { StyledLink } from './AuthMenu.styled';

const AuthMenu = () => {
  return (
    <>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
    </>
  );
};

export default AuthMenu;
