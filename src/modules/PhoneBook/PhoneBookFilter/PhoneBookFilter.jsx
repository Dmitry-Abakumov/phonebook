import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';

import TextField from 'shared/components/TextField/TextField';

import { setFilter } from 'redux/filter/filter-slice';
import { StyledForm } from 'shared/components/StyledForm/StyledForm.styled';

import { getFilter } from 'redux/filter/filter-selectors';
import { getContacts } from 'redux/contacts/contacts-selectors';

const PhoneBookFilter = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  return (
    <>
      {contacts?.length > 0 && (
        <Formik>
          <StyledForm>
            <TextField
              label="Find contacts"
              onChange={({ target }) => dispatch(setFilter(target.value))}
              name="filter"
              value={filter}
              placeholder="Filter"
              type="text"
            />
          </StyledForm>
        </Formik>
      )}
    </>
  );
};

export default PhoneBookFilter;
