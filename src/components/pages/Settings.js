import React, { Component } from 'react';
import MILESTONES from './governanace/milestones';
import PASSWORD from './settings/agencyProfile/password';
import COMPANY from './settings/agencyProfile/company';
import OPERATIONS from './settings/agencyProfile/operations';
import PERSONAL from './settings/agencyProfile/personal'
import BANK from './settings/agencyProfile/bank'
import PROFILE from './settings/agencyProfile/testinomials'

class Settings extends Component {
  constructor(props){
    super(props)
    this.state = {
      activePage: '1',
      TotalPage: [
          {"id":"1","name":"Personal"},
          {"id":"2","name":"Company"},
          {"id":"3","name":"Operations"},
          {"id":"4","name":"Password"},
          {"id":"5","name":"Bank"},
          {"id":"6","name":"Profile"}
        ],
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
      activePage = <PERSONAL  />
    } 
    if(CurrentPageKey == 4){
      activePage = <PASSWORD />
    } 
    if(CurrentPageKey == 2){
      activePage =  <COMPANY />
    } 
    if(CurrentPageKey == 3){ 
      activePage = <OPERATIONS />
    }
    if(CurrentPageKey == 5){ 
        activePage = <BANK />
      }
      if(CurrentPageKey == 6){ 
        activePage = <PROFILE />
      }
    return (
      <section className="backlog settings">
         <h1 className="settings_hea">Settings</h1>

         <div className="save_button">

         <button className="one">Cancel</button>

         <label class="switch">
  <input type="checkbox" />
  <span class="slider round">Save Chages</span>
</label>
        

         </div>  
       
          <ul className="ui-tabs-nav">
              {this.state.TotalPage.map((items)=> <li className={items.id === this.state.activePage ? "active" : ""} key={items.id} onClick={(value,event)=> this.CurrentPage(items.id,event)}><a>{items.name}</a></li>)}
          </ul>
         {activePage}
      
    </section>
    );  

     
      
  };  
};

export default Settings;
