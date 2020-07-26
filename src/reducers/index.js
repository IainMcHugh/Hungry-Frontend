import isLoggedInReducer from './isLogged';
import { combineReducers } from 'redux';

const routeReducers = combineReducers({isLoggedInReducer});

export default routeReducers;