import styled from '@emotion/styled';

export const Input = styled.input`
  width: 250px;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid #bec02a;
  border-radius: 4px;
  background-color: transparent;
  color: #d3d3d3;

  &::placeholder {
    color: #d3d3d3;
  }
`;

export const Label = styled.label`
  font-weight: bold;
  color: #bec02a;
`;
