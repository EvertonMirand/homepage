import React, { useRef } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import './config/ReactotronConfig';
import { Router } from 'react-router-dom';
import history from './services/history';
import GlobalStyle from './styles/global';

import { store, persistor } from './store';
import Route from './routes/Route';
import SignIn from './views/SignIn/SignIn.screen';
import Homepage from './views/Homepage';
import SignUp from './views/SignUp/SignUp.screen';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <GlobalStyle />
          <Route path="/" exact component={Homepage} />
          <Route path="/login" component={SignIn} />
          <Route path="/register" component={SignUp} />
        </Router>
      </PersistGate>
    </Provider>
  );
}
