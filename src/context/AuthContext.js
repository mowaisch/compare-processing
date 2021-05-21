import createDataContext from './createDataContext';
import { SET_NAVIGATION_FLOW } from '../values/strings';


const authReducer = (state, action) => {
    switch (action.type) {
        case SET_NAVIGATION_FLOW:
            return { ...state, routeFlow: action.payload }
        default:
            return state;
    }
};

const setRoute = dispatch => (route) => {
    console.log(route);
    dispatch({ type: SET_NAVIGATION_FLOW, payload: route });
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { setRoute, },
    { routeFlow: '', }
);