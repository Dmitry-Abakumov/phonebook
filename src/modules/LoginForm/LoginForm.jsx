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
    <Box display="flex" justifyContent="center" mt={50}>
      <Box
        as="form"
        onSubmit={onSubmit}
        display="flex"
        flexDirection="column"
        gridGap={10}
        pt={40}
        pb={40}
        pr={40}
        pl={40}
        bg="rgba(0, 0, 0, 0.9)"
        borderRadius={4}
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
