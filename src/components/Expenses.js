import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";

export const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("");

  return (
    <div className="expenses">
      <ExpensesFilter onChange={(e) => setFilterYear(e)} />
      {props.items.map(({ id, title, amount, date }, index) => {
        return (
          <ExpenseItem id={id} title={title} amount={amount} date={date} key={index} />
        );
      })}
    </div>
  );
};
