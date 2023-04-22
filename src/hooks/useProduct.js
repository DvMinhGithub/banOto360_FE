import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '~/action';

export default function useProduct() {
    const dispatch = useDispatch();

    const loading = useSelector((state) => state.products.loading);
    const products = useSelector((state) => state.products.products);
    const error = useSelector((state) => state.products.error);

    const getAllProducts = () => dispatch(productActions.getAllProductsRequest());

    return {
        loading,
        products,
        error,
        getAllProducts,
    };
}
