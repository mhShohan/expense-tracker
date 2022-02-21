import SingleTransaction from './SingleTransaction';

export default function Expense({ expenses }) {
  const totalExpense = expenses
    .map((a) => a.amount)
    .reduce((acc, val) => (acc += val), 0);

  return (
    <>
      <h1>
        Total Expense: <span>{totalExpense} Taka</span>
      </h1>
      {expenses.length <= 0 && (
        <p style={{ textAlign: 'center', marginTop: '10px' }}>
          No Expense Found!
        </p>
      )}
      {expenses.map((expense) => (
        <SingleTransaction key={expense.id} transaction={expense} />
      ))}
    </>
  );
}
