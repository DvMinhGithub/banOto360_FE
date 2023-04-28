import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import homeSaga from './homeSaga';
import productSaga from './productSaga';
import cartSaga from './cartSaga';
import billSaga from './billSaga';

export default function* rootSaga() {
    yield all([
        ...authSaga,
        ...homeSaga,
        ...productSaga,
        ...cartSaga,
        ...billSaga,
    ]);
}
