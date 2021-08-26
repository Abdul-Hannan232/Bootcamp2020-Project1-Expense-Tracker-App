import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    transaction: [
        // {id: 1, description: "Income 1", transactionAmount: 1000},
        // {id: 2, description: "Expense 1", transactionAmount: -50},
        // {id: 3, description: "Income 2", transactionAmount: 300},
        // {id: 4, description: "Expense 2", transactionAmount: -100}
    ]
}

const GlobalContext = createContext(initialState);

const GlobalProvider = ( {children} ) => {
    const [state, disptach] = useReducer(AppReducer, initialState);

    const addTransaction = (obj) => {
        disptach({
            type: "ADD",
            payload: obj
        })
    }

    const delTransaction = (id) => {
        disptach({
            type: "DEL",
            payload: id
        })
    }

    return (
        <GlobalContext.Provider value={{
            transaction: state.transaction,
            addTransaction,
            delTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;
export { GlobalContext };