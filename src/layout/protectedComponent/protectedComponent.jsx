import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ProtectedComponent({ children }) {
    const accessToken = Cookies.get('accessToken');
    const location = useLocation();
    const navigate = useNavigate();
    const { pathname } = location;

    useEffect(() => {
        if (accessToken) {
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
    }, [accessToken, navigate, pathname]);

    return children;
}
