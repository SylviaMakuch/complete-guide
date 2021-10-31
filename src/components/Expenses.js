import ExpenseItem from './ExpenseItem';
import './Expenses.css'; 

export const Expenses = props =>{
  return (
    <div className="expenses">
      {props.items.map(({ title,  amount,  date}, index) => {
        return <ExpenseItem title={title} amount={amount} date={date} />
      })
    }    
    </div>
  );
}
