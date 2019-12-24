import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_OUT,
} from './types';

export function signInRequest(email, password) {
  return {
    type: SIGN_IN_REQUEST,
    payload: {
      email,
      password,
    },
  };
}

export function signInSuccess(token, user) {
  return {
    type: SIGN_IN_SUCCESS,
    payload: {
      token,
      user,
    },
  };
}

export function signInFailure() {
  return {
    type: SIGN_IN_FAILURE,
  };
}

export function signUpRequest(name, email, password) {
  return {
    type: SIGN_UP_REQUEST,
    payload: {
      name,
      email,
      password,
    },
  };
}

export function signUpSuccess() {
  return {
    type: SIGN_UP_SUCCESS,
  };
}

export function signUpFailure() {
  return {
    type: SIGN_UP_FAILURE,
  };
}

export function signOut() {
  return {
    type: SIGN_OUT,
  };
}
