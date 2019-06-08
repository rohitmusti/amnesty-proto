import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiTestResp: "Not hitting the API :(" };
   }
   callAPI() {
       fetch("http://localhost:3001/testAPI")
           .then(res => res.text())
           .then(res => this.setState({ apiTestResp: JSON.parse(res).msg }));
   }
   componentWillMount() {
       this.callAPI();
   }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p class="App-intro">
            {this.state.apiTestResp}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
