import { productTypes } from '~/utils/actionTypes';

const initialState = {
    loading: false,
    products: [],
    error: null,
};

const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case productTypes.GET_ALL_PRODUCTS_REQUEST: {
            return { ...state, loading: true };
        }
        case productTypes.GET_ALL_PRODUCTS_SUCCESS: {
            return { ...state, loading: false, products: payload.data };
        }
        case productTypes.GET_ALL_PRODUCTS_FAILURE: {
            return {
                ...state,
                loading: false,
                error: payload?.message,
            };
        }
        default:
            return state;
    }
};

export default productReducer;
