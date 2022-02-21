import SingleTransaction from './SingleTransaction';

export default function Income({ incomes }) {
  const totalIncome = incomes
    .map((a) => a.amount)
    .reduce((acc, val) => (acc += val), 0);

  return (
    <>
      <h1>
        Total Income: <span>{totalIncome} Taka</span>
      </h1>
      {incomes.length <= 0 && (
        <p style={{ textAlign: 'center', marginTop: '10px' }}>
          No Incomes Found!
        </p>
      )}
      {incomes.map((income) => (
        <SingleTransaction key={income.id} transaction={income} />
      ))}
    </>
  );
}
