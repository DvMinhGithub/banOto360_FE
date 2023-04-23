import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '~/action';

export default function useProduct() {
    const dispatch = useDispatch();

    const loading = useSelector((state) => state.carts.loading);
    const cartItems = useSelector((state) => state.carts.cartItems);
    const error = useSelector((state) => state.carts.error);

    const getCartList = (data) => dispatch(cartActions.getCartListRequest(data));
    const addToCart = (data) => dispatch(cartActions.addToCartRequest(data));

    return {
        loading,
        cartItems,
        error,
        getCartList,
        addToCart,
    };
}
