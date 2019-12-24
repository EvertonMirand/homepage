import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { apiBackend as api } from '~/services/api';
import { SESSION } from '~/constants/ApiCalls';
import { REHYDRATE } from '~/store/type';
import history from '~/services/history';
import { signInFailure, signInSuccess } from './actions';
import { SIGN_IN_REQUEST } from './types';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, SESSION, {
      email,
      password,
    });

    const { token, user } = response.data;
    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
    history.push('/');
  } catch (err) {
    toast.error('Falha na autentificação, verifique os seus dados.');

    yield put(signInFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest(REHYDRATE, setToken),
  takeLatest(SIGN_IN_REQUEST, signIn),
]);
