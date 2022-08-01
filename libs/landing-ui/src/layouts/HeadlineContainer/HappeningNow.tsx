import { useState, useEffect } from 'react';
import { styled } from '_@landing-ui/design-system/stitches.config';
import { getArticleById, Article } from '_@landing-ui/state/mockApi';

// import { theme } from "_@landing-ui/design-system/stitches.config"

import Heading from '_@landing-ui/components/Heading';

export default function HappeningNow(props: HappeningNowProps) {
  const [article, setArticle] = useState<Article>({});

  const logGetArticle = async () => {
    const data = (await getArticleById('12')).data;
    setArticle(data);
  };

  useEffect(() => {
    logGetArticle();
  }, []);

  return (
    <Wrapper>
      <Heading content="Happening Now" moreover={false} mt={'40px'}></Heading>
      <Main>
        <Thumbnail>
          <ThumbnailOverlay>
            <LiveIcon />
            <p>Live</p>
          </ThumbnailOverlay>
          {props.mediaUrl !== '' ? <Media src={props.mediaUrl} /> : null}
        </Thumbnail>
        <Title>{article.post_title || 'Title'}</Title>
        <Timestamp>
          <Author>{article.post_author || 'Author'}</Author>
          <Square></Square>
          <Time>{article.post_date || 'Date'}</Time>
        </Timestamp>
        <Button>Register now</Button>
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled('div', {});

const Header = styled('div', {
  borderBottom: '1px solid $black1',
  fontSize: '$titleM',
  height: '$x10',
  fontWeight: '$fontWeights$w2',
});

const Main = styled('div', {
  marginTop: '$x6',
  padding: '$x4',
  background: '$grey1',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

const Thumbnail = styled('div', {
  width: '100%',
  aspectRatio: '16/9',
  background: 'white',
  position: 'relative',
  zIndex: '1',
  objectFit: 'contain',
  overflow: 'hidden',
});

const ThumbnailOverlay = styled('div', {
  width: '68px',
  height: 'auto',
  background: '$black1',
  color: 'white',
  position: 'absolute',
  top: '0',
  left: '0',
  zIndex: '4',
  textAlign: 'center',
  verticalAlign: 'middle',
  lineHeight: '35px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$x2',
  '& > p': {
    margin: '0',
  },
});

const Title = styled('h1', {
  weight: '$fontWeights$w2',
  fontSize: '$fontSizes$24px',
});

const Timestamp = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$x2',
});

const Button = styled('div', {
  width: '100%',
  color: 'white',
  borderRadius: '4px',
  background: '$black1',
  paddingTop: '7.5px',
  paddingBottom: '7.5px',
  textTransform: 'uppercase',
  textAlign: 'center',
  transition: '0.2s',
  '&:hover': {
    cursor: 'pointer',
    opacity: '0.7',
  },
});

const Author = styled('h2', {
  fontSize: '$fontSizes$13px',
});

const Square = styled('div', {
  width: '4px',
  height: '4px',
  background: '$grey100',
});

const Media = styled('img', {
  width: '100%',
});

const LiveIcon = styled('div', {
  width: '8px',
  height: '8px',
  background: '$white1',
  borderRadius: '100%',
  position: 'relative',
});

interface HappeningNowProps {
  mediaUrl: string;
}

const Time = styled('p', {});
