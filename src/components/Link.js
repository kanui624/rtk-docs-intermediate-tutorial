import React from 'react';
import PropTypes from 'prop-types';

// const Link = ({ active, children, onClick }) => (
const Link = ({ active, children, setVisibilityFilter, filter }) => (
  <button
    // onClick={onClick}
    onClick={() => setVisibilityFilter(filter)}
    disabled={active}
    style={{
      marginLeft: '4px',
    }}
  >
    {children}
  </button>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  // onClick: PropTypes.func.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Link;
