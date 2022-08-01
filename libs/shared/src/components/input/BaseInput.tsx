import React from 'react';

import { styled } from '_@landing-ui/design-system/stitches.config';

export type BaseInputProps = {
  name: string;
} & React.ComponentProps<typeof Input>;

//Export type allow FormItem to check type without import a whole componenet
export type BaseInput = typeof BaseInput;

const BaseInput = React.forwardRef<HTMLInputElement, BaseInputProps>(
  (props, ref) => {
    return <Input {...props} ref={ref} />;
  },
);

export default BaseInput;

const Input = styled('input', {
  padding: '$x4',
  backgroundColor: '$grey50',
  solidBorder: '$grey50',
  textAlign: 'left',

  variants: {
    mode: {
      normal: {},
      error: {
        solidBorder: 'red',
        '&:focus-visible': { outline: 'red' },
      },
    },
  },
});
