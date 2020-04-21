import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import App from './components/container/App/App';
import rootReducer from './reducers';
import rootSaga from './sagas';
import './styles/index.scss';

// check redux devtools in window object and apply as a middleware.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create the instance of create saga Middleware.
const sagaMiddleware = createSagaMiddleware();

// create the store with create store function and pass the same in provider.
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

// Run the Saga Middleware as a watcher to check the rootSaga file.
sagaMiddleware.run(rootSaga);

// Render App component and pass store to each component with Provider
ReactDOM.render(
    <Provider store={ store}>
        <App />
    </Provider>,
    document.getElementById('root')
)