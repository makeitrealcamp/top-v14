import { UseFormRegister, Path } from 'react-hook-form';

export interface IFormValues {
  'First Name': string;
  password: number;
  email: string;
}

type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  maxLength?: number;
  min?: number;
  max?: number;
  validator?: RegExp;
  type: string;
};
export const Input = ({
  label,
  register,
  required,
  maxLength,
  min,
  max,
  validator,
  type,
}: InputProps): JSX.Element => (
  <>
    <label>{label}</label>
    <input
      type={type}
      {...register(label, {
        required,
        maxLength,
        min,
        max,
        pattern: validator,
      })}
    />
  </>
);
