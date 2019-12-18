import { all } from 'redux-saga/effects';
import jobs from './jobs/sagas';

export default function* rootSaga() {
  return yield all([jobs]);
}
