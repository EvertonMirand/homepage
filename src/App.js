import React from 'react';

import { Router } from 'react-router-dom';
import history from './services/history';
import Header from './components/Header/Header';
import GlobalStyle from './styles/global';
import Content from './views/Content/Content.screen';

function App() {
  return (
    <Router history={history}>
      <Header />
      <GlobalStyle />
      <Content />
    </Router>
  );
}

export default App;
