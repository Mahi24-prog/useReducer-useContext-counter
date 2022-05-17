import { createContext, useContext, useReducer } from "react";
import { counterReducer } from "./counterReducer";

const counterContext = createContext(null);

const useCounter = () => useContext(counterContext);

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, { counter: 0 });
  return (
    <counterContext.Provider value={{ state, dispatch }}>
      {children}
    </counterContext.Provider>
  );
};

export { useCounter, CounterProvider };
