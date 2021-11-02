import ExpenseItem from './ExpenseItem';
import './Expenses.css'; 

export const Expenses = props =>{
  return (
    <div className="expenses">
      {props.items.map(({id, title,  amount,  date}, index) => {
        return <ExpenseItem id={id} title={title} amount={amount} date={date} />
      })
    }    
    </div>
  );
}
