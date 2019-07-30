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
      this.props.fetchData('http://demo2532200.mockable.io/milestone','MILESTONE'); 
      // this.props.milestone.forEach(element => {
      //   element.sprints.forEach(spt => {
      //       this.setState(state => {
      //         state.sprintId.push(spt.id)
      //       })
      //   })
      // })
    }

    // getSprint(v,e){
    //     this.setState({
    //       sprint:v
    //     })
    // }  
    // setPrice(e){
    //   this.setState({
    //     price:e.target.value
    //   }) 
    // }
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
      //  let numrows = 48;
      //  var rows = [];
      //  console.log(this.state.sprintId)
      //   for (var i = 1; i < numrows; i++) {
      //     rows.push(
      //       <div className={i == this.state.sprintId ? "colleborate_box active" : "colleborate_box"} key={i} id={i} onClick={(value,event)=>this.getSprint(i,event)} >
      //         <h1>Sprint {i}</h1>
      //         <div className="colleborate_top_round">
      //           <span>
      //           <label className="fancy-checkbox">
      //           <input type="checkbox"  checked={i == this.state.sprintId ? "checked" : ""}/>
      //           <span className="checkmark"></span> </label>
      //           </span>
      //         </div>
      //         <p>W{i}</p>
      //     </div>
      //     )
      //    } 
      
        return(
          <section>

            <GetMilestone data={this.props.milestone} />
            
            {this.state.createMilestone ? (
              <CreateMilestone  id={this.props.milestone.length + 1}/>
            ) : (
              <div className="milestone_add" onClick={(event,items) => this.createMilestoneAppend(event,this.state.idMilestone)}>
                  <img src="./assets/img/plus.png" />
                  <p>Porpose New Milestone</p>
              </div>
            )}
          

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

