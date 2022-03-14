import { useContext, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { ILoginFormValues } from '../../types';
import { DisplayError } from '../error/DisplayError';
import { LoginFormView } from './LoginFormView';
import { loginValidation } from './SchemaValidator';

export const LoginFormContainer = () => {
  const { login, error: submitError, user } = useContext(AuthContext);
  const [error, setError] = useState<string>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormValues>(loginValidation);
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<ILoginFormValues> = async (data) => {
    console.log(data);
    login(data);
  };
  const emailValidation = register('email');
  const passwordValidation = register('password');

  useEffect(() => {
    if (submitError) {
      setError(submitError);
    }
    if (user) {
      navigate('/dashboard', { replace: true });
    }
  }, [submitError, user]);

  return (
    <>
      {error && <DisplayError>{error}</DisplayError>}
      <LoginFormView
        handleSubmit={handleSubmit(onSubmit)}
        emailValidation={emailValidation}
        passwordValidation={passwordValidation}
        validationErrors={errors}
      />
    </>
  );
};
