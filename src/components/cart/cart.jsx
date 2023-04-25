import { Drawer, Empty } from 'antd';
import { memo } from 'react';
import './cart.scss';

import { InputNumber, Table } from 'antd';

function CartComponent({ openCart, onClose, cartItems }) {

    // const handleAddMore = (idProduct)=>{//id product ở đây là id của sản phẩm đang bấm thêm hoặc xoá
    //     const product = cartItems.find(item=>item.idProduct._id === idProduct)
    //     product.amountPrice += 1
    //     addToCart(cartItems)
    //   }
      
    //   const handleDeleteMore = (idProduct)=>{
    //     const product = cartItems.find(item=>item.idProduct._id === idProduct)
    //     product.amountPrice -= 1
    //     addToCart(cartItems)
    //   }

    //   const handleDeleAll = (idProduct)=>{//Giả sử người dùng mua 11 sản phẩm nhưng cùng 1 loại nhưng có lúc không thích và muốn xoá hết đi thì dùng hàm này
   //     const indexProduct = cartItems.findIndexOf(item=>item.idProduct._id === idProduct)//tìm vị trí phần tử muốn xoá
    //     cartItems.splice(indexProduct,1)
    //     addToCart(cartItems)
    //   }

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
            render: (text, record) => <InputNumber min={1} value={text} />,
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
