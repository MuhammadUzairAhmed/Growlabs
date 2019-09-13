import React, { Component } from 'react';
var values;


const data= {
  "bonus" : "123",
  "payment" : "stfgring",
  "sprint_start" : "fdgsdf",
  "sprint_call_days" : "fdgsdg",
  "sprint_call_time" : "dfdsfg",
  "medium" : "fdgsf",
  "grow_management_tool" : "fdgsdf",
  "grow_communication_tool" : "fdsgfdg",
  "sprint_description" : "fdgsfd",
  "milestone_description" : "fdgs",
  "github" : "fdg",
  "story_points" : "fdgsdf"
}
class Agreements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x1: "",
      x1Err: '',
      x2: "",
      x2Err: '',
      x3: "",
      x3Err: '',
      x4: "",
      x4Err: '',
      x5: "",
      x5Err: '',
      x6: "",
      x6Err: '',
      x7: "",
      x7Err: '',
      x8: "",
      x8Err: '',
      x9: "",
      x9Err: '',
      x10: "",
      x10Err: '',
      x11: "",
      x11Err: '',
      x12: "",
      x12Err: '',
      x13: "",

      x13Err: 'Please Fill this field',
      colorButn:'#d4d9dd',
      x1Active:'',
      x2Active:'',
      x3Active:'',
      x4Active:'',
      x5Active:'',
      x6Active:'',
      x7Active:'',
      x8Active:'',
      x9Active:'',
      x10Active:'',
      x11Active:'',
      x12Active:'',
      x13Active:'',

      x13Err: '',
      colorButn:'#d4d9dd',
      actDiv:false

    }
  }

  
    
    componentDidMount()
	{
    fetch('https://virtserver.swaggerhub.com/GROW-Labs/GROWLabs_API/1.0.0/api_calibration/agreements')
    .then(res=>res.json())
    .then(data=>
      {console.log('dataAgreement',data)
    console.log(data,'datas')
		// if(this.props.agreementData != ''){
      this.setState({
        x1:data.bonus,
        x2:data.payment,
        x3:data.github,
        x4:data.sprint_call_days,
        x5:data.sprint_call_time,
        x6:data.medium,
        x7:data.sprint_start,
        x8:data.grow_management_tool,
        x9:data.grow_communication_tool,
        x10:data.sprint_description,
        x11:data.milestone_description,
        // x12:data.x12,
        x13:data.story_points

      })
      })
		console.log(this.props.agreementData,'didMouhntData23')
	}
  
