import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
// import { reducer as reduxAsyncConnect } from 'redux-async-connect';
// import { reducer as form } from 'redux-form';
import timeListReducer from './timeListReducer';

const combineReducer = combineReducers({
    routing: routerReducer,
    // reduxAsyncConnect,
    // form,
    timeListReducer,
});

export default combineReducer;
