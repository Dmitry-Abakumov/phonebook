import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';

import { StyledForm } from 'shared/components/StyledForm/StyledForm.styled';

import TextField from 'shared/components/TextField/TextField';
import Button from 'shared/components/Button/Button.styled';
import StyledError from 'shared/components/StyledError/StyledError';

import { signup } from 'redux/auth/auth-operations';

import fields from './fields';
import initialState from './intial-state';
import registerSchema from './registerSchema';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values, { resetForm }) => {
    dispatch(signup(values));

    resetForm();
  };

  const { name, email, password } = fields;

  return (
    <Formik
      initialValues={initialState}
      onSubmit={onSubmit}
      validationSchema={registerSchema}
    >
      {({ errors }) => (
        <StyledForm>
          <TextField
            {...name}
            bordercolor={errors.name ? '#ff002b' : '#bec02a'}
          />
          <ErrorMessage component={StyledError} name={name.name} />
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
          <Button type="submit">Register</Button>
        </StyledForm>
      )}
    </Formik>
  );
};

export default RegisterForm;
