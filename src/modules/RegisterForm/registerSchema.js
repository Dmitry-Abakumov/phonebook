import { object, string } from 'yup';

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const registerSchema = object({
  name: string().required('Enter a name'),
  email: string('Email must be a string')
    .matches(emailRegex, 'Invalid format')
    .required('Enter a email'),
  password: string()
    .min(7, 'Min name`s length - seven characters')
    .max(16, 'Max name`s length - sixteen characters')
    .required('Enter a password'),
});

export default registerSchema;
