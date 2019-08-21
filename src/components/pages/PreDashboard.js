import React, { Component } from 'react';
import  Agreement  from './predashboard/agreement';
import  Description  from './predashboard/descriptions';
import  Legal  from './predashboard/legal';
import  Milestone  from './predashboard/milestone';
import  Technology  from './predashboard/technology';
import  Contactinfo  from './predashboard/contactinfo';

class PreDashboard extends Component {
  render(){
    return (
      <section className="preDashboard">
        <Agreement />
        <Description />
        <Legal />
        <Milestone />
        <Technology />
        <Contactinfo />
      </section>
    );  
  };  
};

export default PreDashboard;
