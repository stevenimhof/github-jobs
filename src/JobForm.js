import React, {Component} from 'react';
import './JobForm.css';


class JobForm extends Component {
    render() {
        return (
            <div>
                <div className="JobForm">
                    <input type="text" name="job" value={this.props.job} onChange={this.props.onChange} placeholder="Job"/>
                    <input type="text" name="location" value={this.props.location} onChange={this.props.onChange}
                           placeholder="Location"/>
                    <br/>
                    <button onClick={() => this.props.onClick('search')}>Search</button>
                    <button onClick={() => this.props.onClick('reset')}>Reset</button>
                </div>
            </div>
        );
    }
}

export default JobForm;