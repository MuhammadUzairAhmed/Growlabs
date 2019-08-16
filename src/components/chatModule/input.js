import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChatInput extends Component {
    static propTypes = {
        onSubmitMessage: PropTypes.func.isRequired,
    }
    state = this.props.data
    
    render() {
        return (
            <div className="chatroom_footer" style={{bottom:'0'}}>
            <form
                action="."
                onSubmit={e => {
                    
                    // this.setState({timing: time})
                    e.preventDefault()
                    var today = new Date();
                    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                    console.log(time,'times')
                    this.props.onSubmitMessage(this.state.message,time)
                    this.setState({ message: '' })
                }}
                className="example"
            >
                <input
                    type="text"
                    placeholder={'Enter message...'}
                    value={this.state.message}
                    onChange={e => this.setState({ message: e.target.value })}
                />
                <button type="submit" value={'Send'} ><img src="./assets/img/Send.png" /></button>
            </form>
            </div>
        )
    }
}

export default ChatInput