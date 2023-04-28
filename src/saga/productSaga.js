import { put, takeLatest } from 'redux-saga/effects';
import { productActions } from '~/action';
import { productTypes } from '~/utils/actionTypes';
import api from '~/utils/api';

function* getAllProducts() {
    try {
        const res = yield api.get('/cars');
        yield put(productActions.getAllProductsSuccess(res));
    } catch (error) {
        yield put(productActions.getAllProductsFailure(error));
    }
}

const productSaga = [
    takeLatest(productTypes.GET_ALL_PRODUCTS_REQUEST, getAllProducts),
];

export default productSaga;
