import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form';
import { JwtPayload } from 'jwt-decode';
export interface IRegisterFormValues {
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface IRegisterForm {
  emailValidation: UseFormRegisterReturn<IRegisterFormValues>;
  passwordValidation: UseFormRegisterReturn<IRegisterFormValues>;
  passwordConfirmValidation: UseFormRegisterReturn<IRegisterFormValues>;
  handleSubmit: () => void;
  validationErrors: FieldErrors<IRegisterFormValues>;
}

export interface ILoginFormValues {
  email: string;
  password: string;
}

export interface ILoginForm {
  emailValidation: UseFormRegisterReturn<ILoginFormValues>;
  passwordValidation: UseFormRegisterReturn<ILoginFormValues>;
  handleSubmit: () => void;
  validationErrors: FieldErrors<ILoginFormValues>;
}

export type authContextType = {
  user: string | undefined;
  login: (userCredentials: ILoginFormValues) => Promise<void>;
  logout: () => void;
  error?: string;
};

export interface UserIDJwtPayload extends JwtPayload {
  id: string;
}
