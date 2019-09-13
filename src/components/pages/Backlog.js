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
      activeBacklogForm:false,
      CurrentId:'',
      SprintId:'',
      loaded: true
    }
    this.props.fetchData('http://react2.zepcomtesting.com/api/backlog.json','BACKLOG');
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
  backlogFormActive(value,event){
    this.setState({
      activeBacklogForm:true
    })
  }
  addBacklog(){
    this.state.sprintData.push({
      "id" :  this.state.sprintData.length + 1,
      "type" : "active",
      "category": this.state.CurrentId,
      "name" :this.state.text,
      "discription": this.state.description,
      "feedback" :"",
    })
    this.setState({
      activeBacklogForm:false
    })
   
  }
  handler = (e) => {
    this.setState({
      [e.target.name]:e.target.value
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
          <section className="backlog">
            <Category data={this.props.backlog.map((items)=> items.categoryId)} activeId={this.state.CurrentId} selectedCat={this.selectedCatId.bind(this)}  />
            <Sprints data={this.state.categoryData} selectedSpt={this.selectedSptId.bind(this)} />
            <BacklogData data={this.state.sprintData}  plus={this.backlogFormActive.bind(this)}/>
            {this.state.activeBacklogForm ? 
              <div class="form">
                <input type="text" name="text" onChange={this.handler} value={this.state.text} placeholder="Add Text" />
                <textarea value="" onChange={this.handler} value={this.state.decription} name="description" placeholder="Add Description"></textarea>
                <button onClick={()=>this.addBacklog()}>Add Backlog</button>
              </div>:''}
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

