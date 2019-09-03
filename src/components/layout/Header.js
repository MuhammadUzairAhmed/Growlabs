import React, { Component } from 'react';
import {connect} from "react-redux";
import { itemsFetchData, currentStateData, activeChatSystem, backlogWidget } from '../../actions/fuelSavingsActions';
import {browserHistory} from "react-router";
import  Clock  from '../../components/widget/clock';
import { setInterval } from 'timers';
const URL = 'ws://localhost:3030'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

// Since this component is simple and static, there's no parent container for it.
class Header extends Component {
    
    ws = new WebSocket(URL)
    constructor(props){
        super(props)
        this.state = {
            notificationsData:[],
            user:'',
            status:''
         }
    }
    componentWillMount()
    {
        this.props.fetchData('http://react2.zepcomtesting.com/api/notification.json','NOTIFICATIONS');
         this.props.fetchData('http://react2.zepcomtesting.com/api/user.json','USER_DETAILS');
        this.props.currentState([{"currentID":"1"},{"sprintID":"1"}])
    }  
    componentDidMount() {
      

        this.ws.onopen = () => {
            // on connecting, do nothing but log it to the console
            console.log('connected','notifcation')
            
        }
        this.ws.onnotification = evt => {
        // on receiving a message, add it to the list of messages
        const notifications = JSON.parse(evt.notification)
            this.setState({
                ...this.state,
                notificationsData:notifications})
        }
      
        this.ws.onclose = () => {
            console.log('disconnected','notifcation')
            // automatically try to reconnect on connection loss
            this.setState({
                ws: new WebSocket(URL),
            })
        }
        
       
        
    }
    componentWillReceiveProps(props,state){ 
        this.setState({
            notificationsData:props.notifications,
        })
        if (props.users.status !== this.props.users.status) {
            this.setState({
                status:props.users.status
            })
            this.layoutChange(props.users.status)
        }
        console.log(this.state)
    }
    // componentWillUpdate(props,state){
    //     if(state.status !== this.state.status) {
    //         this.layoutChange(state.status)
    //     }
    // }

    activeChat(event,value){
        // if(this.props.actionChat == "true"){
        //     this.props.activeChat('false','ACTIVECHAT')
        // }else{
        //     this.props.activeChat('true','ACTIVECHAT')
        //     this.props.backlogWidgetData(false,"backlogPlus");
        // }
        this.setState({
            status:"dashboard"
        })
        this.layoutChange("dashboard")
        
    }
    layoutChange(s){
        this.props.checkData(s)
    }
    render(){
        if(this.state.status == 'dashboard'){
            if(this.state){
            return (
                <section className="header ">
                    <div className="time_section">
                        <div className="time_section_text">
                            <Clock />
                        </div>
                        <div className="time_section_img"   onClick={this.activeChat.bind(this)} >
                        <img src="./assets/img/time_user.png" />
                          
                        </div>
                        <div className="time_section_rgt">
                            <img src="./assets/img/time_icon.jpg" />
                        </div>
                    </div>

                {this.state.notificationsData.map((item)=> 
                        <div className={"header_box " + item.status} key={item.id}>
                            <div className="header_top ">
                                <ul>
                                    <li>{item.date}</li>
                                    <li>{item.type}</li>
                                    <li>#{item.id}</li>
                                    <li><span>...</span></li>
                                </ul>
                            </div>
                            <div className="header_center ">
                                <div className="header_flt ">
                                    <h1>{item.description}</h1>
                                </div>
                                <div className="header_rgt ">
                                    <img src={"./assets/img/"+item.group+".png"}/>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            );
        }else{
            return <h1>Loading...</h1>
        }
    }if(this.state.status == 'pre'){
        return (
            <section className="header pre">
                <div className="time_section">
                    <div className="time_section_text">
                        <Clock />
                    </div>
                    <div className="time_section_img" onClick={this.activeChat.bind(this)}>
                    <img src="./assets/img/time_user.png" />
                    </div>
                    <div className="time_section_rgt">
                        <img src="./assets/img/time_icon.jpg" />
                    </div>
                </div>
            </section>
        )
    }if(this.state.status == 'projects'){
        if(this.state){
        return (
            <section className="header">
                <div className="time_section">
                    <div className="time_section_text">
                        <Clock />
                    </div>
                    <div className="time_section_img"   onClick={this.activeChat.bind(this)} >
                    <img src="./assets/img/time_user.png" />
                    </div>
                    <div className="time_section_rgt">
                        <img src="./assets/img/time_icon.jpg" />
                    </div>
                </div>

                <section className="preDashboard">
                    <div className="preDashboard_notification">
                        {this.state.notificationsData.map((items, index)=>
                        <div className="NotiProgMain"  key={index} onClick={(e)=>this.changePage(index)}>
                            <div className="header_box">
                            <div className="header_top" >
                                <ul>
                                    <li>STEP {items.id} </li>
                                    <li>{items.date}</li>
                                    <li>{items.type}</li>
                                    <li><span>...</span></li>
                                </ul>
                            </div>
                            <div className="header_center">
                                    <div className="header_flt">
                                        <h1>{items.description}</h1>
                                    </div>
                                    <div className="header_rgt">

                                    </div>
                                </div>
                            </div>
                            <div className='PreNotifiProgress'>{items.status == 'disable' ? <div className="PreNotifiProgressadded"> </div> : items.status == 'active' ?  <div className="PreNotifiactive"> </div> : <div className="PreNotifidisable"> </div>  } </div>
                        </div>
                      )}
                    </div>
                    </section>
            </section>
            )

        }else{
            return <h1>Loading...</h1>
        }
    }   else{
        return(
            <Loader type="Oval" color="white" height="50" width="50" className="loading" />
        )

    }
}
  
};

const mapStateToProps = (state) => {
    return {
        notifications:state.fuelSavings.NOTIFICATIONS,
        users:state.fuelSavings.USER_DETAILS,
        actionChat:state.fuelSavings.ACTIVEWIDGET,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url,action) => dispatch(itemsFetchData(url,action)),
        currentState: (id) =>  dispatch(currentStateData(id)),
        activeChat: (boolen,action) =>  dispatch(activeChatSystem(boolen,action)),
        backlogWidgetData: (value,event) => dispatch(backlogWidget(value,event)),
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Header);