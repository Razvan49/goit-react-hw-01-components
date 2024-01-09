import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={style.transaction__history}>
      <thead className={style.thead}>
        <tr>
          <th className={style.th}>Type</th>
          <th className={style.th}>Amount</th>
          <th className={style.th}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => {
          return (
            <tr className={style.tr} key={item.id}>
              <td className={style.td}>{item.type}</td>
              <td className={style.td}>{item.amount}</td>
              <td className={style.td}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
