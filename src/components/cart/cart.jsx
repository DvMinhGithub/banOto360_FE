import { Drawer, Empty } from 'antd';
import { memo } from 'react';
import './cart.scss';

function CartComponent({ openCart, onClose, cartItems }) {
    return (
        <div>
            <Drawer
                title="Giỏ hàng"
                placement="right"
                onClose={onClose}
                open={openCart}>
                {cartItems.listProduct?.length > 0 ? (
                    cartItems?.listProduct.map((item) => (
                        <div key={item._id}>
                            idProduct: {item.idProduct} Amount
                            {item.amountProduct}
                        </div>
                    ))
                ) : (
                    <Empty />
                )}
                <p>Tổng tiền : {cartItems.totalPrice} </p>
            </Drawer>
        </div>
    );
}
export default memo(CartComponent);
