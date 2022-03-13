import React from 'react';
import { Wrapper } from '../../shared/Wrapper';
import {
  CardBody,
  CardFieldset,
  CardHeader,
  CardHeading,
  CardLink,
  CardOptions,
  CardOptionsItem,
  CardOptionsNote,
  CardWrapper,
} from '../components/Card/Card';
import { RegisterFormContainer } from '../components/RegisterForm/RegisterFormContainer';

export const SignUp = () => (
  <Wrapper center={true}>
    <CardWrapper>
      <CardHeader>
        <CardHeading>Sign in</CardHeading>
      </CardHeader>
      <CardBody>
        <RegisterFormContainer />
        <CardFieldset>
          <CardOptionsNote>Or sign up with</CardOptionsNote>

          <CardOptions>
            <CardOptionsItem>
              {/* <CardIcon className='fab fa-google' big /> */}
            </CardOptionsItem>

            <CardOptionsItem>
              {/* <CardIcon className='fab fa-twitter' big /> */}
            </CardOptionsItem>

            <CardOptionsItem>
              {/* <CardIcon className='fab fa-facebook' big /> */}
            </CardOptionsItem>
          </CardOptions>
        </CardFieldset>

        <CardFieldset>
          <CardLink>I already have an account</CardLink>
        </CardFieldset>
      </CardBody>
    </CardWrapper>
  </Wrapper>
);
