import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from '@testing-library/react';

import reducer from '../reducers';

export const getStore = (initialState) => {
  if (!initialState) return createStore(reducer);
  return createStore(reducer, initialState);
};

export const renderWithStore = (component, initialState) => {
  const store = getStore(initialState);

  return {
    ...render(
      <Provider store={ store }>
        {component}
      </Provider>,
    ),
    store,
  };
};
