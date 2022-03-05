import React from 'react';
import styled from 'styled-components';

export const Registration = () => (
  <Frame>
    <Wrapper>
      <Content>
        <Heading>
          <TagLine>Remember everything important.</TagLine>
        </Heading>
        <SignInWrapper>
          <Text>Already have an account?</Text>
          <SignInButton>Sign in</SignInButton>
        </SignInWrapper>
      </Content>
    </Wrapper>
  </Frame>
);
const Frame = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Wrapper = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding: 0 10px 0;
  font-style: normal;
  font-weight: 400;
`;
const Content = styled.div`
  max-width: 512px;
  margin: 0px auto 28px auto;
  padding: 62.12px 99px 48px;
  width: 314px;
  box-shadow: 0px 4px 24px rgb(0 0 0 / 10%);
  background: #ffffff;
  border-radius: 2px;
  text-align: left;
`;
const Heading = styled.div`
  text-align: center;
  color: #aaaaaa;
`;
const TagLine = styled.p`
  color: #333333;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  margin-bottom: 44px;
  line-height: 1.41666667;
`;

const SignInWrapper = styled.div`
  text-align: center;
  margin-top: 34px;
  font-style: normal;
  font-weight: 400;
`;
const Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #737373;
`;

const SignInButton = styled.button`
  margin-top: 6px;
  transition: all 0.2s ease;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #00a82d;
  text-decoration: none;
  background: transparent;
`;
