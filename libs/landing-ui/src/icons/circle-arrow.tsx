import React from 'react';
import { styled } from '_@landing-ui/design-system/stitches.config';

type IconProps = {
  dir?: 'left' | 'right';
};

function Icon({ dir = 'right' }: IconProps) {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="29"
      fill="none"
      viewBox="0 0 28 29"
      dir={dir}
    >
      <path
        fill="#000"
        d="M14 .75c-7.731 0-14 6.269-14 14s6.269 14 14 14 14-6.269 14-14-6.269-14-14-14zm4.503 14.216l-6.825 4.965a.25.25 0 01-.397-.203V9.803a.25.25 0 01.397-.203l6.825 4.963a.246.246 0 01.077.314.246.246 0 01-.077.089z"
      ></path>
    </SVG>
  );
}

export default Icon;

const SVG = styled('svg', {
  variants: {
    dir: {
      left: { transform: 'rotate(180deg)' },
      right: {},
    },
  },
});
