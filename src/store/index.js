import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import authReducer from './reducer/authReducer';
import rootSaga from '~/saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        auths: authReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
