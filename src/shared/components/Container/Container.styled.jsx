import styled from '@emotion/styled';

import bgImg from './phone-book.jpg';

const Container = styled.div`
  position: absolute;
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`;

export default Container;
