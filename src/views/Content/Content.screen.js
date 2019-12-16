import React from 'react';

import Lottie from 'react-lottie';
import { Container, Left, Right } from './styles';
import animation from '../../assets/lottie/car.json';

export default function Content({ animationData = animation, forwardRef }) {
  const defaultOptions = {
    autoplay: true,
    loop: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

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
          <Lottie options={defaultOptions} />
        </div>
      </Right>
    </Container>
  );
}
