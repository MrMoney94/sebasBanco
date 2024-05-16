import React, {createContext} from 'react';
import {PRODUCTS} from './types';
import {State, Action} from '../interface';

export const GlobalStateContext = createContext(
  {} as [State, React.Dispatch<Action>],
);

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case PRODUCTS:
      return {
        ...state,
        products: action.data.products,
        isLoading: false,
      };
    default:
      return state;
  }
}
