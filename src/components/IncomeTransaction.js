import React, { useContext } from "react";
import { GloabalContext, GlobalContext } from "./Context/Globalstate";
export default function IncomeTransaction({ incomeTransaction }) {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className='transaction'>
      <span className='transaction-text'>{incomeTransaction.incomeText}</span>
      <span className='transaction-amount'>
        {" "}
        {incomeTransaction.incomeAmount}/=
      </span>
      <button
        className='delete-btn'
        onClick={() => deleteTransaction(incomeTransaction.id)}>
        <i className='fa fa-trash'></i>
      </button>
    </li>
  );
}
