import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Example } from './Example';
import { IFormValues, Input } from './Input';
import axios from 'axios';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();
  const onSubmit = async (data: IFormValues) => {
    console.log(data);
    try {
      const { data: response } = await axios.post(
        `http://localhost:4000/login`,
        {
          ...data,
        }
      );
      console.log(response);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <>
      <FormWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type='text'
            label='First Name'
            register={register}
            required={true}
            maxLength={5}
          />
          {errors['First Name'] && <Error>{'First name is required'} </Error>}
          <Input
            type='email'
            label='email'
            register={register}
            required={true}
            validator={/^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/}
          />
          {errors.email && <Error> {'Email is required'}</Error>}
          {console.log(errors)}
          <Input
            type='password'
            label='password'
            register={register}
            required={true}
          />
          {errors.password && <Error>{'password is required'} </Error>}

          <input type='submit' />
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
