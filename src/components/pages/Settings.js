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
import { finalizeAccount } from '../../actions/fuelSavingsActions';

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
      activeModal:'modal'
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
   var values ={
     password: this.state.pass,
     confirm: this.state.confirm,
     userType: this.state.userType
   }
   console.log(values,'typess')
   this.setState({activeModal:'modal'})
   this.props.finalizeAccount(values)
 }
 handleSelect =()=>{
   if(this.state.activeModal=='modal active'){
   this.setState({activeModal:'modal'})}
   else if(this.state.activeModal=='modal'){
   this.setState({activeModal:'modal active'})}
 }
  render(){
    const CurrentPageKey = this.state.activePage
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
          
          <div className="modal Finalize">
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
                <button className="cancel_but" color="primary" onClick={this.handleSelect}>x</button>
          </div>
          
          <button color="primary" onClick={this.handleSelect}>Select Account</button>

        
          {/*Invite new developer */}
          <div className="modal Invite">
            <h1>Invite new developer</h1>
            <div className="feild dropdown Invite">
               <label>DEVELOPER NAME</label>
                  <select name="userType" form="carform" value={this.state.userType} onChange={this.handleChange}>
               
                  <option value="Agency">INput</option>
                  <option value="Client">WICK</option>
                 </select>
                 <div class="go-icon"></div>
                 <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
                </div>
               <div className="feild Invite">
                  <label>DEVELOPER EMAIL</label>
                  <input onChange={this.handleChange} type="text" name="confirm" value={this.state.confirm} placeholder="INput" />
                  <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

               </div>
               <button className="account_but" color="primary" onClick={this.handleSave}>SEND TEST TO DEVELOPER</button>
            </div>

          <br ></br>
          {/*manage test */}
          <div className="modal Test">
            <h1>Add New Test</h1>
            <div className="feild dropdown Invite">
               <label>Test</label>
                  <select name="userType" form="carform" value={this.state.userType} onChange={this.handleChange}>
                  <option value=""></option>
                  <option value="Agency">JOHN</option>
                  <option value="Client">WICK</option>
                 </select>
                 <div class="go-icon"></div>
                 <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

                </div>
               <div className="feild Invite">
                  <label>RESULTS</label>
                  <input onChange={this.handleChange} type="number" name="confirm" value={this.state.confirm} placeholder="Felix" min="0" max="100"/>
                  <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

               </div>
               <div className="feild">
                <label>TEST RESULT FILE</label>
                <FileUpload getInput={this.handleBanner} getInput1='modal' />
                <p className="Upload_text">Drag and Drop here</p>
            </div>
            <button className="account_but" color="primary" onClick={this.handleSave}>ADD TEST</button>
          </div>

          <br></br>

          {/*manage testinomials */}
          <div className="modal Testinomials">
            <h1>Client Testinomials request</h1>
            <div className="feild Invite">
                  <label>CLIENT NAME</label>
                  <input onChange={this.handleChange} type="text" name="confirm" value={this.state.confirm} placeholder="Input" />
                  <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

               </div>
               <div className="feild Invite">
                  <label>CLIENT COMPANY</label>
                  <input onChange={this.handleChange} type="text" name="confirm" value={this.state.confirm} placeholder="Input" min="0" max="100"/>
                  <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

               </div>
               <div className="feild Invite">
                  <label>CLIENT WEBSITE</label>
                  <input onChange={this.handleChange} type="text" name="confirm" value={this.state.confirm} placeholder="Input" min="0" max="100"/>
                  <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

               </div>
               <div className="feild Invite">
                  <label>CLIENT EMAIL</label>
                  <input onChange={this.handleChange} type="text" name="confirm" value={this.state.confirm} placeholder="Input" min="0" max="100"/>
                  <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

               </div>
               <div className="feild Invite">
                  <label>CLIENT ROLE</label>
                  <input onChange={this.handleChange} type="text" name="confirm" value={this.state.confirm} placeholder="Input" min="0" max="100"/>
                  <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

               </div>
               <div className="feild Invite">
                <label>CLIENT LOGO</label>
                <FileUpload getInput={this.handleBanner} getInput1='modal' />
                <p className="Upload_text">Drag and Drop here</p>
            </div>
            <button class="account_but" color="primary" onClick={this.handleSave}>REQUEST</button>
          </div>


      <br></br>
          {/*manage add portfolio */}
          <div className="modal">
            <h1>Add New Portfolio</h1>
            <div className="feild Invite">
                  <label>CLIENT PROJECT TITLE</label>
                  <input onChange={this.handleChange} type="number" name="confirm" value={this.state.confirm} placeholder="Input" min="0" max="100"/>
                  <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

               </div>
               <div className="feild Invite">
                  <label>PROJECT LINK</label>
                  <input onChange={this.handleChange} type="number" name="confirm" value={this.state.confirm} placeholder="Input" min="0" max="100"/>
                  <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

               </div>
               <div className="feild dropdown Invite">
               <label>PROJECT TYPE</label>
                  <select name="userType" form="carform" value={this.state.userType} onChange={this.handleChange}>
                  <option value="">Input</option>
                  <option value="Agency">JOHN</option>
                  <option value="Client">WICK</option>
                 </select>
                 <div class="go-icon"></div>
                 <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

                </div>
                <div className="feild dropdown Invite">
               <label>OPERATING SYSTEM</label>
                  <select name="userType" form="carform" value={this.state.userType} onChange={this.handleChange}>
                  <option value="">Input</option>
                  <option value="Agency">JOHN</option>
                  <option value="Client">WICK</option>
                 </select>

                 <div class="go-icon"></div>
                 <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

                </div>
                <div className="feild dropdown Invite">
               <label>PROJECT FEATURES</label>
                  <select name="userType" form="carform" value={this.state.userType} onChange={this.handleChange}>
                  <option value="">Input</option>
                  <option value="Agency">JOHN</option>
                  <option value="Client">WICK</option>
                 </select>
                 <div class="go-icon"></div>
                 <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

                </div>
                <div className="feild dropdown Invite">
               <label>PROJECT INDUSTRY</label>
                  <select name="userType" form="carform" value={this.state.userType} onChange={this.handleChange}>
                  <option value="">Input</option>
                  <option value="Agency">JOHN</option>
                  <option value="Client">WICK</option>
                 </select>
                 <div class="go-icon"></div>
                 <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

                </div>
                <div className="feild dropdown Invite">
                <label>PROJECT TECHNOLOGIES</label>
                  <select name="userType" form="carform" value={this.state.userType} onChange={this.handleChange}>
                  <option value="">Input</option>
                  <option value="Agency">JOHN</option>
                  <option value="Client">WICK</option>
                 </select>
                 <div class="go-icon"></div>
                 <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

                </div>
                <div className="feild dropdown Invite">
               <label>PROJECT QUOTE</label>
                  <select name="userType" form="carform" value={this.state.userType} onChange={this.handleChange}>
                  <option value="">Input</option>
                  <option value="Agency">JOHN</option>
                  <option value="Client">WICK</option>
                 </select>
                 <div class="go-icon"></div>
                 <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

                </div>
                <div className="feild dropdown Invite">
               <label>PROJECT DURATION</label>
                  <select name="userType" form="carform" value={this.state.userType} onChange={this.handleChange}>
                  <option value="">Input</option>
                  <option value="Agency">JOHN</option>
                  <option value="Client">WICK</option>
                 </select>
                 <div class="go-icon"></div>
                 <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

                </div>
               <div className="feild">
                <label>CLIENT LOGO</label>
                <FileUpload getInput={this.handleBanner} getInput1='modal' />
                <p className="Upload_text">Drag and Drop here</p>
            </div>
            <div className="feild dropdown Invite">
               <label>IS THIS PORTFOLIO ITEM A USECASE?</label>
                  <select name="userType" form="carform" value={this.state.userType} onChange={this.handleChange}>
                  <option value="">Input</option>
                  <option value="Agency">JOHN</option>
                  <option value="Client">WICK</option>
                 </select>
                 <div class="go-icon"></div>
                 <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

                </div>
            <button class="account_but" color="primary" onClick={this.handleSave}>save</button>
          </div>
<br></br>


          {/*client add testinomials */}
          <div className="modal">
            <h1>Client Add Testinomials</h1>
            <div className="feild Invite">
                  <label>CLIENT NAME</label>
                  <input onChange={this.handleChange} type="text" name="confirm" value={this.state.confirm} placeholder="Input" min="0" max="100"/>
                  <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

               </div>
               <div className="feild Invite">
                  <label>CLIENT COMPANY</label>
                  <input onChange={this.handleChange} type="text" name="confirm" value={this.state.confirm} placeholder="Input" min="0" max="100"/>
                  <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

               </div>
               <div className="feild Invite">
                  <label>COMPANY WEBSITE</label>
                  <input onChange={this.handleChange} type="text" name="confirm" value={this.state.confirm} placeholder="Input" min="0" max="100"/>
                  <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

               </div>
               <div className="feild Invite">
                  <label>CLIENT EMAIL</label>
                  <input onChange={this.handleChange} type="text" name="confirm" value={this.state.confirm} placeholder="Input" min="0" max="100"/>
                  <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

               </div>
               <div className="feild Invite">
                  <label>CLIENT ROLE</label>
                  <input onChange={this.handleChange} type="text" name="confirm" value={this.state.confirm} placeholder="Input" min="0" max="100"/>
                  <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

               </div>
                <div className="feild Invite">
                <label>CLIENT LOGO</label>
                <FileUpload getInput={this.handleBanner} getInput1='modal' />
                <p className="Upload_text">Drag and Drop here</p>
            </div>
           
            <h2 class="no-span">Review</h2>
            <div className="feild dropdown Invite">
               <label>PROJECT TYPE</label>
                  <select name="userType" form="carform" value={this.state.userType} onChange={this.handleChange}>
                  <option value="">Input</option>
                  <option value="Agency">JOHN</option>
                  <option value="Client">WICK</option>
                 </select>
                 <div class="go-icon"></div>
                 <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

              </div>
              <div className="rating textarea">
                  <label>REVIEW</label>
                  <textarea class="form-control" placeholder="input" rows="6" id="comment"></textarea>
                  <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

               </div>
               <div className="rating_main">
                  <label>PRICE RATING</label>
                  <div class="rating">
<span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
</div>               </div>
               <div className="rating_main">
                  <label>QUALITY RATING</label>
                  <div class="rating">
<span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
</div>
               </div>
               <div className="rating_main">
                  <label>PARTNERSHIP RATING</label>
                  <div class="rating">
<span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
</div>
               </div>
               <div className="rating_main">
                  <label>SCHEDULE RATING</label>
                  <div class="rating">
<span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
</div>               </div>
             
            <button class="account_but" color="primary" onClick={this.handleSave}>REQUEST</button>
          </div>
          {/*------------------ */}

          <h1 className="settings_hea">Settings</h1>

         <div className="save_button">

         <button className="one">Cancel</button>

         <label class="switch">
  <input type="checkbox" />
  <span class="slider round">Save Chages</span>
</label>
        

         </div> 
          <ul className="ui-tabs-nav">
              {this.state.selectedType == 'Agency' ?
                this.state.TotalPage.map((items)=> <li className={items.id === this.state.activePage ? "active" : ""} key={items.id} onClick={(value,event)=> this.CurrentPage(items.id,event)}><a>{items.name}</a></li>)
              : this.state.selectedType == 'Client' ? this.state.TotalPageClient.map((items)=> <li className={items.id === this.state.activePage ? "active" : ""} key={items.id} onClick={(value,event)=> this.CurrentPage(items.id,event)}><a>{items.name}</a></li>) :''}
          </ul>
         {activePage}
        </div>
    </section>
    );  

     
      
  };  
};

const mapStateToProps = state => ({
  user: state.fuelSavings.user,
 
})
// const mapDispatchToProps = dispatch => ({
//   fetchData: (url, action) => dispatch(itemsFetchData(url, action)),
// })
export default connect(mapStateToProps,{finalizeAccount})(Settings);
