const ExpenseFilter = (props) => {
  const filteredExpensesHandler = (e) => {
    props.onFilter(e.target.value);
  };
  return (
    <div>
      <h3>Select year</h3>
      <select onChange={filteredExpensesHandler}>
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
