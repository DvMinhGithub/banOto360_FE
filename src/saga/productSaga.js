import { put, takeLatest } from 'redux-saga/effects';
import { productActions } from '~/action';
import { productTypes } from '~/utils/actionTypes';
import api from '~/utils/api';

function* getAllProducts() {
    try {
        const res = yield api.get('/cars');
        console.log('🚀 ~ file: productSaga.js:9 ~ function*getAllProducts ~ res:', res);

        yield put(productActions.getAllProductsSuccess(res));
    } catch (error) {
        yield put(productActions.getCarCollectionFailure(error));
    }
}

const productSaga = [takeLatest(productTypes.GET_ALL_PRODUCTS_REQUEST, getAllProducts)];

export default productSaga;
