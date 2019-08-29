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
        <section class="center_part project">




        Type a message here
        
       <div className="company">
           {/*1st column*/}
           <h1>General</h1>
     <div className="first_row">
           <div className="setcompany_fild">
                  <label>LANGUAGES</label>
                  <input onChange={this.handleChange} type="text" name="languages" value={this.state.languages} placeholder="input" />
            </div>
            <div className="setcompany_fild">
                  <label>FOUNDED PROJECT DEVELOPMENT LANGUAGES</label>
                  <input onChange={this.handleChange} type="text" name="projeDevLang" value={this.state.projeDevLang} placeholder="input" />
            </div>
            <div className="setcompany_fild">
                  <label>TEAM CHARACTERISTICS</label>
                  <input onChange={this.handleChange} type="text" name="teamChar" value={this.state.teamChar} placeholder="input" />
            </div>
    

            <div className="setcompany_fild">
                  <label>TEAM LOCATION</label>
                  <input onChange={this.handleChange} type="text" name="teamLocation" value={this.state.teamLocation} placeholder="input" />
            </div>
            <div className="setcompany_fild">
                  <label>OFFICES IN COUNTRIES</label>
                  <input onChange={this.handleChange} type="text" name="offInCountries" value={this.state.offInCountries} placeholder="input" />
            </div>
            <div className="setcompany_fild">
                  <label>AVERAGE RATE (PER HOUR)</label>
                  <input onChange={this.handleChange} type="text" name="avgRate" value={this.state.avgRate} placeholder="input" />
            </div>
            <div className="setcompany_fild">
                  <label>MINIMUM BUDGET</label>
                  <select name="minBudget" form="carform" value={this.state.minBudget} onChange={this.handleChange}>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  </select>
                  {/* <input onChange={this.handleChange} type="text" name="minBudget" value={this.state.minBudget} placeholder="input" /> */}
            </div>
            </div>
            {/*2nd column*/}
            <div className="secd_row">
            <div className="setcompany_fild">
                  <label>PROJECT FRAMEWORKS</label>
                  <input onChange={this.handleChange} type="text" name="projFrameworks" value={this.state.projFrameworks} placeholder="input" />
            </div>

            
            <div className="setcompany_fild">
                  <label>INDUSTRIES</label>
                  <input onChange={this.handleChange} type="text" name="industries" value={this.state.industries} placeholder="input" />
            </div>
            <div className="setcompany_fild">
                  <label>PROJECT OPERATING SYSTEMS</label>
                  <select  form="carform"  name="projOS" value={this.state.projOS} onChange={this.handleChange}>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  </select>
                  {/* <input onChange={this.handleChange} type="text"  placeholder="input" /> */}
            </div>
            <div className="setcompany_fild">
                  <label>PROJECT DEVICES</label>
                  <select  form="carform"  name="projeDevices" value={this.state.projeDevices} onChange={this.handleChange}>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  </select>
                  {/* <input onChange={this.handleChange} type="text" name="projeDevices" value={this.state.projeDevices} placeholder="input" /> */}
            </div>
            <div className="setcompany_fild">
                  <label>NO. OF DEVELOPERS</label>
                  <select  form="carform"  name="noOfDevelopers" value={this.state.noOfDevelopers} onChange={this.handleChange}>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  </select>
                  {/* <input onChange={this.handleChange} type="text"  placeholder="input" /> */}
            </div>
            <div className="setcompany_fild">
                  <label>NO. OF PRODUCT MANAGERS</label>
                  <select  form="carform"  name="noOfProdManagers" value={this.state.noOfProdManagers} onChange={this.handleChange}>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  </select>
                  {/* <input onChange={this.handleChange} type="text"  placeholder="input" /> */}
            </div>

            <div className="setcompany_fild">
                  <label>NO. OF OTHER MEMBERS</label>
                  <select  form="carform"  name="noOfOthMembers" value={this.state.noOfOthMembers} onChange={this.handleChange}>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  </select>
                  {/* <input onChange={this.handleChange} type="text"  placeholder="input" /> */}
            </div>

            <div className="setcompany_fild">
                  <label>TEAM DYNAMICS</label>
                  <select  form="carform"  name="teamDynamics" value={this.state.teamDynamics} onChange={this.handleChange}>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                  </select>
                  {/* <input onChange={this.handleChange} type="text"  placeholder="input" /> */}
            </div>

            <button color="primary" onClick={this.handleSave}>Request Approval</button>
            </div>
            
       </div>
       </section>
    )
}
}

export default Operations;
