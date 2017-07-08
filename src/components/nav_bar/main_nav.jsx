import React from 'react';

class MainNav extends React.Component {

  clickHandler(e) {
    e.preventDefault();
    this.props.receiveFilter(e.target.value);
  }

  render() {
    return (
    <div className="main-nav">
      <button className="filters"
        onClick={this.clickHandler.bind(this)}
        value="all">
        All
      </button>
      <button className="filters"
        onClick={this.clickHandler.bind(this)}
        value="most_used">
        Most Used
      </button>
      <button className="filters"
        onClick={this.clickHandler.bind(this)}
        value="my_shared">
        My Shared login
      </button>
      <button className="filters"
        onClick={this.clickHandler.bind(this)}
        value="shared_with_me">
        Shared with me
      </button>
    </div>
  );}
}

export default MainNav;
