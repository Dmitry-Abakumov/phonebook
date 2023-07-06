import styled from '@emotion/styled';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;

  height: 40px;
  padding: 0px 20px;
  background-color: transparent;
  border: 1px solid #bec02a;
  border-radius: 10px;
  color: #d3d3d3;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #bec02a;
    border-color: #d3d3d3;
  }
`;

export default Button;
