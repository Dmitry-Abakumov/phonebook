import Box from 'shared/components/Box/Box';
import useForm from 'shared/hooks/useForm';

import TextField from 'shared/components/TextField/TextField';
import Button from 'shared/components/Button/Button.styled';

import fields from './fields';
import initialState from './intial-state';
import { signup } from 'redux/auth/auth-operations';

const RegisterForm = () => {
  const { state, handleChange, onSubmit } = useForm(initialState, signup);

  return (
    <Box display="flex" justifyContent="center" mt={50}>
      <Box
        as="form"
        onSubmit={onSubmit}
        display="flex"
        gridGap={10}
        flexDirection="column"
        pt={40}
        pb={40}
        pr={40}
        pl={40}
        bg="rgba(0, 0, 0, 0.9)"
        borderRadius={4}
      >
        <TextField
          handleChange={handleChange}
          value={state.name}
          {...fields.name}
        />
        <TextField
          handleChange={handleChange}
          value={state.email}
          {...fields.email}
        />
        <TextField
          handleChange={handleChange}
          value={state.password}
          {...fields.password}
        />
        <Button type="submit">Register</Button>
      </Box>
    </Box>
  );
};

export default RegisterForm;
