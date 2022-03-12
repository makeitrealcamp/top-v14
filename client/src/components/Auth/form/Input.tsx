import { UseFormRegister, Path } from 'react-hook-form';

export interface IFormValues {
  password: number;
  email: string;
}

type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  maxLength?: number;
  minLength?: number;
  min?: number;
  max?: number;
  validator?: RegExp;
  type: string;
  id?: string;
};
export const Input = ({
  label,
  register,
  required,
  maxLength,
  minLength,
  min,
  max,
  validator,
  type,
  id,
}: InputProps): JSX.Element => (
  <>
    <label htmlFor={id}>{label}</label>
    <input
      type={type}
      id={id}
      {...register(label, {
        required,
        maxLength,
        minLength,
        min,
        max,
        pattern: validator,
      })}
    />
  </>
);
