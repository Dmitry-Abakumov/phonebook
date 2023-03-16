import styled from '@emotion/styled';

const Button = styled.button`
  padding: 5px 10px;
  background-color: transparent;
  border: 1px solid;
  border-radius: 4px;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #000;
  }
`;

export default Button;
