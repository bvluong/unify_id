import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MainNav from './nav_bar/main_nav';

const App = ({ store }) => (
  <Provider store={store}>
    <MainNav></MainNav>
  </Provider>
);

export default App;
