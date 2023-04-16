import './header.scss';
import { publicRoutes } from '../../routes/index';
import { useLocation, useNavigate } from 'react-router-dom';
import { Fragment } from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <div className="header">
            <div
                className="header__logo"
                onClick={() => {
                    navigate('/');
                }}>
                <img
                    src="https://media.istockphoto.com/id/1186221338/vector/abstract-car-logo-design-concept-automotive-car-vector-design-template.jpg?s=612x612&w=0&k=20&c=BW5BkfPN-Kiovxb55lECGBWRbmJGnzj2hhwVanyFKKs="
                    alt="error-Img"
                    width={130}
                    height={70}></img>
            </div>
            <div className="header__menu">
                {publicRoutes.map((item, key) => {
                    return item.needShowSideMenu ? (
                        <div
                            onClick={() => navigate(item.path)}
                            style={{ color: location.pathname === item.path && 'orange'}}
                            key={key}>
                            {item.label}
                        </div>
                    ) : (
                        Fragment
                    );
                })}
            </div>
            <div className="header__action">
                <div className="header__action-account">Nguyễn Đức Lợi</div>
                <div className="header__action-cart">
                    <ShoppingCartOutlined />
                </div>
            </div>
        </div>
    );
}
