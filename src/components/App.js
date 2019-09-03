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
import Settings from "./pages/Settings";
import ProjectReview from "./pages/Project/index";

import '../styles/layout.css';
import '../styles/Project.css';
import '../styles/preDashboard.css';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


import FuelSavingsPage from "./containers/FuelSavingsPage";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import { get } from "http";
import { createBrowserHistory } from "history";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      status:'',
      ClientChatId:''
    }
  }
  layout(e){
    this.setState({
      status:e
    })
  }
  actveChatModule(id){
    this.setState({
      ClientChatId:id
    })
    console.log(this.state.ClientChatId,'ypdate')
  }
  render() {
    if(this.state.status == 'pre'){
      return (
        <section>
            <Header checkData={this.layout.bind(this)}/>
            <section className="Content_main">
            <Router history={history}>
                <div className="center_part pre">
                    <Switch>
                        <Route exact path="/"  component={PreDashboard} />
                        <Route component={PreDashboard}  />
                    </Switch>
                </div>
                <Chat />
              </Router>
            </section>
        </section>
      );
    }
    if(this.state.status == 'dashboard'){
      return (
        <section>
            <Header checkData={this.layout.bind(this)}/>
            <section className="Content_main">
            <Router history={history}>
                <Sidebar />
                <div className="center_part">
                    <Switch>
                        <Route exact path="/"  component={Statisitcs} />
                        <Route path="/statistics" component={Statisitcs} />
                        <Route path="/collaboration" component={Collaboration} />
                        <Route path="/financial" component={Financial} />
                        <Route path="/backlog" component={Backlog} />
                        <Route path="/files" component={Files} />
                        <Route path="/governance" component={Governance} />
                        <Route path="/settings" component={Settings} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
                <Chat  />
              </Router>
            </section>
        </section>
      );
    }
    if(this.state.status == 'projects'){
      return (
        <section className="project">
          <Header checkData={this.layout.bind(this)}/>
          <section className="Content_main">
            <Router history={history}>
                <Sidebar status="projects"  />
                <div className="center_part project">
                <Switch>
                  <Route path="/settings" component={Settings} />
                  <Route path="/application" component={Projects} />
                  <Route path="/projects" component={ProjectReview} />
                  <Route path="/" component={ProjectReview} />
                </Switch>
                </div>
                <Chat status="projects" />
            </Router>
          </section>
      </section>
      )
    }
    if(this.state.status == ''){
      return (
        <section className="project">
          <Header checkData={this.layout.bind(this)}/>
          <section className="Content_main">
            <Router history={history}>
                <Sidebar status="projects" />
                <div className="center_part project">
                <Switch>
                  <Route path="/settings" component={Settings} />
                  <Route path="/application" component={Projects} />
                  <Route path="/projects" component={ProjectReview} />
                  <Route path="/" component={ProjectReview} />
                </Switch>
                </div>
            </Router>
          </section>
      </section>
      )
    }
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
