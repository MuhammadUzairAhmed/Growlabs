import React, { Component } from 'react';
import TDataPicker from './widget/TdatePicker'
import DatePicker from "react-datepicker";
import MaskedInput from 'react-text-mask'
import "react-datepicker/dist/react-datepicker.css";

 var finalRes;
class Milestone extends Component {
	constructor(props) {
		super(props)
		this.state = {
			x1: '',
			x2: '',
			x3: '',
			startDate : '',
			x1Err: 'Please Fill this field',
			x2Err: 'Please Fill this field',
			x3Err: 'Please Fill this field',
			x4: '',
			x5: 0,
			x6: '',
			x4Err: 'Please Fill this field',
			x5Err: 'Please Fill this field',
			x6Err: 'Please Fill this field',
			data:[
				{
					id: 0,
					userd:1,
					input1:0,
					input2:'',
					MSBudget:'',
					status:false,
					startDate:'00/00/0000',
					EndTime:'12/10/2019'
				}
			],
			count:0,
			count2:1,
			changeWidth:10,
			sprints:1,
			timelineStart:'',
			timelineEnd:'',
			itemId:null,
			itemId2:null,
			itemId3:null,
			itemidsDate:null,
			item4:null,
			actDiv: false,
			weeks:'',
			sprintWeeks:[1,2,3],
			actId:null,
			editable:true
			
		}
	}
	componentDidMount()
	{
		if(this.props.mileStonedata.data != null){
			this.setState({data:this.props.mileStonedata.data,weeks:this.props.mileStonedata.sprint_weeks,
			actId: this.props.mileStonedata.sprintWeeks},()=>{console.log(this.state.data,'this.state.data')})
		console.log(this.props.mileStonedata,'didMouhntData')}
	}
	addNew =(val)=>{
		console.log(val,'trysss')
if(val+1 <= this.state.weeks){
		var count = this.state.data.length;
		var userid = count+1;
		var addChild ={
			id: count,
			userd: userid,
			input1:0,
			input2:'',
			MSBudget:'',
			status:false,
			startDate:'00/00/0000',
			EndTime:'12/10/2019'
		}
		this.setState({ data: [...this.state.data, addChild], changeWidth: this.state.changeWidth+10, sprints:this.state.sprints+1 }, () => {
		console.log(this.state.data, "dataMid")
		 })}
	}
	deleteRow =(id)=>{
		console.log('ids',id)
		this.setState({
			data: this.state.data.filter(item => {
			   if (item['id'] != id)
			   {
				item['id'] = this.state.count++;
				item['userd'] = this.state.count2++
				return item
			   }
			}),
			count:0,
			count2:1,
			changeWidth: this.state.changeWidth-10,
			sprints:this.state.sprints-1
		 })
	}
	handleAccept =()=>{
		var values = {
			data: this.state.data,
			weeks: this.state.weeks,
			sprint_weeks: this.state.actId
		}
		this.setState({actDiv:true},()=>{
			setTimeout(() => {
				this.props.changeValue(3,values)
			}, 1000);
		  })

	  }

