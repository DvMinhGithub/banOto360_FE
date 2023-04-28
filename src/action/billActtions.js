import { createAction } from '@reduxjs/toolkit';
import { billTypes } from '~/utils/actionTypes/billTypes';

const billActions = {
    paymentRequest: createAction(billTypes.PAYMENT_REQUEST),
    paymentSuccess: createAction(billTypes.PAYMENT_SUCCESS),
    paymentFailure: createAction(billTypes.PAYMENT_FAILURE),
};

export default billActions;
