import React from 'react';

import Lottie from 'react-lottie';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Carousel } from './styles';
import { selectAnimation } from '~/store/modules/animations/actions';

export default function CarouselAnimations({ forwardRef }) {
  const dispatch = useDispatch();
  const animations = useSelector(state => state.animation.animations);
  const firstPage = useSelector(state => state.animation.selectedIndex);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: firstPage,
  };

  const afterChange = index => dispatch(selectAnimation(index));
  return (
    <Container ref={forwardRef}>
      <Carousel {...settings} afterChange={afterChange}>
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
