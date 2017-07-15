import React, { Component } from 'react';
import logo from './lib/images/logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 

import Topics from './components/Topics';

const Home = ({history}) => (
  <div>
    <h2>Home</h2>
    <RaisedButton
      label="Hello, World"
      onClick={() => (history.push("/topics/rendering"))}/>
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
