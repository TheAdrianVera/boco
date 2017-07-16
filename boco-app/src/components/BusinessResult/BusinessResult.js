import React, { Component, PropTypes } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import './BusinessResult.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const styles = {
  gridList: {
    width: 700,
    height: 200,
    overflowY: 'auto',
  },

};
const divStyle = {
  textAlign: 'center',
  border: 1,
};
class BusinessResult extends React.Component {
  render () {
    console.log(this.props.businessData)

    return (

    <div style={styles.root}>
      <GridList
      cellHeight={180}
      style={styles.gridList}
      >
        <GridTile
        //   title={this.props.businessData.name}
        //   subtitle={<span>{this.props.businessData.price}
        //   <b>{this.props.businessData.rating}</b></span>}
        >
        <img src={this.props.businessData.image_url} />
        </GridTile>

        <div id="cardInfo" style= {divStyle}>
        <div id="placeName" style={divStyle}>
          <b>{this.props.businessData.name}</b>
        </div>
        <div id="placeInfo">
          Rating: {this.props.businessData.rating}
          <br/>
          Avg price: {this.props.businessData.price}

        </div>
        </div>
        </GridList>

        </div>

      )
    }
};

BusinessResult.propTypes = {
    businessData: PropTypes.object,
};

export default BusinessResult
