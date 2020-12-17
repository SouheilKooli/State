import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import People from './Compo/People';
import Time from './Compos/Time';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <h2> Click me !  </h2>
        <People/>
        <Time/>
      </div>

    )
  }
}
    export default App;