import React from 'react';
import { useFormContext } from 'react-hook-form';

import BaseTextArea from './BaseTextArea';

export type TextAreaProps = {
  name: string;
} & React.InputHTMLAttributes<HTMLTextAreaElement>;
export type FormTextArea = typeof FormTextArea;

export default function FormTextArea(props: TextAreaProps) {
  const { register } = useFormContext();

  return <BaseTextArea {...props} {...register(props.name)} />;
}
