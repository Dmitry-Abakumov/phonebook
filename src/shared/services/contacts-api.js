import { instance } from './auth-api';

export const getAllContacts = async () => {
  const { data } = await instance.get('/contacts');

  return data;
};

export const addContact = async ({ name, phone: number }) => {
  const { data } = await instance.post(`/contacts`, { name, number });

  return data;
};

export const deleteContact = async id => {
  instance.delete(`/contacts/${id}`);
};
