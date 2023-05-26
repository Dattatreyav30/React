import "./ExpenseForm.css";

import React, { useState } from "react";

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

//   const [userInput, setUserInput] = useState({
//     enteredTitle: "",
//     enteredAmount: "",
//     enteredDate: "",
//   });

  const submitFormHandler = (e) => {
    e.preventDefault()
    const expenseObject = {
      enteredTitle: enteredTitle,
      enteredAmount: enteredAmount,
      enteredDate: enteredDate,
    };
    console.log(expenseObject);
  };
  const titleHandler = (e) => {
    setEnteredTitle(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // });
    // setUserInput((previousState) => {
    //   return {
    //     ...previousState,
    //     enteredTitle: e.target.value,
    //   };
    // });
  };

  const amountHandler = (e) => {
    setEnteredAmount(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: e.target.value,
    // });
    // setUserInput((previousState) => {
    //   return {
    //     ...previousState,
    //     enteredAmount: e.target.value,
    //   };
    // });
  };

  const dateHandler = (e) => {
    setEnteredDate(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: e.target.value,
    // });
    // setUserInput((previousState) => {
    //   return {
    //     ...previousState,
    //     enteredDate: e.target.value,
    //   };
    // });
  };
  return (
    <div>
      <h1>Expense Form</h1>
      <div className="new-expense__controls">
        <form method="post" onSubmit={submitFormHandler}>
          <div className="new-expense__control">
            <label>Title</label>
            <input
              onChange={titleHandler}
              type="text"
              placeholder="enter a atitle"
            />
          </div>
          <div className="new-expense__control">
            <label >Amount</label>
            <input type="number" placeholder="enter a amount" onChange={amountHandler} />
          </div>
          <div className="new-expense__control">
            <label >Date</label>
            <input type="date" placeholder="enter a date" onChange={dateHandler} />
          </div>
          <div className="new-expense__actions">
            <button type="submit">Add expense</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;