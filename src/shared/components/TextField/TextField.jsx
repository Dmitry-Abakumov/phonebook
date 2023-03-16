import { nanoid } from 'nanoid';
import { useMemo } from 'react';
import PropTypes from 'prop-types';

import Box from '../Box/Box';
import { Input } from 'shared/components/TextField/TextField.styled';

const TextField = ({ handleChange, value, label, ...props }) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <Box display="flex" gridGap={10}>
      <label htmlFor={id}>{label}</label>
      <Input onChange={handleChange} value={value} id={id} {...props} />
    </Box>
  );
};

export default TextField;

TextField.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string,
  required: PropTypes.bool,
  title: PropTypes.string,
};