handleChange1 = (e) =>
{ this.setState({x1 : e.target.value},()=>{
if (this.state.x1 == ''){this.setState({ x1Err: 'Please Fill this field',x1Active:'' })}else{this.setState({ x1Err: '', x1Active:'active' })}})}
handleChange2 = (e) =>
{ this.setState({x2 : e.target.value},()=>{
if (this.state.x2 == ''){this.setState({ x2Err: 'Please Fill this field',x2Active:'' })}else{this.setState({ x2Err: '', x2Active:'active' })}})}
handleChange3 = (e) =>
{ this.setState({x3 : e.target.value},()=>{
if (this.state.x3 == ''){this.setState({ x3Err: 'Please Fill this field',x3Active:'' })}else{this.setState({ x3Err: '', x3Active:'active' })}})}
handleChange4 = (e) =>
{ this.setState({x4 : e.target.value},()=>{
if (this.state.x4 == ''){this.setState({ x4Err: 'Please Fill this field',x4Active:'' })}else{this.setState({ x4Err: '', x4Active:'active' })}})}
handleChange5 = (e) =>
{ this.setState({x5 : e.target.value},()=>{
if (this.state.x5 == ''){this.setState({ x5Err: 'Please Fill this field',x5Active:'' })}else{this.setState({ x5Err: '', x5Active:'active' })}})}
handleChange6 = (e) =>
{ this.setState({x6 : e.target.value},()=>{
if (this.state.x6 == ''){this.setState({ x6Err: 'Please Fill this field',x6Active:'' })}else{this.setState({ x6Err: '', x6Active:'active' })}})}
handleChange7 = (e) =>
{ this.setState({x7 : e.target.value},()=>{
if (this.state.x7 == ''){this.setState({ x7Err: 'Please Fill this field' ,x7Active:''})}else{this.setState({ x7Err: '', x7Active:'active' })}})}
handleChange8 = (e) =>
{ this.setState({x8 : e.target.value},()=>{
if (this.state.x8 == ''){this.setState({ x8Err: 'Please Fill this field',x8Active:'' })}else{this.setState({ x8Err: '', x8Active:'active' })}})}
handleChange9 = (e) =>
{ this.setState({x9 : e.target.value},()=>{
if (this.state.x9 == ''){this.setState({ x9Err: 'Please Fill this field',x9Active:'' })}else{this.setState({ x9Err: '', x9Active:'active' })}})}
handleChange10 = (e) =>
{ this.setState({x10 : e.target.value},()=>{
if (this.state.x10 == ''){this.setState({ x10Err: 'Please Fill this field',x10Active:'' })}else{this.setState({ x10Err: '', x10Active:'active' })}})}
handleChange11 = (e) =>
{ this.setState({x11 : e.target.value},()=>{
if (this.state.x11 == ''){this.setState({ x11Err: 'Please Fill this field',x11Active:'' })}else{this.setState({ x11Err: '', x11Active:'active' })}})}
handleChange12 = (e) =>
{ this.setState({x12 : e.target.value},()=>{
if (this.state.x12 == ''){this.setState({ x12Err: 'Please Fill this field',x12Active:'' })}else{this.setState({ x12Err: '', x12Active:'active' })}})}
handleChange13 = (e) =>
{ this.setState({x13 : e.target.value},()=>{
  if (this.state.x13 == ''){this.setState({ x13Err: 'Please Fill this field',x13Active:'' })}else{this.setState({ x13Err: '', x13Active:'active' })}})
}


 
  handleAccept =()=>{
    
    const {x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13} = this.state;
    if(x1 != '' && x2 != '' && x3 != '' && x4 != '' && x5 != '' && x6 != ''  && x7 != '' && x8 != '' && x9 != ''
    && x10 != '' && x11 != ''  && x13 != '' )
    {
      values = {
      bonus: this.state.x1,
      payment: this.state.x2,
      sprint_call_days: this.state.x4,
      sprint_call_time: this.state.x5,
      medium: this.state.x6,
      sprint_start: this.state.x7,
      grow_management_tool: this.state.x8,
      grow_communication_tool: this.state.x9,
      sprint_description: this.state.x10,
      milestone_description: this.state.x11,
      // x12: this.state.x12,
      github: this.state.x3,
      story_points: this.state.x13
    }
      fetch('https://virtserver.swaggerhub.com/GROW-Labs/GROWLabs_API/1.0.0/api_calibration/agreements',{
        method:'POST',
        body: JSON.stringify(values)
      }).then(res=>console.log('postData',res))
      this.setState({actDiv:true},()=>{
        setTimeout(() => {
          this.props.changeValue(1,values)
        }, 1000);
       
    })
    }
  }
  render() {
    console.log(this.state,'chekcedd')
    const {x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13} = this.state;
    return (
      <section className={this.state.actDiv ? "agreements animations-disable" : "agreements animations-check" }>

        <div className="agreements_top">
          <h1>agreements</h1>
          <p>Define the terms on Which You will Collaborate</p>
        </div>
        <div className="agreements_form">
          <div className="agreements_flt">
            <h1>Financial</h1>
            <h4>BONUS AMOUNT FOR ACHIEVING DEADLINE</h4>
            <div className="input_box">
              <input type="text" name="x1" className={this.state.x1 != '' ? 'active' :''} placeholder="€0" value={this.state.x1} onChange={this.handleChange1} />
              {/* <span className="FildEror">{this.state.x1Err}</span> */}

              <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Tooltip text</span></div>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
            <h4>PAYMENT OF MILESTONES</h4>
            <div className="input_box dropdown">
              {/* <input type="text" name="x2" className={this.state.x2Active} placeholder="Minimally 10 days before start new milestone" value={this.state.x2} onChange={this.handleChange2} /> */}
              
              <select name="x2" className={this.state.x2 != '' ? 'active' :''}  value={this.state.x2} onChange={this.handleChange2}>
              <option value="">{this.state.x2 != ''? this.state.x2: 'Minimally 10 days before start new milestone'}</option>
              <option value="20 days">20 days</option>
              <option value="30 days">30 days</option>
              <option value="40 days">40 days</option>
              </select>
              <div class="go-icon"></div>
              <div class="tooltip">
                <img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Tooltip text</span></div>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
            <h2>Communication</h2>
            {/* <h4>SPRINTS START ON</h4>
            <div className="input_box">
 */}

              {/* <input type="text" name="x3" placeholder="Monday"  className={this.state.x3Active} value={this.state.x3} onChange={this.handleChange3} /> */}
              {/* <span style={{ color: 'red' }}>{this.state.x3Err}</span> */}

              {/* <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Tooltip text</span></div>
            </div> */}
            <h4>SPRINTS CALLS</h4>
            <div className="input_box hlf">

              <input type="text" name="x4" className={this.state.x4 != '' ? 'active' :''} placeholder="WED, Fri" value={this.state.x4} onChange={this.handleChange4} />
              <span className="FildEror">{this.state.x4Err}</span>
            </div>
            <div className="input_box dropdown hlf rgt">
              {/* <input type="text" name="x5" className={this.state.x5Active} placeholder="9:00 AM (EPT)" value={this.state.x5} onChange={this.handleChange5} /> */}
              {/* <span className="FildEror">{this.state.x5Err}</span> */}
              <select name="x5" className={this.state.x5 != '' ? 'active' :''}  value={this.state.x5} onChange={this.handleChange5}>
              <option value="">{this.state.x5 != ''? this.state.x5 :'9:00 AM (EPT)'}</option>
              <option value="20 days">20 days</option>
              <option value="30 days">30 days</option>
              <option value="40 days">40 days</option>
              </select>

            </div>
            <div className="clearfix"></div>
            <h4>MEDIUM</h4>
            <div className="input_box dropdown">

         
              {/* <input type="text" name="x6" placeholder="Skype"  className={this.state.x6Active} value={this.state.x6} onChange={this.handleChange6} /> */}
              {/* <span style={{ color: 'red' }}>{this.state.x6Err}</span> */}
              <select name="x6"  className={this.state.x6 != '' ? 'active' :''} value={this.state.x6} onChange={this.handleChange6}>
              <option value="">{this.state.x6 != ''? this.state.x6 :'9:00 AM (EPT)'}</option>
              <option value="20 days">20 days</option>
              <option value="30 days">30 days</option>
              <option value="40 days">40 days</option>
              </select>
              <div class="go-icon"></div>

              <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Tooltip text</span></div>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
          </div>
          <div className="agreements_rht">
            <h1>Procedures</h1>
            <h4>SPRINTS START ON</h4>
            <div className="input_box dropdown">

           

              {/* <input type="text" name="x7" placeholder="Monday"  className={this.state.x7Active} value={this.state.x7} onChange={this.handleChange7} /> */}
              {/* <span style={{ color: 'red' }}>{this.state.x7Err}</span> */}
              <select name="x7"  className={this.state.x7 != '' ? 'active' :''} value={this.state.x7} onChange={this.handleChange7}>
              <option value="">{this.state.x7 != ''? this.state.x7:'Monday'}</option>
              <option value="20 days">20 days</option>
              <option value="30 days">30 days</option>
              <option value="40 days">40 days</option>
              </select>
              <div class="go-icon"></div>

              <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Tooltip text</span></div>
            </div>
            <h4>WILL USE GROW LABS MANAGMENT TOOL</h4>
            <div className="input_box dropdown">

    
              {/* <input type="text" name="x8" placeholder="Yes" className={this.state.x8Active} value={this.state.x8} onChange={this.handleChange8} />
              <span style={{ color: 'red' }}>{this.state.x8Err}</span> */}
 <select name="x8"  className={this.state.x8 != '' ? 'active' :''} value={this.state.x8} onChange={this.handleChange8}>
              <option value="">{this.state.x8 != '' ? this.state.x8 :"Yes"}</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              </select>
              <div class="go-icon"></div>

              <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Tooltip text</span></div>
            </div>
            <h4>WILL USE GROW LABS COMMUNICATION TOOL</h4>
            <div className="input_box dropdown">


              {/* <input type="text" name="x9" placeholder="Yes" value={this.state.x9} className={this.state.x9Active} onChange={this.handleChange9} /> */}
              {/* <span style={{ color: 'red' }}>{this.state.x9Err}</span> */}
              <select name="x9"  className={this.state.x9 != '' ? 'active' :''} value={this.state.x9} onChange={this.handleChange9}>
              <option value="">{this.state.x9 != '' ? this.state.x9 :"Yes"}</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              </select>
              <div class="go-icon"></div>

              <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Tooltip text</span></div>
            </div>
            <br /> <br />
            <h4>WILL ALWAYS FILL IN SPRINT DESCRIPTION AND STORIES </h4>
            <div className="input_box dropdown">

              

              {/* <input type="text" name="x10" placeholder="3 Days in Advance" className={this.state.x10Active} value={this.state.x10} onChange={this.handleChange10} /> */}
              {/* <span style={{ color: 'red' }}>{this.state.x10Err}</span> */}
              <select name="x10"  className={this.state.x10 != '' ? 'active' :''} value={this.state.x10} onChange={this.handleChange10}>
              <option value="">{this.state.x10 != '' ? this.state.x10 :"Yes"}</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              </select>
              <div class="go-icon"></div>

              <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Tooltip text</span></div>
            </div>
            <h4>ALWAYS FILL IN FINAL MILESTONE DESCRIPTION IN ADVANCE </h4>
            <div className="input_box dropdown">

              

              {/* <input type="text" name="x11" placeholder="1 Sprint in advance" className={this.state.x11Active} value={this.state.x11} onChange={this.handleChange11} /> */}
              {/* <span style={{ color: 'red' }}>{this.state.x11Err}</span> */}
              <select name="x11"  className={this.state.x11 != '' ? 'active' :''} value={this.state.x11} onChange={this.handleChange11}>
              <option value="">{this.state.x11 != '' ? this.state.x11 :"1 Sprint in advance"}</option>
              <option value="No 4days">No 4days</option>
              </select>
              <div class="go-icon"></div>

              <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Tooltip text</span></div>
            </div>
            <h4>ALWAYS FILL IN FINAL MILESTONE DESCRIPTION IN ADVANCE </h4>
            <div className="input_box dropdown">
              {/* <input type="text" name="x12" placeholder="1 Sprint in advance" className={this.state.x12Active} value={this.state.x12} onChange={this.handleChange12} /> */}
              {/* <span style={{ color: 'red' }}>{this.state.x12Err}</span> */}
              <select name="x12"  className={this.state.x12 != '' ? 'active' :''} value={this.state.x12} onChange={this.handleChange12}>
              <option value="">{this.state.x12 != '' ? this.state.x12 :"1 Sprint in advance"}</option>
              <option value="No 4days">No 4days</option>
              </select>
              <div class="go-icon"></div>

              <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Tooltip text</span></div>
            </div>
            <br /> <br />
            <h4>GGITHUB USERNAME </h4>
            <div className="input_box">

              

              <input type="text" name="x3" placeholder="Baran127" value={this.state.x3} className={this.state.x13 != '' ? 'active' :''} onChange={this.handleChange3} />
              {/* <span style={{ color: 'red' }}>{this.state.x13Err}</span> */}
              
              <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Tooltip text</span></div>
            </div>
            <br></br>
            <h4>STORY POINTS </h4>
            <div className="input_box dropdown">

              

              {/* <input type="text" name="x13" placeholder="Yes" value={this.state.x13} className={this.state.x13Active} onChange={this.handleChange13} /> */}
              {/* <span style={{ color: 'red' }}>{this.state.x13Err}</span> */}
              <select name="x13"  className={this.state.x13Active} value={this.state.x13} onChange={this.handleChange13}>
              <option value="">{this.state.x13 != ''? this.state.x13:'yes'}</option>
              <option value="yes">yes</option>
              <option value="no">no</option>
              </select>
              <div class="go-icon"></div>

              <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Tooltip text</span></div>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>

        </div>
        <div className="clearfix"></div>
        {x1 != '' && x2 != '' && x3 != '' && x4 != '' && x5 != '' && x6 != ''  && x7 != '' && x8 != '' && x9 != ''
    && x10 != '' && x11 != ''  && x13 != '' ? <a target="_blank" className="button" style={{background:`#19D192`}} onClick={this.handleAccept}>Accept Agreement<br /><span> Accept setup as the grounds on which to finalize parthnership</span></a>
  : <a target="_blank" className="button" style={{background:`#d4d9dd`}}>Accept Agreeme<br /><span> Accept setup as the grounds on which to finalize parthnership</span></a>}
        
      </section>
    );
  };
};

export default Agreements;
