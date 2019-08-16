import React, { Component } from 'react'
class messages extends Component {

    render(){
        const conditionId = this.props.id;
        if(conditionId == 1){
            return(
                <div className="chatroom_Content">
                    <div className="send_massage">
                        {this.props.message}
                    </div>
                    <div className="massage_time">{this.props.time}</div>
                </div>
            )
        }else{
            return(
                <div className="chatroom_Content">
                    <div className="received_massage">
                        {this.props.message}
                    </div>
                    <div className="massage_time">{this.props.time}</div>
                </div>
            )
        }

    }



}
export default messages;