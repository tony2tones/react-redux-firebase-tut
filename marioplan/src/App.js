import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import Notifications from "./components/dashboard/Notifications";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/Notifications' exact component={Notifications} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
