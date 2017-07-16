import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 

import Topics from './components/Topics';
import Business from './components/Business';
import SearchPage from './components/SearchPage';
import SearchBar from './components/SearchBar';
import BusinessPage from './components/BusinessPage';

class BasicExample extends Component {
  render () {
    return (
    <MuiThemeProvider> 
    <Router>
      <div>

      <SearchBar/>

      <RaisedButton
      label="Hello, World"
      onClick={() => {
        fetch("http://localhost:5000/food/san francisco")
        .then((response) => response.json())
        .then((results_list) => console.log(results_list))
      }}/>
      <SearchPage />
      <Route path="/businesspage" component={BusinessPage} />
      </div>
    </Router>
  </MuiThemeProvider>
    )}
}
export default BasicExample
