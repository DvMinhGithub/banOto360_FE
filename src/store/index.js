import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import authReducer from './reducer/authReducer';
import rootSaga from '~/saga';
import homeReducer from './reducer/homeReducer';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        auths: authReducer,
        home: homeReducer
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
