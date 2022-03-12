import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { IFormValues, Input } from './Input';
import axios from 'axios';
import { Button } from '../../shared/button/Button';

export const LoginForm = () => {
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();

  const onSubmit = async (data: IFormValues) => {
    try {
      await axios.post(`http://localhost:4000/login`, {
        ...data,
      });
    } catch (error: any) {
      if (error.response) {
        setError(error.response.data.error.message);
      }
    }
  };

  return (
    <>
      <FormWrapper>
        {error && <Error>{error}</Error>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type='email'
            label='email'
            id='email'
            register={register}
            required={true}
            validator={/^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/}
          />
          {errors.email && <Error> {'Email is required'}</Error>}

          <Input
            type='password'
            label='password'
            minLength={5}
            register={register}
            required={true}
            id='password'
          />
          {errors.password && errors.password.type === 'required' && (
            <Error>{'password is required'} </Error>
          )}
          {/* {console.log(errors)} */}
          {errors.password && errors.password.type === 'minLength' && (
            <Error>{'password must be at least 5 characters long'} </Error>
          )}

          <Button type='submit'>Login</Button>
          <p>
            Don&apos;t have an account? Signup&nbsp;
            <span></span>
          </p>
        </form>
      </FormWrapper>
    </>
  );
};

const Error = styled.span`
  color: red;
  display: block;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    display: block;
  }
`;
