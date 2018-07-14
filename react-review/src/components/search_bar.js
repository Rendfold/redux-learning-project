import React, { Component } from 'react';

class SearchBar extends Component {
    constructor (props) {
        super(props);

        this.state = {
            term: ''
        };
    }

    onSearchChange (term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render () {
        return (
            <div className="search-bar">
                <input value={this.state.term} onChange={(event) => onSearchChange(event.target.value)} />
            </div>
        );
    }
}

export default SearchBar;