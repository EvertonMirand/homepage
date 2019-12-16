import React, { useState, useRef } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Router } from 'react-router-dom';
import history from './services/history';
import Header from './components/Header/Header';
import GlobalStyle from './styles/global';
import Content from './views/Content/Content.screen';
import CarouselAnimations from './views/CarouselAnimations/CarouselAnimations.screen';

import car from './assets/lottie/car.json';

import radar from './assets/lottie/radar.json';

import states from './assets/lottie/states.json';
import swordsshield from './assets/lottie/swordsshield.json';

const animations = [car, radar, states, swordsshield];

export default function App() {
  const contentRef = useRef();
  const carouselRef = useRef();

  const links = [
    {
      title: 'Conteudo',
      ref: contentRef,
    },
    {
      title: 'Animações',
      ref: carouselRef,
    },
    {
      title: 'Integration',
    },
    {
      title: 'Testimonial',
    },
    {
      title: 'Contact',
    },
  ];
  const [animation, setAnimation] = useState(animations[0]);

  return (
    <Router history={history}>
      <Header links={links} />
      <GlobalStyle />
      <Content forwardRef={contentRef} animationData={animation} />
      <CarouselAnimations
        forwardRef={carouselRef}
        onChange={index => setAnimation(animations[index])}
        animations={animations}
      />
    </Router>
  );
}
