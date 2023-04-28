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

function* addToCartList({ payload: { idCustomer, cartItems } }) {
    try {
        const res = yield api.post(`/carts/${idCustomer}`, cartItems);
        yield put(cartActions.addToCartSuccess(res));
        yield put(cartActions.getCartListRequest(idCustomer));
    } catch (error) {
        yield put(cartActions.addToCartFailure(error));
    }
}

function* resetCartList({ payload }) {
    try {
        const res = yield api.put(`/carts/reset/${payload}`);
        yield put(cartActions.resetCartSuccess(res));
        yield put(cartActions.getCartListRequest(payload));
    } catch (error) {
        yield put(cartActions.resetCartFailure(error));
    }
}

const cartSaga = [
    takeLatest(cartActions.getCartListRequest, getCartList),
    takeLatest(cartActions.addToCartRequest, addToCartList),
    takeLatest(cartActions.resetCartRequest, resetCartList),
];

export default cartSaga;
