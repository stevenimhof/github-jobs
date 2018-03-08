import React, {Component} from 'react';
import './SearchList.css';


class SearchList extends Component {
    render() {
        return (
            <div>
                <h1>Search Results:</h1>
                <ul>
                    <li>
                        <p>Job: {this.props.job}</p>
                        <p>Location: {this.props.location}</p>
                        <button onClick={() => this.props.onClick('details')}>view Details</button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SearchList;