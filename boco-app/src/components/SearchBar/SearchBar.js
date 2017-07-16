import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBarField from 'material-ui-search-bar';
import AutoComplete from 'react-autocomplete';

class SearchBar extends React.Component {
    render () {
        return (
            <div>
                <SearchBarField
                dataSource= {[
                    
                ]}
                onChange={() => console.log('Good!')}
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