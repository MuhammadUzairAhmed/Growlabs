import React, { Component } from 'react';
import  Agreement  from './predashboard/agreement';
import  Description  from './predashboard/descriptions';
import  Legal  from './predashboard/legal';
import  Milestone  from './predashboard/milestone';
import  Technology  from './predashboard/technology';

class PreDashboard extends Component {
  render(){
    return (
      <section >
        <Agreement />
        <Description />
        <Legal />
        <Milestone />
        <Technology />
      </section>
    );  
  };  
};

export default PreDashboard;
