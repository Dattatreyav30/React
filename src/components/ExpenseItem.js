function ExpenseItem() {
  return (
    <div className="expense-item">
        <h2>Expense Items</h2>
        <table>
            <tr>
                <td>items</td>
                <td>cost</td>
            </tr>
            <tr>
                <td>FOOD</td>
                <td>Rs 10</td>
            </tr>
            <tr>
                <td>petrol</td>
                <td>Rs 100 </td>
            </tr>
            <tr>
                <td>movies</td>
                <td>Rs 200</td>
            </tr>
        </table>
    </div>
  )
}
export default ExpenseItem