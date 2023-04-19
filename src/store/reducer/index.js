import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import authReducer from './authReducer';
import homeReducer from './homeReducer';

const authPersistConfig = {
    key: 'auths',
    storage,
    whitelist: ['token', 'user']
};

const rootReducer = combineReducers({
    auths: persistReducer(authPersistConfig, authReducer),
    home: homeReducer
});

export default rootReducer

