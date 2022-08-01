import React from 'react';
import { useFormContext } from 'react-hook-form';

import BaseInput from './BaseInput';
import type { BaseInputProps } from './BaseInput';

export type InputProps = {
  name: string;
  mode?: 'normal' | 'error';
} & React.InputHTMLAttributes<HTMLInputElement>;

export type FormInput = typeof FormInput;

export default function FormInput(props: BaseInputProps) {
  const { register } = useFormContext();
  return <BaseInput {...register(props.name)} {...props} />;
}
