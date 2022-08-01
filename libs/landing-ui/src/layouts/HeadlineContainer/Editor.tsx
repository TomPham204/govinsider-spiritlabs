import { useState, useEffect } from 'react';
import { styled } from '_@landing-ui/design-system/stitches.config';
import Card from '_@landing-ui/components/Card';
import Heading from '_@landing-ui/components/Heading';
import { getArticles, Article } from '_@landing-ui/state/mockApi';

export default function Editor() {
  const [articles, setArticles] = useState<Article[]>([{}]);

  const logGetArticles = async () => {
    const data = (await getArticles({ limit: 4, skip: 7 })).data;
    setArticles(data);
  };

  useEffect(() => {
    logGetArticles();
  }, []);

  return (
    <Wrapper>
      <Heading content="Editor's pick" moreover={true} mt={'40px'}></Heading>
      <Main>
        {articles.map((article, index) => (
          <Card
            key={index}
            type={article.post_type || 'Post'}
            title={article.post_title || 'Title'}
            tag=""
            url=""
            timestamp={article.post_date || '11 Apr 2022'}
            dir={'vertical'}
            collapse={true}
            mediaUrl="https://i.pinimg.com/736x/48/5f/1f/485f1fd43507547a23d230e7ffc85949.jpg"
          />
        ))}
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled('div', {});

const Main = styled('div', {
  marginTop: '$x6',
  '& > *': {
    paddingRight: '0',
    paddingBottom: '$x3',
    marginTop: '$x3',
    borderRight: 'none',
    borderBottom: '1px dashed $grey100',
  },
  '& > *:last-child': {
    border: 'none',
  },
});
