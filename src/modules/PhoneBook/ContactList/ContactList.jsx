import { useSelector } from 'react-redux';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import ContactListItem from '../ContsctListItem/ContactListItem';
import Box from 'shared/components/Box/Box';

import {
  getFilteredContacts,
  getContacts,
  getIsLoading,
  getError,
} from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

import 'react-toastify/dist/ReactToastify.css';

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getError);

  return (
    <>
      {contacts?.length > 0 && (
        <>
          <h3>Contacts</h3>
          {/* <Box display="flex" justifyContent="center"> */}
          <Box
            as="ul"
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            gridGap={10}
            mt={10}
          >
            {filteredContacts?.map(({ name, id, number }) => (
              <ContactListItem key={id} name={name} number={number} id={id} />
            ))}
          </Box>
          {/* </Box> */}
        </>
      )}

      {isLoading && (
        <TailSpin
          height="30"
          width="30"
          color="#d3d3d3"
          wrapperClass="spinner"
        />
      )}

      {contacts?.length === 0 && !isLoading && (
        <p>You haven`t any contacts added yet</p>
      )}

      {Boolean(filter && !filteredContacts.length) && <p>No matches found</p>}

      {isError &&
        !isLoading &&
        toast.error('Oops, something went wrong, please reload the page.', {
          position: toast.POSITION.TOP_RIGHT,
        })}
    </>
  );
};

export default ContactList;
