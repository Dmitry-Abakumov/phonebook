import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';

import Box from 'shared/components/Box/Box';
import TextField from 'shared/components/TextField/TextField';
import Button from 'shared/components/Button/Button.styled';
import { StyledForm } from 'shared/components/StyledForm/StyledForm.styled';
import StyledError from 'shared/components/StyledError/StyledError';

import { fetchAddContact } from 'redux/contacts/contacts-operations';

import fields from './fields';
import initialState from './initial-state';
import addContactSchema from './add-contact-schema';

const PhoneBookForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values, { resetForm }) => {
    dispatch(fetchAddContact(values));

    resetForm();
  };

  const { name, phone } = fields;

  return (
    <Box mt={10}>
      <Formik
        initialValues={initialState}
        onSubmit={onSubmit}
        validationSchema={addContactSchema}
      >
        {({ errors }) => (
          <StyledForm>
            <TextField
              {...name}
              bordercolor={errors.name ? '#ff002b' : '#bec02a'}
            />
            <ErrorMessage name={name.name} component={StyledError} />

            <TextField
              {...phone}
              bordercolor={errors.phone ? '#ff002b' : '#bec02a'}
            />
            <ErrorMessage name={phone.name} component={StyledError} />
            <Button type="submit">Add contact</Button>
          </StyledForm>
        )}
      </Formik>
    </Box>
  );
};

export default PhoneBookForm;
