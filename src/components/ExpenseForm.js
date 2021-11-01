import "./ExpenseForm.css";
import React from "react";

const ExpenseForm = () => {
  const titleChangeHandler = (event) =>{
    console.log(event.target.value);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" />
        </div>
      </div>
      <div className="new-expense__actions">
          <button type="submit">Add !</button>
      </div>
    </form>
  );
};
export default ExpenseForm;