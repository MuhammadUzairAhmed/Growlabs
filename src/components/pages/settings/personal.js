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
        
    <div className="agency">
            <div className="left_side active">
           
               <div className="profile">
                  {/* {this.state.saveId
                     ? <img src={this.state.image != '' ? this.state.image : './assets/img/user2.png'} alt='sorry' className={} />
                     : <img src={this.state.image != '' ? this.state.image : './assets/img/close.png'} alt='sorry' />} */}
                <img src={this.state.image != '' ? this.state.image : './assets/img/user2.png'} alt='sorry' className={this.state.image != '' ? "upload_user":"blank_user"} />
        <div className="proflie_upload">
               <FileUpload getInput='PS' getInput1='PS' />
              </div>
               </div>
               <div className="feild half">
                  <label>first name</label>
                  <input onChange={this.handleChange} type="text" name="fname" value={this.state.fname} placeholder="Name" />
               </div>
               <div className="feild half">
                  <label>Last Name </label>
                  <input onChange={this.handleChange} type="text" name="lastname" value={this.state.lastname} placeholder="Last name" />
               </div>
               <div className="feild half">
                     <label>DATE OF BIRTH</label>
                     <MaskedInput
                     name="dob"
                     onChange={this.handleChange}
                     guide={true}
                     mask={[ /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                     placeholder="00-00-0000"
                     />
               </div>
               <div className="feild half">
                  <label>zipcode</label>
                  <input onChange={this.handleChange} type="text" name="zipcode" value={this.state.zipcode} placeholder="Felix" />
               </div>
               <div className="feild">
                  <label>mail</label>
                  <input onChange={this.handleChange} type="text" name="mail" value={this.state.mail} placeholder="Felix" />
               </div>
               <div className="feild">
                  <label>Phone</label>
                  <input onChange={this.handleChange} type="text" name="phone" value={this.state.phone} placeholder="Felix" />
               </div>

               <div className="feild">
                  <label>skype</label>
                  <input onChange={this.handleChange} type="text" name="skype" value={this.state.skype} placeholder="Felix" />
               </div>
               <div className="feild">
                  <label>address</label>
                  <input onChange={this.handleChange} type="text" name="address" value={this.state.address} placeholder="Felix" />
               </div>
               <div className="feild">
                  <label>city</label>
                  <input onChange={this.handleChange} type="text" name="city" value={this.state.city} placeholder="felix" />
               </div>
               <div className="feild">
                  <label>country</label>
                  <input onChange={this.handleChange} type="text" name="country" value={this.state.country} placeholder="Felix" />
               </div>
               <button color="primary" onClick={this.handleSave}>Save</button>

            </div>


         </div>
    )
}
}
export default Personal