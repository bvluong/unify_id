import React from 'react';
import { merge } from 'lodash';
import SearchBarIndex from './search_bar_index';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
  }

  clickHandler(e) {
    e.preventDefault();

  }

  mapCredentials(filter) {
    const { ownCredential, myShared, sharedWithMe } = this.props;
    switch (filter) {
      case "my_shared":
        return myShared;
      case "shared_with_me":
        return sharedWithMe;
      default:
        return ownCredential;
    }
  }

  render() {
    const { currentFilter } = this.props;
    const credList = this.mapCredentials(currentFilter);
    return (
    <div className="search-nav">
      <SearchBarIndex credList={credList}/>
    </div>
  );}
}

export default SearchBar;
