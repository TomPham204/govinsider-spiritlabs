import { styled } from '_@landing-ui/design-system/stitches.config';

import { Link } from '@remix-run/react';

export default function Topics({
  linksArray,
}: {
  linksArray: Array<Array<string>>;
}) {
  return (
    <Wrapper>
      {linksArray.map((array: Array<string>, index: number) => (
        <ColumnWrapper key={index}>
          {array.map(
            (link: string, index: number): JSX.Element => (
              <StyledLink key={index} to="#">
                {link}
              </StyledLink>
            ),
          )}
        </ColumnWrapper>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  maxWidth: '100vw',
});

const ColumnWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'left',
  paddingLeft: '$x10',
  mx: '$x15',
  flexDirection: 'column',
  borderLeft: '1px solid gray',
  width: 'calc(100% / 3)',
  '&:first-child': {
    borderLeft: 'transparent',
  },
});

const StyledLink = styled(Link, {
  color: 'black',
  textDecoration: 'none',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
