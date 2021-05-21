import website2 from '../api/website2';
import createDataContext from './createDataContext';
import { GET_COMPANIES, SET_LOADING, SET_EFFECTIVE_RATE } from '../values/strings';

const changerReducer = (state, action) => {
    switch (action.type) {
        case SET_LOADING:
            return { ...state, loading: action.payload }
        default:
            return state;
    }
};

const saveFormOne = dispatch => async (name, email, phone, callback) => {
    try {
        console.log('going');
        dispatch({ type: SET_LOADING, payload: '1' });
        const response = await website2.post('saveform/one', { name, email, phone }).then(response => {
            dispatch({ type: SET_LOADING, payload: '' });
            callback();
        }).catch(error => {
            console.log(error);
            dispatch({ type: SET_LOADING, payload: '' });
        });
    } catch (err) {
        console.log(err);
        dispatch({ type: SET_LOADING, payload: '' });
    }
};

const saveFormTwo = dispatch => async (business_name, industry, state, average_ticket_sale, monthly_volume, paying_now, callback) => {
    try {
        console.log('going');
        dispatch({ type: SET_LOADING, payload: '2' });
        const response = await website2.post('saveform/two', { business_name, industry, state, average_ticket_sale, monthly_volume, paying_now }).then(response => {
            dispatch({ type: SET_LOADING, payload: '' });
            callback();
        }).catch(error => {
            console.log(error);
            dispatch({ type: SET_LOADING, payload: '' });
        });
    } catch (err) {
        console.log(err);
        dispatch({ type: SET_LOADING, payload: '' });
    }
};

const chooseQuote = dispatch => async (name, callback) => {
    try {
        console.log('going');
        dispatch({ type: SET_LOADING, payload: '3' });
        const response = await website2.post('saveform/choosequote/' + name).then(response => {
            dispatch({ type: SET_LOADING, payload: '' });
            callback();
        }).catch(error => {
            console.log(error);
            dispatch({ type: SET_LOADING, payload: '' });
        });
    } catch (err) {
        console.log(err);
        dispatch({ type: SET_LOADING, payload: '' });
    }
};

export const { Provider, Context } = createDataContext(
    changerReducer,
    { saveFormOne, saveFormTwo, chooseQuote },
    { loading: '' },
);