import { styled } from '_@landing-ui/design-system/stitches.config';

export default function Banner() {
  return (
    <Wrapper>
      <div>Banner ratio 4:1</div>
    </Wrapper>
  );
}

const Wrapper = styled('div', {
  display: 'flex',
  flexPosition: 'center',
  textAlign: 'center',
  height: '289.5px',
  aspectRatio: '4 / 1',
  background: '$tertiary300',
});
