import { useState, useEffect } from 'react';
import './productPage.scss';
import { Select, Slider } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
export default function ProductPage() {
    const [price, setPrice] = useState(0);
    const [listCar,setListCar]= useState([])
    const productData = [
        {
            name: 'Mercedes AMG-G63',
            price: 1000,
            discount: 10,
            amountPrice: 900,
            model: 'G-Class',
            company: 'Mercedes',
            carImage:
                'https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqrW7qtyO67PobzIr3eWsrrCsdRRzwQZxevZbMw3SGtGyMtsdAv3cUf5rcXGE5YrJbXSqxVKnn8wPqyoiZGkIM4F0srTg9Wmn6PDdR6SeWfxWtsdEkdcUflmWXGE2BdJ0lpArOB2dB1bApftwI5uEMYQC3lQ7kzN25bm7jpv3hKV0cM%25vqrUdyLRnb6YaxoTWrH1MVtn8wBocoiZCkNM4FYFjTg9it26PD4cFSeWgyWtsdPoxcUfeYWXGEs6SJ0lU9hOB2%25gqbApFooI5u9nuQC3Ih3kzNQmnm7jkHZhKVmhM%25vqkyqyLRaQVYaxHrqrH1lMrn8w2Q3oiZprIM4FZ4JTg9FYn6PDt7bSeWyyutsdZmTcUaqKDTb32VXqo8VHZyf%25XEd9BBpxb1loE1JnwxV4V%25d%25CWLH59zW0uB1EdxgXeblpsRpv%25Z=&BKGND=9&IMGT=P27&POV=BE030&im=Trim&fuzz=0.5&width=670',
            color: 'red',
            description: 'Xe được sản xuất tại Hà Đông',
        },
        {
            name: 'Mercedes-AMG GT 53 4MATIC+',
            price: 1000,
            discount: 10,
            amountPrice: 900,
            model: 'G-Class',
            company: 'Mercedes',
            carImage:
                'https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqrWFqtyO67PobzIr3eWsrrCsdRRzwQZhZpZbMw3SGtGyMtsd2J%25cUfpMqXGEjy2J0lV0VOB2qBcbApRIoI5uG5uQC30h7kzNBlkm7j86ZhKViSM%25vq4vZyLRgnyYaxPNqrH1entn8wsoxoiZBkEM4FvIrTg9Lg26PDa1FSeWHnStsd8c%25cUfiANXGE45mJ0lgCZOB2znobQOcxwRLMM4FKKrTg97xq6PD47bSeWgXhtsdR5ocUfGL0XGE0bRJ0lB6VOB2AbEbApTnwI5gZ8lXhRjwQZzkvlKRuoQ3pE77V9hDNt3DkSW9wUwopoL24PvEa2zq7D3p9GQBhNVAFViod=&BKGND=9&IMGT=P27&POV=BE030&im=Trim&fuzz=0.5&width=670',
            color: 'red',
            description: 'Xe này hay được dùng để chở đĩ',
        },
        {
            name: 'Mercedes AMG-G63',
            price: 1000,
            discount: 10,
            amountPrice: 900,
            model: 'G-Class',
            company: 'Mercedes',
            carImage:
                'https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqrW7qtyO67PobzIr3eWsrrCsdRRzwQZxevZbMw3SGtGyMtsdAv3cUf5rcXGE5YrJbXSqxVKnn8wPqyoiZGkIM4F0srTg9Wmn6PDdR6SeWfxWtsdEkdcUflmWXGE2BdJ0lpArOB2dB1bApftwI5uEMYQC3lQ7kzN25bm7jpv3hKV0cM%25vqrUdyLRnb6YaxoTWrH1MVtn8wBocoiZCkNM4FYFjTg9it26PD4cFSeWgyWtsdPoxcUfeYWXGEs6SJ0lU9hOB2%25gqbApFooI5u9nuQC3Ih3kzNQmnm7jkHZhKVmhM%25vqkyqyLRaQVYaxHrqrH1lMrn8w2Q3oiZprIM4FZ4JTg9FYn6PDt7bSeWyyutsdZmTcUaqKDTb32VXqo8VHZyf%25XEd9BBpxb1loE1JnwxV4V%25d%25CWLH59zW0uB1EdxgXeblpsRpv%25Z=&BKGND=9&IMGT=P27&POV=BE030&im=Trim&fuzz=0.5&width=670',
            color: 'red',
            description: 'Xe này đẹp vãi ò',
        },
        {
            name: 'Mercedes AMG-G63',
            price: 1000,
            discount: 10,
            amountPrice: 900,
            model: 'G-Class',
            company: 'Mercedes',
            carImage:
                'https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqrW7qtyO67PobzIr3eWsrrCsdRRzwQZxevZbMw3SGtGyMtsdAv3cUf5rcXGE5YrJbXSqxVKnn8wPqyoiZGkIM4F0srTg9Wmn6PDdR6SeWfxWtsdEkdcUflmWXGE2BdJ0lpArOB2dB1bApftwI5uEMYQC3lQ7kzN25bm7jpv3hKV0cM%25vqrUdyLRnb6YaxoTWrH1MVtn8wBocoiZCkNM4FYFjTg9it26PD4cFSeWgyWtsdPoxcUfeYWXGEs6SJ0lU9hOB2%25gqbApFooI5u9nuQC3Ih3kzNQmnm7jkHZhKVmhM%25vqkyqyLRaQVYaxHrqrH1lMrn8w2Q3oiZprIM4FZ4JTg9FYn6PDt7bSeWyyutsdZmTcUaqKDTb32VXqo8VHZyf%25XEd9BBpxb1loE1JnwxV4V%25d%25CWLH59zW0uB1EdxgXeblpsRpv%25Z=&BKGND=9&IMGT=P27&POV=BE030&im=Trim&fuzz=0.5&width=670',
            color: 'red',
            description: 'Xe này đẹp vãi ò',
        },
    ];
    const colorSelect = [
        {
            value: 'Yellow',
            label: 'Yellow',
        },
        {
            value: 'Orange',
            label: 'Orange',
        },
        {
            value: 'Red',
            label: 'Red',
        },
        {
            value: 'Blue',
            label: 'Blue',
        },
    ];
    const companySelect = [
        {
            value: 'Toyota',
            label: 'Toyota',
        },
        {
            value: 'Mercedes',
            label: 'Mercedes',
        },
        {
            value: 'Lamborghini',
            label: 'Lamborghini',
        },
        {
            value: 'Audi',
            label: 'Audi',
        },
    ];
    useEffect(() => {
        //dispatch action get car vào đây
        setListCar(productData)
    }, []);
    return (
        <div className="product">
            <h1 className="product__heading">Welcome To Our Products</h1>
            <div className="product__content">
                <div className="product__content-action">
                    <input className="input-search" placeholder="Type here to search" />
                    <div>Search filter</div>
                    <Select
                        className="color-select"
                        placeholder="Color"
                        aria-label="Name"
                        style={{
                            width: '100%',
                        }}
                        onChange={() => {}}
                        options={colorSelect}
                    />
                    <Select
                        className="company-select"
                        placeholder="Company"
                        aria-label="Name"
                        style={{
                            width: '100%',
                        }}
                        onChange={() => {}}
                        options={companySelect}
                    />
                    <div>Price: {price}$</div>
                    <Slider
                        className="ant-slider"
                        defaultValue={0}
                        min={0}
                        max={2000}
                        onChange={(value) => setPrice(value)}
                    />
                    <div className="voucher">Get voucher</div>
                </div>
                <div className="product__content-cars">
                    <div className="list-product">
                        {listCar.map((item, key) => {
                            return (
                                <div key={key} className="product">
                                    <img src={item.carImage} alt="error img"></img>
                                    <div className="product__name">{item.name}</div>
                                    <div className="product__price">
                                        <div className='product__price-after'>{item.amountPrice}$</div>
                                        <div className='product__price-before'>{item.price}$</div>
                                    </div>
                                    <div className='product__description'>{item.description}</div>
                                    <div className='btn-addToCart'><ShoppingCartOutlined className='cart-icon' />Thêm vào giỏ hàng</div>
                                    <div className='btn-viewDetail'>Xem chi tiết</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
