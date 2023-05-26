import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log("clicked!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <ExpenseDetails
          title={props.title}
          location={props.location}
          amount={props.amount}
        />
      </div>
      <button onClick={clickHandler}>change title</button>
    </Card>
  );
};
export default ExpenseItem;
