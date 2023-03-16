import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-size: 20px;

  &.active {
    font-weight: bold;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
