import PropTypes from 'prop-types';
import {
  TransactionTable,
  TransactionHead,
  TransactionBody,
  TransactionType,
} from 'components/TransactionHistory/TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TransactionHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TransactionHead>
      <TransactionBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <TransactionType>{type}</TransactionType>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </TransactionBody>
    </TransactionTable>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
