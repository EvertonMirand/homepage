import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Container, Carousel } from './styles';
import { selectImage } from '~/store/modules/images/actions';

export default function CarouselImages({ forwardRef }) {
  const dispatch = useDispatch();
  const images = useSelector(state => state.image.images);
  const firstPage = useSelector(state => state.image.selectedIndex);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: firstPage,
  };

  const afterChange = index => dispatch(selectImage(index));
  return (
    <Container ref={forwardRef}>
      <Carousel {...settings} afterChange={afterChange}>
        {images.map((image, index) => {
          return (
            <div key={String(index)}>
              <div>
                <img src={image} alt="Imagem" />
              </div>
            </div>
          );
        })}
      </Carousel>
    </Container>
  );
}
