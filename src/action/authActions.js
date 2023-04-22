import { createAction } from '@reduxjs/toolkit';
import { authTypes } from '~/utils/actionTypes';

const authActions = {
    loginRequest: createAction(authTypes.LOGIN_REQUEST),
    loginSuccess: createAction(authTypes.LOGIN_SUCCESS),
    loginFailure: createAction(authTypes.LOGIN_FAILURE),

    registerRequest: createAction(authTypes.REGISTER_REQUEST),
    registerSuccess: createAction(authTypes.REGISTER_SUCCESS),
    registerFailure: createAction(authTypes.REGISTER_FAILURE),

    logoutRequest: createAction(authTypes.LOGOUT_REQUEST),
    logoutSuccess: createAction(authTypes.LOGOUT_SUCCESS),
    logoutFailure: createAction(authTypes.LOGOUT_FAILURE),
};

export default authActions;
