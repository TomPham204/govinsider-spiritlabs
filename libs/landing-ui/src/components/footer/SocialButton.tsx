import { styled } from '_@landing-ui/design-system/stitches.config';

import FB from 'libs/landing-ui/src/icons/facebook';
import LD from 'libs/landing-ui/src/icons/linkedin';
import TW from 'libs/landing-ui/src/icons/twitter';

export default function SocialButton() {
  return (
    <Wrapper>
      <div>Follow GovInsider on </div>
      <span className="image">
        <TW />
      </span>
      <span className="image">
        <LD />
      </span>
      <span className="image">
        <FB />
      </span>
    </Wrapper>
  );
}

const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingRight: '$x15',
  div: {
    fontSize: '$label',
    fontFamily: '$ff',
    my: 'auto',
    mx: '$x3',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  '.image': {
    height: '50%',
    mx: '$x6',
    py: '$x1',
    border: '1px solid black',
    aspectRatio: '1 / 1',
    '&:last-child': {
      marginRight: '0',
    },
  },
});
