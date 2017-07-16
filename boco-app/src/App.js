import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';

import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 

import Topics from './components/Topics';
import Business from './components/Business';
import SearchPage from './components/SearchPage';
import SearchBar from './components/SearchBar';
import NavBarFixed from './components/NavBarFixed';
import logo from "./static/images/boco.png";

const logoStyle = {
    width: '300px',
    height: 'auto',
    display:'block',
    margin: 'auto'
};

class App extends Component {
  
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render () {
    return (
    <MuiThemeProvider> 
    <Router>
      <div>
          <Container>
            <Row>
              <Col>
                <img src= {logo} style={logoStyle} alt='logo'/>
              </Col>
            </Row>
          </Container>
      <SearchBar/>
      {/*<RaisedButton
      label="Hello, World"
      onClick={() => {
        fetch("http://localhost:5000/food/san francisco")
        .then((response) => response.json())
        .then((results_list) => console.log(results_list))
      }}/>
      <SearchPage />*/}
      </div>
    </Router>
  </MuiThemeProvider>
    )}
}
export default App;
