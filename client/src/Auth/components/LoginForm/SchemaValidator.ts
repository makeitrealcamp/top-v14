import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
const loginFormSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Invalid email'),
  password: Yup.string()
    .required('Password is required')
    .min(5, 'Password length should be at least 5 characters'),
});

export const loginValidation = { resolver: yupResolver(loginFormSchema) };
