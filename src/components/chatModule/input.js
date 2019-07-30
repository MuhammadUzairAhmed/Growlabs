import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChatInput extends Component {
    static propTypes = {
        onSubmitMessage: PropTypes.func.isRequired,
    }
    state = this.props.data
    
    render() {
        return (
            <div className="chatroom_footer">
            <form
                action="."
                onSubmit={e => {
                    e.preventDefault()
                    this.props.onSubmitMessage(this.state.message)
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