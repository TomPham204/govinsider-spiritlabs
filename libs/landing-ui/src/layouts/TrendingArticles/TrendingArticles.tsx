import { styled } from '_@landing-ui/design-system/stitches.config';
import Card from '_@landing-ui/components/Card';
import Heading from '_@landing-ui/components/Heading';
import Link from 'next/link';

export default function TrendingArticles() {
  return (
    <Wrapper>
      <Heading content="Trending Artiles" moreover={false} mt={'40px'} />
      <Main>
        <Spotlight>
          <Card
            type={'Transformation'}
            title={
              'The changemakers of tomorrow: How young people are at the forefront of innovation'
            }
            tag=""
            url=""
            timestamp={'11 Apr 2022'}
            dir={'vertical'}
            collapse={false}
            mediaUrl="https://govinsider.asia/wp-content/uploads/2022/07/Wordpress-featured-images-1-1024x587.png"
          />
        </Spotlight>
        <SubSpotlight>
          <Card
            type={'Transformation'}
            title={
              'The changemakers of tomorrow: How young people are at the forefront of innovation'
            }
            tag=""
            url=""
            timestamp={'11 Apr 2022'}
            dir={'horizontal'}
            collapse={false}
            mediaUrl="https://govinsider.asia/wp-content/uploads/2022/07/Wordpress-featured-images-1-1024x587.png"
          />
          <Card
            type={'Transformation'}
            title={
              'The changemakers of tomorrow: How young people are at the forefront of innovation'
            }
            tag=""
            url=""
            timestamp={'11 Apr 2022'}
            dir={'horizontal'}
            collapse={false}
            mediaUrl="https://govinsider.asia/wp-content/uploads/2022/07/Wordpress-featured-images-1-1024x587.png"
          />
          <Card
            type={'Transformation'}
            title={
              'The changemakers of tomorrow: How young people are at the forefront of innovation'
            }
            tag=""
            url=""
            timestamp={'11 Apr 2022'}
            dir={'horizontal'}
            collapse={false}
            mediaUrl="https://govinsider.asia/wp-content/uploads/2022/07/Wordpress-featured-images-1-1024x587.png"
          />
        </SubSpotlight>
      </Main>

      <ViewMore>
        <Link href="#">View all articles</Link>
      </ViewMore>
    </Wrapper>
  );
}

const Wrapper = styled('div', {
  maxWidth: '$sizes$maxBound',
  margin: '0 auto',
});

const Main = styled('div', {
  marginTop: '$x8',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '$x10',
});

const Spotlight = styled('div', {});

const SubSpotlight = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$x6',

  '& > *': {
    borderBottom: '1px dashed $grey100',
    paddingBottom: '$x8',
  },

  '& > *:last-child': {
    borderBottom: 'none',
  },
});

const ViewMore = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  '& > *': {
    marginLeft: 'auto',
    textDecoration: 'none',
    borderBottom: '1px solid $black1',
    textTransform: 'uppercase',
    color: '$black1',
  },
});
