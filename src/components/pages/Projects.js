import React, { Component } from 'react';
import TDataPicker from './governanace/contractComponents/TdatePicker';
import RangeSlider from './governanace/contractComponents/RangeSlider';
import FileUpload from './governanace/contractComponents/FileUpload';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import $ from 'jquery'

class Projects extends Component {
    constructor(props){
        super(props);
        this.state={
            fileUploaded:[],
            formData:[],
            matches:[],
            currentAgency:[]
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    componentDidMount(){
        

        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        fetch(proxyurl+"http://react2.zepcomtesting.com/api/contract.json")
          .then(res => res.json())
          .then(data => this.setState({formData: data}, console.log(data,'contract')));
        fetch(proxyurl+"http://react2.zepcomtesting.com/api/review.json")
          .then(res => res.json())
          .then(data => this.setState({matches: data}, console.log(data,'review')));
    }
    componentWillReceiveProps(props,state){
        // console.log(props)
        // console.log(state)
    }
    handleInput =(x)=>
    {
        //console.log('result ',x)
        this.setState({fileUploaded: x})    
        console.log('filesUploaded ',this.state.formData.fileUpload.map((items)=> items))
    }
    handleClick(e){
       const posts  = this.state.formData.features;
       const {id} = e.target
        posts[id].status = !this.state.formData.features[id].status
        
        this.setState({
            formData : {
                ...this.state.formData,
                features:this.state.formData.features.map((items,index)=> 
                    {
                         if(index == id){
                             if(items.status == 'false'){
                                items.status = 'true'
                             }else{
                                items.status = 'false'
                             }
                            
                            return items;
                        }
                    return items;
                    }
                )
            }
        })
        //console.log(this.state)
        
    }
    
    getMatchesData(id){
        this.setState({
            currentAgency:id
        })
        console.log(this.state)
    }
     render(){
        const listItems = [];
        if(this.state.formData){
         return (
             <section className="dial_page">
                 <div className="dp-matches clearfix">
                    <div className="dp-mt-matches-box">
                        {this.state.matches != '' ?
                            this.state.matches.companies.map((items,index)=> 
                            <div className="dp-mt-loop-box" key={index} onClick={() =>this.getMatchesData(index)}>
                                <div className="lb-box">
                                    <h1>{items.name} <small>{items.location}</small></h1>
                                    <i className="ico check-icon"></i>
                                </div>
                            </div>
                        ) : <Loader type="Oval" color="white" height="50" width="50" className="loading" />}
                    </div>
                </div>
                 <section className="multi_step_form">
                    <div className="content_form">
                        <fieldset>
                            <TDataPicker timelineStart={this.state.formData.timelineStart} timelineEnd={this.state.formData.timelineEnd} />
                        </fieldset>
                        <fieldset>
                            <h3>Budget</h3>
                            <div className="form-row" id="counter">
                                <div className="price-slider">
                                    <div id="slider"></div>
                                    <div className="ps-slide-col">
                                        <RangeSlider range={this.state.formData.budget} />
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                            
                     <fieldset>
                        <h3>Features</h3>
                        <div className="form-row">
                            <div className="box">
                                <label className="box-label check" id="0">
                                    <div className="box-title"><span>Profile</span></div>
                                    <input type="checkbox" name="features" className="hidden" value={this.state} checked="" />
                                    <i className="check"></i>
                                </label>
                                    <label className="box-label " id="1">
                                    <div className="box-title"><span>Ratings</span></div>
                                <input type="checkbox" name="features" className="hidden" value="" checked="" /><i className="check"></i>
                                </label>
                                    <label className="box-label " id="2">
                                    <div className="box-title"><span>Labels</span></div>
                                <input type="checkbox" name="features" className="hidden" value="" checked="" /><i className="check"></i>
                                </label>
                                    <label className="box-label " id="3">
                                    <div className="box-title"><span>Cloud Sync</span></div>
                                <input type="checkbox" name="features" className="hidden" value="" checked="" /><i className="check"></i>
                                </label>
                                <label className="box-label " id="4">
                                    <div className="box-title"><span>Sensors</span></div>
                                    <input type="checkbox" name="features" className="hidden" value="" /><i className="check"></i>
                                </label>
                                <label className="box-label " id="5">
                                    <div className="box-title"><span>Phone apps</span></div>
                                    <input type="checkbox" name="features" className="hidden" value="" checked="" /><i className="check"></i>
                                </label>
                                <label className="box-label " id="6">
                                    <div className="box-title"><span>App Icon</span></div>
                                    <input type="checkbox" name="features" className="hidden" value="" /><i className="check"></i>
                                </label>
                                <label className="box-label " id="7">
                                    <div className="box-title"><span>Calender</span></div>
                                    <input type="checkbox" name="features" className="hidden" value="" checked="" /><i className="check"></i>
                                </label>
                                <label className="box-label " id="8">
                                    <div className="box-title"><span>Maps</span></div>
                                    <input type="checkbox" name="features" className="hidden" value="" /><i className="check"></i>
                                </label>
                                <label className="box-label " id="9">
                                    <div className="box-title"><span>API's</span></div>
                                    <input type="checkbox" name="features" className="hidden" value="" checked="" /><i className="check"></i>
                                </label>
                                <label className="box-label " id="10">
                                    <div className="box-title"><span>Name</span></div>
                                    <input type="checkbox" name="features" className="hidden" value="" /><i className="check"></i>
                                </label>
                                <label className="box-label " id="11">
                                    <div className="box-title"><span>Settings</span></div>
                                    <input type="checkbox" name="features" className="hidden" value="" /><i className="check"></i>
                                </label>
                                <label className="box-label " id="12">
                                    <div className="box-title"><span>Messaging</span></div>
                                    <input type="checkbox" name="features" className="hidden" value="" /><i className="check"></i>
                                </label>
                                <label className="box-label " id="13">
                                    <div className="box-title"><span>Search</span></div>
                                    <input type="checkbox" name="features" className="hidden" value="" /><i className="check"></i>
                                </label>
                                <label className="box-label " id="14">
                                    <div className="box-title"><span>Dashboard</span></div>
                                    <input type="checkbox" name="features" className="hidden" value="" checked="" /><i className="check"></i>
                                </label>
                                <label className="box-label " id="15">
                                    <div className="box-title"><span>CMS</span></div>
                                    <input type="checkbox" name="features" className="hidden" value="" /><i className="check"></i>
                                </label>
                                <label className="box-label " id="16">
                                    <div className="box-title"><span>Payments</span></div>
                                    <input type="checkbox" name="features" className="hidden" value="" /><i className="check"></i>
                                </label>
                                <label className="box-label " id="17">
                                    <div className="box-title"><span>Marketplace</span></div>
                                    <input type="checkbox" name="features" className="hidden" value="" /><i className="check"></i>
                                </label>
                                <label className="box-label " id="18">
                                    <div className="box-title"><span>Subscriptions</span></div>
                                    <input type="checkbox" name="features" className="hidden" value="" /><i className="check"></i>
                                </label>
                                <label className="box-label " id="19">
                                    <div className="box-title"><span>Forum</span></div>
                                    <input type="checkbox" name="features" className="hidden" value="" /><i className="check"></i>
                                </label>
                                <label className="box-label check" id="20">
                                    <div className="box-title"><span>Notifications</span></div>
                                    <input type="checkbox" name="features" className="hidden" value="" /><i className="check"></i>
                                </label>
                            </div>
                        </div>
                        </fieldset>

                      <fieldset>
                        <h3>Description</h3>
                        <div className="form-row">
                            <div className="form-group">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Donec elementum ligula eu sapien consequat eleifend. Donec nec dolor erat, condimentum sagittis sem. Praesent porttitor porttitor risus, dapibus rutrum ipsum gravida et. Integer lectus nisi, facilisis sit amet eleifend nec, pharetra ut augue. Integer quam nunc, consequat nec egestas ac, volutpat ac nisi. Sed consectetur dignissim</p>
                            </div>
                        </div>
                        </fieldset>
                        <fieldset>
                        <h3>Reasoning behind project</h3>
                        <div className="form-row">
                            <div className="form-group">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Donec elementum ligula</p>
                            </div>
                        </div>
                        </fieldset>
                        <fieldset>
                        <h3>Similar products</h3>
                        <div className="form-row">
                            <div className="form-group">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Donec elementum ligula</p>
                            </div>
                        </div>
                        </fieldset>
                        <fieldset>
                        <div className="col-md-4">
                            <div className="row">
                                <h3>Location</h3>
                                <div className="form-row full">
                                    <div className="radioList"><label className="box-label "><span>Doesn't Matter</span><input type="radio" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>Pakistan</span><input type="radio" name="location" id="ol1" value="" checked="" /></label><label className="box-label check"><span>Specific country</span><input type="radio" name="location" id="ol1" value="" checked="" /></label></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                <h3>Quality Level</h3>
                                <div className="form-row full">
                                    <div className="radioList"><label className="box-label "><span>Perfect</span><input type="radio" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>Prime</span><input type="radio" name="location" id="ol1" value="" checked="" /></label><label className="box-label check"><span>Prototype</span><input type="radio" name="location" id="ol1" value="" checked="" /></label></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                <h3>Team dynamics</h3>
                                <div className="form-row full">
                                    <div className="radioList"><label className="box-label check"><span>Ideation</span><input type="radio" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>Staff augmentation</span><input type="radio" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>Project team</span><input type="radio" name="location" id="ol1" value="" checked="" /></label></div>
                                </div>
                            </div>
                        </div>
                        </fieldset>

                        <fieldset>
                            <h3>Technology</h3>
                            <div className="form-row">
                                <div className="checklist"><label className="box-label check"><span>Java</span><input type="checkbox" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>C</span><input type="checkbox" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>Python</span><input type="checkbox" name="location" id="ol1" value="" checked="" /></label><label className="box-label check"><span>C++</span><input type="checkbox" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>Javascript</span><input type="checkbox" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>.NET</span><input type="checkbox" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>PHP</span><input type="checkbox" name="location" id="ol1" value="" checked="" /></label><label className="box-label check"><span>swift</span><input type="checkbox" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>Objectice C</span><input type="checkbox" name="location" id="ol1" value="" checked="" /></label><label className="box-label check"><span>GoLang</span><input type="checkbox" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>Perl</span><input type="checkbox" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>Ruby</span><input type="checkbox" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>Other</span><input type="checkbox" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>Don't know, don't care</span><input type="checkbox" name="location" id="ol1" value="" checked="" /></label></div>
                            </div>
                            </fieldset>
                            <fieldset>
                            <h3>Framework</h3>
                            <div className="form-row ">
                                <div className="checklist"><label className="box-label check"><span>Angular.JS</span><input type="checkbox" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>Laravel</span><input type="checkbox" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>React.js</span><input type="checkbox" name="location" id="ol1" value="" checked="" /></label><label className="box-label check"><span>Node.js</span><input type="checkbox" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>Ruby on rails</span><input type="checkbox" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>Symphony</span><input type="checkbox" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>ASP.NET</span><input type="checkbox" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>Other</span><input type="checkbox" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>Don't know, don't care</span><input type="checkbox" name="location" id="ol1" value="" checked="" /></label></div>
                            </div>
                            </fieldset>
                            <fieldset>
                            <div className="col-md-4">
                                <div className="row">
                                    <h3>project type</h3>
                                    <div className="form-row full">
                                        <div className="radioList"><label className="box-label check"><span>Online Website</span><input type="radio" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>Mobile Application</span><input type="radio" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>Computer Program</span><input type="radio" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>Other</span><input type="radio" name="location" id="ol1" value="" checked="" /></label></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="row">
                                    <h3>Current stage</h3>
                                    <div className="form-row full">
                                        <div className="radioList"><label className="box-label check"><span>Concept</span><input type="radio" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>Design availability</span><input type="radio" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>Design and Functionality</span><input type="radio" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>New feautures to existing product</span><input type="radio" name="location" id="ol1" value="" checked="" /></label></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="row">
                                    <h3>Team dynamics</h3>
                                    <div className="form-row full">
                                        <div className="radioList"><label className="box-label check"><span>Ideation</span><input type="radio" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>Staff augmentation</span><input type="radio" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>Project team</span><input type="radio" name="location" id="ol1" value="" checked="" /></label></div>
                                    </div>
                                </div>
                            </div>
                            </fieldset>
                            <fieldset>
                            <div className="col-md-4">
                                <div className="row">
                                    <h3>Organisation</h3>
                                    <div className="form-row full">
                                        <div className="radioList"><label className="box-label check"><span>Startup</span><input type="radio" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>Scale Up</span><input type="radio" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>SME</span><input type="radio" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>Corperate</span><input type="radio" name="location" id="ol1" value="" checked="" /></label></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="row">
                                    <h3>Funding</h3>
                                    <div className="form-row full">
                                        <div className="radioList"><label className="box-label check"><span>Bootstrap</span><input type="radio" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>External Investment</span><input type="radio" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>Own Revenue</span><input type="radio" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>No Funding (Yet!)</span><input type="radio" name="location" id="ol1" value="" checked="" /></label></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="row">
                                    <h3>Internal structure</h3>
                                    <div className="form-row full">
                                        <div className="radioList">
                                            <label className="box-label check">
                                                <span>No Team</span><input type="radio" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>Internal</span><input type="radio" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>Outsourced</span><input type="radio" name="location" id="ol1" value="" checked="" /></label><label className="box-label "><span>Blended Team</span><input type="radio" name="location" id="ol1" value="" checked="" /></label></div>
                                    </div>
                                </div>
                            </div>
                            </fieldset>
                            <fieldset className="half">
                            <div className="form-group custom">
                                <h3>first name</h3>
                                <p> Felix</p>
                            </div>
                            <div className="form-group custom">
                                <h3>phone</h3>
                                <p> (06) 472 387 492 73</p>
                            </div>
                            </fieldset>
                            <fieldset className="half rt">
                            <div className="form-group custom">
                                <h3>skype</h3>
                                <p> 537092357</p>
                            </div>
                            <div className="form-group custom">
                                <h3>last name</h3>
                                <p> Bouma</p>
                            </div>
                            </fieldset>
                            <fieldset>
                            <div className="form-row">
                                <div className="form-group custom_email">
                                    <h3>Email</h3>
                                    <p> Felix@growlabs.tech</p>
                                </div>
                            </div>
                            </fieldset>


{/*


                        <fieldset>
                            <h3>Features</h3>
                            <div className="form-row">
                                <div className="box">
                                    {this.state.formData.features.map((items,index)=> 
                                    <label className={this.state.formData.features[index].status == 'true' ? "box-label check":"box-label "} id={index} key={index} onClick={this.handleClick}>
                                        {console.log(items,'render console')}
                                        <div className="box-title"><span>{items.name}</span></div>
                                        <input type="checkbox" name="features" value="" className="hidden" checked={items.status} />
                                        <i className="check"></i>
                                    </label>
                                    )}
                                </div>
                            </div>
    
                        </fieldset>
                        <fieldset>
                            <h3>Description</h3>
                            <div className="form-row">
                                <div className="form-group">
                                    <p>{this.state.formData.description}</p>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <h3>Reasoning behind project</h3>
                            <div className="form-row">
                                <div className="form-group">
                                    <p>{this.state.formData.reasoning}</p>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <h3>Similar products</h3>
                            <div className="form-row">
                                <div className="form-group">
                                    <p>{this.state.formData.products}</p>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="col-md-4">
                                <div className="row">
                                    <h3>Location</h3>
                                    <div className="form-row full">
                                        <div className="radioList">
                                            {this.state.formData.location.map((items,index)=> 
                                                <label className={items.status ? "box-label check":"box-label "}  key={index}  onClick={(e,s)=>this.handleClick(index,'location')}>
                                                    <span>{items.name}</span>
                                                    <input type="radio" name="location" id="ol1" value=""  checked={items.status ? "checked":"null"}/>
                                                </label>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="row">
                                    <h3>Quality Level</h3>
                                    <div className="form-row full">
                                        <div className="radioList">
                                            {this.state.formData.quality.map((items,index)=> 
                                                    <label className={items.status ? "box-label check":"box-label "}  key={index} onClick={(e,s)=>this.handleClick(index,'quality')}>
                                                        <span>{items.name}</span>
                                                        <input type="radio" name="location" id="ol1" value=""  checked={items.status ? "checked":"null"}/>
                                                    </label>
                                                )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="row">
                                    <h3>Team dynamics</h3>
                                    <div className="form-row full">
                                        <div className="radioList">
                                            {this.state.formData.dynamics.map((items,index)=> 
                                                <label className={items.status ? "box-label check":"box-label "}  key={index}>
                                                    <span>{items.name}</span>
                                                    <input type="radio" name="location" id="ol1" value=""  checked={items.status ? "checked":"null"}/>
                                                </label>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <h3>Technology</h3>
                            <div className="form-row">
                                <div className="checklist">
                                    {this.state.formData.technology.map((items,index)=> 
                                        <label className={items.status ? "box-label check":"box-label "}  key={index}>
                                            <span>{items.name}</span>
                                            <input type="checkbox" name="location" id="ol1" value=""  checked={items.status ? "checked":"null"}/>
                                        </label>
                                    )}
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <h3>Framework</h3>
                            <div className="form-row ">
                                <div className="checklist">
                                    {this.state.formData.framework.map((items,index)=> 
                                        <label className={items.status ? "box-label check":"box-label "} key={index}>
                                            <span>{items.name}</span>
                                            <input type="checkbox" name="location" id="ol1" value=""  checked={items.status ? "checked":"null"}/>
                                        </label>
                                    )}
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="col-md-4">
                                <div className="row">
                                    <h3>project type</h3>
                                    <div className="form-row full">
                                        <div className="radioList">
                                            {this.state.formData.projectType.map((items,index)=> 
                                                <label className={items.status ? "box-label check":"box-label "}  key={index}>
                                                    <span>{items.name}</span>
                                                    <input type="radio" name="location" id="ol1" value=""  checked={items.status ? "checked":"null"}/>
                                                </label>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="row">
                                    <h3>Current stage</h3>
                                    <div className="form-row full">
                                        <div className="radioList">
                                            {this.state.formData.currentStage.map((items,index)=> 
                                                <label className={items.status ? "box-label check":"box-label "} key={index}>
                                                    <span>{items.name}</span>
                                                    <input type="radio" name="location" id="ol1" value=""  checked={items.status ? "checked":"null"}/>
                                                </label>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="row">
                                    <h3>Team dynamics</h3>
                                    <div className="form-row full">
                                        <div className="radioList">
                                            {this.state.formData.dynamics.map((items,index)=> 
                                                <label className={items.status ? "box-label check":"box-label "}  key={index}>
                                                    <span>{items.name}</span>
                                                    <input type="radio" name="location" id="ol1" value=""  checked={items.status ? "checked":"null"}/>
                                                </label>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="col-md-4">
                                <div className="row">
                                    <h3>Organisation</h3>
                                    <div className="form-row full">
                                        <div className="radioList">
                                            {this.state.formData.organisation? this.state.formData.organisation.map((items,index)=> 
                                                <label className={items.status ? "box-label check":"box-label "} key={index}>
                                                    <span>{items.name}</span>
                                                    <input type="radio" name="location" id="ol1" value=""  checked={items.status ? "checked":"null"}/>
                                                </label>
                                            ):""}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="row">
                                    <h3>Funding</h3>
                                    <div className="form-row full">
                                        <div className="radioList">
                                            {this.state.formData.funding? this.state.formData.funding.map((items,index)=> 
                                                <label className={items.status ? "box-label check":"box-label "} key={index}>
                                                    <span>{items.name}</span>
                                                    <input type="radio" name="location" id="ol1" value=""  checked={items.status ? "checked":"null"}/>
                                                </label>
                                            ):''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="row">
                                    <h3>Internal structure</h3>
                                    <div className="form-row full">
                                        <div className="radioList">
                                             {this.state.formData.structure? this.state.formData.structure.map((items,index)=> 
                                                <label className={items.status ? "box-label check":"box-label "} key={index}>
                                                    <span>{items.name}</span>
                                                    <input type="radio" name="location" id="ol1" value=""  checked={items.status ? "checked":"null"}/>
                                                </label>
                                            ):''}
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        {this.state.formData.fileUpload ? '': this.state.formData.fileUpload.map((files,index)=> listItems.push(<li  key={index}>{files.acceptedFile} <br/><span>{files.size}</span></li>))}
                        {this.state.formData.fileUpload ? '': 
                        <fieldset className="upload-fieldset">
                            <div className="form-row">
                                <div className="drag-drop-function">
                                    <div className="selected-files">
                                        <div className="upload-system drop">
                                            <div className="upload-left">
                                                <h3>upload</h3>
                                                <FileUpload data={this.state.formData.fileUploaded} getInput={this.handleInput}/>
                                            </div>
                                            <div className="upload-right">
                                            <h3>Files</h3>
                                                <div className="ur-dd">
                                                    <ul>{listItems}</ul>
                                                </div>
                                                <div className="dropdrag-files"></div>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        }
                        <fieldset className="half">
                            <div className="form-group custom">
                                <h3>first name</h3>
                                <p> {this.state.formData.firstName}</p>
                            </div>
                            <div className="form-group custom">
                                <h3>phone</h3>
                                <p> {this.state.formData.phone}</p>
                            </div>
                        </fieldset>
                        <fieldset className="half rt">
                            <div className="form-group custom">
                                <h3>skype</h3>
                                <p> {this.state.formData.skype}</p>
                            </div>
                            <div className="form-group custom">
                                <h3>last name</h3>
                                <p> {this.state.formData.lastname}</p>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="form-row">
                                <div className="form-group custom_email">
                                    <h3>Email</h3>
                                    <p> {this.state.formData.email}</p>
                                </div>
                            </div>
                        </fieldset>*/}
                    </div>
            </section> 
         </section>
       
         )
        }else{
            return <Loader
            type="Oval"
            color="white"
            height="50"
            width="50"
            className="loading" />
        }
     }
}

export default Projects;
  