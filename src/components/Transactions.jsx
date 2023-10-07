import css from './Transactions.styles.module.css'

export const Transactions = ({ items }) => {
  return (
    <table className={css.transactionTable}>
      <thead className={css.tableHead}>
        <tr>
          <th className={css.tableHeadItem}>Type</th>
          <th className={css.tableHeadItem}>Amount</th>
          <th className={css.tableHeadItem}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.transactionTableBody}>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.transactionTableBodyTr} key={id}>
              <td className={css.transactionTableBodyItem}>{type}</td>
              <td className={css.transactionTableBodyItem}>{amount}</td>
              <td className={css.transactionTableBodyItem}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};