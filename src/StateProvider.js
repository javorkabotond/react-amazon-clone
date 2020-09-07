import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reduce, initalState, children}) => (
  <StateContext.Provider value={useReducer(reduce, initalState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);