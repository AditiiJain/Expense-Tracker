import React, { useState } from "react";
export const TransactionContext = React.createContext();

const TransactionProvider = ({ children }) => {
  console.log(localStorage.getItem("transactions"));
  const [transactions, setTransactions] = useState(() => {
    if (JSON.parse(localStorage.getItem("transactions")))
      return JSON.parse(localStorage.getItem("transactions"));
    else return [];
  });
  return (
    <TransactionContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
