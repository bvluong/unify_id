import { connect } from 'react-redux';
import { receiveFilter } from '../../actions/filter_actions';
import MainNav from './main_nav';

const mapStateToProps = ( { currentFilter }) => ({
  currentFilter
});

const mapDispatchToProps = (dispatch) => ({
  receiveFilter: (filter) => dispatch(receiveFilter(filter))
});

export default connect(mapStateToProps,mapDispatchToProps)(MainNav);
