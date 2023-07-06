import LoginForm from 'modules/LoginForm/LoginForm';

import BgWrap from 'shared/components/BgWrap/BgWrap.styled';
import PageWrap from 'shared/components/PageWrap/PageWrap.styled';

import bgImg from 'shared/images/home-page-bg.jpg';

const LoginPage = () => {
  return (
    <BgWrap bgImg={bgImg} bgSize="cover" bgColor="#6b92a1">
      <PageWrap>
        <LoginForm />
      </PageWrap>
    </BgWrap>
  );
};

export default LoginPage;
