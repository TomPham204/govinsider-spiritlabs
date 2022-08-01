import { styled } from '_@landing-ui/design-system/stitches.config';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import * as LabelPrimitive from '@radix-ui/react-label';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export type CheckboxCustomProps = {
  name: string;
  id: string;
  label: string;
  onChangeCheckbox: (isChecked: boolean) => void;
} & React.ComponentProps<typeof CheckboxPrimitive.Root>;

export default function CheckboxCustom({
  name,
  id,
  label,
  onChangeCheckbox,
  ...props
}: CheckboxCustomProps) {
  const { control } = useFormContext();

  return (
    <CheckboxWrapper>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Checkbox
            id={id}
            checked={field.value}
            backgroundChecked={
              field.value === true ? 'isChecked' : 'isNotChecked'
            }
            onCheckedChange={(isChecked: boolean) => {
              field.onChange(isChecked);
              onChangeCheckbox(isChecked);
            }}
            {...props}
          >
            <CheckboxIndicator>
              <CheckIcon />
            </CheckboxIndicator>
          </Checkbox>
        )}
      />
      <Label htmlFor={id}>{label}</Label>
    </CheckboxWrapper>
  );
}

const CheckboxWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

const Checkbox = styled(CheckboxPrimitive.Root, {
  size: '24px',
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid black',
  cursor: 'pointer',
  variants: {
    backgroundChecked: {
      isChecked: { background: 'black' },
      isNotChecked: { background: 'white' },
    },
  },
});

const CheckboxIndicator = styled(CheckboxPrimitive.Indicator, {
  color: 'white',
});

const Label = styled(LabelPrimitive.Root, {
  paddingLeft: '$x2',
});
