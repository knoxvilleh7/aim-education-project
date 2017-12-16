import React from 'react';
import ReactDOM from 'react-dom';
import { createHashHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import '../css/index.css';
import { MainPage } from './components/MainPage/MainPage';

const hashHistory = createHashHistory();
const store = configureStore(hashHistory);

ReactDOM.render(
    <Provider store={store}>
        <MainPage history={hashHistory}/>
    </Provider>,
    document.getElementById('root')
);




