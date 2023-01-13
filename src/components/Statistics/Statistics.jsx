import PropTypes from 'prop-types';

export const Statistics = ({ stat, total, positivePercentage }) => (
  <>
    <ul>
      {Object.entries(stat).map(([key, value]) => (
        <li key={key}>
          {key}: {value}
        </li>
      ))}
      <li>Total: {total}</li>
      <li>
        Positive feedback:
        {total && positivePercentage}%
      </li>
    </ul>
  </>
);

Statistics.propTypes = {
  stat: PropTypes.shape(PropTypes.number.isRequired).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
