import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { UPDATE_PROFILE_REQUEST } from './types';
import { updateProfileFailure, updateProfileSuccess } from './actions';
import { apiBackend as api } from '~/services/api';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);
    toast.success('Perfil atualizado com sucesso!');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao atualizar perfil, confira seus dados!');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest(UPDATE_PROFILE_REQUEST, updateProfile)]);
