import { object, string } from 'yup';

const phoneRegex = /(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4,5}$)/gm;

const addContactSchema = object({
  name: string().required('Enter a name'),
  phone: string()
    .matches(phoneRegex, 'Phone must be in this format: "+380XXXXXXXXX"')
    .required('Enter a phone'),
});

export default addContactSchema;
