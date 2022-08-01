import ArticleCard from './ArticleCard';
import RegisterButton from './RegisterButton';

const storiesOptions = {
  title: 'article-card',
};
const dataHorizontal = {
  category: {
    textCategory: 'Transformation',
    isShow: true,
  },
  title:
    'The changemakers of tomorrow: How young people are at the forefront of innovation',
  tag: {
    textTag: 'partner',
    isShow: true,
  },
  timestamp: {
    time: new Date(),
    isFormatTime: true,
  },
  content: {
    isShow: true,
    textContent:
      'Ut aliquet eget tincidunt pretium gravida ut. Nunc elit, tempus, ullamcorper scelerisque. Commodo tempus faucibus mauris id turpis. Ut sociis suscipit purus.',
    backgroundContent: false,
  },
  dir: 'horizontal',
  urlTitle: ':idTitle',
  urlCategory: ':category',
  ratio: 'ratio16_9',
  image: {
    imgUrl:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
    alt: 'test',
  },
  buttonStyle: 'large',
};

const dataVertical = {
  category: {
    textCategory: 'Transformation',
    isShow: true,
  },
  title:
    'The changemakers of tomorrow: How young people are at the forefront of innovation',
  tag: {
    textTag: 'partner',
    isShow: true,
  },
  timestamp: {
    time: new Date(1995, 11, 17),
    isFormatTime: false,
  },
  content: {
    isShow: true,
    textContent:
      'Ut aliquet eget tincidunt pretium gravida ut. Nunc elit, tempus, ullamcorper scelerisque. Commodo tempus faucibus mauris id turpis. Ut sociis suscipit purus.',
    backgroundContent: false,
  },
  dir: 'vertical',
  urlTitle: ':idTitle',
  urlCategory: ':category',
  ratio: '16/9',
  image: {
    imgUrl:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
    alt: 'test',
  },
  buttonStyle: 'small',
};

export default storiesOptions;

export const ArticleCard1 = () => (
  <>
    <ArticleCard {...dataHorizontal}>
      <RegisterButton>Register Now</RegisterButton>
    </ArticleCard>
    <br />
    <ArticleCard {...dataVertical}>
      <RegisterButton>Register Now</RegisterButton>
    </ArticleCard>
  </>
);
