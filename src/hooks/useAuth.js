import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '~/action';

export default function useAuth() {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.auths.user);

    const handleLogin = (data) => {
        console.log('🚀 ~ file: useAuth.js:10 ~ handleLogin ~ action:', data);
        dispatch(authActions.loginRequest(data));
    };
    return {
        user,
        handleLogin,
    };
}
