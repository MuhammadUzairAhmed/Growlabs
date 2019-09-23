import React, {Component} from 'react';
import TDataPicker from './widget/TdatePicker'
import DatePicker from "react-datepicker";
import MaskedInput from 'react-text-mask'
import "react-datepicker/dist/react-datepicker.css";
import {Link} from "react-router-dom";

var finalRes;

class Milestone extends Component {
  constructor(props) {
    super(props)
    this.state = {
      project_start_date: '07-07-2019',
      project_end_date: '08-07-2019',
      data: [
        {
          id: 1,
          milestone_number: 1,
          milestone_sprints: 1,
          milestone_title: '',
          milestone_start_date: '07-07-2019',
          milestone_end_date: '08-07-2019',
          MSBudget: '',
          status: false,
        }
      ],
      count: 0,
      count2: 1,
      changeWidth: 10,
      timelineStart: '',
      timelineEnd: '',
      itemId: null,
      itemId2: null,
      itemId3: null,
      itemidsDate: null,
      item4: null,
      actDiv: false,
      milestones: 1,
      sprints: 1,
      weeks: 1,
      weeksPerSprint: 1,
      sprintWeeks: [1, 2, 3],
      actId: null,
      editable: true

    }
  }

  componentDidMount() {
    if (this.props.mileStonedata && this.props.mileStonedata.data != null) {
      this.setState({
        data: this.props.mileStonedata.data, weeks: this.props.mileStonedata.sprint_weeks,
        actId: this.props.mileStonedata.sprintWeeks
      }, () => {
        console.log(this.state.data, 'this.state.data')
      })
    }
  }

  addNew = (val) => {
    console.log(val, 'trysss');
    var count = this.state.data.length;
    var addChild = {
      id: count,
      milestone_number: count,
      milestone_sprints: 1,
      milestone_title: '',
      milestone_start_date: '00/00/0000',
      milestone_end_date: '12/10/2019',
      input1: 0,
      input2: '',
      MSBudget: '',
      status: false,
    }
    this.setState({data: [...this.state.data, addChild], changeWidth: this.state.changeWidth + 10, sprints: this.state.sprints + 1, milestones: this.state.milestones + 1})
  }

  deleteRow = (id) => {
    console.log('ids', id)
    this.setState({
      data: this.state.data.filter(item => {
        if (item['id'] != id) {
          item['id'] = this.state.count++;
          this.setState({sprints: item['milestone_sprints']})
          return item
        }
      }),
      count: 0,
      count2: 1,
      changeWidth: this.state.changeWidth - 10,
      milestones: this.state.milestones - 1
    })
  }

