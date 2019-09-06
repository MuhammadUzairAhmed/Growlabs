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
    
    componentWillReceiveProps(nextprops)
    {
       fetch("https://virtserver.swaggerhub.com/GROW-Labs/GROWLabs_API/1.0.0/api_projects/agency_bank")
       .then(res => res)
       .then(data =>
          console.log(data,'xyz')
       );
    }
    componentDidMount(){
        if(this.props.bankData != '')
        {   const { account,bic,holder,vat,coc } = this.props.bankData;
            this.setState({account,bic,holder,vat,coc})
        }
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
        ,15000)
        console.log(values,'Bank')
      
     }
    stopPostData(){
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
              fetch('https://virtserver.swaggerhub.com/GROW-Labs/GROWLabs_API/1.0.0/api_projects/agency_bank', {
                 method: 'post',
                 body: JSON.stringify(values)
              }).then((response) => {
                 console.log(response,"resData")
                 return response.json();
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
                        <span class="slider round">Save Chages</span>
                  </label>
            </div>

       <div className="personal_main"  onBlur={this.handleSave}>
           {/*2nd column*/}
          
     <div className="password_sec">
     <h1>Bank</h1>
           <div className="feild">
                  <label>BANK ACCOUNT</label>
                  <input onChange={this.handleChange} type="text" name="account" value={this.state.account} placeholder="input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild">
                  <label>BANK ACCOUNT BIC/SWFT</label>
                  <input onChange={this.handleChange} type="text" name="bic" value={this.state.bic} placeholder="input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild">
                  <label>BANK ACCOUNT HOLDER</label>
                  <input onChange={this.handleChange} type="text" name="holder" value={this.state.holder} placeholder="input"  />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
    

            <div className="feild">
                  <label>COMPANY VAT ID</label>
                  <input onChange={this.handleChange} type="text" name="vat" value={this.state.vat} placeholder="input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild">
                  <label>COMPANY COC NUMBER</label>
                  <input onChange={this.handleChange} type="text" name="coc" value={this.state.coc} placeholder="input" />
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

