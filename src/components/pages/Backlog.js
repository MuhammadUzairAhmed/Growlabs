import React, { Component } from 'react';
import {connect} from "react-redux";
import { itemsFetchData, currentStateData } from '../../actions/fuelSavingsActions';
import  Category  from './backlog/categories';
import  Sprints  from './backlog/sprints';
import  BacklogData  from './backlog/backlogData';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class Backlog extends Component {
  constructor(props){
    super(props)
    this.state = {
      categoryData:[],
      sprintData:[],
      CurrentId:'',
      SprintId:'',
      loaded: true
    }
    this.props.fetchData('http://demo2532200.mockable.io/backlog','BACKLOG');
  }
  componentDidMount(){
    this.props.backlog.filter((menu) => {
      if(this.props.currentStateID[0].currentID == menu.categoryId){
          this.setState({
            categoryData: menu.category_data
          })
        }
      menu.category_data.filter((s) => {
        if(this.props.currentStateID[1].sprintID == s.sprint_id){
              this.setState({
                sprintData: s.sprint
              })
            }
      })
    })
   
  }
  componentWillReceiveProps(){
    this.setState({
      loaded:false
    })
  }
  selectedCatId(ev){
      this.setState({
        CurrentId:ev
      })
      this.props.currentState([{"currentID":ev},{"sprintID":this.state.SprintId}])
      this.props.backlog.filter((menu) => {
        if(ev == menu.categoryId){
          this.setState({
            categoryData: menu.category_data
          })
        }
      })
  }
  selectedSptId(ev){
    this.setState({
      SprintId:ev
    })
    this.props.currentState([{"currentID":this.state.CurrentId},{"sprintID":ev}])
    this.state.categoryData.filter((menu) => {
      if(ev == menu.sprint_id){
        this.setState({
          sprintData: menu.sprint
        })
      }
    })
  }
  render(){
   
        return (
          this.state.loaded ? <Loader
            type="Oval"
            color="white"
            height="50"
            width="50"
            className="loading"
         />
          :  
          <section class="backlog">
            <Category data={this.props.backlog.map((items)=> items.categoryId)} activeId={this.state.CurrentId} selectedCat={this.selectedCatId.bind(this)}  />
            <Sprints data={this.state.categoryData} selectedSpt={this.selectedSptId.bind(this)} />
            <BacklogData data={this.state.sprintData} />
          </section>
        
        );  
   
  };  
};

const mapStateToProps = (state) => {
  return {
      backlog:state.fuelSavings.BACKLOG,
      currentStateID:state.fuelSavings.BACKLOGCURRENTSTATE,
  };
};
const mapDispatchToProps = (dispatch) => {
 
  return {
      fetchData: (url,action) => dispatch(itemsFetchData(url,action)),
      currentState: (id) =>  dispatch(currentStateData(id))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Backlog);

