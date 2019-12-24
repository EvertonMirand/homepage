import { all } from 'redux-saga/effects';
import jobs from './jobs/sagas';
import auth from './auth/sagas';
import user from './user/sagas';

export default function* rootSaga() {
  return yield all([jobs, auth, user]);
}
