import React, {Component} from 'react';
import './App.css';
import JobForm from './JobForm';
import SearchList from './SearchList';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            job: '',
            location: '',
            showSearchList: false
        };
    }

    handleClick(i) {
        console.log(i.toString())
        switch (i.toString()) {
            case 'search':
                this.onSearch();
                break;
            case 'reset':
                this.onReset();
                break;
            case 'detailView':
                this.onDetailView();
                break;
            default:
                console.log('click not handeled!')
        }
    }

    onChange(e) {
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
    };

    onSearch() {
        const state = this.state;
        state.showSearchList = true;
        this.setState(state);
    };

    onDetailView() {
        console.log('detail view');
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Github Jobs</h1>
                </header>

                <JobForm
                    job={this.state.job}
                    location={this.state.location}
                    onChange={(e) => this.onChange(e)}
                    onClick={(i) => this.handleClick(i)}/>

                {/* SearchList component */}
                {this.state.showSearchList ?
                    <SearchList
                    job={this.state.job}
                    location={this.state.location}
                    onClick={(i) => this.handleClick(i)}/> :
                    null
                }

                <footer>
                    <h3>current State:</h3>
                    <p>{"->" + this.state.job.toString()}</p>
                    <p>{"->" + this.state.location.toString()}</p>
                    <p>{"->" + this.state.showSearchList.toString()}</p>
                </footer>
            </div>
        );
    }
}

export default App;
