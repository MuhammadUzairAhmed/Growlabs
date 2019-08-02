import React, { Component } from 'react';
import { CircularProgressbar, CircularProgressbarWithChildren  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class ProgressBars extends Component
{
    render()
    {
        return(
            <div>
                <div>
                <CircularProgressbar value={this.props.dataValue} text={this.props.textValue} />
                </div>
                <div>
                <p style={{fontSize:'10px',color:'#3A4147'}}>{this.props.dispValue}</p>
                </div>
            </div>
        );
    }
}

export default ProgressBars;