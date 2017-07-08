import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MainNavContainer from './nav_bar/main_nav_container';
import Header from './header/header';

const App = () => (
  <div>
    <Header/>
    <MainNavContainer/>
  </div>
);

export default App;
