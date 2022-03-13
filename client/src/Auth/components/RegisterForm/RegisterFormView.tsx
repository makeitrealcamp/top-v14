import React from 'react';
import { CardIcon } from '../Card/Card';
import { DisplayError } from '../error/DisplayError';
import { IRegisterForm } from '../../types';
import { FaEyeSlash } from 'react-icons/fa';
import { InputFieldset } from '../Form/InputFieldSet';
import { Input } from '../Form/Input';
import { Button } from '../../../shared/button/Button';

export const RegisterFormView: React.FC<IRegisterForm> = ({
  handleSubmit,
  emailValidation,
  passwordValidation,
  passwordConfirmValidation,
  validationErrors,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <InputFieldset>
        <Input placeholder='E-mail' type='email' {...emailValidation} />
        {validationErrors.email &&
          validationErrors.email.type === 'required' && (
            <DisplayError>{validationErrors.email.message}</DisplayError>
          )}
      </InputFieldset>

      <InputFieldset>
        <Input placeholder='Password' type='password' {...passwordValidation} />
        <CardIcon type={'eye'}>
          <FaEyeSlash />
        </CardIcon>
        {validationErrors.password && (
          <DisplayError>{validationErrors.password.message}</DisplayError>
        )}
      </InputFieldset>

      <InputFieldset>
        <Input
          placeholder='Confirm Password'
          type='password'
          {...passwordConfirmValidation}
        />
        <CardIcon type={'eye'}>
          <FaEyeSlash />
        </CardIcon>
        {validationErrors.passwordConfirm && (
          <DisplayError>
            {validationErrors.passwordConfirm.message}
          </DisplayError>
        )}
      </InputFieldset>

      <InputFieldset>
        <Button type='submit'>Sign Up</Button>
      </InputFieldset>
    </form>
  );
};