  handleAccept = () => {
    var values = {
      data: this.state.data,
      weeks: this.state.weeks,
      sprint_weeks: this.state.actId
    }
    this.setState({actDiv: true}, () => {
      setTimeout(() => {
        this.props.changeValue(3, values)
      }, 1000);
    })

  }

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let id = name.split('_')[0];
    let field = name.split(/_(.+)/)[1];
    this.setState({itemId: id}, () => {
      this.setState({
        data: this.state.data.filter(item => {
          if (item['milestone_number'] == id) {
            item[field] = value;

            if(field === 'milestone_sprints') {
              item['milestone_end_date'] = this.addDaysToDate(item['milestone_start_date'], item[field] * this.state.weeksPerSprint * 7);
            }
          }
          return item
        })
      }, () => {
        if(field === 'milestone_sprints') {
          let totalSprints = 0;
          let totalWeeks = 0;
          this.state.data.map((item) => {
            totalSprints += parseInt(item['milestone_sprints']);
            totalWeeks += item['milestone_sprints'] * this.state.weeksPerSprint;
          });
          console.log(totalSprints, 'totalSprints');
          console.log(totalWeeks, 'totalWeeks');
          this.setState({
            sprints: totalSprints,
            weeks: totalWeeks
          })
        }
      })
    })
  }

  SETime = (val) => {
    console.log('timesss', val)
    var res = Math.abs(val.start - val.end) / 1000;
    var days = Math.floor(res / 86400)
    var week = days / 7;
    finalRes = week.toString().split(".")[0];
    finalRes = finalRes.toString()
  }

  dateToTimestamp = (date) => {
    date = date.split("-");
    let newDate = date[1] + "/" + date[0] + "/" + date[2];
    return new Date(newDate).getTime();
  }

  addDaysToDate = (date, days) => {
    date = date.split("-");
    let newDate = date[1] + "/" + date[0] + "/" + date[2];
    newDate = new Date(newDate);
    newDate.setDate(newDate.getDate() + days);
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    return day + '-' + month + '-' + year;
  }

  updateProjectDates = () => {
    let projectEndDate = '';
    let lastEndDate = this.state.project_start_date;
    this.state.data.map(item => {

    });
  }

  spintWeekClicked = (weeksPerSprint) => {
    this.setState({
      weeksPerSprint: weeksPerSprint,
      weeks: weeksPerSprint * this.state.sprints
    }, () => {
      this.updateProjectDates();
    })
  }

  cheked = (id) => {
    this.setState({itemId3: id}, () => {

      this.setState({
        data: this.state.data.filter(item => {
          if (item['milestone_number'] == id) {
            item['milestone_start_date'] = this.state.milestone_start_date;
            return item
          }
          return item;
        })
      })
    }, () => {
      this.setState({editable: false})
    })
  }
  editing = () => {
    this.setState({editable: true})
  }

  render() {
    const sprinweeks = this.state.sprintWeeks.map((item, index) => {
      return <li className={this.state.weeksPerSprint == item ? "active" : ''} key={index} onClick={() => this.spintWeekClicked(item)}> {item} </li>
    })

    const rows = this.state.data.map(item => {
      return <div className={"timeframe_box"}>
        <div className="timeframe_first">
          <label></label>
          <p>{item.milestone_number > 9 ? item.milestone_number : `0${item.milestone_number}`}.</p>
        </div>

        <div className="timeframe_secound">
          <label>NUMBER OF SPRINTS</label>
          <input type="text" name={item.milestone_number + "_milestone_sprints"} placeholder="0" className="sprintInput" value={item.milestone_sprints} onChange={(e) => this.handleChange(e)}/>
        </div>

        <div className="timeframe_third">
          <label>MILESTONES TITLE</label>
          <input type="text" name={item.milestone_number + "_milestone_title"} placeholder="Milestone" value={item.milestone_title} onChange={(e) => this.handleChange(e)}/>
        </div>

        <div className="timeframe_for">
          <label>START DATE</label>
          <p id={item.milestone_number + "_start_date"}>{item.milestone_start_date}</p>
        </div>

        <div className="timeframe_five">
          <label>END DATE</label>
          <p id={item.milestone_number + "_end_date"}>{item.milestone_end_date}</p>
        </div>
        <div className="delete_section">
          <p onClick={() => this.deleteRow(item.milestone_number)}><img src="./assets/img/delete.png"/></p>
        </div>
      </div>
    })

    return (
      <section className={this.state.actDiv ? "timeframe animations-disable" : "timeframe animations-check"}>
        <div className="timeframe_top">
          <h1>Milestones</h1>
          <p>Determine Sprints, timeframe, and budget</p>
        </div>

        <div className="timeframe_tabs">
          <h2>WEEKS IN SPRINT</h2>
          <ul>
            {sprinweeks}
          </ul>
        </div>

        <div className="timeframe_milestones">
          <h2>MILESTONES</h2>
          <div style={{textAlign: "center"}}>
            <a className="button"> {this.state.milestones} MILESTONES </a>
            <a className="button"> {this.state.sprints} SPRINTS </a>
            <a className="button"> {this.state.weeks} WEEKS </a>
          </div>

          {rows}

          <div className="timeframe_box add">
            <div className="timeframe_first">
              <label></label>
              <p></p>
            </div>

            <div className="timeframe_add" onClick={() => this.addNew(this.state.data.length)}>
              <div className="timeframe_add_plus">
                <img src="./assets/img/plus.png"/>
                <p>New Milestone</p>
              </div>
            </div>
          </div>
        </div>

        <div className="timeframe_calander">
          <h2>PROJECT TIMEFRAME</h2>
          <h1>{this.state.project_start_date} - {this.state.project_end_date}</h1>
          <TDataPicker times={this.SETime}/>
        </div>
        <Link to="/calibration_descriptions" className="buttons" style={{background: `#19D192`}}>Accept Agreement<br/><span> Accept setup as the grounds on which to finalize partnership</span></Link>
      </section>
    );
  };
};

export default Milestone;
