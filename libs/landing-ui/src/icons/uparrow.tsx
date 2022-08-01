import React from 'react';
import { styled } from '_@landing-ui/design-system/stitches.config';

export default function UpArrow() {
  return (
    <Wrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="16"
        fill="none"
        viewBox="0 0 14 16"
      >
        <path
          fill="#fff"
          d="M1 0h12v2H1V0zm.707 11.707L6 7.414V16h2V7.414l4.293 4.293 1.414-1.414L7 3.586.293 10.293l1.414 1.414z"
        ></path>
      </svg>
    </Wrapper>
  );
}

const Wrapper = styled('span', {
  display: 'flex',
  flexPosition: 'center',
});
