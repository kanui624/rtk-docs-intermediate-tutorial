import { connect } from 'react-redux';
// import { setVisibilityFilter } from '../actions';
import { setVisibilityFilter } from '../features/filters/filtersSlice';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
// });

const mapDispatchToProps = { setVisibilityFilter };

export default connect(mapStateToProps, mapDispatchToProps)(Link);
