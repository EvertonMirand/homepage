import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Router } from 'react-router-dom';
import history from './services/history';
import Header from './components/Header/Header';
import GlobalStyle from './styles/global';
import Content from './views/Content/Content.screen';
import CarouselAnimations from './views/CarouselAnimations/CarouselAnimations.screen';

function App() {
  return (
    <Router history={history}>
      <Header />
      <GlobalStyle />
      <Content />
      <CarouselAnimations />
    </Router>
  );
}

export default App;
