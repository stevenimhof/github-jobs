import React, {Component} from 'react';
import ListItem from './ListItem'
//import './SearchList.css';


class SearchList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Search Results:</h1>
                <div className="search-results">
                    {
                        this.props.jobs.map((el, i) =>
                            (<ListItem
                                key={i}
                                job={el}
                                onClick={(i) => this.props.onClick(i)} />))
                    }
                </div>
            </div>
        );
    }
}

export default SearchList;