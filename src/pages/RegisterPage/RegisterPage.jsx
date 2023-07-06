import RegisterForm from 'modules/RegisterForm/RegisterForm';

import BgWrap from 'shared/components/BgWrap/BgWrap.styled';
import PageWrap from 'shared/components/PageWrap/PageWrap.styled';

import bgImg from 'shared/images/home-page-bg.jpg';

const RegisterPage = () => {
  return (
    <BgWrap bgImg={bgImg} bgSize="cover" bgColor="#6b92a1">
      <PageWrap>
        <RegisterForm />
      </PageWrap>
    </BgWrap>
  );
};

export default RegisterPage;
