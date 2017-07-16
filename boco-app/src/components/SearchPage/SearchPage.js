import React, { Component, PropTypes } from 'react';
import './SearchPage.css';
import BusinessPage from '../BusinessPage'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class SearchPage extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = {
            loading: true,
            businesses: []
        };
    }

    componentWillMount () {
        //TODO: async call
        fetch('http://localhost:5000/food/San Francisco')
        .then((response) => (response.json()))
        .then((businessList) => {
            this.setState({
                loading: false,
                businesses: businessList
            });
        })
        .catch((error) => {
            // TODO: Error handling
            console.log("Oh no!", error);
        })
    }

    render () {
        if (this.state.loading) {
            return <div> Loading </div>
        } else {
            return (
                <div>
                    {this.state.businesses.map((businessData) =>
                        (<BusinessPage businesses={businessData} />)
                        (<BusinessPage businessRelated={businessData[0]} />))
                        }
                </div>
            )
        }
    }
}

SearchPage.propTypes = {

}

export default SearchPage;