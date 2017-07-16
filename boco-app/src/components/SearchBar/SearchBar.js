import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBarField from 'material-ui-search-bar'

class SearchBar extends React.Component {
    render () {
        return (
            <div>
                <SearchBarField
                onChange={() => console.log('onChange')}
                onRequestSearch={() => console.log('onRequestSearch')}
                hintText="What can we help you with?"
                style={{
                    margin: '0 auto',
                    maxWidth: 800
                }}
                />
            </div>
        )
    }
};

export default SearchBar;