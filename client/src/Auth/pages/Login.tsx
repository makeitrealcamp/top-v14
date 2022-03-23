import styled from 'styled-components';
import { Wrapper } from '../../shared/Wrapper';
import { LoginFormContainer } from '../components/LoginForm/LoginFormContainer';
import { GoogleOauth } from '../components/Oauth/GoogleOauth';

export const Login = () => {
  return (
    <Wrapper center={true}>
      <FormWrapper>
        <div className='left-side'>
          <img
            src='https://businesstemplates.co.nz/wp-content/uploads/2020/12/login-concept-illustration_114360-739.jpg'
            alt='login'
          />
        </div>
        <div className='right-side'>
          <div>
            <h2>Login</h2>
          </div>
          <LoginFormWrapper>
            <LoginFormContainer />
          </LoginFormWrapper>
        </div>
        <GoogleOauth />
      </FormWrapper>
    </Wrapper>
  );
};

const FormWrapper = styled('div')`
  display: flex;
  align-items: center;
  border: ${(props) => props.theme.palette.primary.border};
  border-radius: 5px;
  padding: 50px;
  user-select: none;
  gap: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  > div {
    flex: 0.5;
  }
  .left-side {
    img {
      width: 200px;
    }
  }
  .right-side {
    > div:first-of-type {
      text-align: center;
      img {
        width: 50px;
        border-radius: 10px;
      }
      margin-bottom: 20px;
    }
  }
`;

const LoginFormWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
`;
