import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

// import { IFormValues, Input } from './Input';
import axios from 'axios';
import { Button } from '../../../shared/button/Button';

export const LoginForm = () => {
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  const onSubmit = async (data: any) => {
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
          <input
            type='text'
            placeholder='Title'
            {...register('Title', { required: true, min: 3, maxLength: 80 })}
          />
          <textarea {...register('Description', { maxLength: 100 })} />

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
