import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';
import thunk from "redux-thunk";

export const history = createBrowserHistory();

const middleware = [
    thunk,
    routerMiddleware(history),
];

export default function configureStore(preloadedState) {
    return createStore(
        createRootReducer(history),
        preloadedState,
        composeWithDevTools(
            applyMiddleware(
                ...middleware
            ),
        ),
    )
}