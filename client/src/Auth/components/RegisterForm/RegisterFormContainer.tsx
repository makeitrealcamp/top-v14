import React from 'react';
import { useForm } from 'react-hook-form';
import { RegisterFormView } from './RegisterFormView';
import { signUpValidation } from './SchemaValidator';
import { IRegisterFormValues } from '../../types';

export const RegisterFormContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormValues>(signUpValidation);

  const onSubmit = async (data: IRegisterFormValues) => {
    console.log(data);
  };
  const emailValidation = register('email');
  const passwordValidation = register('password');
  const passwordConfirmValidation = register('passwordConfirm');
  return (
    <RegisterFormView
      handleSubmit={handleSubmit(onSubmit)}
      emailValidation={emailValidation}
      passwordValidation={passwordValidation}
      passwordConfirmValidation={passwordConfirmValidation}
      validationErrors={errors}
    />
  );
};
