import React, { Component } from 'react';
import TDataPicker from './widget/TdatePicker'
import DatePicker from "react-datepicker";
import MaskedInput from 'react-text-mask'
import "react-datepicker/dist/react-datepicker.css";

var finalRes;
var days;
var week;
var st;
var et;
var sum = 0;
class Milestone extends Component {
	constructor(props) {
		super(props)
		this.state = {
			x1: '',
			x2: '',
			x3: '',
			startDate: '',
			x1Err: 'Please Fill this field',
			x2Err: 'Please Fill this field',
			x3Err: 'Please Fill this field',
			x4: '',
			x5: null,
			x6: '',
			x4Err: 'Please Fill this field',
			x5Err: 'Please Fill this field',
			x6Err: 'Please Fill this field',
			data: [
				{
					id: 0,
					userd: 1,
					input1: '',
					input2: '',
					MSBudget: '',
					status: false,
					startDate: 'Fri Sep 20 2019 12:00:00 GMT+0500 (Pakistan Standard Time)',
					EndTime: 'Mon Nov 19 2019 12:00:00 GMT+0500 (Pakistan Standard Time)'
				}
			],
			count: 0,
			count2: 1,
			changeWidth: 10,
			sprints: 1,
			timelineStart: '',
			timelineEnd: '',
			itemId: null,
			itemId2: null,
			itemId3: null,
			itemidsDate: null,
			item4: null,
			actDiv: false,
			weeks: '',
			sprintWeeks: [1, 2, 3],
			actId: 2,
			editable: true,
			data1: '',
			data2: ''

		}
	}
	componentDidMount() {
		fetch('https://virtserver.swaggerhub.com/GROW-Labs/GROWLabs_API/1.0.0/api_calibration/timeframe')
		.then(res=> res.json())
		.then(data=>console.log('resTechData',data))
		if (this.props.mileStonedata.data != null) {
			this.setState({
				data: this.props.mileStonedata.data, weeks: this.props.mileStonedata.sprint_weeks,
				actId: this.props.mileStonedata.sprintWeeks
			}, () => { console.log(this.state.data, 'this.state.data') })
			console.log(this.props.mileStonedata, 'didMouhntData')
		}
	}
	addNew = (val) => {
		if(this.state.x5 != '' ){
		console.log(val, 'trysss')
		// if (val + 1 <= this.state.weeks) {
			var count = this.state.data.length;
			var userid = count + 1;
			var addChild = {
				id: count,
				userd: userid,
				input1: '',
				input2: '',
				MSBudget: '',
				status: false,
				startDate: '00/00/0000',
				EndTime: '12/10/2019'
			}
			this.setState({x5:'', data: [...this.state.data, addChild], changeWidth: this.state.changeWidth + 10, sprints: this.state.sprints + 1 }, () => {
				console.log(this.state.data, "dataMid")
			})
		// }
	}
	}
	deleteRow = (id) => {
		console.log('ids', id)
		this.setState({
			data: this.state.data.filter(item => {
				if (item['id'] != id) {
					item['id'] = this.state.count++;
					item['userd'] = this.state.count2++
					return item
				}
			}),
			count: 0,
			count2: 1,
			changeWidth: this.state.changeWidth - 10,
			sprints: this.state.sprints - 1
		})
	}
	handleAccept = () => {
		var values = {
			data: this.state.data,
			weeks: this.state.weeks,
			sprint_weeks: this.state.actId
		}
		var postalues={
			sprint_weeks: sum,
			milestones: this.state.data
		}
		
		fetch('https://virtserver.swaggerhub.com/GROW-Labs/GROWLabs_API/1.0.0/api_calibration/timeframe',{
            method:'POST',
            body: JSON.stringify(postalues)
          }).then(res=>console.log('postData',res))   
            
		this.setState({ actDiv: true }, () => {
			setTimeout(() => {
				
				if(this.state.data.length > 0 && this.state.data[0].input1 != ''){
				this.props.changeValue(3, values)}
				else{this.props.changeValue(0,'')}
			}, 1000);
		})

	}

