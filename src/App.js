import ExpenseItem from "../src/components/Expenses/ExpenseItem";
import Card from "../src/components/UI/Card";
import ExpenseForm from "../src/components/Expenses/EpenseForm";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";
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
      date: new Date("2023 02 23"),
      title: "travel",
      amount: 5000,
      location: "chikkamagalur",
    },
    {
      id: 4,
      date: new Date("2022 02 23"),
      title: "movies",
      amount: 300,
      location: "SS mall",
    },
  ]);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      date: new Date(enteredExpenseData.date),
      id: Math.random().toString(),
    };
    setExpenses((prevExpenses) => [expenseData, ...prevExpenses]);
    setIsEditing(false);
  };

  const [filteredYear, setFilterdYear] = useState("2023");

  const filteredChangeHandler = (newYear) => {
    setFilterdYear(newYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear.toString();
  });

  let expenseContent = <p>no expense found</p>;

  if (filteredExpenses.length === 1) {
    expenseContent = filteredExpenses.map((expense) => {
      return (
        <div>
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
          />
          <p>there is only 1 expense please add more</p>
        </div>
      );
    });
  } else {
    expenseContent = filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        />
      );
    });
  }

  const [isEditing, setIsEditing] = useState(false);

  const isEditingHandler = () => {
    setIsEditing(true);
  };

  const onCancelHandler = () => {
    setIsEditing(false);
  };
  return (
    <Card>
      <h2>Let's get started!</h2>
      {!isEditing && <button onClick={isEditingHandler}>Add Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSave={onSaveExpenseDataHandler}
          onCancel={onCancelHandler}
        />
      )}
      <ExpenseFilter
        onSelected={filteredYear}
        onChangeHandler={filteredChangeHandler}
      />
      {expenseContent}
    </Card>
  );
};
// jsx syntax
export default App;
