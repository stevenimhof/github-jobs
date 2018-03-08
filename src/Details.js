import React, {Component} from 'react';
import './Details.css';


class Details extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>Details:</h1>
                <p>Job: {this.props.job}</p>
                <p>Location: {this.props.location}</p>
                <h3>Description:</h3>
                <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                <p>Picture</p>
                <button onClick={() => this.props.onClick('back')}>go Back</button>
            </div>
        );
    }
}

export default Details;