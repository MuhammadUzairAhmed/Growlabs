/* eslint-disable import/no-named-as-default */
import { BrowserRouter as Router,  Route, Switch } from "react-router-dom";

import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Chat from './Chat';
import HomePage from "./HomePage";
import PreDashboard from "./pages/PreDashboard";
import Projects from "./pages/Projects";
import Statisitcs from "./pages/Statistics";
import Collaboration from "./pages/Collaboration";
import Backlog from "./pages/Backlog";
import Files from "./pages/Files";
import Governance from "./pages/Governance";
import Financial from "./pages/Financial";
import '../styles/layout.css';
import '../styles/preDashboard.css';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


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

  constructor(props){
    super(props)
    this.state = {
      status:''
    }
  }
  layout(e){
    this.setState({
      status:e
    })
    console.log(e);

  }
  render() {
    console.log(this.state,'test')
    if(this.state.status == 'pre'){
      return (
        <section>
            <Header checkData={this.layout.bind(this)}/>
            <section className="Content_main">
            <Router>
                <div className="center_part pre">
                    <Switch>
                        <Route exact path="/"  component={PreDashboard} />
                        <Route component={PreDashboard} />
                    </Switch>
                </div>
                <Chat />
              </Router>
            </section>
        </section>
      );
    }else if(this.state.status == 'projects'){
          <section>
            <Header checkData={this.layout.bind(this)}/>
            <section className="Content_main">
            <Router>
                <div className="center_part pre">
                    <Switch>
                        <Route exact path="/"  component={Projects} />
                        <Route component={Projects} />
                    </Switch>
                </div>
                <Chat />
            </Router>
            </section>
        </section>
    }else if(this.state.status == 'dashboard'){
      return (
        <section>
            <Header checkData={this.layout.bind(this)}/>
            <section className="Content_main">
            <Router>
                <Sidebar />
                <div className="center_part">
                    <Switch>
                        <Route exact path="/"  component={HomePage} />
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
    else{
      return (
        <section>
          <Header checkData={this.layout.bind(this)}/>
          <Loader type="Oval" color="white" height="50" width="50" className="loading" />
        </section>
      )
    }
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
