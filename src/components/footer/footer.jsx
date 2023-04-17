import './footer.scss';
import {TwitterCircleFilled,FacebookFilled,InstagramFilled,YoutubeFilled} from '@ant-design/icons';
export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__content">
                <div className="footer__col">
                    <div className="footer__col-title">Mua xe</div>
                    <ul class="footer__col-list">
                        <li class="footer__col-list-item">Xe đã qua sử dụng</li>
                        <li class="footer__col-list-item">Xe mới</li>
                        <li class="footer__col-list-item">Chọn cấu hình xe</li>
                        <li class="footer__col-list-item">Bảng giá</li>
                    </ul>
                </div>
                <div className="footer__col">
                    <div className="footer__col-title">Tư vấn mua xe</div>
                    <ul class="footer__col-list">
                        <li class="footer__col-list-item">Yêu cầu tư vấn</li>
                        <li class="footer__col-list-item">Đăng ký lái thử</li>
                        <li class="footer__col-list-item">Tìm nhà phân phối gần nhất</li>
                    </ul>
                </div>
                <div className="footer__col">
                    <div className="footer__col-title">Dịch vụ</div>
                    <ul class="footer__col-list">
                        <li class="footer__col-list-item">Đặt hẹn dịch vụ</li>
                        <li class="footer__col-list-item">Ưu đãi đặc biệt</li>
                        <li class="footer__col-list-item">Phụ kiện chính hãng</li>
                    </ul>
                </div>
                <div className="footer__col">
                    <div className="footer__col-title">Các dòng xe</div>
                    <ul class="footer__col-list">
                        <li class="footer__col-list-item">SUV</li>
                        <li class="footer__col-list-item">Sedan</li>
                        <li class="footer__col-list-item">Mercedes-AMG</li>
                        <li class="footer__col-list-item">Mercedes-Maybach</li>
                    </ul>
                </div>
                <div className="footer__col">
                    <div className="footer__col-title">Giới thiệu</div>
                    <ul class="footer__col-list">
                        <li class="footer__col-list-item">Liên hệ </li>
                        <li class="footer__col-list-item">Câu chuyện của chúng tôi</li>
                        <li class="footer__col-list-item">Tin tức và sự kiện</li>
                    </ul>
                </div>
            </div>
            <div className="footer__contact">
                <div className="footer__contact-title">
                    <div>Bản quyền nội dung</div>
                    <div>Cài đặt</div>
                    <div>Quyền riêng tư và bảo vệ dữ liệu</div>
                    <div>Thông tin pháp lý</div>
                </div>
                <div className="footer__contact-icon">
                    <TwitterCircleFilled/>
                    <InstagramFilled/>
                    <FacebookFilled/>
                    <YoutubeFilled/>
                </div>
            </div>
        </div>
    );
}
