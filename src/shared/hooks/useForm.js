import { useState } from 'react';
import { useDispatch } from 'react-redux';

const useForm = (initialState, operation) => {
  const [state, setState] = useState(initialState);

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setState(prevState => ({ ...prevState, [target.name]: target.value }));
  };

  const onSubmit = e => {
    e.preventDefault();

    dispatch(operation(state));

    setState(initialState);
  };

  return { state, setState, handleChange, onSubmit };
};

export default useForm;
