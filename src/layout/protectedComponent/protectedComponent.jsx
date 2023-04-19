import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '~/hooks/useAuth';

export default function ProtectedComponent({ children }) {
    const { token } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const { pathname } = location;
    useEffect(() => {
        if (token) {
            if (pathname === '/login' || pathname === '/register') {
                navigate('/');
            }
        } else {
            if (pathname === '/register') {
                navigate('/register');
            } else {
                navigate('/login');
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return children;
}
