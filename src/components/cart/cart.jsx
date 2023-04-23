import { Drawer, Empty } from 'antd';
import { memo } from 'react';
import './cart.scss';
import { useProduct } from '~/hooks';

function CartComponent({ openCart, onClose, cartItems }) {
    return (
        <div>
            <Drawer
                title="Giỏ hàng"
                placement="right"
                onClose={onClose}
                open={openCart}>
                {cartItems?.length > 0 ? (
                    cartItems?.map((item) => (
                        <div key={item._id}>
                            name: {item.name} amountPrice
                            {item.amountPrice}
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
