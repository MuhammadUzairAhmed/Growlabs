import React, { Component } from 'react';
import {connect} from "react-redux";
import { backlogWidget } from '../../../actions/fuelSavingsActions';

class BacklogDataD extends Component {
    constructor(prop){
        super(prop)
        this.state = {isLoggedIn: false};
        //this.props.dispatchCurrentId('1');
    }
    backlogCreate(value,event){
        this.props.backlogWidgetData(value,event);
    }
    render(){
        return(
        <div>
            <div class="backlog_box" onClick={(value,event) => this.backlogCreate(true,"backlogPlus")}>
                <div class="backlog_box_img">
                    <img src="./assets/img/plus.png" />
                </div>
            </div>
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

const mapStateToProps = (state) => {
    return {
        backlogWidgetState:state.fuelSavings.BACKLOGWIDGET,
    };
  };
  const mapDispatchToProps = (dispatch) => {
   
    return {
        backlogWidgetData: (value,event) => dispatch(backlogWidget(value,event)),
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(BacklogDataD);