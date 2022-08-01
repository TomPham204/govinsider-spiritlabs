import React from 'react';
import { styled } from '_@landing-ui/design-system/stitches.config';

export default function Facebook() {
  return (
    <Wrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="16"
        fill="none"
        viewBox="0 0 8 16"
      >
        <path
          fill="#000"
          d="M2.165 15.688V8.649H.25V6.115h1.915V3.95c0-1.7 1.13-3.263 3.736-3.263 1.056 0 1.836.099 1.836.099l-.062 2.366s-.795-.007-1.664-.007c-.94 0-1.09.42-1.09 1.12v1.85H7.75l-.123 2.534H4.92v7.039H2.165z"
        ></path>
      </svg>
    </Wrapper>
  );
}

const Wrapper = styled('span', {
  mx: 'auto',
  my: 'auto',
});
