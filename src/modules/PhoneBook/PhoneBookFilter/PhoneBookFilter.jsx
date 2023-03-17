import { useSelector, useDispatch } from 'react-redux';

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
        <TextField
          label="Find contacts"
          handleChange={({ target }) => dispatch(setFilter(target.value))}
          name="filter"
          value={filter}
          placeholder="Filter"
          type="text"
        />
      )}
    </>
  );
};

export default PhoneBookFilter;
