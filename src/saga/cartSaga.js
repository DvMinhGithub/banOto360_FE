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

function* addToCartList({payload:{idCustomer,listProduct}} ) {
    try {
        const res = yield api.post(`/carts/${idCustomer}`, listProduct);
        yield put(cartActions.addToCartSuccess(res));
        yield put(cartActions.getCartListRequest(idCustomer))
    } catch (error) {
        yield put(cartActions.addToCartFailure(error));
    }
}

const cartSaga = [
    takeLatest(cartActions.getCartListRequest, getCartList),
    takeLatest(cartActions.addToCartRequest, addToCartList),
];

export default cartSaga;
