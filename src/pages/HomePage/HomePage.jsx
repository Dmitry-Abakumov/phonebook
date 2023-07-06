import BgWrap from 'shared/components/BgWrap/BgWrap.styled';
import { Title, Wrap } from './HomePage.styled';

import bgImg from 'shared/images/home-page-bg.jpg';

const HomePage = () => {
  return (
    <BgWrap bgImg={bgImg} bgSize="cover">
      <Wrap>
        <Title>PHONEBOOK APP</Title>
      </Wrap>
    </BgWrap>
  );
};

export default HomePage;
