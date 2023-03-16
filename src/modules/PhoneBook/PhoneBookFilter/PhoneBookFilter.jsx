import { useSelector, useDispatch } from 'react-redux';

import Box from 'shared/components/Box/Box';
import TextField from 'shared/components/TextField/TextField';

import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';
import { getContacts } from 'redux/contacts/contacts-selectors';

const PhoneBookFilter = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  return (
    <>
      {contacts?.length > 0 && (
        <Box display="flex" justifyContent="center" mb={10}>
          <TextField
            label="Find contacts"
            handleChange={({ target }) => dispatch(setFilter(target.value))}
            name="filter"
            value={filter}
            placeholder="Filter"
            type="text"
          />
        </Box>
      )}
    </>
  );
};

export default PhoneBookFilter;
