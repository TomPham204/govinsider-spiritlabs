import React from 'react';
import { styled } from '_@landing-ui/design-system/stitches.config';

export default function Twitter() {
  return (
    <Wrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="15"
        fill="none"
        viewBox="0 0 18 15"
      >
        <path
          fill="#000"
          d="M18 2.128a7 7 0 01-2.032.566 3.596 3.596 0 001.556-1.99 6.997 6.997 0 01-2.248.872 3.523 3.523 0 00-2.008-1.09 3.491 3.491 0 00-2.247.377 3.575 3.575 0 00-1.555 1.69 3.651 3.651 0 00-.22 2.304 9.925 9.925 0 01-4.04-1.091A10.082 10.082 0 011.95 1.099a3.64 3.64 0 00-.479 1.808c0 .592.144 1.175.418 1.697.275.522.672.968 1.157 1.297a3.488 3.488 0 01-1.603-.45v.046c0 .83.282 1.635.8 2.278a3.53 3.53 0 002.039 1.248 3.51 3.51 0 01-1.599.062c.226.715.666 1.34 1.26 1.787a3.504 3.504 0 002.046.71 7.03 7.03 0 01-5.24 1.49 9.893 9.893 0 005.424 1.616c6.511 0 10.07-5.48 10.07-10.233 0-.154-.003-.31-.01-.464a7.26 7.26 0 001.764-1.86L18 2.127z"
        ></path>
      </svg>
    </Wrapper>
  );
}

const Wrapper = styled('span', {
  mx: 'auto',
  my: 'auto',
});
