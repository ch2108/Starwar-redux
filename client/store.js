import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware';

import reducer from './reducers';

export default function initStore(initState) {
  let middlewares = [
    createLogger({
      collapsed: true
    }),
    promiseMiddleware()
  ];

  const store = createStore(
    reducer,
    initState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  return store;
}
