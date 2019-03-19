import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Rentals from './Rentals'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/contactus' component={Contact}/>
          <Route path='/rentals' component={Rentals}/>
          <Route path='/' component={Home}/>
        </Switch>
      </BrowserRouter> 
    )
  }
}

export default App;
