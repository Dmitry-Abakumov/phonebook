import { Form } from 'formik';
import styled from '@emotion/styled';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 25px;

  width: 474px;
  padding: 40px;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 10px;

  @media screen and (max-width: 474px) {
    max-width: 350px;
  }
`;
