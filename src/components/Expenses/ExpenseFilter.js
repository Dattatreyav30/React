const ExpenseFilter = (props) => {
  const filteredExpensesHandler = (e) => {
    props.onChangeHandler(e.target.value);
  };
  return (
    <div>
      <h3>Select year</h3>
      <select value={props.onSelected} onChange={filteredExpensesHandler}>
        <option>select the year</option>
        <option>2021</option>
        <option>2022</option>
        <option>2023</option>
        <option>2024</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
