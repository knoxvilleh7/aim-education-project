import { applyMiddleware, createStore } from 'redux';
import reducer from './reducers/reducer';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(history, client) {
    const middlewares = [ routerMiddleware(history) ];
    const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));
    client.getStore = () => store;
    return store;
}
