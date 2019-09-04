import React, { Component } from 'react';
import MILESTONES from './governanace/milestones';
import PASSWORD from './settings/agencyProfile/password';
import COMPANY from './settings/agencyProfile/company';
import OPERATIONS from './settings/agencyProfile/operations';
import PERSONAL from './settings/agencyProfile/personal'
import BANK from './settings/agencyProfile/bank'
import PROFILE from './settings/agencyProfile/testinomials'
import PERSONALCLIENT from './settings/clientProfile/personal'
import COMPANYCLIENT from './settings/clientProfile/company'
import PASSWORDCLIENT from './settings/clientProfile/password'

import FileUpload from './../pages/governanace/contractComponents/FileUpload'

import { connect } from "react-redux";
import { finalizeAccount, stopData, displayComponent } from '../../actions/fuelSavingsActions';


class Settings extends Component {
  constructor(props){
    super(props)
    this.state = {
      activePage: '0',
      TotalPage: [
          {"id":"1","name":"Personal"},
          {"id":"2","name":"Company"},
          {"id":"3","name":"Operations"},
          {"id":"4","name":"Password"},
          {"id":"5","name":"Bank"},
          {"id":"6","name":"Profile"}
        ],
        TotalPageClient: [
          {"id":"1","name":"Personal"},
          {"id":"2","name":"Company"},
          {"id":"3","name":"Password"},
        ],
      height:'',
      pass:'',
      confirm:'',
      userType:'',
      selectedType:'',
      activeModal:'modal',
      activeState:true
    }
  }
  componentDidMount(){
    if(this.props.dispComp == '')
    {
      this.props.displayComponent(1)
      this.props.stopData('clear')
    }
  }
  componentWillReceiveProps(nextprops)
  {
    console.log(nextprops.user,'usertypess')
    this.setState({selectedType:nextprops.user.userType, activePage: '1'})

  }
  CurrentPage(value,event){
      this.setState({
        activePage:value
      },()=>{
        this.props.displayComponent(this.state.activePage)
      })
      setTimeout(function(){
        var elmnt = document.querySelector(".center_part");
        var sidebarHeight = document.querySelector(".sidebar");
        sidebarHeight.style.minHeight = elmnt.clientHeight+'px'
      },500)
  }

 
  handleChange = (e) => {
    this.setState({
       [e.target.name]: e.target.value
    })
 }

 handleSave =(e)=>
 {
   e.preventDefault()
   this.setState({activeState:false})
   var values ={
     password: this.state.pass,
     confirm: this.state.confirm,
     userType: this.state.userType
   }
   console.log(values,'typess')
  //  this.setState({activeModal:'modal'})
   this.props.finalizeAccount(values)
 }
 handleSelect =()=>{
   this.setState({activeState:true})
  //  if(this.state.activeModal=='modal active'){
  //  this.setState({activeModal:'modal'})}
  //  else if(this.state.activeModal=='modal'){
  //  this.setState({activeModal:'modal active'})}
 }
 stopPostData = ()=>{
  this.props.stopData('clear')
}
  render(){
    const CurrentPageKey = this.props.dispComp
    let activePage;
    if(this.state.selectedType == 'Agency'){
    if(CurrentPageKey == 1){
      activePage = <PERSONAL  />
    } 
    if(CurrentPageKey == 4){
      activePage = <PASSWORD />
    } 
    if(CurrentPageKey == 2){
      activePage =  <COMPANY />
    } 
    if(CurrentPageKey == 3 ){ 
      activePage = <OPERATIONS />
    }
    if(CurrentPageKey == 5 ){ 
        activePage = <BANK />
      }
      if(CurrentPageKey == 6 ){ 
        activePage = <PROFILE />
      }
    }else if(this.state.selectedType == 'Client'){
        if(CurrentPageKey == 1){
          activePage = <PERSONALCLIENT  />
        } 
        if(CurrentPageKey == 3){
          activePage = <PASSWORDCLIENT />
        } 
        if(CurrentPageKey == 2){
          activePage =  <COMPANYCLIENT />
        } 
        
      }

      

    return (
      <section className="backlog settings">
        <div>
          
        {this.state.activeState &&  <div className="modal Finalize">
            <h1>Finalize Account</h1>
          <div className="feild Finalize">
                  <label>PASSWORD</label>
                  <img src="./assets/img/lock.png" class="lock"/>
                  <input onChange={this.handleChange} type="text" name="pass" value={this.state.pass} placeholder="" />
                  <img src="./assets/img/eyes.png" class="eyes"/>
               </div>
               <div className="feild Finalize">
                  <label>CONFIRM</label>
                  <img src="./assets/img/lock.png" class="lock"/>
                  <input onChange={this.handleChange} type="text" name="confirm" value={this.state.confirm} placeholder="" />
               </div>
               <div className="feild dropdown">
               <label>USER TYPE</label>
                  <select name="userType" form="carform" value={this.state.userType} onChange={this.handleChange}>
                  <option value="">select type</option>
                  <option value="Agency">Agency</option>
                  <option value="Client">Client</option>
                 </select>
                 <div class="go-icon"></div>
                </div>
                {this.state.pass != '' && this.state.pass  == this.state.confirm && this.state.confirm != '' && this.state.userType != ''? <button className="account_but" color="primary" onClick={this.handleSave}>FINISH ACCOUNT</button>:''}
              
          </div>}
          
        
         


      <br></br>
       
<br></br>


          
          {/*------------------ */}

        
        
         {this.state.selectedType == 'Agency' ||  this.state.selectedType == 'Client' ?  <div> <h1 className="settings_hea">Settings</h1>

<div className="save_button">

<button className="one" onClick={this.stopPostData}>Cancel</button> 

<label class="switch">
<input type="checkbox" />
<span class="slider round">Save Chages</span>
</label></div></div>  :''}
          <ul className="ui-tabs-nav">
              {this.state.selectedType == 'Agency' ?
                this.state.TotalPage.map((items)=> <li className={items.id === this.props.dispComp ? "active" : ""} key={items.id} onClick={(value,event)=> this.CurrentPage(items.id,event)}><a>{items.name}</a></li>)
              : this.state.selectedType == 'Client' ? this.state.TotalPageClient.map((items)=> <li className={items.id === this.props.dispComp ? "active" : ""} key={items.id} onClick={(value,event)=> this.CurrentPage(items.id,event)}><a>{items.name}</a></li>) :''}
          </ul>
         {activePage}
        </div>
    </section>
    );  

     
      
  };  
};

const mapStateToProps = state => ({
  user: state.fuelSavings.user,
  bankData: state.fuelSavings.bankData,
  dispComp: state.fuelSavings.dispComp,
  stopPosting: state.fuelSavings.stopPosting
})
// const mapDispatchToProps = dispatch => ({
//   fetchData: (url, action) => dispatch(itemsFetchData(url, action)),
// })
export default connect(mapStateToProps,{finalizeAccount, stopData, displayComponent})(Settings);

