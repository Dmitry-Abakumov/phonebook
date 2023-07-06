import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';

import TextField from 'shared/components/TextField/TextField';
import Button from 'shared/components/Button/Button.styled';
import { StyledForm } from 'shared/components/StyledForm/StyledForm.styled';
import StyledError from 'shared/components/StyledError/StyledError';

import { login } from 'redux/auth/auth-operations';

import fields from './fields';
import initialState from './intial-state';
import loginSchema from './login-schema';

const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values, { resetForm }) => {
    dispatch(login(values));

    resetForm();
  };

  const { email, password } = fields;

  return (
    <Formik
      initialValues={initialState}
      onSubmit={onSubmit}
      validationSchema={loginSchema}
    >
      {({ errors }) => (
        <StyledForm>
          <TextField
            {...email}
            bordercolor={errors.email ? '#ff002b' : '#bec02a'}
          />
          <ErrorMessage component={StyledError} name={email.name} />

          <TextField
            {...password}
            bordercolor={errors.password ? '#ff002b' : '#bec02a'}
          />
          <ErrorMessage component={StyledError} name={password.name} />

          <Button type="submit">Login</Button>
        </StyledForm>
      )}
    </Formik>
  );
};

export default LoginForm;
