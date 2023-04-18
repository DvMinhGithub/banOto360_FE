import { Button } from 'antd';
import './homePage.scss';
export default function HomePage() {

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
                    <div className="collection__col">
                        <img
                            src="https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqrW7qtyO67PobzIr3eWsrrCsdRRzwQZxevZbMw3SGtGyMtsdAv3cUf5rcXGE5YrJbXSqxVKnn8wPqyoiZGkIM4F0srTg9Wmn6PDdR6SeWfxWtsdEkdcUflmWXGE2BdJ0lpArOB2dB1bApftwI5uEMYQC3lQ7kzN25bm7jpv3hKV0cM%25vqrUdyLRnb6YaxoTWrH1MVtn8wBocoiZCkNM4FYFjTg9it26PD4cFSeWgyWtsdPoxcUfeYWXGEs6SJ0lU9hOB2%25gqbApFooI5u9nuQC3Ih3kzNQmnm7jkHZhKVmhM%25vqkyqyLRaQVYaxHrqrH1lMrn8w2Q3oiZprIM4FZ4JTg9FYn6PDt7bSeWyyutsdZmTcUaqKDTb32VXqo8VHZyf%25XEd9BBpxb1loE1JnwxV4V%25d%25CWLH59zW0uB1EdxgXeblpsRpv%25Z=&BKGND=9&IMGT=P27&POV=BE030&im=Trim&fuzz=0.5&width=670"
                            alt=""
                            width={300}
                            height={150}
                        />
                        <div className="advertise__col-collection">
                            <div className="advertise__title">Mercedes AMG G-63</div>
                        </div>
                        <div className="advertise__button">Xem chi tiết</div>
                    </div>
                    <div className="collection__col">
                        <img
                            src="https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqaWFqtyO67PobzIr3eWsrrCsdRRzwQZ6kvZbMw3SGtle9tsd2HdcUfp8qXGEubmJ0l3ItOB2NQnbApjtwI5uVQDQC31MjkzNwzwm7jA2jhKViSF%25vq4y9yLRgY2YaxPr9rH1yC%25n8w0Q3oiZBklM4FvIrTg9LxZ6PDaGbSeWH0Wtsd8BxcUfAyYXOc6VRj7rrH1CIdn8w5zhoiZHiZM4F84uTg9jz96PDePoSeWsKMtsdUvVcUaqKDTb32VXq0WcYl9f%25XEd9BBpxb1loE1JnwxV4V%25d%25CWLH59zW0uB1EdxgXeblpsRpv%25Z=&BKGND=9&IMGT=P27&POV=BE030&im=Trim&fuzz=0.5&width=670"
                            alt=""
                            width={300}
                            height={150}
                        />
                        <div className="advertise__col-collection">
                            <div className="advertise__title">C 200 Avantgarde</div>
                        </div>
                        <div className="advertise__button">Xem chi tiết</div>
                    </div>
                    <div className="collection__col">
                        <img
                            src="https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqrWFqtyO67PobzIr3eWsrrCsdRRzwQZhZpZbMw3SGtGyMtsd2J%25cUfpMqXGEjy2J0lV0VOB2qBcbApRIoI5uG5uQC30h7kzNBlkm7j86ZhKViSM%25vq4vZyLRgnyYaxPNqrH1entn8wsoxoiZBkEM4FvIrTg9Lg26PDa1FSeWHnStsd8c%25cUfiANXGE45mJ0lgCZOB2znobQOcxwRLMM4FKKrTg97xq6PD47bSeWgXhtsdR5ocUfGL0XGE0bRJ0lB6VOB2AbEbApTnwI5gZ8lXhRjwQZzkvlKRuoQ3pE77V9hDNt3DkSW9wUwopoL24PvEa2zq7D3p9GQBhNVAFViod=&BKGND=9&IMGT=P27&POV=BE030&im=Trim&fuzz=0.5&width=670"
                            alt=""
                            width={300}
                            height={150}
                        />
                        <div className="advertise__col-collection">
                            <div className="advertise__title">Mercedes-AMG GT 53 4MATIC+ (Facelift)</div>
                        </div>
                        <div className="advertise__button">Xem chi tiết</div>
                    </div>
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
