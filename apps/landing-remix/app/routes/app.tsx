import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';

import { styled } from '_@landing-ui/design-system/stitches.config';
import {
  getArticleById,
  getArticles,
  createArticle,
  updateArticleById,
} from '_@landing-ui/state/mockApi';

import SearchResult from '_@landing-ui/components/search/SearchResult';
import Footer from '_@landing-ui/components/footer/Footer';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Wrapper>
        <>
          <section className="header">Header</section>
          <section className="search-area">Search input</section>
          <section className="result">
            <SearchResult />
          </section>
          <section className="subscribe">Subcribe form</section>
          <section className="footer">
            <Footer />
          </section>
        </>
      </Wrapper>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  section: {
    width: '100%',
    background: 'white',
    color: 'black',
    textAlign: 'center',
    border: '1px solid red',
  },
  '.header': {
    height: '50px',
  },
  '.search-area': {
    height: '100px',
  },
  '.result': {
    height: 'auto',
  },
  '.filter': {
    height: 'auto',
  },
  '.subscribe': {
    height: '400px',
  },
  '.footer': {
    height: '150px',
  },
});
