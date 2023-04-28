import { cartTypes } from '~/utils/actionTypes/cartTypes';

const initialState = {
    loading: false,
    cartItems: [],
    error: null,
};

const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case cartTypes.GET_CART_LIST_REQUEST:
        case cartTypes.ADD_TO_CART_REQUEST:
        case cartTypes.RESET_CART_LIST_REQUEST:
            return { ...state, loading: true };

        case cartTypes.GET_CART_LIST_SUCCESS:
        case cartTypes.ADD_TO_CART_SUCCESS:
        case cartTypes.RESET_CART_LIST_SUCCESS:
            return { ...state, loading: false, cartItems: payload.data };

        case cartTypes.GET_CART_LIST_FAILURE:
        case cartTypes.ADD_TO_CART_FAILURE:
        case cartTypes.RESET_CART_LIST_FAILURE:
            return { ...state, loading: false, error: payload.message };

        default:
            return state;
    }
};

export default cartReducer;
