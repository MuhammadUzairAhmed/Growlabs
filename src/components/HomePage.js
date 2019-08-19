import React, { Component } from 'react';
import {connect} from "react-redux";
import { itemsFetchData } from '../actions/fuelSavingsActions';
import Statisitcs from "./pages/Statistics";
import PreDashboard from "./pages/PreDashboard";

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchData('http://demo2532200.mockable.io/notification','NOTIFICATIONS');
  }
  render(){
    if(this.props.users.status != 'pre'){
      return (
        <Statisitcs />
      );  
    }else{
      return (
        <PreDashboard />
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
