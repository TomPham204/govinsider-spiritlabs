import dayjs from 'dayjs';
import Calendar from 'libs/landing-ui/src/icons/calendar';

import { styled } from '_@landing-ui/design-system/stitches.config';

type Article = {
  category: {
    textCategory: string;
    isShow: boolean;
  };
  title: string;
  tag: {
    textTag: string;
    isShow: boolean;
  };
  timestamp: { time: Date; isFormatTime: boolean };

  content: {
    isShow: boolean;
    textContent: string;
    backgroundContent: boolean;
  };
  dir?: 'horizontal' | 'vertical';
  urlCategory: string;
  urlTitle: string;
  ratio: string;

  image: { imgUrl: string; alt: string };
  // eslint-disable-next-line no-undef
  children: JSX.Element;
  buttonStyle?: 'small' | 'large';
};

export default function ArticleCard({
  category = {
    textCategory: '',
    isShow: true,
  },
  title = '',
  tag = {
    textTag: '',
    isShow: true,
  },
  timestamp = { time: new Date(), isFormatTime: true },
  content = {
    isShow: true,
    textContent: '',
    backgroundContent: false,
  },
  dir = 'horizontal',
  urlTitle = ':idTitle',
  urlCategory = ':category',
  ratio = 'ratio1_1',
  image = {
    imgUrl:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
    alt: '',
  },
  children = <></>,
  buttonStyle = 'large',
}: Article) {
  return (
    <Wrapper
      direction={dir}
      backgroundContentShow={
        content.backgroundContent === true ? 'show' : 'hide'
      }
    >
      <ThumbnailWrapper
        ratioSpec={ratio}
        thumbnailSpec={dir}
        src={image.imgUrl}
        alt={image.alt}
      />

      <ContentWrapper
        contentSpec={dir === 'vertical' ? 'vertical' : 'horizontal'}
        backgroundContentShow={
          content.backgroundContent === true ? 'show' : 'hide'
        }
      >
        <TypeWrapper>
          <CategoryWrapper href={urlCategory}>
            {category.textCategory}
          </CategoryWrapper>
          {tag.isShow && <TagWrapper>{tag.textTag}</TagWrapper>}
        </TypeWrapper>
        <TitleWrapper href={urlTitle}>{title}</TitleWrapper>
        {content.isShow && (
          <TextContentWrapper>{content.textContent}</TextContentWrapper>
        )}
        <TimeStampWrapper>
          {timestamp.isFormatTime && (
            <IconWrapper>
              <Calendar />
            </IconWrapper>
          )}
          <DateWrapper>
            {timestamp.isFormatTime &&
              dayjs(timestamp.time.toDateString()).format(
                'DD MMM YYYY, HA - HA ',
              )}
            {!timestamp.isFormatTime &&
              dayjs(timestamp.time.toDateString()).format('DD MMM YYYY')}
          </DateWrapper>
        </TimeStampWrapper>
        <ButtonWrapper buttonStyle={buttonStyle}>{children}</ButtonWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '$x4',

  variants: {
    direction: {
      vertical: {
        flexDirection: 'column',
      },
      horizontal: {
        flexDirection: 'row',
      },
    },
    backgroundContentShow: {
      show: {
        backgroundColor: '$grey1',
      },
      hide: {},
    },
  },
});

const ThumbnailWrapper = styled('img', {
  display: 'flex',
  justifyContent: 'center',
  background: '#ccc',

  variants: {
    thumbnailSpec: {
      horizontal: {
        maxWidth: '70%',
        flexGrow: 3,
        flexBasis: 0,
      },
      vertical: {},
    },
    ratioSpec: {
      ratio16_9: {
        aspectRatio: '16/9',
      },
      ratio1_1: {
        aspectRatio: '1/1',
      },
    },
  },
});

const ContentWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$x4',

  variants: {
    contentSpec: {
      horizontal: {
        flexGrow: 2,
        flexBasis: 0,
      },
      vertical: {},
    },
    backgroundContentShow: {
      show: {
        padding: '$x4',
      },
      hide: {},
    },
  },
});

const TypeWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

const CategoryWrapper = styled('a', {
  textDecoration: 'none',
  color: '$secondary',
  fontSize: '$topicM',

  fontWeight: '400',
  textTransform: 'uppercase',
  display: 'block',
  marginRight: '$x2',
});

const TagWrapper = styled('div', {
  color: '$grey300',
  padding: '4px',
  background: '$grey1',
  textTransform: 'uppercase',
});

const TitleWrapper = styled('a', {
  textDecoration: 'none',
  color: '$black',
  fontWeight: 'bold',
  fontSize: '$titleM',
  margin: '$x2 0',
});

const TextContentWrapper = styled('div', {
  color: '$black',
});

const TimeStampWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
});
const DateWrapper = styled('span', {
  color: '$grey',
  fontSize: '$articleDate',
});

const IconWrapper = styled('span', {
  paddingRight: '$x2',
});

const ButtonWrapper = styled('div', {
  display: 'flex',
  variants: {
    buttonStyle: {
      small: { width: '25%' },
      large: {},
    },
  },
});
