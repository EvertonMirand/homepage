import React from 'react';

import Lottie from 'react-lottie';
import { useSelector } from 'react-redux';
import { Container, Left, Right } from './styles';

export default function Content({ forwardRef }) {
  const animationData = useSelector(state => state.animation.selectedAnimation);
  const defaultOptions = {
    autoplay: true,
    loop: true,
    animationData,
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
