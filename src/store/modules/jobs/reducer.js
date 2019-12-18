import producer from 'immer';
import { LIST_JOBS_SUCCESS, LIST_JOBS_FAILURE } from './types';

const INITIAL_STATE = { jobs: [] };

export default function jobs(state = INITIAL_STATE, action) {
  return producer(state, draft => {
    const { type, payload } = action;
    switch (type) {
      case LIST_JOBS_SUCCESS:
        draft.jobs = payload.jobs;
        break;
      case LIST_JOBS_FAILURE:
        draft.jobs = [];
        break;
      default:
        break;
    }
  });
}
