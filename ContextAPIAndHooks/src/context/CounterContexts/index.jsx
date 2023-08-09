import P from 'prop-types';
import { createContext, useContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const initialState = {
  counter: 0,
  loading: false,
};

const Context = createContext();

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useState(initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

CounterContextProvider.propTypes = {
  children: P.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCounterContext = () => {
  const context = useContext(Context);

  if (typeof context === 'undefined') {
    throw new Error(
      'You have to use useCounterContext inside <CounterContextProvider />'
    );
  }

  return [...context];
};
