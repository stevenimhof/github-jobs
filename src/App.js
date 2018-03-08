import React, {Component} from 'react';
import './App.css';
import JobForm from './JobForm';
import SearchList from './SearchList';
import Details  from './Details'
import jQuery from 'jquery'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            job: '',
            location: '',
            showSearchList: false,
            showDetails: false,
            data: []
        };
    }

    handleClick(i) {
        switch (i.toString()) {
            case 'search':
                this.onSearch();
                break;
            case 'reset':
                this.onReset();
                break;
            case 'details':
                this.onDetailView();
                break;
            default:
                console.log('click not handeled!')
        }
    }

    onChange(e) {
        console.log('change')
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
            showDetails: false,
            data: []
        });
    };

    onSearch() {
        console.log('search')
        const state = this.state;
        state.showSearchList = true;
        state.showDetails = false;
        this.setState(state);

        this.getData(this.state.job, this.state.location);
    };

    onDetailView() {
        console.log('details');
        const state = this.state;
        state.showSearchList = false;
        state.showDetails = true;
        this.setState(state);
    }

    getJobs(job, location) {
      // fetch somehow not working?! Fehler:
      /* SyntaxError: JSON.parse: unexpected end of data at line 1 column 1 of the JSON data */

      //tutorial: https://www.javascriptstuff.com/react-ajax-best-practices/#1-root-component
      //react: https://reactjs.org/docs/faq-ajax.html#how-can-i-make-an-ajax-call


      //const url = 'https://jobs.github.com/positions.json?description=' + job + '&location=' + location;
      /* const url = 'https://jobs.github.com/positions?description=java&location=';
      axios.get(`http://www.reddit.com/r/funny.json`)
      .then(res => {
        const data = res.data.data.children.map(obj => obj.data);
        this.setState({ data });
      }); */
      /* fetch('https://jobs.github.com/positions.json?description=java&location=')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            data: result
          });
        },
        (error) => {
          console.log('error while fetching url')
        }
      ) 
      fetch("https://jobs.github.com/positions.json?description=python&location=sf&full_time=true", {mode: 'no-cors'})
      .then((res) => res.json())
      .then(
        (result) => {
            console.log("res: " + result.toString());
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
            console.log(error);
        }
      ) */
      //fetch('https://jobs.github.com/positions.json?description=python&location=sf&full_time=true?callback=myFunction',function (res) {console.log(res.json())})
    }

    getData(job,location) {
        //source: https://medium.com/@brettcelestre/storing-json-data-in-react-with-setstate-3b588b74dcce
        jQuery.ajax({
            url: 'https://jobs.github.com/positions.json?description=' + job + '&location=' + location,
            dataType: 'jsonp',
            success: function(parsed_json){
              console.log('data: ', parsed_json);
            }
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Github Jobs</h1>
                </header>

                <div className="App-state">
                    <h3>current State:</h3>
                    <p>{"job: " + this.state.job.toString()}</p>
                    <p>{"location: " + this.state.location.toString()}</p>
                    <p>{"showSearchList: " + this.state.showSearchList.toString()}</p>
                    <p>{"showDetails: " + this.state.showDetails.toString()}</p>
                    <p>{"data: " + this.state.data.toString()}</p>
                </div>

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

                {/* Details component */}
                {this.state.showDetails ?
                    <Details
                        job={this.state.job}
                        location={this.state.location}
                        onClick={(i) => this.handleClick(i)}/> :
                    null
                }
            </div>
        );
    }
}

export default App;
