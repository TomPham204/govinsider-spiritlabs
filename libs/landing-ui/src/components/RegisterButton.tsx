import { styled } from '_@landing-ui/design-system/stitches.config';

type RegisterButton = {
  children: string;
};

export default function (props: RegisterButton) {
  return <RegisterButtonWrapper>{props.children}</RegisterButtonWrapper>;
}

const RegisterButtonWrapper = styled('button', {
  background: '$black',
  color: '#FFF',
  padding: '$x2 $x4',
  fontSize: 'small',
  fontWeight: 'bold',
  size: '100%',
});