	handleChange = (e) => {
		console.log(e, 'eventss')
		this.setState({
			[e.target.name]: e.target.value
		}, () => {

			if (this.state.x5 == 0) {
				this.setState({ x5Err: 'Please Fill this field' })
			} else {
				this.setState({ x5Err: '' })
			}
			if (this.state.x6 == '') {
				this.setState({ x6Err: 'Please Fill this field' })
			} else {
				this.setState({ x6Err: '' })
			}

			var values = {

				x5: this.state.x5,
				x6: this.state.x6,

			}
			console.log(values, 'huff')


		})

	}
	SETime = (val) => {
		console.log('timesss', val.start.getTime())
		st = val.start.toString();
		et = val.end.toString();
		var daysAddition = new Date(st);
		daysAddition.setDate(daysAddition.getDate() + 9)
		var res = Math.abs(val.start - val.end) / 1000;
		days = Math.floor(res / 86400)
		console.log(days, 'dayss')
		week = days / 7;
		finalRes = week.toString().split(".")[0];
		console.log(finalRes, 'resss1')
		finalRes = finalRes.toString()
		console.log(daysAddition, 'resss')
	}
	UpdateInput = (id) => {
		if (id == 0) {
			var count = 0;
			var loop = this.state.x5;
			loop = loop * this.state.actId;
			var daysAddition = new Date(st);
			console.log('beforeDateChanged ', daysAddition)
			for (var i = 0; i < loop; i++) {
				daysAddition.setDate(daysAddition.getDate() + 7)
				count++;
			}
			console.log(count, 'count')
			console.log(daysAddition, 'daysAddition')

			if (count == loop) {
				this.setState({ itemId: id }, () => {
					console.log(this.state.x5, 'loop')
					this.setState({
						data: this.state.data.filter(item => {
							if (item['id'] == id) {
								item['input1'] = this.state.x5;
								item['startDate'] = st.toString()
								item['EndTime'] = daysAddition.toString()
								return item
							}
							return item;
						})
					})

				}, () => {
					this.setState({ x5: null })
				})
			}
		} else {

			var sum1 = 0;
			var val;
			for (var i = 0; i <= id; i++) {
				if (this.state.data[i].input1 != '') { val = Number(this.state.data[i].input1) } else { val = Number(this.state.x5) }
				sum1 += val
			}
			console.log(sum1, this.state.actId, 'sum1')
			var count = 0;
			var endDate = this.state.data[id - 1].EndTime
			var loop = sum1;
			loop = loop * this.state.actId;
			console.log(loop, 'sum2')
			var daysAddition = new Date(endDate);
			for (var i = 0; i < loop; i++) {
				daysAddition.setDate(daysAddition.getDate() + 7)
				count++;
			}
			if (count == loop) {
				this.setState({ itemId: id }, () => {
					this.setState({
						data: this.state.data.filter(item => {
							if (item['id'] == id) {
								item['input1'] = this.state.x5;
								item['startDate'] = endDate
								item['EndTime'] = daysAddition.toString()
								return item
							}
							return item;
						})
					})

				}, () => {
					this.setState({ x5: null })
				})
			}


		}
	}
	UpdateInput2 = (id) => {
		this.setState({ itemId2: id }, () => {

			this.setState({
				data: this.state.data.filter(item => {
					if (item['id'] == id) {
						item['input2'] = this.state.x6;
						return item
					}
					return item;
				})
			})
		}, () => {
			this.setState({ x6: '' })
		})
		console.log('chekcei', id)
	}
	
