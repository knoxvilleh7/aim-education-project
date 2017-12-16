import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
// import { reducer as form } from 'redux-form';
import timeListReducer from './timeListReducer';
import themeReducer from './themeReducer';

const combineReducer = combineReducers({
    routing: routerReducer,
    // form,
    timeListReducer,
    themeReducer
});

export default combineReducer;
