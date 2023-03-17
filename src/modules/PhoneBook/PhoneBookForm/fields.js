const fields = {
  name: {
    type: 'text',
    name: 'name',
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    title:
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
    required: true,
    label: 'Name',
    placeholder: 'Name',
  },
  phone: {
    type: 'tel',
    name: 'phone',
    title:
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
    required: true,
    label: 'Phone',
    placeholder: 'Phone',
  },
};

export default fields;
