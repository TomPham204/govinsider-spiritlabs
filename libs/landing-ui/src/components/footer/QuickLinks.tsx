import { styled } from '_@landing-ui/design-system/stitches.config';
import { Link } from '@remix-run/react';

export default function QuickLinks() {
  return (
    <Wrapper>
      <StyledLink to="#">Why GovInsider?</StyledLink>
      <StyledLink to="#">Partner with us</StyledLink>
      <StyledLink to="#">About us</StyledLink>
      <StyledLink to="#">Privacy policy</StyledLink>
    </Wrapper>
  );
}

const Wrapper = styled('div', {
  display: 'grid',
  gap: '$x2',
  width: '40vw',
  height: '$x15',
  fontSize: '14px',
  fontFamily: '$ff',
  fontWeight: 'bold',
  textAlign: 'left',
  paddingLeft: '$x15',
  py: '$x2',
  my: '$x2',
  gridTemplateAreas: "'l1 l2' 'l3 l4'",
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: '1fr 1fr',
  '&>:nth-child(1)': {
    gridArea: 'l1',
  },
  '&>:nth-child(2)': {
    gridArea: 'l2',
  },
  '&>:nth-child(3)': {
    gridArea: 'l3',
  },
  '&>:nth-child(4)': {
    gridArea: 'l4',
  },
});

const StyledLink = styled(Link, {
  color: '$black',
  textDecoration: 'none',
  cursor: 'pointer',
  lineLimit: 1,
  height: '$x8',
  my: '0',
  py: '0',
});
