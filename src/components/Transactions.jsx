import { useContext } from 'react';
import Expense from './Expense';
import Income from './Income';
import { TransactionContext } from '../store/Transaction';

export default function Transactions() {
  const { state } = useContext(TransactionContext);

  const incomes = state.filter((trns) => trns.transactionType === 'Income');
  const expenses = state.filter((trns) => trns.transactionType === 'Expense');

  return (
    <div className="transactions">
      <div className="income">
        <Income incomes={incomes} />
      </div>
      <div className="expense">
        <Expense expenses={expenses} />
      </div>
    </div>
  );
}
