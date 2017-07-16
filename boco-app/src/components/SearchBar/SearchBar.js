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
                    "Tacorea",
                    "El Farolito",
                    "Rosario's Empanadas",
                    "Jamaican Zest",
                    "La Mesa Colombiana",
                    "Delicias Paisas",
                ]}
                onChange={() => console.log('Good!')}
                onSearch={() => console.log('onRequestSearch')}
                hintText="How can we help your community THRIVE?"
                style={{
                    margin: '0 auto',
                    maxWidth: 1000
                }}
                />
            </div>
        )
    }
};

export default SearchBar;