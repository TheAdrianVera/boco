'use strict'
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
  Button,
  ButtonGroup,
} from 'reactstrap';
import { Grid, Thumbnail } from 'react-bootstrap'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';

import Topics from './components/Topics';
import Business from './components/Business';
import SearchPage from './components/SearchPage';
import SearchBar from './components/SearchBar';
import BusinessPage from './components/BusinessPage';
import NavBarFixed from './components/NavBarFixed';
import MediaCard from './components/MediaCard';
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
      isOpen: false,
      searchText: '',
    };
  }
  onChange (e) {
    let searchText = this.state.searchText
    searchText = e.target.value
    this.setState(searchText)
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

      <Route path="/businesspage" component={BusinessPage} />
      <div>
          <Container>
            <Row>
              <Col>
                <img src= {logo} style={logoStyle} alt='logo'/>
              </Col>
            </Row>
          </Container>
          <hr/>
          <br/>
      <SearchBar/>
        <br/>
            <Row>
              <MediaCard id="food"
                businessName="Food" 
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Phat_Thai_kung_Chang_Khien_street_stall.jpg/1200px-Phat_Thai_kung_Chang_Khien_street_stall.jpg" alt="Card image cap" 
                subTitle="Food for Thought"
                businessText="Help businesses of color thrive by discovering your new favorite eating spot."
                buttonText="Quick Search"/>
              <MediaCard 
                businessName="Beauty" 
                image="http://masterbeautyphotography.com/wp-content/uploads/bfi_thumb/Latina_Studio_4_1276-BEHANCE-web-JK-memcyd56y6kyjpmdcmvcrn8vw74xtuziih0nw5fuk0.jpg" 
                subTitle="Color is Beautiful"
                businessText="Find a business of color that will make you glow."
                buttonText="Quick Search"/>
              <MediaCard 
                businessName="Services" 
                image="http://www.freshdesignpedia.com/wp-content/uploads/latino-music-an-endless-passionate-story/latin-music-rumba-dancer.jpg" 
                subTitle="Here to Help"
                businessText="Support those who are always there to support you."
                buttonText="Quick Search"/>
            </Row>
        <br/>
            <Row>
              <MediaCard 
                businessName="Education" 
                image="https://pbs.twimg.com/profile_images/1666275405/Boys_400x400.jpg" alt="Card image cap" 
                subTitle="Education is Key"
                businessText="Reach your potential while helping members of your community reach theirs"
                buttonText="Quick Search"/>
              <MediaCard 
                businessName="Health" 
                image="https://www.cdc.gov/media/images/dpk/2015/dpk-vs-hispanic-health/img9-600px.jpg" 
                subTitle="The start to a healthier you"
                businessText="Find health related businesses near you"
                buttonText="Quick Search"/>
              <MediaCard 
                businessName="Full Listing" 
                image="http://c9.nrostatic.com/sites/default/files/uploaded/related_race_gd_151211.jpg" 
                subTitle="Everything you need at your fingertips"
                businessText="Welcome to your community"
                buttonText="Search All"/>
            </Row>
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
