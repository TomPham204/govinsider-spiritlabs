import { styled } from '_@landing-ui/design-system/stitches.config';
import Logo from '_@landing-ui/icons/gov-logo';
import SocialButton from './SocialButton';
import QuickLinks from './QuickLinks';
import Copyright from './Copyright';

export default function Footer() {
  return (
    <Wrapper>
      <span className="hasBorder">
        <Logo />
        <SocialButton />
      </span>

      <span>
        <QuickLinks />
        <Copyright />
      </span>
    </Wrapper>
  );
}

const Wrapper = styled('div', {
  maxWidth: '100vw',
  background: 'white',
  span: {
    height: '$x20',
    display: 'flex',
    flexDirection: 'row',
    flexPosition: 'space-between',
  },
  '.hasBorder': {
    borderBottom: '1px solid $black',
  },
});
