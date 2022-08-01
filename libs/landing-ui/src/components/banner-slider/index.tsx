import { UIEvent, useRef } from 'react';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';

import { styled } from '_@landing-ui/design-system/stitches.config';
import ArrowIcon from '_@landing-ui/icons/circle-arrow';

export default function BannerSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const activeDotRef = useRef<HTMLDivElement>(null);

  const _changeIndexBy = (increment: number) => () => {
    if (!sliderRef.current) return;

    sliderRef.current.scroll({
      left:
        sliderRef.current.scrollLeft +
        (sliderRef.current.scrollWidth / images.length) * increment,
      behavior: 'smooth',
    });
  };

  const _changeIndexTo = (index: number) => () => {
    if (!sliderRef.current) return;

    sliderRef.current.scroll({
      left: (sliderRef.current.scrollWidth / images.length) * index,
      behavior: 'smooth',
    });
  };

  const _onScroll = (e: UIEvent<HTMLDivElement>) => {
    if (!activeDotRef.current || !sliderRef.current) return;

    const itemWidth = sliderRef.current.scrollWidth / images.length;
    const scrollLeft = sliderRef.current.scrollLeft;

    const left = (24 * scrollLeft) / itemWidth;
    activeDotRef.current.style.left = `${left}px`;

    // const deltaWidth = (scrollLeft % (itemWidth * 2)) / itemWidth;
    // activeDotRef.current.style.width = `${24 + 12 * deltaWidth}px`;
  };

  return (
    <Header>
      <SliderArrow position="left" onClick={_changeIndexBy(-1)}>
        <ArrowIcon dir="left" />
      </SliderArrow>
      <SliderArrow position="right" onClick={_changeIndexBy(1)}>
        <ArrowIcon dir="right" />
      </SliderArrow>
      {/* -----------  Slider Images  -------- */}
      <AspectRatioWrapper>
        <AspectRatio ratio={4 / 1} ref={sliderRef} onScroll={_onScroll}>
          {images.map((src, index) => (
            <img
              src={src}
              key={index}
              alt="Landscape by Tobias Tullius"
              loading="lazy"
            />
          ))}
        </AspectRatio>
      </AspectRatioWrapper>
      {/* -------------  Pagination   --------- */}
      <Pagination>
        <ActiveDot ref={activeDotRef} />
        {images.map((_, index) => (
          <Dot key={index} onClick={_changeIndexTo(index)} />
        ))}
      </Pagination>
    </Header>
  );
}

const images = [
  'https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80',
  'https://miro.medium.com/max/1400/1*y7UlkDwu7hlJqcHUiqFU2A.png',
  'https://addyosmani.com/assets/images/loading-attribute@2x.png',
  'https://cdnb.artstation.com/p/assets/images/images/048/733/381/large/nikhil-mishra-landscape-4-1.jpg?1650808317',
  'https://adamidisart.b-cdn.net/wp-content/uploads/2022/01/Tutorial_how_to_paint_landscapes-1.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSemVhCgBdblcDgajCvzJdpG6qDQoAI7vN0gw&usqp=CAU',
];

const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '$x14',
  position: 'relative',
});

const AspectRatioWrapper = styled('div', {
  flex: '1 1 0',
});
const AspectRatio = styled(AspectRatioPrimitive.Root, {
  overflowX: 'scroll',
  display: 'flex',

  scrollSnapType: 'x mandatory',
  '&::-webkit-scrollbar': {
    //remove scroll bar
    display: 'none',
    '-ms-overflow-style': 'none',
    scrollbarWidth: 'none',
  },

  '& > img': {
    flex: '1 0 100%',
    height: '100%',
    objectFit: 'cover',
    scrollSnapAlign: 'start',
  },
});

const SliderArrow = styled('button', {
  boxSizing: 'content-box',
  height: '28px',
  flex: '0 0 28px',
  padding: '$x3',
  cursor: 'pointer',
  border: 'none',
  background: 'transparent',
  transition: '0.2s',
  clickableArea: '12px',

  variants: {
    position: {
      right: {
        order: 2,
        marginLeft: '$x7',
      },
      left: {
        marginRight: '$x7',
      },
    },
  },
  '&:hover': { opacity: 0.8 },
});

const Pagination = styled('div', {
  position: 'absolute',
  width: 'max-content',
  display: 'flex',
  gap: '$x4',
  bottom: '-32px',
  left: '50%',
  transform: 'translateX(-50%)',
});

const Dot = styled('div', {
  size: '8px',
  borderRadius: '50%',
  background: '#D9D9D9',
  cursor: 'pointer',
  clickableArea: '6px',
});

const ActiveDot = styled('div', {
  size: '24px 8px',
  borderRadius: '8px',
  background: '$primary500',
  position: 'absolute',
  left: 0, // 24px * index
  transform: 'translateX(-8px)',
  zIndex: 2,
});
