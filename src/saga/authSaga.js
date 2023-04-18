import { notification } from 'antd';
import { put, takeLatest } from 'redux-saga/effects';
import { authActions } from '~/action';
import { authTypes } from '~/utils/actionTypes';
import api from '~/utils/api';


function* login(data) {

    try {
        const res = yield api.post('customers/login', data.payload);
        localStorage.setItem('token', res.token);
        yield put(authActions.loginSuccess(res));
    } catch (error) {
        notification.error({ message: error.message });
        yield put(authActions.loginFailure(error));
    }
}

function* register(data) {
    try {
        const res = yield api.post('customers/register', data.payload);
        notification.success({ message: res?.message })
        yield put(authActions.registerSuccess(res));
    } catch (error) {
        notification.error({ message: error.message })
        yield put(authActions.registerFailure(error));
    }
}

const authSaga = [
    takeLatest(authTypes.LOGIN_REQUEST, login),
    takeLatest(authTypes.REGISTER_REQUEST, register)];

export default authSaga;
