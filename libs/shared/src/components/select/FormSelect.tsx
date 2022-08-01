import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import RadixSelect from './RadixSelect';

export type FormSelect = typeof FormSelect;

export default function FormSelect(
  props: React.ComponentProps<typeof RadixSelect>,
) {
  const { control } = useFormContext();
  // if (typeof window === 'object') window['selectControl'] = control;
  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field }) => (
        <RadixSelect onValueChange={field.onChange} {...field} {...props} />
      )}
    />
  );
}
