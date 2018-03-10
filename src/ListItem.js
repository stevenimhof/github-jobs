import React, {Component} from 'react';
import './ListItem.css';


class ListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {job} = this.props;
        const jobLink = '/jobs/' + job.id;
        return (
            <div className="list-item">
                <strong>{job.title}</strong><br/>
                Location: {job.location}<br/>
                Company: {job.company}<br/>
                <button onClick={(i) => this.props.onClick(job.id)} >More info</button>
            </div>
        );
    }
}

export default ListItem;