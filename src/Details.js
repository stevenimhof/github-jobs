import React, {Component} from 'react';
import './Details.css';


class Details extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const job = this.props.job[0];
        return (
            <div className="detail-view">
                <button>go Back</button>
                <h1>Details:</h1>
                Title: {job.title}<br/>
                Location: {job.location}<br/>
                Company: {job.company}<br/>
                Type: {job.type}
                <h3>Description:</h3>
                <div dangerouslySetInnerHTML={{__html: job.description}} />
                <button>go Back</button>
            </div>
        );
    }
}

export default Details;