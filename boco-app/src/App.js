import React, { Component } from 'react';
import logo from './static/images/logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 

import Topics from './components/Topics';
import Business from './components/Business'
import SearchPage from './components/SearchPage'

const Home = ({history}) => (
  <div>
    <h2>Home</h2>
    <RaisedButton
      label="Hello, World"
      onClick={() => {
        fetch("http://localhost:5000/food/san francisco")
        .then((response) => response.json())
        .then((results_list) => console.log(results_list))
      }}/>
      <SearchPage />
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const BasicExample = () => (
  <MuiThemeProvider> 
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>

        <hr/>

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
      </div>
    </Router>
  </MuiThemeProvider>
)
export default BasicExample
