import { authTypes } from '~/utils/actionTypes';

const initialState = {
    loading: false,
    user: {},
    token: null,
    message: null,
};

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case authTypes.LOGIN_REQUEST:
        case authTypes.REGISTER_REQUEST: {
            return { ...state, loading: true };
        }
        case authTypes.LOGIN_SUCCESS: {
            return {
                ...state,
                loading: false,
                user: payload.userData,
                token: payload.accessToken,
            };
        }
        case authTypes.REGISTER_SUCCESS: {
            return { ...state, loading: false, message: payload?.message };
        }
        case authTypes.LOGIN_FAILURE:
        case authTypes.REGISTER_FAILURE: {
            return {
                ...state,
                loading: false,
                message: payload?.message,
            };
        }
        default:
            return state;
    }
};

export default authReducer;
