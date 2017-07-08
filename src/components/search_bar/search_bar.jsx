import React from 'react';
import { merge } from 'lodash';
import SearchBarIndex from './search_bar_index';
import SearchBarDetail from './search_bar_detail';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {account: {} };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(cred) {
    return e => {
      e.preventDefault();
      this.setState( {account: cred});
    };
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
    <div className="search-bar">
      <div className="search-nav">
        <SearchBarIndex credList={credList} clickHandler={this.clickHandler.bind(this)}/>
      </div>
      <SearchBarDetail credDetail={this.state.account}/>
    </div>
  );}
}

export default SearchBar;
