import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import * as reduxbackend from "./redux/redux-backend";

ReactDOM.render(
    <Provider store={reduxbackend.store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
