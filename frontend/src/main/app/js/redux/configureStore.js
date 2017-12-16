import { applyMiddleware, createStore } from 'redux';
import reducer from './reducers/reducer';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(history) {
    const middlewares = [ routerMiddleware(history) ];
    return createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));
}
