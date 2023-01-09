import PropTypes from 'prop-types';

export default function DataListItem({ item }) {
  return (
    <span>{item.value}</span>
  );
}

DataListItem.propTypes = {
  item: PropTypes.shape({
    value: PropTypes.string,
  })
}.isRequired;
