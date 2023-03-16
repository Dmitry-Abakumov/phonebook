import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import ContactList from './ContactList/ContactList';
import PhoneBookFilter from './PhoneBookFilter/PhoneBookFilter';
import Box from 'shared/components/Box/Box';

import { fetchAllContacts } from 'redux/contacts/contacts-operations';

const PhoneBook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <Box textAlign="center" pt={15} pl={15} pr={15} pb={15} as="section">
      <h2>Phonebook</h2>
      <PhoneBookForm />
      <Box
        border="1px solid black"
        borderRadius={4}
        pt={50}
        pb={50}
        maxWidth={500}
        ml="auto"
        mr="auto"
      >
        <PhoneBookFilter />
        <ContactList />
      </Box>
    </Box>
  );
};

export default PhoneBook;
