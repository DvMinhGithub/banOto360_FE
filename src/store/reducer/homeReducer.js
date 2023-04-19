import { homeTypes } from "~/utils/actionTypes";

const initialState = {
    loading: false,
    carCollection: [],
    error: null
}

const homeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case homeTypes.GET_CAR_COLLECTION_REQUEST:
            {
                return { ...state, loading: true };
            }
        case homeTypes.GET_CAR_COLLECTION_SUCCESS: {
            return { ...state, loading: false, carCollection: payload.data }
        }
        case homeTypes.GET_CAR_COLLECTION_FAILURE:
            {
                return {
                    ...state, loading: false,
                    message: payload.message,
                };
            }
        default:
            return state;
    }
};

export default homeReducer;
