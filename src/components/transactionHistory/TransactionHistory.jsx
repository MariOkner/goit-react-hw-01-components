import PropTypes from 'prop-types';
import {
  TransactionHistoryTable,
  TableHead,
  TableItem,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <thead>
        <TableHead>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TableHead>
      </thead>

      <tbody>
        {items.map(item => (
          <TableItem key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </TableItem>
        ))}
      </tbody>
    </TransactionHistoryTable>
  );
};

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
