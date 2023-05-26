import "./ExpenseForm.css";

import React, { useState } from "react";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const amountHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const dateHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  return (
    <div>
      <h1>Expense Form</h1>
      <div className="new-expense__controls">
        <form>
          <div className="new-expense__control">
            <label>Title</label>
            <input
              onChange={titleHandler}
              type="text"
              placeholder="enter a atitle"
            />
          </div>
          <div className="new-expense__control">
            <label onChange={amountHandler}>Amount</label>
            <input type="text" placeholder="enter a atitle" />
          </div>
          <div className="new-expense__control">
            <label onChange={dateHandler}>Date</label>
            <input type="text" placeholder="enter a atitle" />
          </div>
          <div className="new-expense__actions">
            <button>Add expense</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;
