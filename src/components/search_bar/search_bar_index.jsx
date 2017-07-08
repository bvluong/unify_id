import React from 'react';
import { values } from 'lodash';

class SearchBarIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    
  }


  render() {
    const { credList } = this.props;
    return(
      <div className="cred-list">
        { values(credList).map( (cred,idx) =>
          <li key={idx} onClick={this.handleClick.bind(this)}>
            <h2 className="website">{cred.website}</h2>
            <h4 className="username">{cred.username}</h4>
          </li>
        )}
      </div>
    );
  }

}

export default SearchBarIndex;
