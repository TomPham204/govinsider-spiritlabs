import React from 'react';
import { styled } from '_@landing-ui/design-system/stitches.config';

export default function Linkedin() {
  return (
    <Wrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
      >
        <path
          fill="#000"
          fillRule="evenodd"
          d="M6.072 5.914h2.785v1.388c.402-.798 1.43-1.515 2.976-1.515 2.963 0 3.667 1.588 3.667 4.503v5.398h-3v-4.735c0-1.66-.401-2.595-1.423-2.595-1.416 0-2.005 1.008-2.005 2.595v4.735h-3V5.914zM.928 15.56h3V5.787h-3v9.773zM4.357 2.6a1.898 1.898 0 01-.565 1.351 1.942 1.942 0 01-2.728 0 1.911 1.911 0 01-.565-1.351 1.9 1.9 0 01.565-1.352 1.937 1.937 0 012.728 0c.361.358.564.844.564 1.352z"
          clipRule="evenodd"
        ></path>
      </svg>
    </Wrapper>
  );
}

const Wrapper = styled('span', {
  mx: 'auto',
  my: 'auto',
});
