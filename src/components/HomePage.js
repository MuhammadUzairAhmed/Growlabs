import React, { Component } from 'react';
import {connect} from "react-redux";
import { itemsFetchData } from '../actions/fuelSavingsActions';
import Dashboard from "./pages/Statistics";
import Projects from "./pages/Projects";
import PreDashboard from "./pages/PreDashboard";

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchData('http://demo2532200.mockable.io/notification','NOTIFICATIONS');
  }
  render(){
    if(this.props.users.status == 'project'){
      return (
        <PreDashboard />
      );  
    }else if(this.props.users.status == 'pre'){
      return(
        <Projects />
      )
    }
    else{
      return (
        <Dashboard />
      )
    }
  };  
};

const mapStateToProps = (state) => {
  return {
      items:state.fuelSavings.NOTIFICATIONS,
      users:state.fuelSavings.USER_DETAILS,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (url,action) => dispatch(itemsFetchData(url,action))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
