import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import homeSaga from './homeSaga';

export default function* rootSaga() {
    yield all([...authSaga, ...homeSaga]);
}
