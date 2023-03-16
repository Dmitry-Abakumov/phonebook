export const getContacts = ({ contacts: { items } }) => items;

export const getFilteredContacts = ({ filter, contacts: { items } }) => {
  const normilizedEnteredName = filter.toLowerCase();

  if (!filter) return items;

  return items?.filter(({ name }) =>
    name.toLowerCase().includes(normilizedEnteredName)
  );
};

export const getIsLoading = ({ contacts: { isLoading } }) => isLoading;

export const getError = ({ contacts: { error } }) => error;
