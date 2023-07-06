import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import ContactList from './ContactList/ContactList';
import PhoneBookFilter from './PhoneBookFilter/PhoneBookFilter';

import { ContactWrap } from './PhoneBook.styled';

import { fetchAllContacts } from 'redux/contacts/contacts-operations';

const PhoneBook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <>
      <h2>Phonebook</h2>
      <PhoneBookForm />
      <ContactWrap>
        <PhoneBookFilter />
        <ContactList />
      </ContactWrap>
    </>
  );
};

export default PhoneBook;
