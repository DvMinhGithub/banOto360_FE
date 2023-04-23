import api from '~/utils/api';

const { takeLatest, put } = require('redux-saga/effects');
const { cartActions } = require('~/action');

function* getCartList({ payload }) {
    try {
        const res = yield api.get(`/carts/${payload}`);
        yield put(cartActions.getCartListSuccess(res));
    } catch (error) {
        yield put(cartActions.getCartListFailure(error));
    }
}

const cartSaga = [takeLatest(cartActions.getCartListRequest, getCartList)];

export default cartSaga;
