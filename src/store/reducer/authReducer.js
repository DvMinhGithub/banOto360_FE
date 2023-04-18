import { authTypes } from '~/utils/actionTypes';

const initialState = {
    loading: false,
    user: {},
    token: '',
    message: '',
};

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case authTypes.LOGIN_REQUEST: {
            return { ...state, loading: true };
        }
        case authTypes.LOGIN_SUCCESS: {
            return { ...state, loading: true, user: payload.userData, token: payload.token }
        }
        case authTypes.LOGIN_FAILURE: {
            return {
                ...state, loading: false,
                message: payload.message,
            };
        }
        default:
            return state;
    }
};

export default authReducer;
