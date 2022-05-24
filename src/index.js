import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import { rootReducer } from './app/store';
import { composeWithDevTools } from 'redux-devtools-extension';

const container = document.getElementById('root');
const store = createStore(rootReducer, composeWithDevTools())
const root = createRoot(container);


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