	handleChange = (e) => {
		console.log(e,'eventss')
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
	SETime =(val)=>{
		console.log('timesss',val)
		var res = Math.abs(val.start-val.end)/1000;
		var days = Math.floor(res/86400)
		var week = days/7;
		 finalRes= week.toString().split(".")[0];
		 finalRes = finalRes.toString()

	}
	UpdateInput = (id) =>
	{
		this.setState({itemId:id},()=>{

		this.setState({
			data: this.state.data.filter(item => {
			   if (item['id'] == id) {
				  item['input1'] = this.state.x5;
				  return item
			   }
			   return item;
			})
		 })

		},()=>{
			this.setState({x5:0})
		})
		console.log('chekcei',id)
	}
	UpdateInput2 = (id) =>
	{
		this.setState({itemId2:id},()=>{

		this.setState({
			data: this.state.data.filter(item => {
			   if (item['id'] == id) {
				  item['input2'] = this.state.x6;
				  return item
			   }
			   return item;
			})
		 })
		},()=>{
			this.setState({x6:''})
		})
		console.log('chekcei',id)
	}
	// handleChange1=(date)=> {
	// 	this.setState({
	// 	  startDate: date
	// 	});
	//   }

	  handleChange1 = (e) => {
        this.setState({
           [e.target.name]: e.target.value
        })
     }
	spintWeekClicked = (sprints)=>
	{
			var sprint = finalRes/sprints
			var final = sprint.toString().split(".")[0];
			this.setState({weeks: final,actId:sprints},()=>{
			console.log('eews',this.state.weeks)
		})

	}
	cheked=(id)=>{
		this.setState({itemId3:id},()=>{

			this.setState({
				data: this.state.data.filter(item => {
				   if (item['id'] == id) {
					  item['startDate'] = this.state.startDate;
					  return item
				   }
				   return item;
				})
			 })
			},()=>{
				this.setState({editable: false})
			})
	}
	editing =()=>{
		this.setState({editable: true})
	}
	render() {
		console.log(this.state.data,'stattes')
		const sprinweeks = this.state.sprintWeeks.map((item,index)=>{
			return <li className={this.state.actId == item ? "active":''} key={index} onClick={()=>this.spintWeekClicked(item)}> {item} </li>
		})
		const rows = this.state.data.map(item=>{

		return	<div className={"timeframe_box"}>

						
<div className="timeframe_first">
							<label></label>
							<p>{item.userd > 9 ? item.userd : `0${item.userd}`}.</p>
						</div>

						<div className="timeframe_secound">
							<label>NUMBER OF SPRINTS</label>
							<input type="text" name="x5" placeholder="05" className={item.input1 != 0 ? 'active':''} value={item.id == this.state.itemId ? this.state.x5 : item.input1} onInput={this.handleChange} onChange={()=>this.UpdateInput(item.id)} />
							{/* <span style={{ color: 'red' }}>{item.input1 != 0 ? '' : 'Please Fill out this Field'}</span> */}
						</div>

						<div className="timeframe_third">
							<label>MILESTONES DESCRIPTION</label>
							<input type="text" name="x6" placeholder="Milestones 01" className={item.input2 != ''? 'active':''} value={item.id == this.state.itemId2 ? this.state.x6 : item.input2} onInput={this.handleChange} onChange={()=>this.UpdateInput2(item.id)} />
							{/* <span style={{ color: 'red' }}>{item.input2 != '' ? '' : 'Please Fill out this field'}</span> */}
						</div>

						<div className="timeframe_for">
							<label>START DATE</label>
						
								{/* <DatePicker
								selected={this.state.startDate}
								onSelect={()=>this.cheked(item.id)}
								onChange={this.handleChange1}
								/> */}
					{/* {this.state.editable ? */}
					 	<p>			<MaskedInput
                     name="startDate"
					 onChange={this.handleChange1}
					 onBlur={()=>this.cheked(item.id)}
					 guide={true}
					 value={this.state.startDate}
                     mask={[ /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                     placeholder="00/00/0000"
                     /> {item.startDate == "00/00/0000" ? this.state.startDate : item.startDate} </p>
					{/* //  :
					//  <p onClick={this.editing}></p> */}
							
						</div>

						<div className="timeframe_five">
							<label>END DATE</label>
							<p>12/10/2019</p>
						</div>
						<div className="delete_section">
							<p onClick={()=>this.deleteRow(item.id)}><img src="./assets/img/delete.png"/></p>
						</div>



					</div>
		})
		return (
			<section  className={this.state.actDiv ? "timeframe animations-disable" : "timeframe animations-check" }>

				<div className="timeframe_top">
					<h1>Milestones</h1>
					<p>Determine Sprints, timeframe, and budget</p>
				</div>



				<div className="timeframe_calander">
					<h2>WEEKS IN SPRINT</h2>
					<h1>Friday 10th of april,2019</h1>
					<TDataPicker times={this.SETime} />
				</div>


				<div className="timeframe_tabs">

					<h2>WEEKS IN SPRINT</h2>

					<ul>
						{sprinweeks}
					</ul>

				</div>


				<div className="timeframe_milestones">
					<h2>MILESTONES</h2>
					<a href="" className="button"> {this.state.weeks}  SPRINTS </a>


					{/*<div className="timeframe_bar">*/}

						{/*<div className="timeframe_bar_persant" style={{width:`${this.state.changeWidth}%`,transition:'width 1s'}}> <p>{this.state.sprints}  SPRINTS</p> </div>*/}
						{/*<p>24  SPRINTS</p>*/}
					{/*</div>*/}




					{/* <div className="timeframe_box"> */}

						{/* <div className="timeframe_first">
							<label></label>
							<p>03.</p>
						</div>

						<div className="timeframe_secound">
							<label>NUMBER OF SPRINTS</label>
						</div>

						<div className="timeframe_third">
							<label>MILESTONES DESCRIPTION</label>

						</div>

						<div className="timeframe_for">
							<label>START DATE</label>
							<p>00/00/000</p>
						</div>

						<div className="timeframe_five">
							<label>END DATE</label>
							<p>00/00/000</p>
						</div>


					</div> */}

					{rows}

					<div className="timeframe_box add">

						<div className="timeframe_first">
							<label></label>
							<p></p>
						</div>

						<div className="timeframe_add" onClick={()=>this.addNew(this.state.data.length)}>



							<div className="timeframe_add_plus">
								<img src="./assets/img/plus.png" />
								<p>New Milestone</p>
							</div>
						</div>



					</div>






				</div>
				<a target="_blank"  class="buttons" onClick={this.handleAccept} >Accept Milestone<br /><span> Accept setup as the grounds on which to finalize parthnership</span></a>
			</section>
		);
	};
};

export default Milestone;
