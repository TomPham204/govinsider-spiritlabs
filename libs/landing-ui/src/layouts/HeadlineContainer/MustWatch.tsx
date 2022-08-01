import { useState, useEffect } from 'react';
import { styled } from '_@landing-ui/design-system/stitches.config';
import Card from '_@landing-ui/components/Card';
import Heading from '_@landing-ui/components/Heading';
import { getArticles, Article } from '_@landing-ui/state/mockApi';

export default function MustWatch() {
  const [articles, setArticles] = useState<Article[]>([{}]);

  const logGetArticles = async () => {
    const data = (await getArticles({ limit: 3, skip: 4 })).data;
    setArticles(data);
  };

  useEffect(() => {
    logGetArticles();
  }, []);

  return (
    <Wrapper>
      <Heading content="Must watch" moreover={false} mt={'40px'}></Heading>
      <SubSpotlight>
        {articles.map((article, index) => (
          <Card
            key={index}
            type={article.post_type || 'Post'}
            title={article.post_title || 'Title'}
            tag=""
            url=""
            timestamp={article.post_date || '11 Apr 2022'}
            dir={'vertical'}
            collapse={false}
            mediaUrl="https://i.pinimg.com/736x/48/5f/1f/485f1fd43507547a23d230e7ffc85949.jpg"
          />
        ))}
      </SubSpotlight>
    </Wrapper>
  );
}

const Wrapper = styled('div', {
  marginTop: '$x10',
});

const SubSpotlight = styled('div', {
  marginTop: '$x6',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '$x6',
  marginRight: '-24px',
  '& > *': {
    borderRight: '1px dashed $grey100',
    paddingRight: '$x6',
  },
  '& > *:last-child': {
    border: 'none',
  },
});
