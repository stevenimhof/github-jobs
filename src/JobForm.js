import React, {Component} from 'react';
import './JobForm.css';
import SearchList from "./SearchList";


class JobForm extends Component {
    constructor() {
        super();
        this.state = {
            job: '',
            location: '',
            showSearchList: false
        };
        this.onSearch = this.onSearch.bind(this);
        this.onReset = this.onReset.bind(this);
    };

    onChange = (e) => {
        console.log('onChange called')
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    };

    onReset() {
        this.setState({
            job: '',
            location: '',
            showSearchList: false
        });
    }

    onSearch() {
        const state = this.state;
        state.showSearchList = true;
        this.setState(state);
    };

    render() {
        const {job, location} = this.state;
        return (
            <div>
                <div className="JobForm">
                    <input type="text" name="job" value={job} onChange={this.onChange} placeholder="Job"/>
                    <input type="text" name="location" value={location} onChange={this.onChange}
                           placeholder="Location"/>
                    <br/>
                    <button onClick={this.onSearch}>Search</button>
                    <button onClick={this.onReset}>Reset</button>
                </div>
                <div>
                    <h3>current State:</h3>
                    <p>{"->" + this.state.job.toString()}</p>
                    <p>{"->" + this.state.location.toString()}</p>
                    <p>{"->" + this.state.showSearchList.toString()}</p>
                </div>
                <div>
                    {this.state.showSearchList ?
                        <SearchList/> :
                        null
                    }
                </div>
            </div>
        );
    }
}

export default JobForm;