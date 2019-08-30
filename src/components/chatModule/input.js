import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChatInput extends Component {
    static propTypes = {
        onSubmitMessage: PropTypes.func.isRequired,
    }
    constructor(props){
        super(props)
        this.state = {
            error:false
        }
    }
    state = this.props.data
    
    render() {
        return (
            <div className="chatroom_footer" style={{bottom:'0'}}>
            <form
                action="."
                onSubmit={e => {
                    e.preventDefault()
                    if(this.state.message){
                        var today = new Date();
                        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                        console.log(time,'times')
                        this.props.onSubmitMessage(this.state.message,time)
                        this.setState({ message: '', error:false })
                    }else{
                        this.setState({
                            error:true
                        })
                    }
                    // this.setState({timing: time})
                    
                }}
                className="example"
            >
                <input
                    type="text"
                    placeholder={'Enter message...'}
                    value={this.state.message}
                    onChange={e => this.setState({ message: e.target.value })}
                    error={this.state.error ? 'error':''}
                />
                <button type="submit" value={'Send'} ><img src="./assets/img/Send.png" /></button>
            </form>
            </div>
        )
    }
}

export default ChatInput