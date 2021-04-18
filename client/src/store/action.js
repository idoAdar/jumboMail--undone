import axios from 'axios';

export const fetchBrands = () => async dispatch => {
    try {
        const response = await axios.get('/jumbo');
        dispatch({
            type: 'GET_BRANDS',
            payload: response.data
        })
    } catch (error) {
        console.dir(error);
    }
}

export const serachById = formState => (dispatch, getState) => {
    const brands = getState().brands;
    const filterdBrads = brands.filter(brand => brand.Id === Number(formState.id));
    if (filterdBrads) {
        return dispatch({
            type: 'GET_BY_ID',
            payload: filterdBrads
        })
    }
}