import { styled } from '_@landing-ui/design-system/stitches.config';
import Button from '_@landing-ui/components/Button';

export function Index() {
  return (
    <Wrapper>
      <p className="f-300">Home Page</p>
      <TextWrapper>
        <p className="f-400">Home Page</p>
      </TextWrapper>
      <p className="f-500">Home Page</p>
      <p className="f-600">Home Page</p>
      <p className="f-700">Home Page</p>
      <p className="f-800">Home Page</p>
      <i className="f-300">Home Page</i>
      <i className="f-400">Home Page</i>
      <i className="f-500">Home Page</i>
      <i className="f-600">Home Page</i>
      <i className="f-700">Home Page</i>
      <i className="f-800">Home Page</i>
      <BoldText className="f-300">Home Page</BoldText>
      <BoldText className="f-400">Home Page</BoldText>
      <BoldText className="f-500">Home Page</BoldText>
      <TextWrapper>
        <BoldText className="f-600">Home Page</BoldText>
      </TextWrapper>
      <BoldText className="f-700">Home Page</BoldText>
      <BoldText className="f-800">Home Page</BoldText>

      <hr />
      <Button />
    </Wrapper>
  );
}

export default Index;

// const BoldText = styled("strong", {
//   display: "block",
// });
const TextWrapper = styled('div', {
  // [`& ${BoldText}`]: {
  //   background: "$secondary",
  // },
});

const BoldText = styled('strong', {
  display: 'block',
  [`${TextWrapper} &`]: {
    background: '$secondary',
  },
});

const Wrapper = styled('div', {
  color: '$primary',
  // background: "$grey100",
  fontSize: '$titleM',
  '.f-400': {
    fontWeight: '400',
    my: '$x4',
  },
  '.f-300': {
    fontWeight: '300',
  },
  '.f-500': {
    fontWeight: '500',
  },
  '.f-600': {
    fontWeight: '600',
  },
  '.f-700': {
    fontWeight: '700',
  },
  '.f-800': {
    fontWeight: '800',
  },
});
