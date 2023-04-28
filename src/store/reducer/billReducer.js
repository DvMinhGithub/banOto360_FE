import { billTypes } from '~/utils/actionTypes/billTypes';

const initialState = {
    loading: false,
    error: null,
};

const billReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case billTypes.PAYMENT_REQUEST:
            return { ...state, loading: true };

        case billTypes.PAYMENT_SUCCESS:
            return { ...state, loading: false };

        case billTypes.PAYMENT_FAILURE:
            return { ...state, loading: false, error: payload.message };

        default:
            return state;
    }
};

export default billReducer;
