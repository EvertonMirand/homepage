import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { apiBackend as api } from '~/services/api';
import { SESSION, USER } from '~/constants/ApiCalls';
import { REHYDRATE } from '~/store/type';
import history from '~/services/history';
import {
  signInFailure,
  signInSuccess,
  signUpFailure,
  signUpSuccess,
} from './actions';
import { SIGN_IN_REQUEST, SIGN_OUT } from './types';

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

export function signOut() {
  history.push('/');
}

export function* signUp({ payload: { name, email, password } }) {
  try {
    yield call(api.post, USER, {
      name,
      email,
      password,
    });
    history.push('/login');
    yield put(signUpSuccess());
  } catch (err) {
    console.tron.log(err);
    toast.error('Falha no cadastro, verifique seus dados!');
    yield put(signUpFailure());
  }
}

export default all([
  takeLatest(REHYDRATE, setToken),
  takeLatest(SIGN_IN_REQUEST, signIn),
  takeLatest(SIGN_OUT, signOut),
]);
