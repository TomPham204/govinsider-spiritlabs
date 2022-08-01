import { styled } from '_@landing-ui/design-system/stitches.config';
import Navbar from '_@landing-ui/layouts/Navbar/Navbar';
import HeadlineContainer from '_@landing-ui/layouts/HeadlineContainer/HeadlineContainer';
import TrendingArticles from '_@landing-ui/layouts/TrendingArticles/TrendingArticles';

const Wrapper = styled('div', {
  paddingTop: '$navbar$default',
});

export default function Home({ title }) {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <Navbar />
      <HeadlineContainer />
      <TrendingArticles />
    </Wrapper>
  );
}

export function getServerSideProps() {
  console.log('log in server');
  return {
    props: { title: 'Dynamic server side rendering' + Date.now() },
  };
}
