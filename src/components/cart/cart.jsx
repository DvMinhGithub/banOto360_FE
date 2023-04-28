import { Drawer, Empty } from 'antd';
import { memo } from 'react';
import './cart.scss';
import useCart from '../../hooks/useCart';
import { InputNumber, Table } from 'antd';

function CartComponent({ openCart, onClose, cartItems,userId }) {
   const {addToCart} = useCart()
   
    const columns2 = [
        {
            title: 'Ảnh',
            key: 'image',
            render: (_, record) => (
                <img
                    style={{ width: '25%', height: '25%' }}
                    src={record.idProduct.carImage}
                    alt={record.idProduct.name}
                />
            ),
            width: '30%',
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: ['idProduct', 'name'],
            key: 'name',
        },
        {
            title: 'Số lượng',
            dataIndex: ['amountProduct'],
            key: 'amountProduct',
            render: (amountProduct, record) => (
                <InputNumber
                    min={1}
                    defaultValue={amountProduct}
                    onChange={(e) => {
                        const item = cartItems.listProduct.find(
                            (item) =>
                                item.idProduct._id === record.idProduct._id,
                        );
                        item.amountProduct = e;
                        addToCart({ idCustomer: userId, cartItems });
                    }}
                />
            ),
        },
        {
            title: 'Giá',
            dataIndex: ['idProduct', 'amountPrice'],
            key: 'price',
            render: (text) => `$${text}`,
        },
        {
            title: 'Thành tiền',
            dataIndex: 'amountPrice',
            key: 'amountPrice',
            render: (_, item) =>
                item.amountProduct * item.idProduct.amountPrice,
        },
    ];

    return (
        <div>
            <Drawer
                width={700}
                title="Giỏ hàng"
                placement="right"
                onClose={onClose}
                open={openCart}>
                {cartItems.listProduct?.length > 0 ? (
                    <>
                        <Table
                            dataSource={cartItems.listProduct}
                            columns={columns2}
                            pagination={false}
                            rowKey="_id"
                        />
                        <div style={{ textAlign: 'right', marginTop: 10 }}>
                            <p style={{ fontWeight: 'bold' }}>
                                Tổng tiền: ${cartItems.totalPrice}
                            </p>
                        </div>
                    </>
                ) : (
                    <Empty />
                )}
            </Drawer>
        </div>
    );
}

export default memo(CartComponent);
