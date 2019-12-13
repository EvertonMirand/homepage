import React from 'react';

import { Router } from 'react-router-dom';
import history from './services/history';
import Header from './components/Header/Header';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Router history={history}>
      <Header />
      <GlobalStyle />
    </Router>
  );
}

export default App;
