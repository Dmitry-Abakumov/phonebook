import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  if (!token) {
    return (instance.defaults.headers.authorization = '');
  }

  return (instance.defaults.headers.authorization = `Bearer ${token}`);
};

export const signup = async userData => {
  const { data } = await instance.post('/users/signup', userData);
  setToken(data.token);

  return data;
};

export const login = async userData => {
  const { data } = await instance.post('/users/login', userData);
  setToken(data.token);

  return data;
};

export const logout = async () => {
  await instance.post('/users/logout');
  setToken();
};

export const getCurrent = async token => {
  setToken(token);
  const { data } = await instance.get('/users/current');

  return data;
};
