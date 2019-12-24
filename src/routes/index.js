import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import Homepage from '~/views/Homepage';
import SignIn from '~/views/SignIn/SignIn.screen';
import SignUp from '~/views/SignUp/SignUp.screen';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />
    </Switch>
  );
}
