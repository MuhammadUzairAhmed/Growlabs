import React, { Component } from 'react';
import { Line } from 'rc-progress';
 
class StraightProgressBar extends React.Component {
  render () {
    return (
      <div>
        {/* <Progress completed={75} style={{height: '2px',	width: '100px',	borderRadius: '1px',	backgroundColor: '#FFFFFF'}}/>
     */}
      <Line percent={this.props.percentage} strokeColor="#1BB496" strokeWidth="1" />
      <p className="score-para">{this.props.dispStraightValue}</p>
      </div>
    )
  }
}

export default StraightProgressBar;