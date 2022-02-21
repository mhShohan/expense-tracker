import { useContext } from 'react';
import { TransactionContext } from '../store/Transaction';

export default function SingleTransaction({ transaction }) {
  const { deleteTransaction } = useContext(TransactionContext);
  const date = new Date(transaction.date).toLocaleDateString('fr-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return (
    <div className="SingleTransaction">
      <div className="info">
        <h4>{transaction.title}</h4>
        <p>{date}</p>
      </div>
      <div className="money">
        <h4>{transaction.amount} taka</h4>
      </div>
      <div className="action">
        <button onClick={() => deleteTransaction(transaction.id)}>X</button>
      </div>
    </div>
  );
}
