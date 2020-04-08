import React, { useContext } from "react";
import ExpenseTransaction from "./ExpenseTransaction";
import { GlobalContext } from "./Context/Globalstate";
export default function Expenselist() {
  const { expenseTransactions } = useContext(GlobalContext);
  return (
    <div className='transactions transactions-expense'>
      <h2>Transaction History</h2>
      <ul className='transaction-list'>
        {expenseTransactions.map((expenseTransaction) => (
          <ExpenseTransaction
            key={expenseTransaction.id}
            expenseTransaction={expenseTransaction}></ExpenseTransaction>
        ))}
      </ul>
    </div>
  );
}
