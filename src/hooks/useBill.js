import { useDispatch, useSelector } from 'react-redux';
import { billActions } from '~/action';

export default function useBill() {
    const dispatch = useDispatch();

    const loading = useSelector((state) => state.bills.loading);
    const error = useSelector((state) => state.bills.error);

    const paymentCart = (data) => dispatch(billActions.paymentRequest(data));

    return {
        loading,
        error,
        paymentCart,
    };
}
