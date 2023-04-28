import Cookies from 'js-cookie';
import { put, takeLatest } from 'redux-saga/effects';
import { authActions } from '~/action';
import { authTypes } from '~/utils/actionTypes';
import api from '~/utils/api';

function* login({ payload }) {
    try {
        const res = yield api.post('customers/login', payload);
        Cookies.set(
            'accessToken',
            res.accessToken,
            { path: '/' },
            { expires: 1 },
        );
        Cookies.set(
            'refreshToken',
            res.refreshToken,
            { path: '/' },
            { expires: 1 },
        );
        yield put(authActions.loginSuccess(res));
    } catch (error) {
        yield put(authActions.loginFailure(error));
    }
}

function* register({ payload }) {
    try {
        const res = yield api.post('customers/register', payload);
        yield put(authActions.registerSuccess(res));
    } catch (error) {
        yield put(authActions.registerFailure(error));
    }
}

const authSaga = [
    takeLatest(authTypes.LOGIN_REQUEST, login),
    takeLatest(authTypes.REGISTER_REQUEST, register),
];

export default authSaga;
