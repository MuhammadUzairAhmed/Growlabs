import React, { Component } from 'react';
class BacklogDataD extends Component {
    constructor(prop){
        super(prop)
        this.state = {isLoggedIn: false};
        
        //this.props.dispatchCurrentId('1');
    }
    addBacklog() {
        this.setState({isLoggedIn: true});
    }
    addedBacklog() {
        this.setState({isLoggedIn: false});
    }
    render(){
        const isLoggedIn = this.state.isLoggedIn;
        return(
        <div>
             {isLoggedIn ? (
                <div class="backlog_box" onClick={(value,event) => this.addedBacklog(value,event)}>
                    <div class="backlog_box_img">
                       testing
                    </div>
                </div>
            ) : (
                <div class="backlog_box" onClick={(value,event) => this.addBacklog(value,event)}>
                    <div class="backlog_box_img">
                        <img src="./assets/img/plus.png" />
                    </div>
                </div>
            )}
           
           {this.props.data.map((items)=>
                <div class="backlog_box" key={items.id}>
                    <div class="backlog_box_flt">
                        <h1>{items.name}</h1>
                        <p>{items.discription}</p>
                    </div>
                    <div class="backlog_box_rgt">
                        <span>{items.feedback}</span>
                    </div>
                    <div class="backlog_box_botum">
                        <p>#{items.id}</p>
                    </div>
                </div>
            )}
           
        </div>
      )
    }
}
export default BacklogDataD
