import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Kitchen from "../pages/Kitchen";
import Waiter from "../pages/Waiter";
import Login from "../pages/Login";
import StateKitchen from "../pages/StateKitchen"
import ReadyKitchen from "../pages/ReadyKitchen"

import Header from "./Header";

const App = () => {
  return (
    <section className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <>
          <Header/>
          <Route exact path="/waiter" component={Waiter}>

          </Route> 
          <Route exact path="/kitchen" component={Kitchen}>
          
          </Route>
          </>
        </Switch>
      </Router>
    </section>
  );
};

export default App;
