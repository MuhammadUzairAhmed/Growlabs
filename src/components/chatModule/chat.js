import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './input';
import Message from './message';

const URL = 'ws://localhost:3030'

class Chat extends Component {

    state = {
        id:'',
        message:[],
    }

    ws = new WebSocket(URL)

    componentDidMount() {

        fetch('http://demo2532200.mockable.io/meeting/'+this.props.dataID)
            .then(response => response.json())
            .then(state => this.setState(state))

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

    }

    addMessage = message => {
        this.setState(state => ({ message: [message, ...state.message] }))
    }
    submitMessage = messageString => {

        console.log(messageString)
        fetch('http://demo2532200.mockable.io/meeting/'+this.props.dataID, {
            method: 'POST',
            body: JSON.stringify({id:this.props.dataID,message: messageString})
        })
        // on submitting the ChatInput form, send the message, add it to the list and reset the input
        const message = { id: this.state.id, message: messageString}
        this.ws.send(JSON.stringify(message))
        this.addMessage(message)


    }
    backHistory(){
        this.props.true()
    }

    render() {
        if(this.state.image == ''){
            return (
                <section className="chat_room">
                    <p>Loading..</p>
                </section>
            )
        } else {
            return (
                <section className="chat_room">
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
                            <img src="./assets/img/chat_exp.png" />
                            <img src="./assets/img/400952499.png" onClick={this.backHistory.bind(this)} />
                        </div>
                    </div>

                    {this.state.message.slice(0).reverse().map((message, index) =>
                        <Message  key={index}
                                  message={message.message}
                                  id={message.id} />
                    )}
                    <Input  ws={this.ws} data={this.props.dataID} onSubmitMessage={messageString => this.submitMessage(messageString)} currentUserId={this.props.userDetails} />
                </section>
            )


        }
    }
}



export default Chat
