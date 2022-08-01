import Calendar from './calendar';
import Chevron from './chevron';
import CircleArrow from './circle-arrow';
import Close from './close';
import DoubleChevron from './double-chevron';
import DownMark from './down-mark';
import Facebook from './facebook';
import GovLogo from './gov-logo';
import Launchpad from './launchpad';
import Linkedin from './linkedin';
import RightArrow from './right-arrow';
import Search from './search';
import Twitter from './twitter';

const storiesOptions = {
  title: 'Icons',
};

export default storiesOptions;

const RightCircleArrow = () => <CircleArrow />;
const LeftCircleArrow = () => <CircleArrow dir="left" />;
const RightDoubleChevron = () => <DoubleChevron dir="right" />;
const LeftDoubleChevron = () => <DoubleChevron dir="left" />;
const RightChevron = () => <Chevron dir="right" />;
const LeftChevron = () => <Chevron dir="left" />;

export {
  Calendar,
  Facebook,
  DownMark,
  Close,
  GovLogo,
  Launchpad,
  Linkedin,
  RightArrow,
  Search,
  Twitter,
  RightCircleArrow,
  LeftCircleArrow,
  RightDoubleChevron,
  LeftDoubleChevron,
  RightChevron,
  LeftChevron,
};
