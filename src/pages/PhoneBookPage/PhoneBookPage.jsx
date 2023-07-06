import PhoneBook from 'modules/PhoneBook/PhoneBook';

import BgWrap from 'shared/components/BgWrap/BgWrap.styled';
import PageWrap from 'shared/components/PageWrap/PageWrap.styled';

import bgImg from 'shared/images/phone-book-page-bg.jpg';

const PhoneBookPage = () => {
  return (
    <BgWrap bgImg={bgImg} bgSize="100%" bgColor="#7c2e0a">
      <PageWrap>
        <PhoneBook />
      </PageWrap>
    </BgWrap>
  );
};

export default PhoneBookPage;
