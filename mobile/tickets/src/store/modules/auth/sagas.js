import { Alert } from 'react-native';

import { parseISO, format } from 'date-fns';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '@services/api';
import firebase from 'firebase';

import {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signFailure,
} from './actions';

export function* singUp({ payload }) {
  try {
    const { email, password, displayName } = payload;
    const response = yield firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    const update = {
      displayName,
      // photoURL: 'https://my-cdn.com/assets/user/123.png',
    };

    yield firebase.auth().currentUser.updateProfile(update);

    console.tron.log('result', response);

    //created_at: format(parseISO(response.data.created_at), 'dd/MM/yyyy'),

    yield put(
      signUpSuccess(response.user.uid, {
        email,
        id: response.user.uid,
        name: response.user.displayName,
        created_at: response.user.createdAt,
      })
    );
    navigation.navigate('Home');
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no cadastro, verifique seus dados'
    );
    yield put(signUpFailure());
  }
}

export function* singIn({ payload, navigation }) {
  try {
    const { email, password } = payload;

    // const response = yield call(api.get, `home/${id}`);

    // api.defaults.headers.Authorization = `Bearer ${token}`;

    const response = yield firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    console.tron.log('result', response);

    yield put(
      signInSuccess(response.user.uid, {
        email,
        id: response.user.uid,
        name: response.user.displayName,
        created_at: response.user.createdAt,
      })
    );

    navigation.navigate('Home');
    // history.push('/dashboard');
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados'
    );
    yield put(signFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', singIn),
  takeLatest('@auth/SIGN_UP_REQUEST', singUp),
]);
