import { Button } from 'antd';
import './homePage.scss';
import { useEffect } from 'react';
import useHome from '~/hooks/useHome';
export default function HomePage() {
    const { carCollection, getCarCollection } = useHome();

    useEffect(() => {
        getCarCollection();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="homepage">
            <div className="homepage__slider">
                <div className="slider__content">
                    <div className="slider__heading">Quà tặng đặc biệt</div>
                    <div className="slider__button">
                        <Button size="large">Liên hệ tư vấn ngay</Button>
                        <Button type="primary" size="large">
                            Chọn xe có sẵn cùng ưu đãi
                        </Button>
                    </div>
                </div>
            </div>

            <div className="homepage__collection">
                <div className="homepage__collection-heading">New Collection</div>
                <div className="homepage__list-collection">
                    {carCollection.length > 0 ? (
                        carCollection?.slice(0, 3).map((car) => {
                            return (
                                <div className="collection__col" key={car._id}>
                                    <img src={car?.carImage} alt="" width={300} height={150} />
                                    <div className="advertise__col-collection">
                                        <div className="advertise__title">{car?.name}</div>
                                    </div>
                                    <div className="advertise__button">Xem chi tiết</div>
                                </div>
                            );
                        })
                    ) : (
                        <h1 style={{ color: 'red' }}>Chèn dữ liệu vào databse đi chấn bé đù</h1>
                    )}
                </div>
            </div>

            <div className="homepage__content">
                <div className="homepage__content-heading">Our's Blog</div>
                <div className="homepage__list-advertise">
                    <div className="advertise__col">
                        <img
                            src="https://www.mercedes-benz.com.vn/content/vietnam/vi/passengercars/mercedes-benz-cars/campaigns/promo-2023-lc/_jcr_content/root/responsivegrid/simple_teaser_copy/simple_teaser_item_4_631623720.component.damq6.3354959382199.jpg/mb-mar-promo-teaser-27022023-C-GLC.jpg"
                            alt=""
                        />
                        <div className="advertise__col-content">
                            <div className="advertise__title">
                                C-Class và GLC mang đến những khởi đầu mới trong tháng 3 và 4
                            </div>
                            <div className="advertise__description">
                                Thời điểm hoàn hảo dành cho khách hàng sở hữu C-Class và GLC cùng ưu đãi đặc biệt từ
                                Mercedes-Benz.
                            </div>
                        </div>
                        <div className="advertise__button">Chọn xe có sẵn cùng ưu đãi</div>
                    </div>
                    <div className="advertise__col">
                        <img
                            src="https://www.mercedes-benz.com.vn/content/vietnam/vi/passengercars/mercedes-benz-cars/campaigns/promo-2023-lc/_jcr_content/root/responsivegrid/simple_teaser_copy/simple_teaser_item_4_631623720.component.damq6.3354959382199.jpg/mb-mar-promo-teaser-27022023-C-GLC.jpg"
                            alt=""
                        />
                        <div className="advertise__col-content">
                            <div className="advertise__title">Khẳng định dấu ấn cá nhân với E-Class và GLE</div>
                            <div className="advertise__description">
                                Sở hữu E-Class và GLE trong tháng 3 & 4 cùng ưu đãi từ chương trình Quà Tặng Đặc Quyền
                                của Mercedes-Benz, cho ấn tượng đầu mạnh mẽ.
                            </div>
                        </div>
                        <div className="advertise__button">Chọn xe có sẵn cùng ưu đãi</div>
                    </div>
                    <div className="advertise__col">
                        <img
                            src="https://www.mercedes-benz.com.vn/content/vietnam/vi/passengercars/mercedes-benz-cars/campaigns/promo-2023-lc/_jcr_content/root/responsivegrid/simple_teaser_copy/simple_teaser_item_4_631623720.component.damq6.3354959382199.jpg/mb-mar-promo-teaser-27022023-C-GLC.jpg"
                            alt=""
                        />
                        <div className="advertise__col-content">
                            <div className="advertise__title">
                                Tận hưởng đặc quyền trên những hành trình phi thường cùng S-Class và GLS
                            </div>
                            <div className="advertise__description">
                                Sở hữu S-Class và GLS để tận hưởng dịch vụ chăm sóc cùng quà tặng bảo hiểm vượt trội từ
                                Mercedes-Benz.
                            </div>
                        </div>
                        <div className="advertise__button">Chọn xe có sẵn cùng ưu đãi</div>
                    </div>
                </div>
                <div className="btn-readmore">Xem thêm</div>
            </div>
        </div>
    );
}
