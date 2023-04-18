import { Button, Form, Input } from 'antd';
import './registerPage.scss';
export default function RegisterPage() {
    return (
        <div className="register-container">
            <div className="register-image"></div>
            <div className="register-form">
                <h1>Đăng ký</h1>
                <Form name="register-form" style={{ width: '60%' }}>
                    <Form.Item>
                        <Input placeholder="Tên người dùng" name="username" />
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder="Số điện thoại" name="phoneNumber" />
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder="Email" name="email" />
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder="Địa chỉ" name="username" />
                    </Form.Item>
                    <Form.Item>
                        <Input.Password placeholder="Mật khẩu" name="password" />
                    </Form.Item>
                    <Form.Item>
                        <Input.Password placeholder="Xác nhận lại mật khẩu" name="passwordConfirm" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="register-form-button">
                            Đăng ký
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
