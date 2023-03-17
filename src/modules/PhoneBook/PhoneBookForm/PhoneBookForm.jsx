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
    <Box mt={10}>
      <Box
        as="form"
        onSubmit={onSubmit}
        display="flex"
        gridGap={10}
        flexDirection="column"
        pt={40}
        pb={40}
        pr={100}
        pl={100}
        bg="rgba(0, 0, 0, 0.9)"
        borderRadius={4}
      >
        <TextField handleChange={handleChange} value={name} {...fields.name} />
        <TextField
          handleChange={handleChange}
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          {...fields.phone}
        />
        <Button type="submit">Add contact</Button>
      </Box>
    </Box>
  );
};

export default PhoneBookForm;
