import React, { useRef } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './config/ReactotronConfig';
import { Router } from 'react-router-dom';
import history from './services/history';
import Header from './components/Header/Header';
import GlobalStyle from './styles/global';
import Content from './views/Content/Content.screen';
import CarouselImages from './views/CarouselImage/CarouselImages.screen';

import { store, persistor } from './store';

export default function App() {
  const contentRef = useRef();
  const carouselRef = useRef();

  const links = [
    {
      title: 'Conteudo',
      ref: contentRef,
    },
    {
      title: 'Imagens',
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

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Header links={links} />
          <GlobalStyle />
          <Content forwardRef={contentRef} />
          <CarouselImages forwardRef={carouselRef} />
        </Router>
      </PersistGate>
    </Provider>
  );
}