	handleChange1 = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	spintWeekClicked = (sprints) => {
		var sprint = finalRes / sprints
		var final = sprint.toString().split(".")[0];
		this.setState({ weeks: final, actId: sprints }, () => {
			console.log('eews', this.state.weeks)
		})

	}
	cheked = (id) => {
		this.setState({ itemId3: id }, () => {

			this.setState({
				data: this.state.data.filter(item => {
					if (item['id'] == id) {
						item['startDate'] = this.state.startDate;
						return item
					}
					return item;
				})
			})
		}, () => {
			this.setState({ editable: false })
		})
	}
	editing = () => {
		this.setState({ editable: true })
	}
	render() {
		sum = 0;
		for (var i = 0; i < this.state.data.length; i++) {
			var val = Number(this.state.data[i].input1)
			sum += val
		}

		console.log(sum, 'chekingsInput1')
		console.log(this.state.data, 'stattes')
		const sprinweeks = this.state.sprintWeeks.map((item, index) => {
			return <li className={this.state.actId == item ? "active" : ''} key={index} onClick={() => this.spintWeekClicked(item)}> {item} </li>
		})
		const rows = this.state.data.map(item => {

			return <div className={"timeframe_box"}>


				<div className="timeframe_first">
					<label></label>
					<p>{item.userd > 9 ? item.userd : `0${item.userd}`}.</p>
				</div>

				<div className="timeframe_secound">
					<label>NUMBER OF SPRINTS</label>
					<input type="text" name="x5" placeholder="05" className={item.input1 != '' ? 'active' : ''} value={item.input1 == '' ? this.state.x5 : item.input1} onChange={this.handleChange} onBlur={() => this.UpdateInput(item.id)} />
					{/* <span style={{ color: 'red' }}>{item.input1 != 0 ? '' : 'Please Fill out this Field'}</span> */}
				</div>

				<div className="timeframe_third">
					<label>MILESTONES DESCRIPTION</label>
					<input type="text" name="x6" placeholder="Milestones 01" className={item.input2 != '' ? 'active' : ''} value={item.id == this.state.itemId2 ? this.state.x6 : item.input2} onInput={this.handleChange} onChange={() => this.UpdateInput2(item.id)} />
					{/* <span style={{ color: 'red' }}>{item.input2 != '' ? '' : 'Please Fill out this field'}</span> */}
				</div>

				<div className="timeframe_for">
					<label>START DATE</label>
					{/* <p>{item.startDate}</p> */}
					<p>{item.startDate[4]}{item.startDate[5]}{item.startDate[6]}/{item.startDate[8]}{item.startDate[9]}/{item.startDate[11]}{item.startDate[12]}{item.startDate[13]}{item.startDate[14]}</p>
				</div>

				<div className="timeframe_five">
					<label>END DATE</label>
					{/* <p>{item.EndTime}</p> */}
					<p>{item.EndTime[4]}{item.EndTime[5]}{item.EndTime[6]}/{item.EndTime[8]}{item.EndTime[9]}/{item.EndTime[11]}{item.EndTime[12]}{item.EndTime[13]}{item.EndTime[14]}</p>
				</div>
				<div className="delete_section">
					<p onClick={() => this.deleteRow(item.id)}><img src="./assets/img/delete.png" /></p>
				</div>



			</div>
		})
		return (
			<section className={this.state.actDiv ? "timeframe animations-disable" : "timeframe animations-check"}>

				<div className="timeframe_top">
					<h1>Milestones</h1>
					<p>Determine Sprints, timeframe, and budget</p>
				</div>









				<div className="timeframe_milestones">
					<h2>MILESTONES</h2>
					{/* <a href="" className="button"> {this.state.weeks}  SPRINTS </a> */}
					<a href="" className="button"> {sum}  SPRINTS </a>

					{rows}
					<div className="timeframe_box add">
						<div className="timeframe_first">
							<label></label>
							<p></p>
						</div>
						<div className="timeframe_add" onClick={() => this.addNew(this.state.data.length)}>
							<div className="timeframe_add_plus">
								<img src="./assets/img/plus.png" />
								<p>New Milestone</p>
							</div>
						</div>
					</div>






				</div>
				<div className="timeframe_tabs">

					<h2>WEEKS IN SPRINT</h2>

					<ul>
						{sprinweeks}
					</ul>

				</div>
				<div className="timeframe_calander">
					<h2>WEEKS IN SPRINT</h2>
					<h1>Friday 10th of april,2019</h1>
					<TDataPicker times={this.SETime} />
				</div>
				<a target="_blank" class="buttons" onClick={this.handleAccept} >Accept Milestone<br /><span> Accept setup as the grounds on which to finalize parthnership</span></a>
			</section>
		);
	};
};

export default Milestone;
