const ExpenseForm = () => {
  const onChangeHandler = (e) => {
    console.log(e.target.value)
  };
  return (
    <div>
      <h1>Expense Form</h1>
      <form onChange={onChangeHandler}>
        <div>
          <label>Title</label>
          <input type="text" placeholder="enter a atitle" />
        </div>
        <div>
          <label>Amount</label>
          <input type="text" placeholder="enter a atitle" />
        </div>
        <div>
          <label>Date</label>
          <input type="text" placeholder="enter a atitle" />
        </div>
        <button>Add expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
