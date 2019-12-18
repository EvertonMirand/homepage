import {
  LIST_JOBS_REQUEST,
  LIST_JOBS_SUCCESS,
  LIST_JOBS_FAILURE,
} from './types';

export const listJobsRequest = (search, page) => ({
  type: LIST_JOBS_REQUEST,
  payload: {
    search,
    page,
  },
});

export const listJobsSuccess = jobs => ({
  type: LIST_JOBS_SUCCESS,
  payload: {
    jobs,
  },
});

export const listJobsFailure = () => ({
  type: LIST_JOBS_FAILURE,
});
