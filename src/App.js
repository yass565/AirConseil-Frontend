import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ListClients from './components/ListClients';
import CreateClient from './components/CreateClient';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div>
      <Router>
            
            <br></br>
             
              <switch>
              <Route path="/" component={ListClients}></Route>
              <Route path="/addClients" component={CreateClient}></Route>       
              </switch>
           
      </Router>
       </div>
  );
}
}
export default App;