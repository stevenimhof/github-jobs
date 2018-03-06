import React, { Component } from 'react';
import './JobForm.css';


class JobForm extends Component {
  constructor() {
    super();
    this.state = {
      job: '',
      location: '',
    };
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  render() {
    const { job, location } = this.state;
    return (
      <form className="JobForm">
        <input type="text" name="job" value={job} onChange={this.onChange} placeholder="Job"/>
        <input type="text" name="location" value={location} onChange={this.onChange} placeholder="Location" />
        <br/>
        <button>Search</button>
      </form>
    );
  }
}

export default JobForm;