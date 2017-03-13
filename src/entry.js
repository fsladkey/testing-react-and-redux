import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import AppContainer from './components/AppContainer';

const app = (
  <Provider store={ store }>
    <AppContainer />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
