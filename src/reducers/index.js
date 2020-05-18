/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import { combineReducers } from "redux";
// import todos from './todos';
// import visibilityFilter from './visibilityFilter';
import AuthReducer from './AuthReducer';
export default combineReducers({
    auth: AuthReducer,
});
