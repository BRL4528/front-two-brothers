import { takeLatest, call, all, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { uploadSucess } from './actions';

export function* upload({ payload }) {
  try {
    const { url } = payload;

    yield put(uploadSucess(url));

    history.push('/dashboardadm');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados');
  }
}

export function* createBanner({ payload }) {
  try {
    const { id, opacity, displayLogo } = payload;

    yield call(api.post, 'files/imgBanner', {
      id,
      opacity,
      displayLogo,
    });

    toast.success('Albun gerado com sucesso');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados');
  }
}

export default all([
  takeLatest('@file/UPLOAD_IN_REQUEST', upload),
  takeLatest('@file/SAVE_IN_REQUEST', createBanner),
]);
