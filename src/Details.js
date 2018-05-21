import React, {Component} from 'react';
import './Details.css';


class Details extends Component {

    render() {
        const job = this.props.job[0];
        return (
            <div id="content" className="detail-view">
                <button onClick={() => this.props.onClick('back')}>Back</button>
                <h1>Details:</h1>
                Title: {job.title}<br/>
                Location: {job.location}<br/>
                Company: {job.company}<br/>
                Type: {job.type}<br/>
                { /* TBD onerror, alternative placeholder img not working at the moment */ }
        <img src={job.company_logo} alt="company logo"/> {/* removed onError-event: onError="this.src='http://mumlovestech.com/wp-content/uploads/2013/07/git-hub.png';"/>*/}
                <h3>Description:</h3>
                <div dangerouslySetInnerHTML={{__html: job.description}} />
                <button onClick={() => this.props.onClick('back')}>Back</button>
            </div>
        );
    }
}

export default Details;