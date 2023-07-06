import styled from '@emotion/styled';

export const ContactWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 40px 40px;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 10px;
  width: 474px;
  margin-top: 20px;

  @media screen and (max-width: 474px) {
    width: 350px;
  }
`;
