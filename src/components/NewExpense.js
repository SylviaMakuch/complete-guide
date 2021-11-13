import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";
import "./ExpenseForm.css";
import { useState } from "react";


const NewExpense = (props) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
    const saveDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
    props.onAddExpense(expenseData);
    };

  return (
    <div>
      {!isFormOpen && <button type="button" onClick={() => setIsFormOpen(!isFormOpen)}> Add Expense </button>}
      {isFormOpen && <ExpenseForm onSaveData={saveDataHandler} onCancel={() => setIsFormOpen(false)}/>}
    </div>
  );
};
export default NewExpense;
