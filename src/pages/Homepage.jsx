import React from 'react';
import Ballance from '../components/Ballance';
import Heading from '../components/Heading';
import TrackerForm from '../components/TrackerForm';
import Transactions from '../components/Transactions';
import TransactionProvider from '../store/Transaction';

export default function Homepage() {
  return (
    <TransactionProvider>
      <div className="container">
        <Heading />
        <div className="ballanceContainer">
          <Ballance />
          <TrackerForm />
        </div>
        <Transactions />
      </div>
    </TransactionProvider>
  );
}
