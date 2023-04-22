import { createAction } from '@reduxjs/toolkit';
import { productTypes } from '~/utils/actionTypes';

const productActions = {
    getAllProductsRequest: createAction(productTypes.GET_ALL_PRODUCTS_REQUEST),
    getAllProductsSuccess: createAction(productTypes.GET_ALL_PRODUCTS_SUCCESS),
    getAllProductsFailure: createAction(productTypes.GET_ALL_PRODUCTS_FAILURE),
};

export default productActions;
