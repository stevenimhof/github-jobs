import React, {Component} from 'react';
import './SearchList.css';


class SearchList extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>Search Results:</h1>
                <p>Job: {this.props.job}</p>
                <p>Location: {this.props.location}</p>
            </div>
        );
    }
}

export default SearchList;