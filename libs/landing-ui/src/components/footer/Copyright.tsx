import { styled } from '_@landing-ui/design-system/stitches.config';

export default function Copyright() {
  return (
    <Wrapper>
      <div>© Clarion Events Pte Ltd</div>
      <div>Business Registration No: 200902511Z</div>
      <div>Registered in Singapore at 78 Shenton Way</div>
      <div>20-03, Singapore 079120</div>
    </Wrapper>
  );
}

const Wrapper = styled('div', {
  display: 'flex',
  width: '40vw',
  height: '110px',
  flexDirection: 'column',
  fontFamily: '$ff',
  fontSize: '12px',
  lineLimit: 1,
  px: '$x15',
  py: '$x5',
  marginBottom: '$x2',
  div: {
    color: '$grey300',
    textAlign: 'right',
  },
});
