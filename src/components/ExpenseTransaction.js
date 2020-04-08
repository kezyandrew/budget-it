import React, { useState, useContext } from "react";
import { GloabalContext, GlobalContext } from "./Context/Globalstate";

export default function ExpenseTransaction({ expenseTransaction }) {
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li className='transaction'>
      <span className='transaction-text'>{expenseTransaction.expenseText}</span>
      <span className='transaction-amount'>
        {" "}
        {expenseTransaction.expenseAmount}/=
      </span>
      <button
        className='delete-btn'
        onClick={() => deleteTransaction(expenseTransaction.id)}>
        <i className='fa fa-trash'></i>
      </button>
    </li>
  );
}
