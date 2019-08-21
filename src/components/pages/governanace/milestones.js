import React, { Component } from 'react';
import {connect} from "react-redux";
import { itemsFetchData } from '../../../actions/fuelSavingsActions';
import CreateMilestone from './milestones/createMilestone';
import GetMilestone from './milestones/getMilestone';

const AppendMilestone = [''];

class Milestones extends Component {
    constructor(props){
      super(props)
      this.state = {
        createMilestone : false
      }
     }
   
    componentDidMount(){
      this.props.fetchData('http://react2.zepcomtesting.com/api/milestone.json','MILESTONE'); 
    }
    createMilestoneAppend(){
      this.setState({
        createMilestone : true
      })
    }
    backMilestoneAppend(event, ev){
      this.setState({
        createMilestone : true
      })
    }

    render(){
        return(
          <section>
            <GetMilestone data={this.props.milestone} />
              {this.state.createMilestone ? (
                <CreateMilestone  id={this.props.milestone.length + 1}/>
              ) : ''
              // (
              //   <div className="milestone_add">
              //       <img src="./assets/img/plus.png" />
              //       <p>Porpose New Milestone</p>
              //   </div>
              // )
              }
          </section>
      
        )
    }
}

const mapStateToProps = (state) => {
  return {
      milestone:state.fuelSavings.MILESTONE,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (url,action) => dispatch(itemsFetchData(url,action))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Milestones);

