import React from 'react';
import styled from 'styled-components';

export const Hero = () => (
  <Row>
    <Content>
      <ContentWrapper>
        <Title>Get your things done, organize your life</Title>
        <Subtitle>
          Remember everything and tackle any project with your notes, tasks, and
          schedule all in one place.
        </Subtitle>
        <SignUpButton>Sign up for free</SignUpButton>
        <LoginTxt>Already have an account? Log in</LoginTxt>
      </ContentWrapper>
    </Content>
  </Row>
);

const Row = styled.div`
  margin: 100px auto;
  max-width: 1220px;
`;
const Content = styled.div`
  text-align: center;
`;
const ContentWrapper = styled.div`
  text-align: center;
  max-width: 80%;
  margin: 0 auto;
  padding-bottom: 60px;
`;
const Title = styled.h1`
  padding-bottom: 10px;
  font-size: 56px;
  line-height: 150%;
`;

const Subtitle = styled.h2`
  padding-bottom: 30px;
  font-size: 24px;
  font-weight: 400;
  line-height: 150%;
`;

const SignUpButton = styled.button`
  padding-bottom: 20px;
  font-family: 'Soleil_Bold', Helvetica, Arial, sans-serif;
  background: #00a82d;
  border: 0;
  border-radius: 3px;
  color: #fff;
  display: inline-block;
  font-size: 16px;
  padding: 16px 80px;
  letter-spacing: 1.5px;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  :hover& {
    background: #00bf33;
    transition: 0.1s background ease-in-out;
  }
`;

const LoginTxt = styled.p`
  margin-top: 1rem;
  font-size: 18px;
  text-decoration: underline;
  text-decoration: none;
  color: #000;
  :hover& {
    cursor: pointer;
    color: #00bf33;
    transition: 0.1s color ease-in-out;
  }
`;
