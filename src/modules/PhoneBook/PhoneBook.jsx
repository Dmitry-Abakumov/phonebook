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
    <Box
      as="section"
      display="flex"
      flexDirection="column"
      alignItems="center"
      pt={15}
      pl={15}
      pr={15}
      pb={15}
    >
      <h2>Phonebook</h2>
      <PhoneBookForm />
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        gridGap={10}
        pt={40}
        pb={40}
        pr={100}
        pl={100}
        bg="rgba(0, 0, 0, 0.9)"
        borderRadius={4}
        width={474}
        mt={10}
      >
        <PhoneBookFilter />
        <ContactList />
      </Box>
    </Box>
  );
};

export default PhoneBook;
