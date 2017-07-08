import React from 'react';

class MainNav extends React.Component {

  clickHandler(e) {
    e.preventDefault();
  }

  render() {
    return (
    <div className="main-nav">
      <ul>
        <li>
          All
        </li>
        <li>
          Most Used
        </li>
        <li>
          My Shared login
        </li>
        <li>
          Shared with me
        </li>
      </ul>
    </div>
  );}
}

export default MainNav;
