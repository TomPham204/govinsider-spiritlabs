import { styled } from '_@landing-ui/design-system/stitches.config';
import HappeningNow from './HappeningNow';
import Headline from './Headline';
import MustWatch from './MustWatch';
import Editor from './Editor';

export default function HeadlineContainer() {
  return (
    <Wrapper>
      <MainColumn>
        <Headline />
        <MustWatch />
      </MainColumn>
      <SubColumn>
        <HappeningNow mediaUrl="https://i.pinimg.com/736x/48/5f/1f/485f1fd43507547a23d230e7ffc85949.jpg" />
        <Editor />
      </SubColumn>
    </Wrapper>
  );
}

const Wrapper = styled('div', {
  display: 'grid',
  margin: '0 auto',
  gridTemplateColumns: '2fr 1fr',
  gap: '$x10',
  maxWidth: '$sizes$maxBound',
});

const MainColumn = styled('div', {});

const SubColumn = styled('div', {});
