import React from 'react';

import Lottie from 'react-lottie';

import { Container, Carousel } from './styles';

export default function CarouselAnimations({
  onChange,
  animations = [],
  forwardRef,
}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container ref={forwardRef}>
      <Carousel {...settings} afterChange={onChange}>
        {animations.map((animation, index) => {
          const defaultOptions = {
            autoplay: true,
            loop: true,
            animationData: animation,
          };
          return (
            <div key={String(index)}>
              <Lottie options={defaultOptions} />
            </div>
          );
        })}
      </Carousel>
    </Container>
  );
}
