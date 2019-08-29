import React , {Component} from 'react'
import FileUpload from './../../governanace/contractComponents/FileUpload';
class Company extends Component
{
    constructor(props){
        super(props);
        this.state={
            companyName:'',
            companyType:'',
            companyIntro:'',
            description:'',
            companyURL:'',
            twitterURL:'',
            linkedURL:'',
            facebookURL:'',
            officeInCountries:'',
            noOfteamMEMBER:'',
            gitUser:'',
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
            companyName:this.state.companyName,
            companyType:this.state.companyType,
            companyIntro:this.state.companyIntro,
            description:this.state.description,
            officeInCountries:this.state.officeInCountries,
            noOfteamMEMBER:this.state.noOfteamMEMBER,
            companyURL:this.state.companyURL,
            twitterURL:this.state.twitterURL,
            linkedURL:this.state.linkedURL,
            facebookURL:this.state.facebookURL,
            gitUser:this.state.gitUser,
            
        }
        console.log(values,"companyAgenceProfile")  
      
     }
    render()

{
    return(
        <section class="center_part project">

       <div className="company">
           {/*1st column*/}
           <h1>General</h1>
     <div className="first_row">
           <div className="setcompany_fild">
                  <label>COMPANY NAME</label>
                  <input onChange={this.handleChange} type="text" name="companyName" value={this.state.companyName} placeholder="input" />
            </div>
            <div className="setcompany_fild">
                  <label>COMPANY TYPE</label>
                  <select  form="carform"  name="companyType" value={this.state.companyType} onChange={this.handleChange}>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  </select>
                  {/* <input onChange={this.handleChange} type="text" name="companyType" value={this.state.companyType} placeholder="input" /> */}
            </div>
            <div className="setcompany_fild">
                  <label>GITHUB USERNAME</label>
                  <input onChange={this.handleChange} type="text" name="gitUser" value={this.state.gitUser} placeholder="input" />
            </div>

           
           
            </div>
            {/*2nd column*/}
            <div className="secd_row">
           

            <h1>Links</h1>
            <div className="setcompany_fild">
                  <label>WEBSITE URL</label>
                  <input onChange={this.handleChange} type="text" name="companyURL" value={this.state.companyURL} placeholder="input" />
            </div>
            <div className="setcompany_fild">
                  <label>TWITTER URL</label>
                  <input onChange={this.handleChange} type="text" name="twitterURL" value={this.state.twitterURL} placeholder="input" />
            </div>
            <div className="setcompany_fild">
                  <label>LINKEDIN URL</label>
                  <input onChange={this.handleChange} type="text" name="linkedURL" value={this.state.linkedURL} placeholder="input" />
            </div>
            <div className="setcompany_fild">
                  <label>FACEBOOK URL</label>
                  <input onChange={this.handleChange} type="text" name="facebookURL" value={this.state.facebookURL} placeholder="input" />
            </div>
            <div className="setcompany_fild">
                <label>NUMBER OF TEAM MEMBERS</label>
                <input onChange={this.handleChange} type="text" name="noOfteamMEMBER" value={this.state.noOfteamMEMBER} placeholder="input" />
            </div>
            <div className="setcompany_fild">
                <label>OFFICE IN COUNTRIES</label>
                <select  form="carform"  name="officeInCountries" value={this.state.officeInCountries} onChange={this.handleChange}>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  </select>
                  
            </div>

            <button color="primary" onClick={this.handleSave}>Request Approval</button>
            </div>
            {/*3rd column*/}
            <div className="third_row">
            <h1>Descriptions</h1>
             <div className="setcompany_fild">
                  <label>COMPANY INTRODUCTION</label>
                  <input onChange={this.handleChange} type="text" name="companyIntro" value={this.state.companyIntro} placeholder="input" />
            </div>
            <div className="setcompany_fild">
                  <label>DESCRIPTION WHAT MAKES US SPECAL?</label>
                  <input onChange={this.handleChange} type="text" name="description" value={this.state.description} placeholder="input" />
            </div>
            </div>
       </div>
       </section>
    )
}
}

export default Company;
