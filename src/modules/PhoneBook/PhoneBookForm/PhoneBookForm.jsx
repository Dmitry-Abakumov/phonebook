import Box from 'shared/components/Box/Box';
import TextField from 'shared/components/TextField/TextField';
import Button from 'shared/components/Button/Button.styled';

import { fetchAddContact } from 'redux/contacts/contacts-operations';
import useForm from 'shared/hooks/useForm';
import fields from './fields';
import initialState from './initial-state';

const PhoneBookForm = () => {
  const { state, handleChange, onSubmit } = useForm(
    initialState,
    fetchAddContact
  );
  const { name, phone } = state;

  return (
    <Box
      onSubmit={onSubmit}
      as="form"
      mt={10}
      mb={10}
      display="flex"
      flexDirection="column"
      alignItems="center"
      border="1px solid black"
      borderRadius={4}
      pt={50}
      pb={50}
      maxWidth={500}
      mr="auto"
      ml="auto"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
        gridGap={10}
      >
        <TextField handleChange={handleChange} value={name} {...fields.name} />
        <TextField
          handleChange={handleChange}
          value={phone}
          {...fields.phone}
        />
        <Button type="submit">Add contact</Button>
      </Box>
    </Box>
  );
};

export default PhoneBookForm;
