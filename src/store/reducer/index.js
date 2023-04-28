import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import homeReducer from './homeReducer';
import productReducer from './productReducer';
import billReducer from './billReducer';

const authPersistConfig = {
    key: 'auths',
    storage,
    whitelist: ['token', 'user'],
};

const rootReducer = combineReducers({
    auths: persistReducer(authPersistConfig, authReducer),
    home: homeReducer,
    products: productReducer,
    carts: cartReducer,
    bills: billReducer,
});

export default rootReducer;
