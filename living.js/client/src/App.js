import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard.js';
import Home from './Components/Home.js';


class App extends Component {
  
  render() {

    return (

        <div className="app">

          <BrowserRouter>
          
            <Switch>

              <Route exact path={"/"} component={Home} />
              <Route exact path={"/dashboard"} component={Dashboard} />

            </Switch>
          
          </BrowserRouter>

        </div>

    )

  }

}

export default App;
