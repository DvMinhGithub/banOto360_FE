import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './loginPage.scss';
import { loginUser } from './loginSlice';
const LoginPage = () => {
    const [loginData, setLoginData] = useState({});

    const dispatch = useDispatch();
    const handleLogin = () => {
        console.log(loginData);
        dispatch(loginUser(loginData));
    };

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
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
                            onChange={handleChangeInput}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            placeholder="Password"
                            name="password"
                            onChange={handleChangeInput}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" onClick={handleLogin}>
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default LoginPage;