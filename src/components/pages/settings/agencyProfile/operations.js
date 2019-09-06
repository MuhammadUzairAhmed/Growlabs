import React , {Component} from 'react'
class Operations extends Component
{
    constructor(props){
        super(props);
        this.state={
            
            projeDevLang:'',
            teamChar:'',
            teamLocation:'',
            offInCountries:'',
            minBudget:'',
            avgRate:'',
            projFrameworks:'',
            industries:'',
            projOS:'',
           
            noOfDevelopers:'',
            noOfProdManagers:'',
            teamDynamics:'',

            delayFor:true,
            active:false,
            
            languages: "string",
            development_languages: "string",
            team_characteristics: "string",
            team_location: "string",
            office_countries: "string",
            average_rate: "string",
            min_budget: "string",
            frameworks: "string",
            industries: "string",
            operating_systems: "string",
            devices: "string",
            developers: "string",
            product_managers: "string",
            other_members: "string",
            team_dynamics: "string"
            
        }
    }
    componentDidMount()
    {
       this.getData()
    }
    getData=()=>{
      fetch("https://virtserver.swaggerhub.com/GROW-Labs/GROWLabs_API/1.0.0/api_projects/agency_operations")
      .then(res => res.json())
      .then(data =>
     this.setState({
        languages: data.languages,development_languages: data.development_languages,team_characteristics: data.team_characteristics,
        team_location:data.team_location,office_countries:data.office_countries,
        average_rate:data.average_rate,min_budget:data.min_budget,frameworks:data.frameworks,industries:data.industries,
        operating_systems:data.operating_systems,
        devices:data.devices,developers:data.developers,product_managers:data.product_managers,other_members:data.other_members,team_dynamics:data.team_dynamics
})
      );
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
        const{languages,development_languages,team_characteristics,team_location,office_countries,
         average_rate,min_budget,frameworks,industries,operating_systems,
         devices,developers,product_managers,other_members,team_dynamics
      }  =this.state
        var values ={
         languages,development_languages,team_characteristics,team_location,office_countries,
         average_rate,min_budget,frameworks,industries,operating_systems,
         devices,developers,product_managers,other_members,team_dynamics
          }
        this.falseData()
        setTimeout(
           function(){this.getData(values)}.bind(this)
        ,15000)

console.log(values,'operations')
      
     }
     stopPostData(){
        this.getData()
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
            fetch('https://virtserver.swaggerhub.com/GROW-Labs/GROWLabs_API/1.0.0/api_projects/agency_operations', {
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


      
        
       <div className="personal_main oprations"  onBlur={this.handleSave}>
           {/*1st column*/}
     <div className="first_row">
           <div className="feild dropdown">
                  <label>LANGUAGES</label>
                  <select  form="carform"  name="languages" value={this.state.languages} onChange={this.handleChange}>
                  <option value="">{this.state.languages}</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  </select>
                 
                  <div class="go-icon"></div>
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
               
            </div>
            
            <div className="feild dropdown">
               
                  <label>FOUNDED PROJECT DEVELOPMENT LANGUAGES</label>
                  <select  form="carform"  name="development_languages" value={this.state.development_languages} onChange={this.handleChange}>
                  <option value="">{this.state.development_languages}</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  </select>
                  <div class="go-icon"></div>
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild dropdown">
                  <label>TEAM CHARACTERISTICS</label>
                  <select  form="carform"  name="team_characteristics" value={this.state.team_characteristics} onChange={this.handleChange}>
                  <option value="">{this.state.team_characteristics}</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  </select>    
                  <div class="go-icon"></div>
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
        </div>
    

            <div className="feild dropdown">
                  <label>TEAM LOCATION</label>
                  <select  form="carform"  name="team_location" value={this.state.team_location} onChange={this.handleChange}>
                  <option value="volvo">{this.state.team_location}</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  </select>   
                  <div class="go-icon"></div>
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
         </div>
            <div className="feild dropdown">
                  <label>OFFICES IN COUNTRIES</label>
                  <select  form="carform"  name="office_countries" value={this.state.office_countries} onChange={this.handleChange}>
                  <option value="">{this.state.office_countries}</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  </select>   
                  <div class="go-icon"></div>
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
         </div>
            <div className="feild dropdown">
                  <label>AVERAGE RATE (PER HOUR)</label>
                  <select  form="carform"  name="average_rate" value={this.state.average_rate} onChange={this.handleChange}>
                  <option value="">{this.state.average_rate}</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  </select>  
                  <div class="go-icon"></div>
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
          </div>
            <div className="feild dropdown">
                  <label>MINIMUM BUDGET</label>
                  <select name="min_budget" form="carform" value={this.state.min_budget} onChange={this.handleChange}>
                  <option value="">{this.state.min_budget}</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  </select>
                  <div class="go-icon"></div>
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

                  {/* <input onChange={this.handleChange} type="text" name="minBudget" value={this.state.minBudget} placeholder="input" /> */}
            </div>
            </div>
            {/*2nd column*/}
            <div className="secd_row">
            <div className="feild dropdown">
                  <label>PROJECT FRAMEWORKS</label>
                  <select  form="carform"  name="frameworks" value={this.state.frameworks} onChange={this.handleChange}>
                  <option value="">{this.state.frameworks}</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  </select>   
                  <div class="go-icon"></div>
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
         </div>

            
            <div className="feild dropdown">
                  <label>INDUSTRIES</label>
                  <select  form="carform"  name="industries" value={this.state.industries} onChange={this.handleChange}>
                  <option value="">{this.state.industries}</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  </select>   
                  <div class="go-icon"></div>
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
         </div>
            <div className="feild dropdown">
                  <label>PROJECT OPERATING SYSTEMS</label>
                  <select  form="carform"  name="operating_systems" value={this.state.operating_systems} onChange={this.handleChange}>
                  <option value="">{this.state.operating_systems}</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  </select>
                  <div class="go-icon"></div>
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

                  {/* <input onChange={this.handleChange} type="text"  placeholder="input" /> */}
            </div>
            <div className="feild dropdown">
                  <label>PROJECT DEVICES</label>
                  <select  form="carform"  name="devices" value={this.state.devices} onChange={this.handleChange}>
                  <option value="">{this.state.devices}</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  </select>
                  <div class="go-icon"></div>
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

                  {/* <input onChange={this.handleChange} type="text" name="development_languages" value={this.state.development_languages} placeholder="input" /> */}
            </div>
            <div className="feild dropdown">
                  <label>NO. OF DEVELOPERS</label>
                  <select  form="carform"  name="developers" value={this.state.developers} onChange={this.handleChange}>
                  <option value="">{this.state.developers}</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  </select>
                  <div class="go-icon"></div>
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

                  {/* <input onChange={this.handleChange} type="text"  placeholder="input" /> */}
            </div>
            <div className="feild dropdown">
                  <label>NO. OF PRODUCT MANAGERS</label>
                  <select  form="carform"  name="product_managers" value={this.state.product_managers} onChange={this.handleChange}>
                  <option value="">{this.state.product_managers}</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  </select>
                  <div class="go-icon"></div>
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

                  {/* <input onChange={this.handleChange} type="text"  placeholder="input" /> */}
            </div>

            <div className="feild dropdown">
                  <label>NO. OF OTHER MEMBERS</label>
                  <select  form="carform"  name="other_members" value={this.state.other_members} onChange={this.handleChange}>
                  <option value="">{this.state.other_members}</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  </select>
                  <div class="go-icon"></div>
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

                  {/* <input onChange={this.handleChange} type="text"  placeholder="input" /> */}
            </div>

            <div className="feild dropdown">
                  <label>TEAM DYNAMICS</label>
                  <select  form="carform"  name="team_dynamics" value={this.state.team_dynamics} onChange={this.handleChange}>
                  <option value="">{this.state.team_dynamics}</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  </select>
                  <div class="go-icon"></div>
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

                  {/* <input onChange={this.handleChange} type="text"  placeholder="input" /> */}
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

export default Operations;
