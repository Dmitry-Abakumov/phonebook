import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Box from 'shared/components/Box/Box';
import Button from 'shared/components/Button/Button.styled';

import { fetchDeleteContact } from 'redux/contacts/contacts-operations';

const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <Box
      display="flex"
      gridGap={10}
      as="li"
      alignItems="center"
      color="#d3d3d3"
    >
      {name}: {number}
      <Button onClick={() => dispatch(fetchDeleteContact(id))} type="button">
        delete
      </Button>
    </Box>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
