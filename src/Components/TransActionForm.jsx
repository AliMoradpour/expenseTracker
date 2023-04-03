import { useState } from "react";

const TransActionForm = ({ addTransaction, setIsShow }) => {
  const [formValues, setFormValues] = useState({
    type: "expense",
    amount: "",
    desc: "",
  });

  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(formValues);
    setIsShow(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="TransactionInput">
        <input
          type="number"
          value={formValues.amount}
          placeholder="Amount"
          name="amount"
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Description"
          value={formValues.desc}
          name="desc"
          onChange={changeHandler}
        />
      </div>
      <div className="TransactionRadio">
        <input
          id="expense"
          type="radio"
          name="type"
          value="expense"
          checked={formValues.type === "expense"}
          onChange={changeHandler}
        />
        <label htmlFor="expense">Expense</label>
        <input
          id="income"
          type="radio"
          name="type"
          value="income"
          checked={formValues.type === "income"}
          onChange={changeHandler}
        />
        <label htmlFor="income">Income</label>
      </div>
      <button className="btn primary" type="submit">
        Add Transaction
      </button>
    </form>
  );
};

export default TransActionForm;
