import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <ExpenseDetails
          title={props.title}
          location={props.location}
          amount={props.amount}
        />
      </div>
    </div>
  );
}
export default ExpenseItem;
