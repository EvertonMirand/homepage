import producer from 'immer';
import {
  LIST_JOBS_SUCCESS,
  LIST_JOBS_FAILURE,
  LIST_JOBS_REQUEST,
} from './types';

const INITIAL_STATE = {
  jobs: [],
  loading: false,
};

export default function jobs(state = INITIAL_STATE, action) {
  return producer(state, draft => {
    const { type, payload } = action;
    switch (type) {
      case LIST_JOBS_REQUEST:
        draft.loading = true;
        break;
      case LIST_JOBS_SUCCESS:
        draft.jobs = payload.jobs;
        draft.loading = false;
        break;
      case LIST_JOBS_FAILURE:
        draft.jobs = [];
        draft.loading = false;
        break;
      default:
        break;
    }
  });
}
