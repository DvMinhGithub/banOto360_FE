import { put, takeLatest } from "redux-saga/effects";
import { homeActions } from "~/action";
import { homeTypes } from "~/utils/actionTypes";
import api from "~/utils/api";

function* getCarCollection() {
    try {
        const res = yield api.get('/cars')

        yield put(homeActions.getCarCollectionSuccess(res))
    } catch (error) {
        yield put(homeActions.getCarCollectionFailure(error));
    }
}

const homeSaga = [
    takeLatest(homeTypes.GET_CAR_COLLECTION_REQUEST, getCarCollection)]

export default homeSaga;
