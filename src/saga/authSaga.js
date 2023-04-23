import { notification } from 'antd';
import { put, takeLatest } from 'redux-saga/effects';
import { authActions } from '~/action';
import { authTypes } from '~/utils/actionTypes';
import api from '~/utils/api';

function* login({ payload }) {
    try {
        const res = yield api.post('customers/login', payload);
        yield put(authActions.loginSuccess(res));
    } catch (error) {
        notification.error({ message: error.message });
        yield put(authActions.loginFailure(error));
    }
}

function* register({ payload }) {
    try {
        const res = yield api.post('customers/register', payload);
        notification.success({ message: res?.message });
        yield put(authActions.registerSuccess(res));
    } catch (error) {
        notification.error({ message: error.message });
        yield put(authActions.registerFailure(error));
    }
}

const authSaga = [
    takeLatest(authTypes.LOGIN_REQUEST, login),
    takeLatest(authTypes.REGISTER_REQUEST, register),
];

export default authSaga;
