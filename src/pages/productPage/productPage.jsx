import { useState, useEffect } from 'react';
import './productPage.scss';
import { Select, Slider } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useProduct } from '~/hooks';
export default function ProductPage() {
    const { products, getAllProducts } = useProduct();

    const [price, setPrice] = useState(0);

    useEffect(() => {
        getAllProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
    // useEffect(() => {
    //     //dispatch action get car vào đây
    //     setListCar(productData);
    // }, []);
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
                        {products?.map((item, key) => {
                            return (
                                <div key={key} className="product">
                                    <img width="90%" height={250} className="product__image" src={item.carImage} alt="error img" />
                                    <div className="product__name">{item.name}</div>
                                    <div className="product__price">
                                        <div className="product__price-after">{item.amountPrice}$</div>
                                        <div className="product__price-before">{item.price}$</div>
                                    </div>
                                    <div className="product__description">{item.description}</div>
                                    <div className="btn-addToCart">
                                        <ShoppingCartOutlined className="cart-icon" />
                                        Thêm vào giỏ hàng
                                    </div>
                                    <div className="btn-viewDetail">Xem chi tiết</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
