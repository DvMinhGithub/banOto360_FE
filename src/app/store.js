import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '~/pages/loginPage/loginSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
    },
});
