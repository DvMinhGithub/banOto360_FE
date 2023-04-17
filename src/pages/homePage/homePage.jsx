import { Button, Carousel} from 'antd';
import './homePage.scss';
export default function HomePage() {
    return (
        <div className="homepage">
            <div className="homepage__slider">
                <div className="slider__content">
                    <div className="slider__heading">Quà tặng đặc biệt</div>
                    <div className="slider__button">
                        <Button size='large' >Liên hệ tư vấn ngay</Button>
                        <Button type='primary' size='large'>Chọn xe có sẵn cùng ưu đãi</Button>
                    </div>
                </div>
            </div>
            <div className="homepage__content"></div>
        </div>
    );
}
