import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";

const NewExpense = (props) => {
    const saveDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
    props.onAddExpense(expenseData);
    };
  return (
    <div>
      <ExpenseForm onSaveData={saveDataHandler}/>
    </div>
  );
};
export default NewExpense;
