import React from 'react';

import { styled } from '_@landing-ui/design-system/stitches.config';

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
        <mask
          id="mask0_207_3612"
          style={{ maskType: 'alpha' }}
          width="24"
          height="24"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#D9D9D9" d="M0 0H24V24H0z"></path>
        </mask>
        <g mask="url(#mask0_207_3612)">
          <path
            fill="#111"
            d="M14 17.65L8.35 12 14 6.35l1.05 1.05-4.6 4.6 4.6 4.6L14 17.65z"
          ></path>
        </g>
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
