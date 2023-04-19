import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import './registerPage.scss';
import useAuth from '~/hooks/useAuth';
import { Link } from 'react-router-dom';
export default function RegisterPage() {
    const { handleRegister } = useAuth();
    const [registerData, setRegisterData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterData((pre) => ({ ...pre, [name]: value }));
    };

    return (
        <div className="register-container">
            <div className="register-image"></div>
            <div className="register-form">
                <h1>Đăng ký</h1>
                <Form name="register-form" style={{ width: '60%' }}>
                    <Form.Item>
                        <Input placeholder="Tên người dùng" name="userName" onChange={handleChange} />
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder="Số điện thoại" name="phoneNumber" onChange={handleChange} />
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder="Email" name="email" onChange={handleChange} />
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder="Địa chỉ" name="username" onChange={handleChange} />
                    </Form.Item>
                    <Form.Item>
                        <Input.Password placeholder="Mật khẩu" name="password" onChange={handleChange} />
                    </Form.Item>
                    <Form.Item>
                        <Input.Password
                            placeholder="Xác nhận lại mật khẩu"
                            name="passwordConfirm"
                            onChange={handleChange}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="register-form-button"
                            onClick={() => handleRegister(registerData)}>
                            Đăng ký
                        </Button>
                    </Form.Item>
                </Form>
                <div className="register-action">
                    Bạn đã có tài khoản ?
                    <Link to="/login" style={{ textDecoration: 'none', marginLeft: '5px' }}>
                        Đăng nhập ngay
                    </Link>
                </div>
            </div>
        </div>
    );
}
