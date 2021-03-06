import React from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducer } from './reducers';
import App from './App';

const store = createStore(reducer, {}, compose(applyMiddleware(thunk)));
const root = createRoot(
  document.getElementById("root")
);
root.render(<React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
</React.StrictMode>);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

