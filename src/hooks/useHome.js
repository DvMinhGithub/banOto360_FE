import { useDispatch, useSelector } from 'react-redux';
import { homeActions } from '~/action';

export default function useHome() {
    const dispatch = useDispatch();

    const loading = useSelector(state => state.home.loading)
    const carCollection = useSelector((state) => state.home.carCollection);
    const error = useSelector((state) => state.home.error);

    const getCarCollection = (data) => dispatch(homeActions.getCarCollectionRequest(data))

    return {
        loading,
        carCollection,
        error,
        getCarCollection,
    };
}
