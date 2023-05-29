import ExpenseItem from "../src/components/Expenses/ExpenseItem";
import Card from "../src/components/UI/Card";
import ExpenseForm from "../src/components/Expenses/EpenseForm";
import React, { useState } from "react";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      date: new Date("2021 02 23"),
      title: "fruits",
      amount: 200,
      location: "kashmir",
    },
    {
      id: 2,
      date: new Date("2021 02 23"),
      title: "chicken",
      amount: 300,
      location: "butcher shop",
    },
    {
      id: 3,
      date: new Date("2021 02 23"),
      title: "travel",
      amount: 5000,
      location: "chikkamagalur",
    },
    {
      id: 4,
      date: new Date("2021 02 23"),
      title: "movies",
      amount: 300,
      location: "SS mall",
    },
  ]);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    setExpenses((prevExpenses) => [expenseData, ...prevExpenses]);
  };

  return (
    <Card>
      <h2>Let's get started!</h2>
      <ExpenseForm onSave={onSaveExpenseDataHandler} />
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
          />
        );
      })}
    </Card>
  );
};
// jsx syntax
export default App;
