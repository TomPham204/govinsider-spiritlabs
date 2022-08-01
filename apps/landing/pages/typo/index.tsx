import { styled } from '_@landing-ui/design-system/stitches.config';

export function Index() {
  return (
    <Wrapper>
      <Text smoothing="none">Typography</Text>
      <Text smoothing="antialiased">Typography</Text>
      <Text smoothing="subpixel">Typography</Text>
    </Wrapper>
  );
}

export default Index;

const Wrapper = styled('div', {});

const Text = styled('p', {
  fontSize: '108px',
  fontWeight: 300,
  variants: {
    smoothing: {
      none: {
        '-webkit-font-smoothing': 'none',
      },
      antialiased: {
        '-webkit-font-smoothing': 'antialiased',
      },
      subpixel: {
        '-webkit-font-smoothing': 'subpixel-antialiased',
      },
    },
  },
  color: '',
});
