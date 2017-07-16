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
                    "El Farolito"
                ]}
                onChange={() => console.log('Good!')}
                onRequestSearch={() => console.log('onRequestSearch')}
                hintText="How can we make your community thrive?"
                style={{
                    margin: '0 auto',
                    maxWidth: 1200
                }}
                />
            </div>
        )
    }
};

export default SearchBar;