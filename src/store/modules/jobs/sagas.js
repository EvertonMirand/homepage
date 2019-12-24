import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { apiJobs } from '~/services/api';

import { listJobsFailure, listJobsSuccess } from './actions';
import { LIST_JOBS_REQUEST } from './types';

export function* listJobs({ payload }) {
  try {
    const { search, page } = payload;

    const response = yield call(apiJobs.get, 'positions.json', {
      params: { search, page },
    });

    console.tron.log(response);
    yield put(listJobsSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao buscar vagas de emprego!');
    yield put(listJobsFailure());
  }
}

export default all([takeLatest(LIST_JOBS_REQUEST, listJobs)]);
