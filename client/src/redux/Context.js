import { createContext, useReducer } from "react";
import Reducer from "./Reducer";
import React, { useEffect } from "react";
export const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")),
  isFetching: false,
  iserror: false,
};

export const context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state]);

  return (
    <context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        iserror: state.iserror,
        dispatch,
      }}
    >
      {children}
    </context.Provider>
  );
};
