import React, { Component } from 'react';
import {connect} from "react-redux";
import { itemsFetchData } from '../actions/fuelSavingsActions';

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchData('http://demo2532200.mockable.io/notification','NOTIFICATIONS');
  }
  render(){
    return (
      <div>
        <h1>React Slingshot</h1>

        <h2>Get Started</h2>
        <ol>
          <li>Review the demo app</li>
          <li>Remove the demo and start coding: npm run remove-demo</li>
        </ol>
      </div>
    );  
  };  
};

const mapStateToProps = (state) => {
  return {
      items:state.fuelSavings.NOTIFICATIONS,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (url,action) => dispatch(itemsFetchData(url,action))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
