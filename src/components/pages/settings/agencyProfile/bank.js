import React , {Component} from 'react'
import { connect } from "react-redux";
import { BankData,stopData } from './../../../../actions/fuelSavingsActions';

var valuesdata;
class Bank extends Component
{
    constructor(props){
        super(props);
        this.state={
            account:'',
            bic:'',
            holder:'',
            vat:'',
            coc:'',
            backup:'',
            data:'',
            counter:0,
            delayFor:true,
            active:false
        }
    }
    
    getOldData=()=>{
      fetch("http://localhost/growlabs/api_projects/agency_bank", {
        headers: {'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMTA1IiwidXNlcl9lbWFpbCI6InRlc3Rjb21wYW55QGdyb3dsYWJzLnRlY2giLCJleHBpcmF0aW9uIjoxNTY5MzkwOTkyLCJzZWNyZXQiOiIwMjIxOWE2OWU4MjhhZDY2OTNiMDc3ZDExMzQ0Mzk3ZTY5MTUxMGQ2MGUyMDRkNjFkNjJjYzdhYWJlODIyN2NmNjhkMmZkMGM0ZjllOWIzNDZkM2YwYjU2ZDc0YTZmMGI1M2M3YWQ2YTIzOWNlYzk1NWRhYTJkZWJkNTBkMjdkMCJ9.ePj6Wnt3slJA6lNMCt8s68VmsVKGyOlSe0BhiC6SZ9s'}
      })
      .then(res => res.json())
      .then(data =>{
            this.setState({account:data.account,bic:data.bic,holder:data.holder,vat:data.holder,coc:data.coc})}
      );
    }
    componentDidMount(){
      this.getOldData()
      //   if(this.props.bankData != '')
      //   {   const { account,bic,holder,vat,coc } = this.props.bankData;
      //       this.setState({account,bic,holder,vat,coc})
      //   }
    }
    handleChange = (e) => {
        this.setState({
           [e.target.name]: e.target.value
        })
     }
     handleBanner =(name)=>{
        this.setState({banner: name[0].acceptedFile})
         
     }
     handelVideo =(name)=>{
        this.setState({video: name[0].acceptedFile}) 
     }
     handleSave =()=>
     {
        var values ={
            account:this.state.account,
            bic:this.state.bic,
            holder:this.state.holder,
            vat:this.state.vat,
            coc:this.state.coc,
            
        }
        this.falseData()
        setTimeout(
           function(){this.getData(values)}.bind(this)
        ,15)
        console.log(values,'Bank')
      
     }
    stopPostData(){
      this.getOldData()
        this.setState({
           delayFor:false,
           active:false
          })
       }
       falseData(){
          this.setState({
           delayFor:true,
           active:true
          })
       }
  
       getData(values){
        if(this.state.delayFor){
              fetch('http://localhost/growlabs/api_projects/agency_bank', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMTA1IiwidXNlcl9lbWFpbCI6InRlc3Rjb21wYW55QGdyb3dsYWJzLnRlY2giLCJleHBpcmF0aW9uIjoxNTY5MzkwOTkyLCJzZWNyZXQiOiIwMjIxOWE2OWU4MjhhZDY2OTNiMDc3ZDExMzQ0Mzk3ZTY5MTUxMGQ2MGUyMDRkNjFkNjJjYzdhYWJlODIyN2NmNjhkMmZkMGM0ZjllOWIzNDZkM2YwYjU2ZDc0YTZmMGI1M2M3YWQ2YTIzOWNlYzk1NWRhYTJkZWJkNTBkMjdkMCJ9.ePj6Wnt3slJA6lNMCt8s68VmsVKGyOlSe0BhiC6SZ9s'
                },
                 body: JSON.stringify(values)
              }).then((response) => {
                 console.log(response,"resData")
                 return response.text();
              }).then((data)=> {
                 console.log('Created List:', data);
                 //alert('as')
              });
           
              
           }
       }

    render()
    {
    
    return(
        <section class="">
             <div className="save_button">
                  <button className="one" onClick={this.stopPostData.bind(this)}>Cancel</button> 
                  <label class={this.state.active?'active switch':'switch'}>
                  <input type="checkbox" checked={this.state.active?'checked':''}/>
                        <span class="slider round">Save Changes</span>
                  </label>
            </div>

       <div className="personal_main"  onBlur={this.handleSave}>
           {/*2nd column*/}
          
     <div className="password_sec">
     <h1>Bank</h1>
           <div className="feild">
                  <label>BANK ACCOUNT</label>
                  <input onChange={this.handleChange} className={this.state.account != ''? 'active':''} type="text" name="account" value={this.state.account} placeholder="input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild">
                  <label>BANK ACCOUNT BIC/SWFT</label>
                  <input onChange={this.handleChange} type="text" className={this.state.bic != ''? 'active':''} name="bic" value={this.state.bic} placeholder="input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild">
                  <label>BANK ACCOUNT HOLDER</label>
                  <input onChange={this.handleChange} type="text" className={this.state.holder != ''? 'active':''} name="holder" value={this.state.holder} placeholder="input"  />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
    

            <div className="feild">
                  <label>COMPANY VAT ID</label>
                  <input onChange={this.handleChange} type="text" className={this.state.vat != ''? 'active':''} name="vat" value={this.state.vat} placeholder="input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild">
                  <label>COMPANY COC NUMBER</label>
                  <input onChange={this.handleChange} type="text" className={this.state.coc != ''? 'active':''} name="coc" value={this.state.coc} placeholder="input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            </div>
            <div className="Button_sec">
               <button color="primary">Request Approval</button>
               <button className="secd_button">Add google Authenticator</button>
             <p>Request Account Removal</p>
               </div>

       </div>
      
       </section>
    )
}
}
const mapStateToProps = state => ({
    stopPosting: state.fuelSavings.stopPosting,
    bankData: state.fuelSavings.bankData
  })
export default connect(mapStateToProps,{BankData,stopData})(Bank);

