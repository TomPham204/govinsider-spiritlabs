import { styled } from '_@landing-ui/design-system/stitches.config';

export default function Card(props: CardContent) {
  return (
    <Wrapper direction={props.dir === 'vertical' ? 'vertical' : 'horizontal'}>
      <Thumbnail
        spec={props.dir === 'vertical' ? 'default' : 'canGrow'}
        showMode={props.collapse === true ? 'hide' : 'show'}
      >
        {props.mediaUrl !== '' ? <Media src={props.mediaUrl} /> : null}
      </Thumbnail>
      <ContentWrapper>
        <Type>
          <TypeContent>{props.type}</TypeContent>
          {props.tag !== '' ? <Tag>{props.tag}</Tag> : null}
        </Type>
        <Title>{props.title}</Title>
        <Timestamp>{props.timestamp}</Timestamp>
      </ContentWrapper>
    </Wrapper>
  );
}

interface CardContent {
  type: string;
  title: string;
  tag: string;
  url: string;
  timestamp: string;
  dir: string;
  collapse: boolean;
  mediaUrl: string;
}

const Wrapper = styled('div', {
  gap: '$x4',
  display: 'flex',
  variants: {
    direction: {
      vertical: {
        flexDirection: 'column',
      },
      horizontal: {
        display: 'flex',
        flexDirection: 'row',
      },
    },
  },
});

const Thumbnail = styled('div', {
  width: '100%',
  aspectRatio: '16/9',
  background: '$grey50',
  position: 'relative',
  zIndex: '1',
  objectFit: 'contain',
  overflow: 'hidden',
  variants: {
    spec: {
      canGrow: {
        maxWidth: '44%',
      },
      default: {},
    },
    showMode: {
      hide: {
        display: 'none',
      },
      show: {
        display: 'block',
      },
    },
  },
});

const ContentWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$x4',
});

const Type = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

const TypeContent = styled('h2', {
  color: '$secondary',
  fontWeight: '400',
  fontSize: '$16px',
  textTransform: 'uppercase',
  display: 'block',
  marginRight: '$x2',
});

const Tag = styled('div', {
  color: '$grey400',
  padding: '$x2',
  background: '$grey50',
  textTransform: 'uppercase',
});

const Title = styled('h1', {
  marginTop: '-$x2',
  fontFamily: '$ff',
  fontSize: '$18px',
  fontWeight: '$w2',
});

const Timestamp = styled('div', {
  fontSize: '$13px',
});

const Media = styled('img', {
  width: '100%',
});
