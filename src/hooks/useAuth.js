import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '~/action';

export default function useAuth() {
    const dispatch = useDispatch();

    const loading = useSelector(state => state.auths.loading)
    const user = useSelector((state) => state.auths.user);
    const message = useSelector((state) => state.auths.message);
    const token = useSelector(state => state.auths.token)

    const handleLogin = (data) => dispatch(authActions.loginRequest(data))
    const handleRegister = (data) => dispatch(authActions.registerRequest(data))

    return {
        loading,
        user,
        message,
        token,
        handleLogin, handleRegister
    };
}
