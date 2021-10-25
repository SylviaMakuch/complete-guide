import logo from "./wave.svg";
import "./App.css";
import ExpenseItem from "./components/Expenseitem";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {" "}
        Hello is it me you're looking for?
        <img src={logo} className="App-logo" alt="logo" />
       <ExpenseItem></ExpenseItem>
      </header>
    </div>
  );
}

export default App;
