import website2 from '../api/website2';
import createDataContext from './createDataContext';
import { GET_COMPANIES, SET_CALCULATION_TO_LIST, SET_EFFECTIVE_RATE } from '../values/strings';

const changerReducer = (state, action) => {
    console.log(action.payload)
    switch (action.type) {
        case GET_COMPANIES:
            return { ...state, companiesList: action.payload }
        case SET_CALCULATION_TO_LIST:
            return { ...state, calculatedList: action.payload }
        case SET_EFFECTIVE_RATE:
            return { ...state, effective_rate: action.payload }
        default:
            return state;
    }
};

const getCompanies = dispatch => async () => {
    try {
        console.log('going');
        const response = await website2.get('get-companies').then(response => {
            // console.log(response.data);
            dispatch({ type: GET_COMPANIES, payload: response.data });
        }).catch(error => {
            console.log(error);
        });
    } catch (err) {
        console.log(err);
    }
};

const setCalculation = dispatch => async (companies, paying_now, monthly_volume) => {
    try {
        let value = paying_now / monthly_volume * 100;
        let effective_rate = Number.parseFloat(value).toPrecision(3);
        dispatch({ type: SET_EFFECTIVE_RATE, payload: effective_rate });
        let list = [];
        // this.effective_rate = value
        for (let i = 0; i < companies.length; i++) {
            let effective_rate = value >= 1.75 ? value - companies[i].cut_percentage : 'No Quotes For You';
            let monthly_volume = value >= 1.75 ? 65000 * (effective_rate / 100) : 'No Quotes For You';
            let monthly_savings = value >= 1.75 ? 1139 - monthly_volume : 'No Quotes For You';
            let yearly_saving = value >= 1.75 ? monthly_savings * 12 : 'No Quotes For You';
            let year2saving = value >= 1.75 ? monthly_savings * 24 : 'No Quotes For You';
            let year3saving = value >= 1.75 ? monthly_savings * 36 : 'No Quotes For You';
            // console.log(value,  effective_rate, monthly_volume, monthly_savings, yearly_saving, year2saving)
            let array = {}
            array['id'] = companies[i].id
            array['name'] = companies[i].name
            array['effective_rate'] = Number.parseFloat(effective_rate).toPrecision(3)
            array['monthly_volume'] = monthly_volume.toFixed(2)
            array['monthly_savings'] = monthly_savings.toFixed(2)
            array['yearly_saving'] = yearly_saving.toFixed(2)
            array['year2saving'] = year2saving.toFixed(2)
            array['year3saving'] = year3saving.toFixed(2)
            array['list'] = companies[i].list
            // this.company_data.push(array)
            list.push(array);
        }
        //setCalculation(list);
        dispatch({ type: SET_CALCULATION_TO_LIST, payload: list });
        console.log(list);
    } catch (err) {
        console.log(err);
    }
};

export const { Provider, Context } = createDataContext(
    changerReducer,
    { getCompanies, setCalculation },
    { companiesList: [], calculatedList: [], effective_rate: '' },
);