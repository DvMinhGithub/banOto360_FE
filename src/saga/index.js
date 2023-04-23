import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import homeSaga from './homeSaga';
import productSaga from './productSaga';
import cartSaga from './cartSaga';

export default function* rootSaga() {
    yield all([...authSaga, ...homeSaga, ...productSaga, ...cartSaga]);
}
