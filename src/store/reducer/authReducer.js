import { createSlice } from '@reduxjs/toolkit';
import { authTypes } from '~/utils/actionTypes';

const initialState = {
    loading: false,
    user: {},
    error: '',
};

export const authSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        loginRequest: (state, action) => {
            console.log('🚀 ~ file: authReducer.js:24 ~ state:', state);
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
            console.log("🚀 ~ file: authReducer.js:26 ~ action:", action)
        },
        loginFailure: (state, action) => {
            state.error += action.payload.error;
        },
    },
});
// const authReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case authTypes.LOGIN_REQUEST: {
//             return { ...state, loading: true };
//         }
//         case authTypes.LOGIN_SUCCESS: {
//             console.log(action);
//             return { ...state, loading: true };
//         }
//         case authTypes.LOGIN_FAILURE: {
//             return {
//                 ...state,
//                 error: action.payload.error,
//             };
//         }
//         default:
//             return state;
//     }
// };

// Action creators are generated for each case reducer function
// export const { loginRequest, loginSuccess, loginFailure } = authSlice.actions;

export default authSlice.reducer;

// export default authReducer;
