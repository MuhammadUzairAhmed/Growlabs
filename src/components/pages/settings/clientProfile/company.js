import React , {Component} from 'react'
import FileUpload from './../../governanace/contractComponents/FileUpload';
class Company extends Component
{
    constructor(props){
        super(props);
        this.state={
            company_name:'',
            company_type:'',
            company_intro:'',
            description_special:'',
            website:'',
            twitter:'',
            linkedin:'',
            facebook:'',
            office_countries:'',
            team_members:'',
            github:'',
            delayFor:true,
            active:false
        }
    }
    componentDidMount()
    {
       this.getCompanyData()
    }
    getCompanyData=()=>{
      fetch("https://virtserver.swaggerhub.com/GROW-Labs/GROWLabs_API/1.0.0/api_projects/client_company")
      .then(res => res.json())
      .then(data =>
      this.setState({
         company_name:data.company_name,
         company_type:data.company_type,
         company_intro:data.company_intro,
         description_special:data.description_special,
         office_countries:data.office_countries,
         team_members:data.team_members,
         linkedin:data.linkedin,
         twitter:data.twitter,
         website:data.website,
         facebook:data.facebook,
         github:data.github,
      })
      );
    }
    handleChange = (e) => {
        this.setState({
           [e.target.name]: e.target.value
        })
     }
     
     handleSave =()=>
     {
        var values ={
            company_name:this.state.company_name,
            company_type:this.state.company_type,
            company_intro:this.state.company_intro,
            description_special:this.state.description_special,
            office_countries:this.state.office_countries,
            team_members:this.state.team_members,
            linkedin:this.state.linkedin,
            twitter:this.state.twitter,
            website:this.state.website,
            facebook:this.state.facebook,
            github:this.state.github,
            
        }
        this.falseData()
        setTimeout(
           function(){this.getData(values)}.bind(this)
        ,15000)
        console.log(values,"companyAgenceProfile")  
      
     }
     stopPostData(){
      this.getCompanyData()
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
              fetch('https://virtserver.swaggerhub.com/GROW-Labs/GROWLabs_API/1.0.0/api_projects/client_company', {
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
       <div className="personal_main company" onBlur={this.handleSave}>
           {/*1st column*/}
          
     <div className="first_row">
     <h1>General</h1>
           <div className="feild ">
                  <label>COMPANY NAME</label>
                  <input onChange={this.handleChange} type="text" name="company_name" value={this.state.company_name} placeholder="input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
            </div>
            <div className="feild dropdown">
                  <label>COMPANY TYPE</label>
                  <select  form="carform"  name="company_type" value={this.state.company_type} onChange={this.handleChange}>
                  <option value="">{this.state.company_type}</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  </select>
                  <div class="go-icon"></div>
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

                  {/* <input onChange={this.handleChange} type="text" name="company_type" value={this.state.company_type} placeholder="input" /> */}
            </div>
            <div className="feild ">
                  <label>GITHUB USERNAME</label>
                  <input onChange={this.handleChange} type="text" name="github" value={this.state.github} placeholder="input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>

           
           
            </div>
            {/*2nd column*/}
            <div className="secd_row">
           

            <h1>Links</h1>
            <div className="feild ">
                  <label>WEBSITE URL</label>
                  <input onChange={this.handleChange} type="text" name="website" value={this.state.website} placeholder="input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild ">
                  <label>TWITTER URL</label>
                  <input onChange={this.handleChange} type="text" name="twitter" value={this.state.twitter} placeholder="input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild ">
                  <label>LINKEDIN URL</label>
                  <input onChange={this.handleChange} type="text" name="linkedin" value={this.state.linkedin} placeholder="input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild ">
                  <label>FACEBOOK URL</label>
                  <input onChange={this.handleChange} type="text" name="facebook" value={this.state.facebook} placeholder="input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild ">
                <label>NUMBER OF TEAM MEMBERS</label>
                <input onChange={this.handleChange} type="text" name="team_members" value={this.state.team_members} placeholder="input" />
                <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild dropdown">
                <label>OFFICE IN COUNTRIES</label>
                <select  form="carform"  name="office_countries" value={this.state.office_countries} onChange={this.handleChange}>
                  <option value="">{this.state.office_countries}</option>
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
            <h1>description_specials</h1>
             <div className="feild textarea">
              <label>COMPANY INTRODUCTION</label>
              <textarea class="form-control" placeholder="input" rows="6" id="comment" name="company_intro" value={this.state.company_intro} onChange={this.handleChange}></textarea>   
             <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild textarea">
              <label>description_special WHAT MAKES US SPECAL?</label>
              <textarea class="form-control" placeholder="input" rows="6" id="comment" name="description_special" value={this.state.description_special} onChange={this.handleChange}></textarea> 
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
