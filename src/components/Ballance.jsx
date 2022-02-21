import { useContext } from 'react';
import { TransactionContext } from '../store/Transaction';

export default function Ballance() {
  const { state } = useContext(TransactionContext);

  const totalIncome = state.filter((trns) => trns.transactionType === 'Income');
  const totalExpense = state.filter(
    (trns) => trns.transactionType === 'Expense'
  );

  const totalIncomeArr = totalIncome.map((a) => a.amount);
  const totalExpenseArr = totalExpense.map((a) => a.amount);

  const totalAmount =
    totalIncomeArr.reduce((acc, val) => (acc += val), 0) -
    totalExpenseArr.reduce((acc, val) => (acc += val), 0);

  return (
    <div className="Ballance">
      <h2>Your Total Ballance</h2>
      <h3>{totalAmount} taka</h3>
    </div>
  );
}
