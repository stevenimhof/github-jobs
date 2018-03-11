import React, {Component} from 'react';
import './App.css';
import SearchList from './SearchList';
import Details  from './Details'
import JobForm from './JobForm';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            job: '',
            location: '',
            showSearchList: false,
            showDetails: false,
            currentJobID: null,
            jobs: []
        };
    }

    handleClick(i, v) {
        console.log(i);
        switch (i.toString()) {
            case 'search':
                this.onSearch();
                break;
            case 'reset':
                this.onReset();
                break;
            case 'back':
                this.onBack();
                break;
            case 'details':
                this.onDetailView(v);
                break;
            default:
                console.log('click not handeled!')
        }
    }

    onBack(){
        console.log('search')
        const state = this.state;
        state.showSearchList = true;
        state.showDetails = false;
        this.setState(state);

        const url = `https://crossorigin.me/https://jobs.github.com/positions.json?description=${state.job}&location=${state.location}`
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({jobs: data}));
    };


    onChange(e) {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    };


    onReset() {
        console.log('reset')
        this.setState({
            job: '',
            location: '',
            showSearchList: false,
            showDetails: false
        });
    };

    onSearch() {
        console.log('search')
        const state = this.state;
        state.showSearchList = true;
        state.showDetails = false;
        this.setState(state);


        const url = `https://crossorigin.me/https://jobs.github.com/positions.json?description=${state.job}&location=${state.location}`
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({jobs: data}));
    };

    onDetailView(jobid) {
        console.log(jobid);
        const state = this.state;
        state.showSearchList = false;
        state.showDetails = true;
        state.currentJobID = jobid;
        this.setState(state);
    }

    getCurrentJob() {
        return this.state.jobs.filter(job => job.id === this.state.currentJobID)
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Github Jobs</h1>
                </header>

                <div className={this.state.showDetails ? 'hide' : ''}>
                    <JobForm
                        job={this.state.job}
                        location={this.state.location}
                        onChange={(e) => this.onChange(e)}
                        onClick={(i) => this.handleClick(i)} />

                    {this.state.showSearchList ?
                        <SearchList
                            jobs={this.state.jobs}
                            onClick={(i) => this.onDetailView(i)}/> :
                        null
                    }
                </div>

                {/* Details component */}
                {this.state.showDetails ?
                    <Details
                        job={this.getCurrentJob()}
                        onClick={(i) => this.handleClick(i)}/> :
                    null
                }
            </div>
        );
    }
}

export default App;
