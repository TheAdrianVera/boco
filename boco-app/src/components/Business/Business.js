import React, { Component, PropTypes } from 'react';
import './Business.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Business extends React.Component {
    render () {
        return <div>{this.props.businessData.name}</div>
    }
};

Business.propTypes = {
    businessData: PropTypes.object,
};

export default Business;