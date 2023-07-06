import { object, string } from 'yup';

// eslint-disable-next-line no-useless-escape
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const loginSchema = object({
  email: string()
    .matches(emailRegex, 'Invalid format')
    .required('Enter a email'),
  password: string()
    .min(7, 'Min name`s length - seven characters')
    .max(16, 'Max name`s length - sixteen characters')
    .required('Enter a password'),
});

export default loginSchema;
