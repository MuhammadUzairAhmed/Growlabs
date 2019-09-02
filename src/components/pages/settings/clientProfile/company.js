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
        <section class="">

       <div className="personal_main company">
           {/*1st column*/}
          
     <div className="first_row">
     <h1>General</h1>
           <div className="feild ">
                  <label>COMPANY NAME</label>
                  <input onChange={this.handleChange} type="text" name="companyName" value={this.state.companyName} placeholder="input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
            </div>
            <div className="feild dropdown">
                  <label>COMPANY TYPE</label>
                  <select  form="carform"  name="companyType" value={this.state.companyType} onChange={this.handleChange}>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  </select>
                  <div class="go-icon"></div>
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

                  {/* <input onChange={this.handleChange} type="text" name="companyType" value={this.state.companyType} placeholder="input" /> */}
            </div>
            <div className="feild ">
                  <label>GITHUB USERNAME</label>
                  <input onChange={this.handleChange} type="text" name="gitUser" value={this.state.gitUser} placeholder="input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>

           
           
            </div>
            {/*2nd column*/}
            <div className="secd_row">
           

            <h1>Links</h1>
            <div className="feild ">
                  <label>WEBSITE URL</label>
                  <input onChange={this.handleChange} type="text" name="companyURL" value={this.state.companyURL} placeholder="input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild ">
                  <label>TWITTER URL</label>
                  <input onChange={this.handleChange} type="text" name="twitterURL" value={this.state.twitterURL} placeholder="input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild ">
                  <label>LINKEDIN URL</label>
                  <input onChange={this.handleChange} type="text" name="linkedURL" value={this.state.linkedURL} placeholder="input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild ">
                  <label>FACEBOOK URL</label>
                  <input onChange={this.handleChange} type="text" name="facebookURL" value={this.state.facebookURL} placeholder="input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild ">
                <label>NUMBER OF TEAM MEMBERS</label>
                <input onChange={this.handleChange} type="text" name="noOfteamMEMBER" value={this.state.noOfteamMEMBER} placeholder="input" />
                <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild dropdown">
                <label>OFFICE IN COUNTRIES</label>
                <select  form="carform"  name="officeInCountries" value={this.state.officeInCountries} onChange={this.handleChange}>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  </select>
                  <div class="go-icon"></div>
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>

            </div>
            {/*3rd column*/}
            <div className="third_row">
            <h1>Descriptions</h1>
             <div className="feild textarea">
              <label>COMPANY INTRODUCTION</label>
              <textarea class="form-control" placeholder="input" rows="6" id="comment"></textarea>   
             <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild textarea">
              <label>DESCRIPTION WHAT MAKES US SPECAL?</label>
              <textarea class="form-control" placeholder="input" rows="6" id="comment"></textarea> 
             <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            </div>
           
            <div class="Button_sec secd_comp"><button color="primary">Request Approval</button><button class="secd_button">Add google Authenticator</button><p>Request Account Removal</p></div>

       </div>
       </section>
    )
}
}

export default Company;
