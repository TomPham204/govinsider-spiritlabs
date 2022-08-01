import { styled } from '_@landing-ui/design-system/stitches.config';

import React from 'react';

function Icon({
  dir = 'left',
  ...props
}: { dir: 'left' | 'right' } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button {...props}>
      <SVG
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        dir={dir}
      >
        <path
          fill="#111"
          fillRule="evenodd"
          d="M12.06 8.06L11 7l-5 5 5 5 1.06-1.06L8.122 12l3.94-3.94z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#111"
          fillRule="evenodd"
          d="M18.06 8.06L17 7l-5 5 5 5 1.06-1.06L14.122 12l3.94-3.94z"
          clipRule="evenodd"
        ></path>
      </SVG>
    </Button>
  );
}

export default Icon;

const SVG = styled('svg', {
  variants: {
    dir: {
      left: {},
      right: { transform: 'rotateY(180deg)' },
    },
  },
});

const Button = styled('button', {
  padding: 0,
  lineHeight: 0,
  background: 'transparent',
  border: 'none',
  width: 'max-content',
  height: 'max-content',
});
