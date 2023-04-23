import { createAction } from '@reduxjs/toolkit';
import { cartTypes } from '~/utils/actionTypes/cartTypes';

const cartActions = {
    getCartListRequest: createAction(cartTypes.GET_CART_LIST_REQUEST),
    getCartListSuccess: createAction(cartTypes.GET_CART_LIST_SUCCESS),
    getCartListFailure: createAction(cartTypes.GET_CART_LIST_FAILURE),

    addToCartRequest: createAction(cartTypes.ADD_TO_CART_REQUEST),
    addToCartSuccess: createAction(cartTypes.ADD_TO_CART_SUCCESS),
    addToCartFailure: createAction(cartTypes.ADD_TO_CART_FAILURE),
};

export default cartActions;
