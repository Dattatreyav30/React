import ExpenseItem from "../src/components/Expenses/ExpenseItem";
import Card from "../src/components/UI/Card";

const App = () => {
  const expenses = [
    {
      id: 1,
      date: new Date(),
      title: "fruits",
      amount: 200,
      location: "kashmir",
    },
    {
      id: 2,
      date: new Date(),
      title: "chicken",
      amount: 300,
      location: "butcher shop",
    },
    {
      id: 3,
      date: new Date(),
      title: "travel",
      amount: 5000,
      location: "chikkamagalur",
    },
    {
      id: 4,
      date: new Date(),
      title: "movies",
      amount: 300,
      location: "SS mall",
    },
  ];
  return (
    <Card>
      <h2>Let's get started!</h2>
      {expenses.map((expense) => {
        return (
          <ExpenseItem
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
