import { all } from 'redux-saga/effects';
import jobs from './jobs/sagas';
import auth from './auth/sagas';

export default function* rootSaga() {
  return yield all([jobs, auth]);
}
