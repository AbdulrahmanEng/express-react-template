import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // Initializes the state.
  constructor(props){
    super(props);
    this.state = {
      data: null
    };
  }
  componentDidMount(){
    // Gets the list on first mount.
    this.getList();
  }
  // Gets the data from the Express backend.
  getList(){
    fetch('/api/trees')
    .then(res=>res.json())
    .then(list=>this.setState({list}))
    .catch(err=>console.error(err));
  }
  render() {
    const { list } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {list ? (
            <div>
              <h2>Trees</h2>
              <ul>
              {list.map((item, i)=>{
              return (
              <li key={i}>{item}</li>
              );
                
              })}
              </ul>
            </div>
          ): (
            <div>
              <h2>No List Items Were Found</h2>
            </div>
          )}
      </div>
    );
  }
}

export default App;
