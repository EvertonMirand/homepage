import { combineReducers } from 'redux';
import image from './images/reducer';
import chart from './charts/reducer';

export default combineReducers({
  image,
  chart,
});
