import React from 'react';

import { styled } from '_@landing-ui/design-system/stitches.config';

export type BaseTextAreaProps = {
  name: string;
} & React.ComponentProps<typeof TextArea>;

export type BaseTextArea = typeof BaseTextArea;

const BaseTextArea = React.forwardRef<HTMLTextAreaElement, BaseTextAreaProps>(
  (props, ref) => {
    return <TextArea {...props} ref={ref} />;
  },
);

export default BaseTextArea;

const TextArea = styled('textarea', {
  padding: '$x4',
  backgroundColor: '$grey50',
  solidBorder: '$grey50',
});
