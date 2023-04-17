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
                    src="data:image/png;base64,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"
                    alt="error-Img"
                    width={130}
                    height={90}></img>
            </div>
            <div className="header__menu">
                {publicRoutes.map((item, key) => {
                    return item.needShowSideMenu ? (
                        <div
                            onClick={() => navigate(item.path)}
                            style={{ color: location.pathname === item.path && 'white'}}
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
