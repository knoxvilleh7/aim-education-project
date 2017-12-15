import React from 'react';
import ReactDOM from 'react-dom';
import { createHashHistory } from 'history';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import httpClient from './httpClient';
import configureStore from './redux/configureStore';
import { App } from './components/App/App';
import '../css/index.css';

const client = new httpClient();
const hashHistory = createHashHistory();
const store = configureStore(hashHistory, client);
// const history = syncHistoryWithStore(hashHistory, store);

export const redirect = (path) => {
    hashHistory.push(path);
};

ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Provider store={store}>
            <ConnectedRouter history={hashHistory}>
                <div>
                    <App/>
                </div>
            </ConnectedRouter>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);




