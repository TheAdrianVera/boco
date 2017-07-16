import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import './MediaCard.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class MediaCard extends Component {
    render () {
        return (
            <div className="col-md-4">
            <Card>
                <CardImg className="image-card" top width="100%" src={this.props.image} alt="Card image cap" />
                <CardBlock>
                <CardTitle>{this.props.businessName}</CardTitle>
                <CardSubtitle>{this.props.subTitle}</CardSubtitle>
                <CardText>{this.props.businessText}</CardText>
                <Button><Link to={`/${this.props.businessName.toLowerCase()}/san francisco`}>{this.props.buttonText}</Link></Button>
                </CardBlock>
            </Card>
            </div>
        )
    }
};

MediaCard.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  inverse: PropTypes.bool,
  color: PropTypes.string,
  block: PropTypes.bool,
  className: PropTypes.string,
  businessName: PropTypes.string,
  xpos: PropTypes.number,
  ypos: PropTypes.number,
  image: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  businessText: PropTypes.string,
  buttonText: PropTypes.string
};

export default MediaCard;