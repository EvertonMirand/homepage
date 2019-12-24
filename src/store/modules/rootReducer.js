import { combineReducers } from 'redux';
import image from './images/reducer';
import chart from './charts/reducer';
import jobs from './jobs/reducer';
import auth from './auth/reducer';

export default combineReducers({
  image,
  chart,
  jobs,
  auth,
});
