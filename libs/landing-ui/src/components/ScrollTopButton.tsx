import React, { useState, useEffect, useCallback } from 'react';

import { styled } from '_@landing-ui/design-system/stitches.config';

import UpArrow from 'libs/landing-ui/src/icons/uparrow';

export default function Button() {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = useCallback(() => {
    setIsShow(window.pageYOffset > 500);
  }, []);

  function scrollTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <>
      {isShow ? (
        <StyledButton onClick={scrollTop}>
          <UpArrow />
          Back to top
        </StyledButton>
      ) : null}
    </>
  );
}

const StyledButton = styled('button', {
  position: 'fixed',
  zIndex: '1',
  right: '3%',
  bottom: '20%',
  height: '75px',
  width: '$x15',
  border: 'transparent',
  background: '$black',
  color: '$tertiary25',
  padding: '$x2',
  cursor: 'pointer',
});
