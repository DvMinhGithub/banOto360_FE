import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '~/hooks/useAuth';
import './loginPage.scss';
export default function LoginPage() {
    const { handleLogin } = useAuth();

    const [loginData, setLoginData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData((pre) => ({ ...pre, [name]: value }));
    };

    return (
        <div className="login-container">
            <div className="login-image"></div>
            <div className="login-form">
                <h1>Đăng nhập</h1>
                <Form name="login-form" style={{ width: '60%' }}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Username"
                            name="email"
                            onChange={handleChange}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                            onClick={() => handleLogin(loginData)}>
                            Đăng nhập
                        </Button>
                    </Form.Item>
                </Form>
                <div className="register-action">
                    Bạn chưa có tài khoản ?
                    <Link to="/register" style={{ textDecoration: 'none', marginLeft: '5px' }}>
                        Đăng ký ngay
                    </Link>
                </div>
            </div>
        </div>
    );
}
