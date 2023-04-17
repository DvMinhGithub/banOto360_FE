import { put, takeLatest } from 'redux-saga/effects';
import { authActions } from '~/action';
import { httpPost } from '~/services';
import { authTypes } from '~/utils/actionTypes';

function* login(data) {
    try {
        const res = yield httpPost('http://localhost:8080/api/v1/customers/login', data.payload);
        yield put(authActions.loginSuccess(res));
    } catch (error) {
        yield put(authActions.logoutFailure(error));
    }
}

const authSaga = [takeLatest(authTypes.LOGIN_REQUEST, login)];

export default authSaga;
