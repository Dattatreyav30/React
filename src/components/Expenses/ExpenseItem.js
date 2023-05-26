import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setTitle("updated");
  };

  const updateAmountHandler = (props) => {
    setAmount("100$");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <ExpenseDetails
          title={title}
          location={props.location}
          amount={amount}
        />
      </div>
      <button onClick={clickHandler}>change title</button>
      <button onClick={updateAmountHandler}>update Amount</button>
    </Card>
  );
};
export default ExpenseItem;
