import React, {Component} from 'react';
import PERSONAL from './../personal'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';


class Personal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      delayFor: true,
      active: false,
      dntShow: false
    }
  }

  handleSave = (values) => {
    if (this.state.delayFor) {
      console.log(JSON.stringify(values));
      fetch('http://localhost/growlabs/api_projects/personal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMTA1IiwidXNlcl9lbWFpbCI6InRlc3Rjb21wYW55QGdyb3dsYWJzLnRlY2giLCJleHBpcmF0aW9uIjoxNTY5MzkwOTkyLCJzZWNyZXQiOiIwMjIxOWE2OWU4MjhhZDY2OTNiMDc3ZDExMzQ0Mzk3ZTY5MTUxMGQ2MGUyMDRkNjFkNjJjYzdhYWJlODIyN2NmNjhkMmZkMGM0ZjllOWIzNDZkM2YwYjU2ZDc0YTZmMGI1M2M3YWQ2YTIzOWNlYzk1NWRhYTJkZWJkNTBkMjdkMCJ9.ePj6Wnt3slJA6lNMCt8s68VmsVKGyOlSe0BhiC6SZ9s'
        },
        body: JSON.stringify(values)
      }).then((response) => {
        // console.log(response.json(), "resDataJson")
        return response;
      }).then((data) => {
        console.log('Created List:', data.json());
      });
    } else {
      console.log('niet posten');
    }
  }

  addInfo() {
    this.props.activeAdditional()
  }

  stopPostData() {
    this.setState({
      dntShow: true,
      delayFor: false,
      active: false
    })
  }

  falseData() {
    this.setState({
      delayFor: true,
      active: true
    })
  }

  render() {

    const from = new Date(2017, 3, 2)
    const to = new Date(2017, 3, 12)

    return (
      <div>
        <div className="save_button">
          <button className="one" onClick={this.stopPostData.bind(this)}>Cancel</button>
          <label className={this.state.active ? 'active switch' : 'switch'}>
            <input type="checkbox" defaultChecked={this.state.active}/>
            <span className="slider round">Save Changes</span>
          </label>
        </div>
        <PERSONAL projectType='' activeAdditional='' getData={this.handleSave} buttonActive={this.falseData.bind(this)} dntShow={this.state.dntShow} currentPageStatus={this.props.projectType} sendInfo={this.addInfo.bind(this)}/>
        {/* <DayPicker
            initialMonth={new Date(2017  , 3)}
            selectedDays={[from, {from, to}]}
            /> */}
      </div>

    )
  }
}

export default Personal
