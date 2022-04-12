import React, { FC } from "react";
import { useContext } from "react";
import {createContext, useReducer, Dispatch} from "react";
import reducer, {initialState, initialStateType, TodoActions} from "./reducer";



const AppContext = createContext<{
    state: initialStateType;
    dispatch: Dispatch<TodoActions>;
  }>({
    state: initialState,
    dispatch: () => null
  });

export const ContextProvider:FC<React.ReactNode> = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

export const UseAppContext = () => useContext(AppContext)