import { connect } from 'react-redux';
import { removeCred } from '../../actions/credential_actions';
import SearchBar from './search_bar';

const mapStateToProps = ( state ) => ({
  currentFilter: state.currentFilter,
  ownCredential: state.ownCredential,
  myShared: state.myShared,
  sharedWithMe: state.sharedWithMe,
});

export default connect(mapStateToProps,null)(SearchBar);
