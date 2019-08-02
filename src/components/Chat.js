import React, { Component } from 'react';
import StartChat from './chatModule/chat';
import {connect} from "react-redux";
import { itemsFetchData, currentId } from '../actions/fuelSavingsActions';



class Chatbot extends Component {
    state = {
        chat:[],
        selectedChat:'',
        showMe : false
    }

    constructor(props){
        super(props)
    }
    componentDidMount() {
        this.props.fetchData(`http://demo2532200.mockable.io/meeting`,'CHAT');
    }
    startchat(value,event){

        this.setState({ showMe : true} );
        let dataID = value;
        this.setState({selectedChat: dataID})
    }
    backHistoryChatroom(){
        this.setState({showMe : false});
    }

    render() {
        if(!this.state.showMe){
            return (
                <section className="chat_room" active={this.props.actionChat}>
                    {console.log(this.props)}
                    { this.props.chat.map((item)=>
                        <div className="chatroom_header_boxes" key={item.id} id={item.id}  onClick={(value,event) => this.startchat(item.id,event)}>
                            <div className="chatroom_header_lft">
                                <div className="chatroom_header_img">
                                    <img src={item.image} />
                                    <div class="right">
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
                <StartChat dataID={this.state.selectedChat} userDetails={this.props.users.id} true={this.backHistoryChatroom.bind(this)}  />
            )
        }
    }
}


const mapStateToProps = (state) => {
    return {
        chat:state.fuelSavings.CHAT,
        users:state.fuelSavings.USER_DETAILS,
        actionChat:state.fuelSavings.ACTIVEWIDGET,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url,action) => dispatch(itemsFetchData(url,action)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Chatbot);