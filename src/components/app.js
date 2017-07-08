import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MainNavContainer from './nav_bar/main_nav_container';
import Header from './header/header';

const App = ({ store }) => (
  <Provider store={store}>
    <Header/>
    <MainNavContainer/>
  </Provider>
);

export default App;
