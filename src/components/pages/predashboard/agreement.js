import React, {Component} from 'react';
import {Link} from "react-router-dom";

var values;

const data = {
  "bonus": "",
  "payment": "",
  "sprint_start": "",
  "sprint_call_days": "",
  "sprint_call_time": "",
  "medium": "",
  "grow_management_tool": "",
  "grow_communication_tool": "",
  "sprint_description": "",
  "milestone_description": "",
  "github": "",
  "story_points": ""
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
      colorButn: '#d4d9dd',
      x1Active: '',
      x2Active: '',
      x3Active: '',
      x4Active: '',
      x5Active: '',
      x6Active: '',
      x7Active: '',
      x8Active: '',
      x9Active: '',
      x10Active: '',
      x11Active: '',
      x12Active: '',
      x13Active: '',

      x13Err: '',
      colorButn: '#d4d9dd',
      actDiv: false

    }

    console.log(this.props);
  }


  componentDidMount() {
    fetch('http://localhost/growlabs/api_calibration/agreements?id=', {
      headers: {
        'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMTA1IiwidXNlcl9lbWFpbCI6InRlc3Rjb21wYW55QGdyb3dsYWJzLnRlY2giLCJleHBpcmF0aW9uIjoxNTY5MzkwOTkyLCJzZWNyZXQiOiIwMjIxOWE2OWU4MjhhZDY2OTNiMDc3ZDExMzQ0Mzk3ZTY5MTUxMGQ2MGUyMDRkNjFkNjJjYzdhYWJlODIyN2NmNjhkMmZkMGM0ZjllOWIzNDZkM2YwYjU2ZDc0YTZmMGI1M2M3YWQ2YTIzOWNlYzk1NWRhYTJkZWJkNTBkMjdkMCJ9.ePj6Wnt3slJA6lNMCt8s68VmsVKGyOlSe0BhiC6SZ9s'
      },
    })
      .then(res => res.json())
      .then(data => {
        // console.log('dataAgreement', data)
        // console.log(data, 'datas')
        // if(this.props.agreementData != ''){
        this.setState({
          x1: data.bonus,
          x2: data.payment,
          x3: data.github,
          x4: data.sprint_call_days,
          x5: data.sprint_call_time,
          x6: data.medium,
          x7: data.sprint_start,
          x8: data.grow_management_tool,
          x9: data.grow_communication_tool,
          x10: data.sprint_description,
          x11: data.milestone_description,
          // x12:data.x12,
          x13: data.story_points

        })
      })
  }

  handleChange1 = (e) => {
    this.setState({x1: e.target.value}, () => {
      if (this.state.x1 == '') {
        this.setState({x1Err: 'Please Fill this field', x1Active: ''})
      } else {
        this.setState({x1Err: '', x1Active: 'active'})
      }
    })
  }
  handleChange2 = (e) => {
    this.setState({x2: e.target.value}, () => {
      if (this.state.x2 == '') {
        this.setState({x2Err: 'Please Fill this field', x2Active: ''})
      } else {
        this.setState({x2Err: '', x2Active: 'active'})
      }
    })
  }
  handleChange3 = (e) => {
    this.setState({x3: e.target.value}, () => {
      if (this.state.x3 == '') {
        this.setState({x3Err: 'Please Fill this field', x3Active: ''})
      } else {
        this.setState({x3Err: '', x3Active: 'active'})
      }
    })
  }
  handleChange4 = (e) => {
    this.setState({x4: e.target.value}, () => {
      if (this.state.x4 == '') {
        this.setState({x4Err: 'Please Fill this field', x4Active: ''})
      } else {
        this.setState({x4Err: '', x4Active: 'active'})
      }
    })
  }
  handleChange5 = (e) => {
    this.setState({x5: e.target.value}, () => {
      if (this.state.x5 == '') {
        this.setState({x5Err: 'Please Fill this field', x5Active: ''})
      } else {
        this.setState({x5Err: '', x5Active: 'active'})
      }
    })
  }
  handleChange6 = (e) => {
    this.setState({x6: e.target.value}, () => {
      if (this.state.x6 == '') {
        this.setState({x6Err: 'Please Fill this field', x6Active: ''})
      } else {
        this.setState({x6Err: '', x6Active: 'active'})
      }
    })
  }
  handleChange7 = (e) => {
    this.setState({x7: e.target.value}, () => {
      if (this.state.x7 == '') {
        this.setState({x7Err: 'Please Fill this field', x7Active: ''})
      } else {
        this.setState({x7Err: '', x7Active: 'active'})
      }
    })
  }
  handleChange8 = (e) => {
    this.setState({x8: e.target.value}, () => {
      if (this.state.x8 == '') {
        this.setState({x8Err: 'Please Fill this field', x8Active: ''})
      } else {
        this.setState({x8Err: '', x8Active: 'active'})
      }
    })
  }
  handleChange9 = (e) => {
    this.setState({x9: e.target.value}, () => {
      if (this.state.x9 == '') {
        this.setState({x9Err: 'Please Fill this field', x9Active: ''})
      } else {
        this.setState({x9Err: '', x9Active: 'active'})
      }
    })
  }
  handleChange10 = (e) => {
    this.setState({x10: e.target.value}, () => {
      if (this.state.x10 == '') {
        this.setState({x10Err: 'Please Fill this field', x10Active: ''})
      } else {
        this.setState({x10Err: '', x10Active: 'active'})
      }
    })
  }
  handleChange11 = (e) => {
    this.setState({x11: e.target.value}, () => {
      if (this.state.x11 == '') {
        this.setState({x11Err: 'Please Fill this field', x11Active: ''})
      } else {
        this.setState({x11Err: '', x11Active: 'active'})
      }
    })
  }
  handleChange12 = (e) => {
    this.setState({x12: e.target.value}, () => {
      if (this.state.x12 == '') {
        this.setState({x12Err: 'Please Fill this field', x12Active: ''})
      } else {
        this.setState({x12Err: '', x12Active: 'active'})
      }
    })
  }
  handleChange13 = (e) => {
    this.setState({x13: e.target.value}, () => {
      if (this.state.x13 == '') {
        this.setState({x13Err: 'Please Fill this field', x13Active: ''})
      } else {
        this.setState({x13Err: '', x13Active: 'active'})
      }
    })
  }

  handleAccept = () => {
    const {x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13} = this.state;
    if (x1 != '' && x2 != '' && x3 != '' && x4 != '' && x5 != '' && x6 != '' && x7 != '' && x8 != '' && x9 != ''
      && x10 != '' && x11 != '' && x13 != '') {
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
      fetch('https://virtserver.swaggerhub.com/GROW-Labs/GROWLabs_API/1.0.0/api_calibration/agreements', {
        method: 'POST',
        body: JSON.stringify(values)
      }).then(res => console.log('postData', res))
      this.setState({actDiv: true}, () => {
        setTimeout(() => {
          this.props.changeValue(1, values)
        }, 1000);

      })
    }
  }

  render() {
    const {x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13} = this.state;
    return (
      <section className={this.state.actDiv ? "agreements animations-disable" : "agreements animations-check"}>

        <div className="agreements_top">
          <h1>agreements</h1>
          <p>Define the terms on Which You will Collaborate</p>
        </div>
        <div className="agreements_form">
          <div className="agreements_flt">
            <h1>Bonus</h1>
            <h4>BONUS AMOUNT</h4>
            <div className="input_box">
              <input type="text" name="x1" className={this.state.x1 != '' ? 'active' : ''} placeholder="€0" value={this.state.x1} onChange={this.handleChange1}/>

              <div className="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" className=""/><span className="tooltiptext">Tooltip text</span></div>
            </div>

            <h4>BONUS CRITERIA</h4>
            <div className="input_box">
              <input type="text" name="x2" className={this.state.x2 != '' ? 'active' : ''} placeholder="criteria" value={this.state.x2} onChange={this.handleChange2}/>

              <div className="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" className=""/><span className="tooltiptext">Tooltip text</span></div>
            </div>
          </div>
          <div className="agreements_rht">
            <h1>Sprints</h1>
            <h4>SPRINTS CALLS</h4>
            <div className="input_box dropdown hlf">
              <select name="x4" className={this.state.x4 != '' ? 'active' : ''} value={this.state.x4} onChange={this.handleChange4}>
                <option value="monday" selected={this.state.x4 === "monday"}>monday</option>
                <option value="tuesday" selected={this.state.x4 === "tuesday"}>tuesday</option>
                <option value="wednesday" selected={this.state.x4 === "wednesday"}>wednesday</option>
                <option value="thursday" selected={this.state.x4 === "thursday"}>thursday</option>
                <option value="friday" selected={this.state.x4 === "friday"}>friday</option>
                <option value="saturday" selected={this.state.x4 === "saturday"}>saturday</option>
                <option value="sunday" selected={this.state.x4 === "sunday"}>sunday</option>
              </select>
              <div className="go-icon"></div>
              <div className="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" className=""/><span className="tooltiptext">Tooltip text</span></div>
            </div>
            <div className="input_box dropdown hlf">
              {/* <input type="text" name="x5" className={this.state.x5Active} placeholder="9:00 (EPT)" value={this.state.x5} onChange={this.handleChange5} /> */}
              {/* <span className="FildEror">{this.state.x5Err}</span> */}
              <select name="x5" className={this.state.x5 != '' ? 'active' : ''} value={this.state.x5} onChange={this.handleChange5}>
                <option value="00:00 (UTC/GMT)" selected={this.state.x5 === "00:00 (UTC/GMT)"}>00:00 (UTC/GMT)</option>
                <option value="01:00 (UTC/GMT)" selected={this.state.x5 === "01:00 (UTC/GMT)"}>01:00 (UTC/GMT)</option>
                <option value="02:00 (UTC/GMT)" selected={this.state.x5 === "02:00 (UTC/GMT)"}>02:00 (UTC/GMT)</option>
                <option value="03:00 (UTC/GMT)" selected={this.state.x5 === "03:00 (UTC/GMT)"}>03:00 (UTC/GMT)</option>
                <option value="04:00 (UTC/GMT)" selected={this.state.x5 === "04:00 (UTC/GMT)"}>04:00 (UTC/GMT)</option>
                <option value="05:00 (UTC/GMT)" selected={this.state.x5 === "05:00 (UTC/GMT)"}>05:00 (UTC/GMT)</option>
                <option value="06:00 (UTC/GMT)" selected={this.state.x5 === "06:00 (UTC/GMT)"}>06:00 (UTC/GMT)</option>
                <option value="07:00 (UTC/GMT)" selected={this.state.x5 === "07:00 (UTC/GMT)"}>07:00 (UTC/GMT)</option>
                <option value="08:00 (UTC/GMT)" selected={this.state.x5 === "08:00 (UTC/GMT)"}>08:00 (UTC/GMT)</option>
                <option value="09:00 (UTC/GMT)" selected={this.state.x5 === "09:00 (UTC/GMT)"}>09:00 (UTC/GMT)</option>
                <option value="10:00 (UTC/GMT)" selected={this.state.x5 === "10:00 (UTC/GMT)"}>10:00 (UTC/GMT)</option>
                <option value="11:00 (UTC/GMT)" selected={this.state.x5 === "11:00 (UTC/GMT)"}>11:00 (UTC/GMT)</option>
                <option value="12:00 (UTC/GMT)" selected={this.state.x5 === "12:00 (UTC/GMT)"}>12:00 (UTC/GMT)</option>
                <option value="13:00 (UTC/GMT)" selected={this.state.x5 === "13:00 (UTC/GMT)"}>13:00 (UTC/GMT)</option>
                <option value="14:00 (UTC/GMT)" selected={this.state.x5 === "14:00 (UTC/GMT)"}>14:00 (UTC/GMT)</option>
                <option value="15:00 (UTC/GMT)" selected={this.state.x5 === "15:00 (UTC/GMT)"}>15:00 (UTC/GMT)</option>
                <option value="16:00 (UTC/GMT)" selected={this.state.x5 === "16:00 (UTC/GMT)"}>16:00 (UTC/GMT)</option>
                <option value="17:00 (UTC/GMT)" selected={this.state.x5 === "17:00 (UTC/GMT)"}>17:00 (UTC/GMT)</option>
                <option value="18:00 (UTC/GMT)" selected={this.state.x5 === "18:00 (UTC/GMT)"}>18:00 (UTC/GMT)</option>
                <option value="19:00 (UTC/GMT)" selected={this.state.x5 === "19:00 (UTC/GMT)"}>19:00 (UTC/GMT)</option>
                <option value="20:00 (UTC/GMT)" selected={this.state.x5 === "20:00 (UTC/GMT)"}>20:00 (UTC/GMT)</option>
                <option value="21:00 (UTC/GMT)" selected={this.state.x5 === "21:00 (UTC/GMT)"}>21:00 (UTC/GMT)</option>
                <option value="22:00 (UTC/GMT)" selected={this.state.x5 === "22:00 (UTC/GMT)"}>22:00 (UTC/GMT)</option>
                <option value="23:00 (UTC/GMT)" selected={this.state.x5 === "23:00 (UTC/GMT)"}>23:00 (UTC/GMT)</option>
              </select>
            </div>
            <br/><br/>

            <h4>SPRINTS START ON</h4>
            <div className="input_box dropdown">
              <select name="x7" className={this.state.x7 != '' ? 'active' : ''} value={this.state.x7} onChange={this.handleChange7}>
                <option value="">{this.state.x7 != '' ? this.state.x7 : 'Monday'}</option>
                <option value="20 days">20 days</option>
                <option value="30 days">30 days</option>
                <option value="40 days">40 days</option>
              </select>
              <div className="go-icon"></div>
              <div className="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" className=""/><span className="tooltiptext">Tooltip text</span></div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
        <Link to="/calibration_technology" className="button" style={{background: `#19D192`}}>Accept Agreement<br/><span> Accept setup as the grounds on which to finalize partnership</span></Link>
      </section>
    );
  };
};

export default Agreements;
