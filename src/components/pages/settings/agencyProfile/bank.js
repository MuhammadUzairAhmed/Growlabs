import React , {Component} from 'react'
class Bank extends Component
{
    constructor(props){
        super(props);
        this.state={
            bankAccount:'',
            bic_swift:'',
            accHolder:'',
            vatId:'',
            cocNumber:'',
            
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
            bankAccount:this.state.bankAccount,
            bic_swift:this.state.bic_swift,
            accHolder:this.state.accHolder,
            vatId:this.state.vatId,
            cocNumber:this.state.cocNumber,
            
        }
console.log(values,'Bank')
      
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
                  <input onChange={this.handleChange} type="text" name="bankAccount" value={this.state.bankAccount} placeholder="input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild">
                  <label>BANK ACCOUNT BIC/SWFT</label>
                  <input onChange={this.handleChange} type="text" name="bic_swift" value={this.state.bic_swift} placeholder="input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild">
                  <label>BANK ACCOUNT HOLDER</label>
                  <input onChange={this.handleChange} type="text" name="accHolder" value={this.state.accHolder} placeholder="input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
    

            <div className="feild">
                  <label>COMPANY VAT ID</label>
                  <input onChange={this.handleChange} type="text" name="vatId" value={this.state.vatId} placeholder="input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild">
                  <label>COMPANY COC NUMBER</label>
                  <input onChange={this.handleChange} type="text" name="cocNumber" value={this.state.cocNumber} placeholder="input" />
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

export default Bank;
