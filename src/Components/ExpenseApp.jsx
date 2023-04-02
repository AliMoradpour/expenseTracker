import { useState } from "react";
import TransActionsComponent from "./TransActionsComponent";

const ExpenseApp = () => {
  const [expens, setExpens] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);

  return (
    <section className="container">
      <div className="topSection">
        <p>Balance is : {income - expens}</p>
        <button>Add</button>
      </div>
      <div className="resaultSection">
        <div>Expense {expens}</div>
        <div>Income {income}</div>
      </div>
      <TransActionsComponent transactions={transactions}/>
    </section>
  );
};

export default ExpenseApp;
