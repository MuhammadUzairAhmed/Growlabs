import React , {Component} from 'react';
import Slider from 'react-rangeslider'
// To include the default styles
import 'react-rangeslider/lib/index.css'

class RangeSlider extends Component
{
  
    constructor(props, context) {
        super(props, context)
        this.state = {
          maxVolume: false,  
          volume: this.props.range,
        }
      }
     
      handleOnChange = (value) => {
        this.setState({
          volume: value,
        },()=>{
            if(this.state.volume == 50000)
            {
                this.setState({maxVolume: true})
            }else
            {
                this.setState({maxVolume: false})
            }
        })
      }
      
      render() {
        let { volume} = this.state
        return (
            
          <div>
          <Slider
            value={volume}
            min={1000}
            max={50000}
            handleLabel={'€ '+volume}
            orientation="horizontal"
            onChange={this.handleOnChange}
          />
          {this.state.maxVolume &&
          <span>
              € <input type="text" value="250000" name="price" placeholder="Budget" className="btn btn-cb int-price">100</input>
          </span>
          }
          </div>
        )
      }
}

export default RangeSlider;