import producer from 'immer';
import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT,
  SIGN_UP_SUCCESS,
  SIGN_IN_REQUEST,
  SIGN_UP_REQUEST,
  SIGN_UP_FAILURE,
} from './types';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return producer(state, draft => {
    const { payload, type } = action;
    switch (type) {
      case SIGN_UP_REQUEST:
      case SIGN_IN_REQUEST:
        draft.loading = true;
        break;
      case SIGN_IN_SUCCESS:
        draft.token = payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      case SIGN_UP_SUCCESS:
      case SIGN_IN_FAILURE:
      case SIGN_UP_FAILURE:
        draft.loading = false;
        break;
      case SIGN_OUT:
        draft.token = null;
        draft.signed = false;
        break;
      default:
    }
  });
}
