import { Field } from 'formik';
import styled from '@emotion/styled';

export const Input = styled(Field)`
  width: 100%;
  height: 40px;

  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid;
  border-color: ${({ bordercolor }) => bordercolor};
  border-radius: 10px;
  background-color: transparent;
  color: #d3d3d3;

  &::placeholder {
    color: #d3d3d3;
  }
`;

export const Label = styled.label`
  font-weight: bold;
  color: #bec02a;

  margin-bottom: 5px;
`;
