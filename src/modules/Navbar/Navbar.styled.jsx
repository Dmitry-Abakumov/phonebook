import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrap = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

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
