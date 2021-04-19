import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import About from "./components/pages/about";
import Header from "./components/layout/Header";
import { Provider } from "./context";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
