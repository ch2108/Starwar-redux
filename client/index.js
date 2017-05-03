import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Container from './components/Container';
import initStore from './store'

let store = initStore();

render(
  <Provider store={store}>
    <Container />
  </Provider>
  ,
  document.getElementById('root')
)
