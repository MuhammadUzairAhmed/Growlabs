import React , {Component} from 'react'
class Operations extends Component
{
    constructor(props){
        super(props);
        this.state={
            languages:'',
            projeDevLang:'',
            teamChar:'',
            teamLocation:'',
            offInCountries:'',
            minBudget:'',
            avgRate:'',
            projFrameworks:'',
            industries:'',
            projOS:'',
            projeDevices:'',
            noOfDevelopers:'',
            noOfProdManagers:'',
            teamDynamics:'',
            noOfOthMembers:'',
            
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
            languages:this.state.languages,
            projeDevLang:this.state.projeDevLang,
            teamChar:this.state.teamChar,
            teamLocation:this.state.teamLocation,
            offInCountries:this.state.offInCountries,
            minBudget:this.state.minBudget,
            avgRate:this.state.avgRate,
            projOS:this.state.projOS,
            projeDevices:this.state.projeDevices,
            noOfDevelopers:this.state.noOfDevelopers,
            noOfProdManagers:this.state.noOfProdManagers,
            teamDynamics:this.state.teamDynamics,
            noOfOthMembers: this.state.noOfOthMembers
           
        }
console.log(values,'operations')
      
     }
    render()

{
    return(
        <section class="">




      
        
       <div className="personal_main oprations">
           {/*1st column*/}
     <div className="first_row">
           <div className="feild dropdown">
                  <label>LANGUAGES</label>
                  <select  form="carform"  name="noOfOthMembers" value={this.state.noOfOthMembers} onChange={this.handleChange}>
                  <option value="volvo">Input</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  </select>
                 
                  <div class="go-icon"></div>
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
               
            </div>
            
            <div className="feild dropdown">
               
                  <label>FOUNDED PROJECT DEVELOPMENT LANGUAGES</label>
                  <select  form="carform"  name="projeDevices" value={this.state.projeDevices} onChange={this.handleChange}>
                  <option value="volvo">Input</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  </select>
                  <div class="go-icon"></div>
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild dropdown">
                  <label>TEAM CHARACTERISTICS</label>
                  <select  form="carform"  name="projeDevices" value={this.state.projeDevices} onChange={this.handleChange}>
                  <option value="volvo">Input</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  </select>    
                  <div class="go-icon"></div>
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
        </div>
    

            <div className="feild dropdown">
                  <label>TEAM LOCATION</label>
                  <select  form="carform"  name="projeDevices" value={this.state.projeDevices} onChange={this.handleChange}>
                  <option value="volvo">Input</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  </select>   
                  <div class="go-icon"></div>
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
         </div>
            <div className="feild dropdown">
                  <label>OFFICES IN COUNTRIES</label>
                  <select  form="carform"  name="projeDevices" value={this.state.projeDevices} onChange={this.handleChange}>
                  <option value="volvo">Input</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  </select>   
                  <div class="go-icon"></div>
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
         </div>
            <div className="feild dropdown">
                  <label>AVERAGE RATE (PER HOUR)</label>
                  <select  form="carform"  name="projeDevices" value={this.state.projeDevices} onChange={this.handleChange}>
                  <option value="volvo">Input</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  </select>  
                  <div class="go-icon"></div>
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
          </div>
            <div className="feild dropdown">
                  <label>MINIMUM BUDGET</label>
                  <select name="minBudget" form="carform" value={this.state.minBudget} onChange={this.handleChange}>
                  <option value="volvo">Input</option>
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
                  <select  form="carform"  name="projeDevices" value={this.state.projeDevices} onChange={this.handleChange}>
                  <option value="volvo">Input</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  </select>   
                  <div class="go-icon"></div>
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
         </div>

            
            <div className="feild dropdown">
                  <label>INDUSTRIES</label>
                  <select  form="carform"  name="projeDevices" value={this.state.projeDevices} onChange={this.handleChange}>
                  <option value="volvo">Input</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  </select>   
                  <div class="go-icon"></div>
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
         </div>
            <div className="feild dropdown">
                  <label>PROJECT OPERATING SYSTEMS</label>
                  <select  form="carform"  name="projOS" value={this.state.projOS} onChange={this.handleChange}>
                  <option value="volvo">Input</option>
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
                  <select  form="carform"  name="projeDevices" value={this.state.projeDevices} onChange={this.handleChange}>
                  <option value="volvo">Input</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  </select>
                  <div class="go-icon"></div>
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

                  {/* <input onChange={this.handleChange} type="text" name="projeDevices" value={this.state.projeDevices} placeholder="input" /> */}
            </div>
            <div className="feild dropdown">
                  <label>NO. OF DEVELOPERS</label>
                  <select  form="carform"  name="noOfDevelopers" value={this.state.noOfDevelopers} onChange={this.handleChange}>
                  <option value="volvo">Input</option>
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
                  <select  form="carform"  name="noOfProdManagers" value={this.state.noOfProdManagers} onChange={this.handleChange}>
                  <option value="volvo">Input</option>
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
                  <select  form="carform"  name="noOfOthMembers" value={this.state.noOfOthMembers} onChange={this.handleChange}>
                  <option value="volvo">Input</option>
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
                  <select  form="carform"  name="teamDynamics" value={this.state.teamDynamics} onChange={this.handleChange}>
                  <option value="volvo">Input</option>
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
               <button color="primary" onClick={this.handleSave}>Request Approval</button>
               <button className="secd_button">Add google Authenticator</button>
             <p>Request Account Removal</p>
               </div>
       </div>
       </section>
    )
}
}

export default Operations;