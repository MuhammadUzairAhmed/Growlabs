import React, {Component} from 'react';
import MaskedInput from 'react-text-mask'
import FileUpload from './../governanace/contractComponents/FileUpload'
class Personal extends Component
{
    constructor(props) {
        super(props)
        this.state = {
           
           formId: null,
           formMainId: null,
           formChildId: null,
           childKey: '',
           fname: '',
           address: '',
           skype: '',
           phone: '',
           mail: '',
           zipcode: '',
           lastname: '',
           dob:'',
           image: '',
           city:'',
           country:'',
           formSubmitted: false,
           image:''
           
           
        }
     }
     
    handleChange = (e) => {
        this.setState({
           [e.target.name]: e.target.value
        })
     }

     handleSave =()=>
     {
         var values ={
            first_name : this.state.fname,
            last_name :this.state.lastname,
            dob : this.state.dob,
            skype : this.state.skype,
            email :this.state.mail,
            phone :this.state.phone,
            address :this.state.address,
            zipcode : this.state.zipcode,
            city : this.state.city,   
            country : this.state.country        
         }
         this.props.getData(values)
         console.log(values,'personal')
      
     }
    render()
    {
        return(
        
    <div className="personal_main">
           
           
               <div className="personal_user">
                  {/* {this.state.saveId
                     ? <img src={this.state.image != '' ? this.state.image : './assets/img/user2.png'} alt='sorry' className={} />
                     : <img src={this.state.image != '' ? this.state.image : './assets/img/close.png'} alt='sorry' />} */}
                <img src={this.state.image != '' ? this.state.image : './assets/img/new_user.png'} alt='sorry' className={this.state.image != '' ? "upload_user":"blank_user"} />
            <div className="personal_upload">
               <FileUpload getInput='PS' getInput1='PS' />
              </div>
               </div>

               <div className="personal_flt">
               <h1>Genernal</h1>
               <div className="feild ">
                  <label>First Name</label>
                  <input onChange={this.handleChange} type="text" name="fname" value={this.state.fname} placeholder="Input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
               </div>
               <div className="feild ">
                  <label>Last Name </label>
                  <input onChange={this.handleChange} type="text" name="lastname" value={this.state.lastname} placeholder="Input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
               </div>
               <div className="feild ">
                     <label>DATE OF BIRTH Date </label>
                     <MaskedInput
                     name="dob"
                     onChange={this.handleChange}
                     guide={true}
                     mask={[ /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                     placeholder="00-00-0000"
                     />
                                       <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

               </div>
               <div className="feild ">
                  <label>Skype</label>
                  <input onChange={this.handleChange} type="text" name="zipcode" value={this.state.zipcode} placeholder="Input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
               </div>
               <div className="feild">
                  <label>Email address</label>
                  <input onChange={this.handleChange} type="text" name="mail" value={this.state.mail} placeholder="Input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
               </div>
               
               </div>
 
               <div className="personal_rgt">

               <div className="feild">
                  <label>Phone</label>
                  <input onChange={this.handleChange} type="text" name="phone" value={this.state.phone} placeholder="Input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
               </div>

               <div className="feild">
               <h1>Adress</h1>
                  <label>Adress</label>
                  <input onChange={this.handleChange} type="text" name="skype" value={this.state.skype} placeholder="Input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
               </div>
               <div className="feild">
                  <label>Zipcode</label>
                  <input onChange={this.handleChange} type="text" name="address" value={this.state.address} placeholder="Input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
               </div>
               <div className="feild">
                  <label>city</label>
                  <input onChange={this.handleChange} type="text" name="city" value={this.state.city} placeholder="Input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
               </div>
               <div className="feild">
                  <label>country</label>
                  <input onChange={this.handleChange} type="text" name="country" value={this.state.country} placeholder="Input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
               </div>
               </div>


               <div className="Button_sec">
               <button color="primary" onClick={this.handleSave}>Request Approval</button>

               <button className="secd_button">Add google Authenticator</button>
             <p>Request Account Removal</p>
               </div>
           


         </div>
    )
}
}
export default Personal