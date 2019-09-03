import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './input';
import Message from './message';
import {connect} from "react-redux";
import { itemsFetchData, currentId } from '../../actions/fuelSavingsActions';
import $ from 'jquery';

const URL = 'ws://localhost:3030'

class Chat extends Component {

    state = {
        id:'',
        message:[],
        overflow:'hidden'
    }

    ws = new WebSocket(URL)

    componentDidMount() {
        if(this.props.dataID == ''){
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            fetch(proxyurl+'http://react2.zepcomtesting.com/api/1.json')
                .then(response => response.json())
                .then((state) => {this.setState(state); console.log(this.state,'statess');
                
            })
        }
           
       
       

        this.ws.onopen = () => {
            // on connecting, do nothing but log it to the console
            console.log('connected')
        }

        this.ws.onmessage = evt => {
            // on receiving a message, add it to the list of messages
            const message = JSON.parse(evt.data)
            this.addMessage(message)
        }

        this.ws.onclose = () => {
            console.log('disconnected')
            // automatically try to reconnect on connection loss
            this.setState({
                ws: new WebSocket(URL),
            })
        }
        var this2 = this;
            // $(document).ready(function(){
             
            //     $("#xyz").animate({
            //       left: '0%',
                 
            //     },()=>{
            //         this2.setState({overflow: 'unset'})
            //     });
             
            // });

            var animatedSection = $("#xyz");
            animatedSection.animate({left: 0}, 300, ()=>{
                this2.setState({overflow: 'unset'})
            });
            
    }

    addMessage = message => {
        this.setState(state => ({ message: [message, ...state.message] }),()=>{
            //console.log('messa',message)
            //console.log(this.state)
        })
    }
    submitMessage = (messageString,time) => {
        //console.log(time,'messages1')
        fetch('http://demo2532200.mockable.io/meeting/'+this.props.dataID, {
            method: 'POST',
            body: JSON.stringify({id:this.props.dataID,message: messageString})
        })
        // on submitting the ChatInput form, send the message, add it to the list and reset the input
        const message = { id: this.state.id, message: messageString, time: time}
        this.ws.send(JSON.stringify(message))
        this.addMessage(message)
    }
    backHistory(){
        this.props.true()
    }
    // }
    componentWillReceiveProps(props,state){
        console.log(props, 'working')
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        fetch(proxyurl+'http://react2.zepcomtesting.com/api/'+props.dataID+'.json')
            .then(response => response.json())
            .then((state) => {this.setState(state); console.log(state,'statess');
            
        })
    }

    render() {
        {console.log(this.props.dataID,'text')}
        if(this.state.image == ''){
            return (
                <section className="chat_room">
                    <p>Loading..</p>
                </section>
            )
        } else {
            return (
                <div  style={{
                    width: '350px',
                    position: 'fixed',
                    right: '0',
                    top: '0',
                    height:'100vh',
                    overflowX:`${this.state.overflow}`,
                    overflowY:`${this.state.overflow}`
                }}>
                   
                <section id="xyz" className="chat_room_active" active={this.props.actionChat} style={{
                    background: '#161c20',
                    width: '350px',
                    position: 'absolute',
                    right: '-400px',
                    top: '0',
                    height:'100vh',
                   
                }}>
                   
                    <div className="chatroom_header">
                        <div className="chatroom_header_lft">
                            <div className="chatroom_header_img">
                                <img src={this.state.image} />
                            </div>
                            <div className="chatroom_header_text">
                                <h2>{this.state.name} </h2>
                                <p>{this.state.designation}</p>

                            </div>
                        </div>
                        <div className="chatroom_header-rgt">
                           
                        <div className="tooltip"><img src="./assets/img/chat_exp.png" className="" />  <span className="tooltiptext">Tooltip text</span></div>
                        <img src="./assets/img/400952499.png" onClick={this.backHistory.bind(this)} />
                        </div>
                    </div>
                    <div className="messageScrollable">
                    {this.state.message.slice(0).reverse().map((message, index) =>
                   
                        <Message  key={index}
                                  message={message.message}
                                  id={message.id} time={message.time} />
                                  
                    )}
                    </div>
                    <Input  ws={this.ws} data={this.props.dataID} onSubmitMessage={(messageString,time) => this.submitMessage(messageString,time)} currentUserId={this.props.userDetails} />
                </section>
                </div>
            )


        }
    }
}



const mapStateToProps = (state) => {
    return {
        actionChat:state.fuelSavings.ACTIVEWIDGET,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url,action) => dispatch(itemsFetchData(url,action)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Chat);