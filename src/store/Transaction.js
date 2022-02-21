import { createContext, useReducer } from 'react';

export const TransactionContext = createContext();

const initialState = [];

export default function TransactionProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  ///action
  const addTransaction = (transaction) => {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
  };

  const deleteTransaction = (id) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };

  return (
    <TransactionContext.Provider
      value={{ addTransaction, deleteTransaction, state }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

//reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return [...state, action.payload];

    case 'DELETE_TRANSACTION':
      return state.filter((trns) => trns.id !== action.payload);

    default:
      return state;
  }
};
