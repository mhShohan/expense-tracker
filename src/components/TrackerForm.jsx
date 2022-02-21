import React, { useState, useContext } from 'react';
import { TransactionContext } from '../store/Transaction';

export default function TrackerForm() {
  const [submitErr, setSubmitErr] = useState('');
  const [transaction, setTransaction] = useState({
    title: '',
    amount: '',
    transactionType: '',
  });
  const { addTransaction } = useContext(TransactionContext);

  const handleChange = (event) => {
    setTransaction({
      ...transaction,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      transaction.title &&
      transaction.amount &&
      transaction.transactionType
    ) {
      // all logic after submitting
      const newTransaction = {
        id: Math.floor(Math.random() * 175789687146546216).toString(),
        date: Date.now(),
        ...transaction,
        amount: Number(transaction.amount),
      };
      addTransaction(newTransaction);
      setSubmitErr('');
      setTransaction({
        title: '',
        amount: '',
        transactionType: '',
      });
    } else {
      setSubmitErr('Please Provide All Fields...');
    }
  };
  return (
    <div className="form-container">
      <form id="form" onSubmit={handleSubmit}>
        <div className="from-group">
          <input
            type="text"
            name="title"
            value={transaction.title}
            onChange={handleChange}
            className="form-control"
            placeholder="Your Income/Expense*"
          />
        </div>
        <div className="from-group">
          <input
            type="number"
            name="amount"
            onChange={handleChange}
            value={transaction.amount}
            className="form-control"
            placeholder="Amount (Taka)*"
          />
        </div>
        <div className="from-group">
          <select
            name="transactionType"
            onChange={handleChange}
            value={transaction.transactionType}
            className="form-control"
          >
            <option value="">Select Income/Expense*</option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>
        <div>
          <h4 className="error">{submitErr}</h4>
        </div>
        <div className="from-group">
          <input
            type="submit"
            value="Add Transaction"
            className="form-control submit"
            placeholder="Amount"
          />
        </div>
      </form>
    </div>
  );
}
