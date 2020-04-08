import React, { useContext } from "react";
import { GlobalContext } from "./Context/Globalstate";
import incomeTransaction from "./IncomeTransaction";
import IncomeTransaction from "./IncomeTransaction";

export default function Incomelist() {
  const { incomeTransactions } = useContext(GlobalContext);
  console.log(incomeTransactions);
  return (
    <div className='transactions transactions-income'>
      <h2>Transaction History</h2>
      <ul className='transaction-list'>
        {incomeTransactions.map((incomeTransaction) => (
          <IncomeTransaction
            key={incomeTransaction.id}
            incomeTransaction={incomeTransaction}></IncomeTransaction>
        ))}
      </ul>
    </div>
  );
}
