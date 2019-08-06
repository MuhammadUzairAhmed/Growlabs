/* eslint-disable import/no-named-as-default */
import { BrowserRouter as Router,  Route, Switch } from "react-router-dom";

import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Chat from './Chat';
import HomePage from "./HomePage";
import Statisitcs from "./pages/Statistics";
import Collaboration from "./pages/Collaboration";
import Backlog from "./pages/Backlog";
import Files from "./pages/Files";
import Governance from "./pages/Governance";
import Financial from "./pages/Financial";
import '../styles/layout.css';

import FuelSavingsPage from "./containers/FuelSavingsPage";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import { get } from "http";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  
  render() {
    return (
      <section>
          <Header />
          <section className="Content_main" >
          <Router>
              <Sidebar />
              <div className="center_part">
                  <Switch>
                      <Route exact path="/"  component={HomePage}/>
                      <Route path="/statistics" component={Statisitcs} />
                      <Route path="/collaboration" component={Collaboration} />
                      <Route path="/financial" component={Financial} />
                      <Route path="/backlog" component={Backlog} />
                      <Route path="/files" component={Files} />
                      <Route path="/governance" component={Governance} />
                      <Route component={NotFoundPage} />
                  </Switch>
              </div>
              <Chat />
            </Router>
          </section>
      </section>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
