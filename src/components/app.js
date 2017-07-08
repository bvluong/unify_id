import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MainNavContainer from './nav_bar/main_nav_container';
import SearchBarContainer from './search_bar/search_bar_container';
import Header from './header/header';

const App = () => (
  <div>
    <Header/>
    <div className="main-app">
      <MainNavContainer/>
      <SearchBarContainer/>
    </div>
  </div>
);

export default App;
