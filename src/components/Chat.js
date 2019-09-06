import React, { Component } from 'react';
import StartChat from './chatModule/chat';
import {connect} from "react-redux";
import { itemsFetchData, currentId, backlogWidget } from '../actions/fuelSavingsActions';


class Chatbot extends Component {
    state = {
        chat:[],
        selectedChat:'',
        showMe : false,
        CurrentChat: ''
    }
    componentDidMount() {
        this.props.fetchData(`http://react2.zepcomtesting.com/api/meeting.json`,'CHAT');
    }
    startchat(value,event){
        this.setState({ showMe : true} );
        let dataID = value;
        this.setState({selectedChat: dataID})
    }
    backHistoryChatroom(){
        this.setState({showMe : false});
    }
    offBacklogWidth(){
        this.props.backlogWidgetData(false,"backlogPlus");
    }
    componentDidUpdate(){
        console.log(this.props.currentChatID)
    }
    render() {
        if(this.props.status != 'projects'){
            if(!this.state.showMe){
                return (
                    <section className="chat_room" active={this.props.actionChat}>
                        { this.props.chat.map((item)=>
                            <div className="chatroom_header_boxes" key={item.id} id={item.id}  onClick={(value,event) => this.startchat(item.id,event)}>
                                <div className="chatroom_header_lft">
                                    <div className="chatroom_header_img">
                                        <img src={item.image} />
                                        <div className="right">
                                            {/* <div className="badge total-message">1</div> */}
                                            <div className="time">Yesterday, 12:30</div>
                                            <div className="go-icon"></div>
                                        </div>
                                    </div>
                                    <div className="chatroom_header_text">
                                        <h2>{item.name} </h2>
                                        <p>{item.designation}</p>
                                        <span className="message">TEsting data</span>
                                    </div>
                                </div>
                            </div>
                        )}

                    </section>
                   
                )
            }  else {
                return (
                    <div>
                    <section className="chat_room" active={this.props.actionChat} >
                        { this.props.chat.map((item)=>
                            <div className="chatroom_header_boxes" key={item.id} id={item.id}  >
                                <div className="chatroom_header_lft">
                                    <div className="chatroom_header_img">
                                        <img src={item.image} />
                                        <div className="right">
                                            {/* <div className="badge total-message">1</div> */}
                                            <div className="time">Yesterday, 12:30</div>
                                            <div className="go-icon"></div>
                                        </div>
                                    </div>
                                    <div className="chatroom_header_text">
                                        <h2>{item.name} </h2>
                                        <p>{item.designation}</p>
                                        <span className="message">TEsting data</span>
                                    </div>
                                </div>
                            </div>
                        )}

                    </section>
                     <StartChat dataID={this.state.selectedChat} userDetails={this.props.users.id} true={this.backHistoryChatroom.bind(this)}  />
                     </div>
                )
            }
       

    }else{
        
        return (<StartChat dataID={this.props.currentChatID ? this.props.currentChatID:'1'} userDetails={this.props.users.id ?  this.props.users.id :'1' }  />)
    }

    }
}


const mapStateToProps = (state) => {
    return {
        chat:state.fuelSavings.CHAT,
        users:state.fuelSavings.USER_DETAILS,
        actionChat:state.fuelSavings.ACTIVEWIDGET,
        backlogWidgetState:state.fuelSavings.BACKLOGWIDGET,
        currentChatID:state.fuelSavings.PROJECTCURRENTCHATID,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url,action) => dispatch(itemsFetchData(url,action)),
        backlogWidgetData: (value,event) => dispatch(backlogWidget(value,event)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Chatbot);
