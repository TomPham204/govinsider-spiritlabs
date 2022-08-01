import { styled } from '_@landing-ui/design-system/stitches.config';

interface HeadingInterface {
  content: string;
  moreover: boolean;
  mt: string;
}

const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid $black1',
  height: '$x10',
});

const Moreover = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
  transition: '0.2s',

  '&:hover': {
    cursor: 'pointer',
    opacity: '0.7',
  },
});

const Content = styled('h1', {
  fontSize: '$titleM',
  fontWeight: '400',
  textTransform: 'uppercase',
});

export default function Heading(props: HeadingInterface) {
  return (
    <Wrapper css={{ marginTop: props.mt }}>
      <Content>{props.content}</Content>
      {props.moreover ? <Moreover>More</Moreover> : null}
    </Wrapper>
  );
}
