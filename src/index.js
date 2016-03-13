import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

ReactDOM.render(
    <Provider store="createStoreWithMiddleware(reducer)}">
        <App />
    </Provider>,
    document.querySelector('#app'));