import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Redux / React-Redux
import { createrStore, applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

// Redux-thunk
import thunk from 'redux-thunk';

// Reducer
import reducers from './Reducer/RootReducer';

// Redux Store
let store = createStore (reducers, applyMiddleware(thunk))

ReactDOM.render(
    // Redux: Store provider
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
