import { nanoid } from 'nanoid';
import { useMemo } from 'react';

import Box from '../Box/Box';
import { Input, Label } from 'shared/components/TextField/TextField.styled';

const TextField = ({ label, ...props }) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <Box display="flex" flexDirection="column" gridGap="2px">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...props} />
    </Box>
  );
};

export default TextField;
