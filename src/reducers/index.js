import isLoggedInReducer from './isLogged';
import menuCrudReducer from "./menuCRUD";
import { combineReducers } from 'redux';

const routeReducers = combineReducers({isLoggedInReducer, menuCrudReducer});

export default routeReducers;