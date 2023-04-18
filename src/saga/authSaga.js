import { put, takeLatest } from 'redux-saga/effects';
import { authActions } from '~/action';
import { authTypes } from '~/utils/actionTypes';
import api from '~/utils/api';

function* login(data) {
    try {
        const res = yield api.post('customers/login', data.payload);
        yield put(authActions.loginSuccess(res));
    } catch (error) {
        yield put(authActions.loginFailure(error));
    }
}

const authSaga = [takeLatest(authTypes.LOGIN_REQUEST, login)];

export default authSaga;
