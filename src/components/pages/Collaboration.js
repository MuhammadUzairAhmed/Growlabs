import React, { Component } from 'react';
import Iframe from "react-iframe";

class Collaboration extends Component {
  render(){
    return (
      <Iframe url="https://test.growlabs.tech/search/kanbanboard?id=233"
              id="collaborationIframe"
              className="collaborationIframe"
              display="initial"
              position="relative"/>
    );  
  };  
};

export default Collaboration;
