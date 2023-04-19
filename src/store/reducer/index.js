import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import authReducer from './authReducer';
import homeReducer from './homeReducer';

const authPersistConfig = {
    key: 'auths',
    storage,
    whitelist: ['token']
};

const rootPersistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['auths']
}

const rootReducer = combineReducers({
    auths: persistReducer(authPersistConfig, authReducer),
    home: homeReducer
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export default persistedReducer

