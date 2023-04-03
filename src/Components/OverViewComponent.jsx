import { useState } from "react";
import TransActionForm from "./TransActionForm";

const OverViewComponent = ({ income, expense, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <section className="firstSection">
      <div className="topSection">
        <p>
          Balance is :{" "}
          <span
            style={income > expense ? { color: "green" } : { color: "red" }}>
            {income - expense}
          </span>
        </p>
        <button
          onClick={() => setIsShow(!isShow)}
          className={isShow ? "btn cancel" : "btn"}>
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>
      {isShow && (
        <TransActionForm
          addTransaction={addTransaction}
          setIsShow={setIsShow}
        />
      )}
      <div className="resaultSection">
        <div className="expenseBox">
          Expense <span style={{ color: "red" }}>{expense} $</span>
        </div>
        <div className="expenseBox">
          Income <span>{income} $</span>
        </div>
      </div>
    </section>
  );
};

export default OverViewComponent;
