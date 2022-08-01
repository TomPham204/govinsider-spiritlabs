import React from 'react';

import { styled } from '_@landing-ui/design-system/stitches.config';

import App from './app';
// import Footer from '_@landing-ui/components/footer/Footer';
// import MoreTopics from '_@landing-ui/components/moretopics/MoreTopics';
// import BannerSldier from '_@landing-ui/components/banner-slider';

export default function Index() {
  return (
    <Wrapper>
      {/* <BannerSldier />
      <MoreTopics />
      <Footer/> */}
      <App />
    </Wrapper>
  );
}

const Wrapper = styled('div', {
  maxWidth: '100vw',
  margin: '0',
});
