import React from 'react';

import Lottie from 'react-lottie';

import { Container, Carousel } from './styles';

import car from '../../assets/lottie/car.json';
import radar from '../../assets/lottie/radar.json';
import states from '../../assets/lottie/states.json';
import swordsshield from '../../assets/lottie/swordsshield.json';

export default function CarouselAnimations() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const animations = [car, radar, states, swordsshield];

  return (
    <Container>
      <Carousel
        {...settings}
        afterChange={index => {
          console.log(index);
        }}
      >
        {animations.map(animation => {
          const defaultOptions = {
            autoplay: true,
            loop: false,
            animationData: animation,
          };
          return (
            <div>
              <Lottie options={defaultOptions} />
            </div>
          );
        })}
      </Carousel>
    </Container>
  );
}
