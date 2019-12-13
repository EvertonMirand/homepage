import React from 'react';

import Lottie from 'react-lottie';
import { Container } from './styles';
import sword from '../../assets/lottie/swordsshield.json';

export default function Content() {
  const defaultOptions = {
    autoplay: true,
    loop: false,
    animationData: sword,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Container>
      <div>
        <left>
          <span>
            O ocio me fez fazer esse site, e aprovetei para me aperfeicoar no
            React.js.
          </span>
        </left>
        <right>
          <Lottie options={defaultOptions} />
        </right>
      </div>
    </Container>
  );
}
