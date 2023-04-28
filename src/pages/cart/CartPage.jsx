import { DeleteOutlined } from '@ant-design/icons';
import { Button, Empty, InputNumber, Table } from 'antd';
import { memo, useEffect, useState } from 'react';
import { useAuth, useBill, useCart } from '~/hooks';
import './CartPage.scss';

function CartPage() {
    const { user } = useAuth();
    const { cartItems, getCartList, addToCart, resetCart } = useCart();
    const { paymentCart } = useBill();
    const [selectionType] = useState('checkbox');
    let remainingItems;

    useEffect(() => {
        getCartList(user._id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleRemoveProduct = (id) => {
        const updatedCartItems = cartItems.listProduct.filter(
            (item) => item.idProduct._id !== id,
        );
        cartItems.listProduct = updatedCartItems;
        addToCart({ idCustomer: user._id, cartItems });
    };

    const handlePayment = () => {
        Promise.all([
            paymentCart({ idCustomer: user._id, cartItems }),
            addToCart({
                idCustomer: user._id,
                cartItems: { ...cartItems, listProduct: remainingItems },
            }),
        ]);
    };

    const handleResetCart = () => {
        resetCart(user._id);
    };

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            remainingItems = cartItems.listProduct.filter(
                (item) => !selectedRowKeys.includes(item._id),
            );
            cartItems.listProduct = selectedRows;
            delete cartItems._id;
            cartItems.totalPrice = selectedRows.reduce(
                (total, crr) =>
                    total + crr.amountProduct * crr.idProduct.amountPrice,
                0,
            );
        },
    };

    const onCartItemQuantityChange = (id, type) => {
        const item = cartItems.listProduct.find(
            (item) => item.idProduct._id === id,
        );
        type === 'increase'
            ? (item.amountProduct += 1)
            : (item.amountProduct -= 1);
        addToCart({ idCustomer: user._id, cartItems });
    };

    const columns = [
        {
            title: 'Sản phẩm',
            dataIndex: 'idProduct',
            render: (product) => (
                <div className="cart-product">
                    <img src={product.carImage} alt={product.name} />
                    <span>{product.name}</span>
                </div>
            ),
        },
        {
            title: 'Đơn giá',
            dataIndex: 'idProduct',
            render: (product) => product.amountPrice + ' đ',
        },
        {
            title: 'Số lượng',
            dataIndex: 'amountProduct',
            render: (amountProduct, record) => (
                <div className="cart-quantity">
                    <Button disabled={record.amountProduct === 1}
                        onClick={() =>
                            onCartItemQuantityChange(
                                record.idProduct._id,
                                'decrease',
                            )
                        }>
                        -
                    </Button>
                    <InputNumber min={1} max={10} value={amountProduct} />
                    <Button
                        onClick={() =>
                            onCartItemQuantityChange(
                                record.idProduct._id,
                                'increase',
                            )
                        }>
                        +
                    </Button>
                </div>
            ),
        },
        {
            title: 'Thành tiền',
            dataIndex: 'idProduct',
            render: (product, record) =>
                record.amountProduct * product.amountPrice + ' đ',
        },
        {
            title: 'Thao tác',
            dataIndex: 'idProduct',
            render: (_, record) => (
                <div className="cart-delete">
                    <Button
                        icon={<DeleteOutlined />}
                        onClick={() =>
                            handleRemoveProduct(record.idProduct._id)
                        }
                    />
                </div>
            ),
        },
    ];

    return (
        <div className="cart-container">
            {cartItems.listProduct?.length > 0 ? (
                <>
                    <Table
                        rowSelection={{
                            type: selectionType,
                            ...rowSelection,
                        }}
                        columns={columns}
                        dataSource={cartItems.listProduct}
                        pagination={false}
                        showHeader={true}
                        rowKey={'_id'}
                    />
                    <div className="cart-footer">
                        <div className="cart-summary">
                            <span>Tổng tiền:</span>
                            <span>{cartItems.totalPrice} đ</span>
                        </div>
                        <div className="cart-actions">
                            <Button type="primary" onClick={handlePayment}>
                                Thanh toán
                            </Button>
                            <Button danger onClick={handleResetCart}>
                                Xóa tất cả
                            </Button>
                        </div>
                    </div>
                </>
            ) : (
                <Empty />
            )}
        </div>
    );
}

export default memo(CartPage);
