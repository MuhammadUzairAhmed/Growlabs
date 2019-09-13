import React, { Component } from 'react';
import MILESTONES from './governanace/milestones';
import CONTRACT from './governanace/contract';
import AGREEMEMTS from './governanace/agreements';
import AGENCY from './governanace/agency';

class Govermance extends Component {
  constructor(props){
    super(props)
    this.state = {
      activePage: '1',
      TotalPage: [{"id":"1","name":"MILESTONES"},{"id":"2","name":"AGREEMEMTS"},{"id":"3","name":"[AGENCY]"},{"id":"4","name":"CONTRACT"}],
      height:''
    }
  }
  CurrentPage(value,event){
      this.setState({
        activePage:value
      })
      setTimeout(function(){
        var elmnt = document.querySelector(".center_part");
        var sidebarHeight = document.querySelector(".sidebar");
        sidebarHeight.style.minHeight = elmnt.clientHeight+'px'
      },500)
  }



  render(){
    const CurrentPageKey = this.state.activePage
    let activePage;
    if(CurrentPageKey == 1){
      activePage = <MILESTONES  />
    } 
    if(CurrentPageKey == 4){
      activePage = <CONTRACT />
    } 
    if(CurrentPageKey == 2){
      activePage =  <AGREEMEMTS />
    } 
    if(CurrentPageKey == 3){
      activePage = <AGENCY />
    }
    return (
      <section className="backlog">
        <div>
          <ul className="ui-tabs-nav">
              {this.state.TotalPage.map((items)=> <li className={items.id === this.state.activePage ? "active" : ""} key={items.id} onClick={(value,event)=> this.CurrentPage(items.id,event)}><a>{items.name}</a></li>)}
          </ul>
         {activePage}
        </div>
    </section>
    );  

     
      
  };  
};

export default Govermance;
