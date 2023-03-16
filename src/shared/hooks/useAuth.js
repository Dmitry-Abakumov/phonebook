import { useSelector } from 'react-redux';
import {
  getUser,
  getIsLoading,
  getIsLoggedIn,
  getToken,
} from 'redux/auth/auth-selectors';

const useAuth = () => {
  const user = useSelector(getUser);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isLoading = useSelector(getIsLoading);
  const token = useSelector(getToken);

  return { user, isLoading, isLoggedIn, token };
};

export default useAuth;
