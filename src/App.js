import React, { Component } from 'react';
import './App.css';
import JobForm from './JobForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Github Jobs</h1>
        </header>

        <JobForm />
      </div>
    );
  }
}

export default App;
