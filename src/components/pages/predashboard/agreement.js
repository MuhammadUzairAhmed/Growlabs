import React, { Component } from 'react';
var values;
class Agreements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x1: "",
      x1Err: 'Please Fill this field',
      x2: "",
      x2Err: 'Please Fill this field',
      x3: "",
      x3Err: 'Please Fill this field',
      x4: "",
      x4Err: 'Please Fill this field',
      x5: "",
      x5Err: 'Please Fill this field',
      x6: "",
      x6Err: 'Please Fill this field',
      x7: "",
      x7Err: 'Please Fill this field',
      x8: "",
      x8Err: 'Please Fill this field',
      x9: "",
      x9Err: 'Please Fill this field',
      x10: "",
      x10Err: 'Please Fill this field',
      x11: "",
      x11Err: 'Please Fill this field',
      x12: "",
      x12Err: 'Please Fill this field',
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
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => {
      if (this.state.x1 == '') {
        this.setState({ x1Err: 'Please Fill this field', x1Active:'' })
      } else {
        this.setState({ x1Err: '', x1Active:'active' })
      }
      if (this.state.x2 == '') {
        this.setState({ x2Err: 'Please Fill this field' , x2Active:''})
      } else {
        this.setState({ x2Err: '', x2Active:'active' })
      }
      if (this.state.x3 == '') {
        this.setState({ x3Err: 'Please Fill this field', x3Active:'' })
      } else {
        this.setState({ x3Err: '', x3Active:'active' })
      }
      if (this.state.x4 == '') {
        this.setState({ x4Err: 'Please Fill this field' , x4Active:''})
      } else {
        this.setState({ x4Err: '', x4Active:'active' })
      }
      if (this.state.x5 == '') {
        this.setState({ x5Err: 'Please Fill this field', x5Active:'' })
      } else {
        this.setState({ x5Err: '', x5Active:'active' })
      }
      if (this.state.x6 == '') {
        this.setState({ x6Err: 'Please Fill this field', x6Active:'' })
      } else {
        this.setState({ x6Err: '', x6Active:'active' })
      }
      if (this.state.x7 == '') {
        this.setState({ x7Err: 'Please Fill this field' , x7Active:''})
      } else {
        this.setState({ x7Err: '', x7Active:'active' })
      }
      if (this.state.x8 == '') {
        this.setState({ x8Err: 'Please Fill this field', x8Active:'' })
      } else {
        this.setState({ x8Err: '', x8Active:'active' })
      }
      if (this.state.x9 == '') {
        this.setState({ x9Err: 'Please Fill this field', x9Active:'' })
      } else {
        this.setState({ x9Err: '', x9Active:'active' })
      }
      if (this.state.x10 == '') {
        this.setState({ x10Err: 'Please Fill this field' , x10Active:''})
      } else {
        this.setState({ x10Err: '', x10Active:'active' })
      }
      if (this.state.x11 == '') {
        this.setState({ x11Err: 'Please Fill this field' , x11Active:''})
      } else {
        this.setState({ x11Err: '', x11Active:'active' })
      }
      if (this.state.x12 == '') {
        this.setState({ x12Err: 'Please Fill this field' , x12Active:''})
      } else {
        this.setState({ x12Err: '', x12Active:'active' })
      }
      if (this.state.x13 == '') {
        this.setState({ x13Err: 'Please Fill this field', x13Active:'' })
      } else {
        this.setState({ x13Err: '', x13Active:'active' })
      }

       values = {
        x1: this.state.x1,
        x2: this.state.x2,
        x3: this.state.x3,
        x4: this.state.x4,
        x5: this.state.x5,
        x6: this.state.x6,
        x7: this.state.x7,
        x8: this.state.x8,
        x9: this.state.x9,
        x10: this.state.x10,
        x11: this.state.x11,
        x12: this.state.x12,
        x13: this.state.x13
      }
      const {x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13} = this.state;
      if(x1 != '' && x2 != '' && x3 != '' && x4 != '' && x5 != '' && x6 != ''  && x7 != '' && x8 != '' && x9 != ''
      && x10 != '' && x11 != '' && x12 != '' && x13 != '' )
      {
        this.setState({colorButn: '#19D192'})
      }else
      {
        this.setState({colorButn: '#d4d9dd'})
      }
    })

  }
  handleAccept =()=>{
    const {x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13} = this.state;
    if(x1 != '' && x2 != '' && x3 != '' && x4 != '' && x5 != '' && x6 != ''  && x7 != '' && x8 != '' && x9 != ''
    && x10 != '' && x11 != '' && x12 != '' && x13 != '' )
    {
      this.setState({colorButn: 'green'})
      this.props.changeValue(1,values)
    }
  }
  render() {
    return (
      <section className="agreements animations-check">

        <div className="agreements_top">
          <h1>agreements</h1>
          <p>Define the terms on Which You will Collaborate</p>
        </div>
        <div className="agreements_form">
          <div className="agreements_flt">
            <h1>Financial</h1>
            <h4>BONUS AMOUNT FOR ACHIEVING DEADLINE</h4>
            <div className="input_box">
              <input type="text" name="x1" className={this.state.x1Active} placeholder="€0" value={this.state.x1} onChange={this.handleChange} />
              <span className="FildEror">{this.state.x1Err}</span>
              <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Tooltip text</span></div>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
            <h4>BONUS AMOUNT FOR ACHIEVING DEADLINE</h4>
            <div className="input_box">
              <input type="text" name="x2" className={this.state.x2Active} placeholder="Minimally 10 days before start new milestone" value={this.state.x2} onChange={this.handleChange} />
              <span className="FildEror">{this.state.x2Err}</span>
              <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Tooltip text</span></div>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
            <h2>Communication</h2>
            <h4>SPRINTS START ON</h4>
            <div className="input_box">
              <input type="text" name="x3" className={this.state.x3Active} placeholder="Monday" value={this.state.x3} onChange={this.handleChange} />
              <span className="FildEror">{this.state.x3Err}</span>
              <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Tooltip text</span></div>
            </div>
            <h4>SPRINTS CALLS</h4>
            <div className="input_box hlf">
              <input type="text" name="x4" className={this.state.x4Active} placeholder="WED, Fri" value={this.state.x4} onChange={this.handleChange} />
              <span className="FildEror">{this.state.x4Err}</span>
            </div>
            <div className="input_box hlf rgt">
              <input type="text" name="x5" className={this.state.x5Active} placeholder="9:00 AM (EPT)" value={this.state.x5} onChange={this.handleChange} />
              <span className="FildEror">{this.state.x5Err}</span>
            </div>
            <div className="clearfix"></div>
            <h4>MEDIUM</h4>
            <div className="input_box">
              <input type="text" name="x6" className={this.state.x6Active} placeholder="Skype" value={this.state.x6} onChange={this.handleChange} />
              <span className="FildEror">{this.state.x6Err}</span>
              <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Tooltip text</span></div>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
          </div>
          <div className="agreements_rht">
            <h1>Procedures</h1>
            <h4>SPRINTS START ON</h4>
            <div className="input_box">
              <input type="text" name="x7" className={this.state.x7Active} placeholder="Monday" value={this.state.x7} onChange={this.handleChange} />
              <span className="FildEror">{this.state.x7Err}</span>
              <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Tooltip text</span></div>
            </div>
            <h4>WILL USE GROW LABS MANAGMENT TOOL</h4>
            <div className="input_box">
              <input type="text" name="x8" className={this.state.x8Active} placeholder="Yes" value={this.state.x8} onChange={this.handleChange} />
              <span className="FildEror">{this.state.x8Err}</span>
              <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Tooltip text</span></div>
            </div>
            <h4>WILL USE GROW LABS COMMUNICATION TOOL</h4>
            <div className="input_box">
              <input type="text" name="x9" className={this.state.x9Active} placeholder="Yes" value={this.state.x9} onChange={this.handleChange} />
              <span className="FildEror">{this.state.x9Err}</span>
              <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Tooltip text</span></div>
            </div>
            <br /> <br />
            <h4>WILL ALWAYS FILL IN SPRINT DESCRIPTION AND STORIES </h4>
            <div className="input_box">
              <input type="text" name="x10" className={this.state.x10Active} placeholder="3 Days in Advance" value={this.state.x10} onChange={this.handleChange} />
              <span className="FildEror">{this.state.x10Err}</span>
              <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Tooltip text</span></div>
            </div>
            <h4>ALWAYS FILL IN FINAL MILESTONE DESCRIPTION IN ADVANCE </h4>
            <div className="input_box">
              <input type="text" name="x11" className={this.state.x11Active} placeholder="1 Sprint in advance" value={this.state.x11} onChange={this.handleChange} />
              <span className="FildEror">{this.state.x11Err}</span>
              <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Tooltip text</span></div>
            </div>
            <h4>ALWAYS FILL IN FINAL MILESTONE DESCRIPTION IN ADVANCE </h4>
            <div className="input_box">
              <input type="text" name="x12" className={this.state.x12Active} placeholder="1 Sprint in advance" value={this.state.x12} onChange={this.handleChange} />
              <span className="FildEror">{this.state.x12Err}</span>
              <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Tooltip text</span></div>
            </div>
            <br /> <br />
            <h4>STORY POINTS </h4>
            <div className="input_box">
              <input type="text" name="x13" className={this.state.x13Active} placeholder="Yes" value={this.state.x13} onChange={this.handleChange} />
              <span className="FildEror">{this.state.x13Err}</span>
              <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Tooltip text</span></div>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>

        </div>
        <div className="clearfix"></div>
        <a target="_blank" className="button" style={{background:`${this.state.colorButn}`}} onClick={this.handleAccept}>Accept Agreements<br /><span> Accept setup as the grounds on which to finalize parthnership</span></a>
      </section>
    );
  };
};

export default Agreements;
