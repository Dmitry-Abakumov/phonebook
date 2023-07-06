import styled from '@emotion/styled';

const BgWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;

  background-image: url(${({ bgImg }) => bgImg});
  background-size: ${({ bgSize }) => bgSize};
  background-repeat: no-repeat;
  background-color: ${({ bgColor = '#fff' }) => bgColor};

  width: 100%;
  min-height: 800px;
`;

export default BgWrap;
