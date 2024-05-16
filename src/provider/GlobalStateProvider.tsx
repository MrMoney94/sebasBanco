import React, {useReducer, useEffect} from 'react';
import {GlobalStateContext, reducer} from '../reducer/GlobalState';
import {GetProducts} from '../core';
import {PRODUCTS} from '../reducer/types';

export const GlobalStateProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    isLoading: true,
  });

  useEffect(() => {
    (async () => {
      const data = await GetProducts();
      dispatch({
        type: PRODUCTS,
        data: {products: data},
      });
    })();
  }, []);

  return (
    <GlobalStateContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalStateContext.Provider>
  );
};
