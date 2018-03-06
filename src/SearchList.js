import React, {Component} from 'react';
import './SearchList.css';


class SearchList extends Component {
    constructor() {
        super();
        this.state = {
            job: '',
            location: '',
        };
    }

    render() {
        const {job, location} = this.state;
        return (
            <section>
                <h1>Search Results:</h1>
                <p>Job: {this.state.job}</p>
                <p>Location: {this.state.location}</p>
            </section>
        );
    }
}

export default SearchList;