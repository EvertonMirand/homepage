import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '~/services/api';

import { listJobsFailure, listJobsSuccess } from './actions';
import { LIST_JOBS_REQUEST } from './types';

export function* listJobs({ payload }) {
  try {
    const { search, page } = payload;

    const response = yield call(api.get, 'positions.json', {
      params: { search, page },
    });
    yield put(listJobsSuccess(response.data));
  } catch (err) {
    yield put(listJobsFailure());
  }
}

export default all([takeLatest(LIST_JOBS_REQUEST, listJobs)]);
