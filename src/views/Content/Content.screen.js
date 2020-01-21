import React from 'react';

import { useSelector } from 'react-redux';
import { Container, Left, Right } from './styles';

export default function Content({ forwardRef }) {
  const image = useSelector(state => state.image.selectedImage);

  return (
    <Container ref={forwardRef}>
      <Left>
        <span>
          Bacon ipsum dolor amet salami picanha turducken flank, chicken cow
          turkey boudin pork chop hamburger frankfurter drumstick sausage beef
          swine.
        </span>
      </Left>
      <Right>
        <div>
          <img src={image} alt="Imagem" />
        </div>
      </Right>
    </Container>
  );
}
