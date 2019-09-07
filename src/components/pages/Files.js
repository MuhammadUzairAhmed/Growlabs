import React, { Component } from 'react';
import Iframe from 'react-iframe';

class Files extends Component {
  render(){
    return (
      <Iframe url="https://test.growlabs.tech/explorer"
              id="explorerIframe"
              className="explorerIframe"
              display="initial"
              position="relative"/>
    );  
  };  
};

export default Files;
