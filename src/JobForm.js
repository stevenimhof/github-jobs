import React, {Component} from 'react';
import './JobForm.css';
import SearchList from "./SearchList";


class JobForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            job: '',
            location: '',
            showSearchList: false,
        };
        //this.onSearch() = this.onSearch().bind(this);
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSearch() {
        this.setState({
            job: this.state.job,
            location: this.state.location,
            showSearchList: true,
        });
    }

    render() {
        const {job, location} = this.state;
        return (
            <section>
                <form className="JobForm">
                    <input type="text" name="job" value={job} onChange={this.onChange} placeholder="Job"/>
                    <input type="text" name="location" value={location} onChange={this.onChange}
                           placeholder="Location"/>
                    <br/>
                    <button onClick={() => this.onSearch()}>Search</button>
                </form>
                <div>
                    {this.state.showSearchList ?
                        <SearchList/> :
                        null
                    }
                </div>
            </section>
        );
    }
}

export default JobForm;