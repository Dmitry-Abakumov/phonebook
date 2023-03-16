import Box from 'shared/components/Box/Box';
import useForm from 'shared/hooks/useForm';

import TextField from 'shared/components/TextField/TextField';
import Button from 'shared/components/Button/Button.styled';

import fields from './fields';
import initialState from './intial-state';
import { login } from 'redux/auth/auth-operations';

const LoginForm = () => {
  const { state, handleChange, onSubmit } = useForm(initialState, login);

  return (
    <Box
      onSubmit={onSubmit}
      as="form"
      display="flex"
      justifyContent="center"
      pt={50}
    >
      <Box
        display="flex"
        gridGap={10}
        flexDirection="column"
        alignItems="flex-end"
      >
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
        <Button type="submit">Login</Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
