import React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';

import { styled } from '_@landing-ui/design-system/stitches.config';

import type { FormInput } from '_@shared/components/input/FormInput';
import type { FormSelect } from '_@shared/components/select/FormSelect';
import type { FormTextArea } from '_@shared/components/textarea/FormTextArea';
import type { DatePicker } from '_@shared/components/date-picker/BaseDatePicker';

type InputProps =
  | {
      Component: FormSelect;
      inputProps: React.ComponentProps<FormSelect>;
    }
  | {
      Component: FormInput;
      inputProps: React.ComponentProps<FormInput>;
    }
  | {
      Component: FormTextArea;
      inputProps: React.ComponentProps<FormTextArea>;
    }
  | {
      Component: DatePicker;
      inputProps: React.ComponentProps<DatePicker>;
    };

export type FormItemProps = {
  labelProps: {
    htmlFor?: string;
    label: string;
  };
} & InputProps;

export default function BaseFormItem({
  labelProps,
  inputProps,
  Component,
}: FormItemProps) {
  return (
    <Wrapper>
      <Label htmlFor={labelProps.htmlFor}>{labelProps.label}</Label>
      {Array.isArray(inputProps) ? (
        <InputRow>
          {inputProps.map((inputProp, index) => (
            <Component {...inputProp} key={index} />
          ))}
        </InputRow>
      ) : (
        <Component {...inputProps} />
      )}
    </Wrapper>
  );
}

const Wrapper = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  py: '$x3',
  gap: '$x4',
});

const Label = styled(LabelPrimitive.Root, {
  flexBasis: '100%',
  fontSize: '$input',
  fontWeight: 600,
});

const InputRow = styled('div', {
  display: 'flex',
  gap: '$x4',
  flexBasis: '100%',
  '> input': {
    flexGrow: 1,
  },
});
