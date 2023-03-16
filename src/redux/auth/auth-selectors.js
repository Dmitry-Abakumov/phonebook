export const getIsLoggedIn = ({ auth: { isLoggedIn } }) => isLoggedIn;

export const getUser = ({ auth: { user } }) => user;

export const getIsLoading = ({ auth: { isLoading } }) => isLoading;

export const getToken = ({ auth: { token } }) => token;
