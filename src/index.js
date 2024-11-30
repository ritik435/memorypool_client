import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux";
import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import './index.css'

import App from "./App.js"

const store = createStore(reducers, compose(applyMiddleware(thunk)))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);


