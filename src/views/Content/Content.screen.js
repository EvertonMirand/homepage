import React from 'react';

import { useSelector } from 'react-redux';
import { Container, Left, Right } from './styles';

export default function Content({ forwardRef }) {
  const image = useSelector(state => state.image.selectedImage);

  return (
    <Container ref={forwardRef}>
      <Left>
        <span>
          O ocio me fez fazer esse site, e aprovetei para me aperfeicoar no
          React.js.
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
