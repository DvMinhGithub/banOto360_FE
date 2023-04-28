import api from '~/utils/api';

const { takeLatest, put } = require('redux-saga/effects');
const { billActions } = require('~/action');

function* paymentCart({ payload: { idCustomer, cartItems } }) {
    try {
        const res = yield api.post(`/bills//${idCustomer}`, cartItems);
        yield put(billActions.paymentSuccess(res));
    } catch (error) {
        yield put(billActions.paymentFailure(error));
    }
}

const billSaga = [takeLatest(billActions.paymentRequest, paymentCart)];

export default billSaga;
