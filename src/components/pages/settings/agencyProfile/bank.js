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
        }
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
        console.log(values,'Bank')
      
     }
     saveData =()=>{
        valuesdata ={
            account:this.state.account,
            bic:this.state.bic,
            holder:this.state.holder,
            vat:this.state.vat,
            coc:this.state.coc,
            
            }
            this.setState({backup:valuesdata,counter:1},()=>console.log(this.state.backup,'this.state.valuesdata'))
            this.props.stopData('ok')
            this.sendData()  
     }

     sendData = () =>{
        if(this.props.stopPosting == "ok"){
        setTimeout(()=>{
                if(this.state.counter == 1){
                this.setState({data:valuesdata,counter:0},()=>{
                    fetch('https://virtserver.swaggerhub.com/GROW-Labs/GROWLabs_API/1.0.0/api_projects/agency_bank',{
                    method:'POST',
                    body: JSON.stringify(valuesdata)
                }).then(res=>{
                    this.props.BankData(valuesdata)
                    this.props.stopData('clear')
                    console.log('postData',res)})
            })}
        },15000)
        }else if(this.props.stopPosting == "clear"){
            console.log('sorry we data cannot send')}
    }

    render()
    {
    
    return(
        <section class="">

       <div className="personal_main">
           {/*2nd column*/}
          
     <div className="password_sec">
     <h1>Bank</h1>
           <div className="feild">
                  <label>BANK ACCOUNT</label>
                  <input onChange={this.handleChange} type="text" name="account" value={this.state.account} placeholder="input" onBlur={this.saveData} />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild">
                  <label>BANK ACCOUNT BIC/SWFT</label>
                  <input onChange={this.handleChange} type="text" name="bic" value={this.state.bic} placeholder="input" onBlur={this.saveData} />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild">
                  <label>BANK ACCOUNT HOLDER</label>
                  <input onChange={this.handleChange} type="text" name="holder" value={this.state.holder} placeholder="input"  onBlur={this.saveData} />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
    

            <div className="feild">
                  <label>COMPANY VAT ID</label>
                  <input onChange={this.handleChange} type="text" name="vat" value={this.state.vat} placeholder="input" onBlur={this.saveData} />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild">
                  <label>COMPANY COC NUMBER</label>
                  <input onChange={this.handleChange} type="text" name="coc" value={this.state.coc} placeholder="input" onBlur={this.saveData} />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            </div>
            <div className="Button_sec">
               <button color="primary" onClick={this.handleSave}>Request Approval</button>
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

