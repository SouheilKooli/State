import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Person from './compo/People';
import Time from './compo/Time';
import  './Main.css'

class App extends Component {

  render() {
    return (
      <div className='App'>
        <h2> To See My Card Click Here </h2>
        <Person/>
        <Time/>
      </div>

    )
  }
}
    export default App;