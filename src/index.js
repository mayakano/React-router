import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import {
    BrowserRouter,
    Route,
    Link
} from "react-browser-router";

import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';

const Root = () =>{
  return(
  <BrowserRouter>
    <div>
      <Home />
      <Route path="/Guilty" component={Guilty} />
      <Route path="/Happy" component={Happy} />
      <Route path="/Sleepy" component={Sleepy} />
    </div>
  </BrowserRouter>
)
}
// your code goes here
class Home extends Component{
  render(){
    return(
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Guilty" >Guilty</Link>
          </li>
          <li>
            <Link to="/Happy" >Happy</Link>
          </li>
          <li>
            <Link to="/Sleepy" >Sleepy</Link>
          </li>
        </ul>
    </nav>
      // your code goes here
    )
  }
}

ReactDOM.render( <Root />, document.getElementById('root') );
