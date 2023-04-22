import { createAction } from '@reduxjs/toolkit';
import { homeTypes } from '~/utils/actionTypes';

const homeActions = {
    getCarCollectionSuccess: createAction(homeTypes.GET_CAR_COLLECTION_SUCCESS),
    getCarCollectionFailure: createAction(homeTypes.GET_CAR_COLLECTION_SUCCESS),
    getCarCollectionRequest: createAction(homeTypes.GET_CAR_COLLECTION_REQUEST),
};

export default homeActions;
