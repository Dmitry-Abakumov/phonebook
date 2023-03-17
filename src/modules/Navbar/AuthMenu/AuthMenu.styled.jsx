import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #d3d3d3;
  font-size: 25px;
  font-weight: bold;

  &.active {
    color: #bec02a;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
