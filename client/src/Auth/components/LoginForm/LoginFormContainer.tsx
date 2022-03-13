import React from 'react';
import { useForm } from 'react-hook-form';
import { ILoginFormValues } from '../../types';
import { LoginFormView } from './LoginFormView';
import { loginValidation } from './SchemaValidator';

export const LoginFormContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormValues>(loginValidation);

  const onSubmit = async (data: ILoginFormValues) => {
    console.log(data);
  };
  const emailValidation = register('email');
  const passwordValidation = register('password');

  return (
    <LoginFormView
      handleSubmit={handleSubmit(onSubmit)}
      emailValidation={emailValidation}
      passwordValidation={passwordValidation}
      validationErrors={errors}
    />
  );
};
