import React, { Component } from 'react';
import Unmatch from './Project/unmatch';
import {connect} from "react-redux";
import { currentChatId } from '../../actions/fuelSavingsActions';
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
            currentAgency:[],
            showdata:false,
            actid:null,
            data:[],
            dataTrue:false,
            unmatch:{'status':false}
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    componentWillMount(){
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        fetch(proxyurl+"http://react2.zepcomtesting.com/api/contract.json")
          .then(res => res.json())
          .then(data => this.setState({formData: data, showdata:true}));
        fetch(proxyurl+"http://react2.zepcomtesting.com/api/review.json")
          .then(res => res.json())
          .then(data => this.setState({matches: data, dataTrue:true}));
    }
    handleInput =(x)=>
    {
        this.setState({fileUploaded: x})    
        console.log('filesUploaded ',this.state.formData.fileUpload.map((items)=> items ))
    }
    handleClick(e,f){
        this.setState({
            data : {
                ...this.state.data,
                [this.state.currentAgency]:{
                    ...this.state.data[this.state.currentAgency],
                    [f]:this.state.data[this.state.currentAgency][f].map((items,index)=> 
                        {
                            if(index == e){
                                if(items.status == true) {
                                    items.status = false 
                                    return items; 
                                }
                                else {
                                    items.status = true 
                                    return items; 
                                }
                            }
                            return items;
                        }
                    )
                }
            }
            
        })
        console.log(this.state.data[this.state.currentAgency])

    }
    radioChange(e,f){
        this.setState({
            data : {
                ...this.state.data,
                [this.state.currentAgency]:{
                    ...this.state.data[this.state.currentAgency],
                        [f]:this.state.data[this.state.currentAgency][f].map((items,index)=> 
                            {
                                if(index == e){
                                    if(items.status == true) {
                                    items.status = false 
                                    return items; 
                                }
                                else {
                                    items.status = true 
                                    return items; 
                                }
                                }else{
                                    items.status = false 
                                    return items; 
                                }
                                return items;
                            }
                        )
                    }
            }
            
        })
    }
    changeTextData(x, array){
        this.setState({
            data : {
                ...this.state.data,
                    [this.state.currentAgency]:{
                        ...this.state.data[this.state.currentAgency],
                        [array]:this.state.data[this.state.currentAgency][array]=x.target.value
                    }
                
                }
            }
        )
        console.log('messsage',this.state.formData.reasoning)
    }
    changeDate(e){
        this.setState({
            data : {
                ...this.state.data,
                [this.state.currentAgency]:{
                    ...this.state.data[this.state.currentAgency],
                    timelineEnd:e.timelineEnd,
                    timelineStart:e.timelineStart,
                    }
                }
            }
        )
    }
    changeBudget(e){
        this.setState({
            data : {
                ...this.state.data,
                [this.state.currentAgency]:{
                    ...this.state.data[this.state.currentAgency],
                    budget:e
                    }
                }
            }
        )
    }
    getMatchesData(id,dataChat){
        this.setState({
            currentAgency:id,
        })
        if(this.state.data[id]){

        }else{
            if(this.state.data[id] != this.state.currentAgency){
                const proxyurl = "https://cors-anywhere.herokuapp.com/";
                fetch(proxyurl+"http://react2.zepcomtesting.com/api/contract.json")
                  .then(res => res.json())
                  .then(data => this.setState({data: {...this.state.data, [id]: data}}));
            }
        }
        this.props.currentState(id)
    }
    deleteUnmatchDataFun(id){
        this.setState({
            unmatch:{status:true}
         })
    }
    getMatchesDelete(id){
        this.setState({
            matches: {
                ...this.state.matches, 
                companies:this.state.matches.companies.map((items,index)=>  
                    {
                        if(index == id){
                            items.status = false 
                            return items; 
                        }
                        return items; 
                    }
                ) },
            showData:false,
            unmatch:{status:false}
        })
    }   
    sendDataApi(){
        const method = "POST";
        const body = this.state.formData;
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        fetch(proxyurl+"http://react2.zepcomtesting.com/api/contract.json", { method, body })
          .then(res => res.json())
          .then(data => console.log(JSON.stringify(data.form, null, "\t")));
    }
    closePopup(){
        this.setState({
            unmatch:{status:false}
        })
    }

     render(){
        const listItems = [];

        if(this.state.showdata == true){
         return (
             <section className="dial_page">
                 {this.state.unmatch.status? <Unmatch closePopup={this.closePopup.bind(this)} id={this.state.currentAgency} deleteUnmatchData={this.getMatchesDelete.bind(this)}/>:''}
                 <div className="dp-matches clearfix">
                     <h1>Final Proposala</h1>
                    <div className="dp-mt-matches-box">
                        {this.state.matches.companies ?
                            this.state.matches.companies.map((items,index)=> 
                           
                            <div className={this.state.currentAgency == index ?"dp-mt-loop-box active" : "dp-mt-loop-box"} active={items.status}  key={index} onClick={() =>this.getMatchesData(index,items)}>
                               
                                <div class="delete" onClick={() =>this.deleteUnmatchDataFun(index)}><img src="./assets/img/delete_b.png"/></div>
                                <div className="lb-box">
                                    <h1>{items.name} <small>{items.location}</small></h1>
                                    <i className="ico check-icon"></i>
                                </div>
                                <div className="dp-matches-bottem">
                                    <div className="dp-matches-bottem-box"> <h2>64 <span>%</span></h2><p>GROW SCORE</p>  </div>
                                    <div className="dp-matches-bottem-box"> <h2>4,2 <span>,5</span></h2><p>PATING</p>  </div>
                                    <div className="dp-matches-bottem-box"> <h2>123 <span>,5</span></h2><p>PROJECTS</p>  </div>
                                    <div className="dp-matches-bottem-box"> <h2>73 <span>$</span></h2><p>PRE HOURE</p>  </div>
                                </div>
                            </div>
                       )    
                        : <Loader type="Oval" color="white" height="50" width="50" className="loading" />}
                   
                    </div>
                    <div className="dp_maches_button">
                      <a target="_blank" class="button"  onClick={(data)=>this.sendDataApi(this.state.formData)}>Accept Agreement<br/><span> Accept setup as the grounds on which to finalize parthnership</span></a>
                      </div>
                </div>
                <div className="version_tabs">
                <ul class="ui-tabs-nav">
                    <li class="active"><a>Version 1</a></li>
                    <li class=""><a>Version 2</a></li>
                </ul>
                </div>


                 <section className="multi_step_form">

                    {this.state.data[this.state.currentAgency] ? 
                    <div className="content_form">
                    
                        <fieldset>
                            <h2 className="Profieldset_hea">TIMELINE</h2>
                            <TDataPicker timelineStart={this.state.formData.timelineStart} timelineEnd={this.state.formData.timelineEnd} onChange={(e)=>this.changeDate(e)}/>
                        </fieldset>
                        <fieldset>
                            <h3>Budget</h3>
                            <div className="form-row" id="counter">
                                <div className="price-slider">
                                    <div id="slider"></div>
                                    <div className="ps-slide-col">
                                        <RangeSlider range={this.state.formData.budget} changeRangeData={this.changeBudget.bind(this)} />
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <h3>Features</h3>
                            <div className="form-row">
                                <div className="box">
                                    {this.state.data[this.state.currentAgency].features.map((items,index)=> 
                                    <label className={this.state.data[this.state.currentAgency].features[index].status == true ? "box-label check":"box-label "}  id={index} key={index} onChange={()=>this.handleClick(index,'features')}>
                                        <div className="box-title"><span>{items.name}</span></div>
                                        <input type="checkbox" name="features" value={items.name} className="hidden" checked={this.state.data[this.state.currentAgency].features[index].status == true ? "checked":""} />
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
                                    <input type="text" className="input_textable" value={this.state.data[this.state.currentAgency].description} onChange={(x,v,s)=>this.changeTextData(x,'description')} />
                                    <p>{this.state.data[this.state.currentAgency].description}</p>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <h3>Reasoning behind project</h3>
                            <div className="form-row">
                                <div className="form-group">
                                    {/* <input type="text" value={this.state.formData.reasoning} onChange={(x,v)=>this.changeTextData(x,'reasoning')} /> */}
                                    <p  onInput={(x,v)=>this.changeTextData(x,'reasoning')}>{this.state.data[this.state.currentAgency].reasoning}</p>
                                
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <h3>Similar products</h3>
                            <div className="form-row">
                                <div className="form-group">
                                    <input type="text" value={this.state.data[this.state.currentAgency].products} onChange={(x,v)=>this.changeTextData(x,'products')} />
                                    <p>{this.state.data[this.state.currentAgency].products}</p>
                                    
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="col-md-4">
                                <div className="row">
                                    <h3>Location</h3>
                                    <div className="form-row full">
                                        <div className="radioList">
                                            {this.state.data[this.state.currentAgency].location.map((items,index)=> 
                                                <label className={items.status ? "box-label check":"box-label "}  key={index}  onChange={(e,s)=>this.radioChange(index,'location')}>
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
                                            {this.state.data[this.state.currentAgency].quality.map((items,index)=> 
                                                    <label className={items.status ? "box-label check":"box-label "}  key={index}  onChange={(e,s)=>this.radioChange(index,'quality')}>
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
                                            {this.state.data[this.state.currentAgency].dynamics.map((items,index)=> 
                                                <label className={items.status ? "box-label check":"box-label "}  key={index}  onChange={(e,s)=>this.radioChange(index,'dynamics')}>
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
                                    {this.state.data[this.state.currentAgency].technology.map((items,index)=> 
                                        <label className={items.status ? "box-label check":"box-label "}  key={index} onChange={()=>this.handleClick(index,'technology')}>
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
                                    {this.state.data[this.state.currentAgency].framework.map((items,index)=> 
                                        <label className={items.status ? "box-label check":"box-label "} key={index}  onChange={()=>this.handleClick(index,'framework')}>
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
                                            {this.state.data[this.state.currentAgency].projectType.map((items,index)=> 
                                                <label className={items.status ? "box-label check":"box-label "}  key={index}  onChange={(e,s)=>this.radioChange(index,'projectType')}>
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
                                            {this.state.data[this.state.currentAgency].currentStage.map((items,index)=> 
                                                <label className={items.status ? "box-label check":"box-label "} key={index}  onChange={(e,s)=>this.radioChange(index,'currentStage')}>
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
                                            {this.state.data[this.state.currentAgency].dynamics.map((items,index)=> 
                                                <label className={items.status ? "box-label check":"box-label "}  key={index}  onChange={(e,s)=>this.radioChange(index,'dynamics')}>
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
                                            {this.state.data[this.state.currentAgency].organisation ? this.state.data[this.state.currentAgency].organisation.map((items,index)=> 
                                                <label className={items.status ? "box-label check":"box-label "} key={index}   onChange={(e,s)=>this.radioChange(index,'organisation')}>
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
                                            {this.state.data[this.state.currentAgency].funding? this.state.data[this.state.currentAgency].funding.map((items,index)=> 
                                                <label className={items.status ? "box-label check":"box-label "} key={index}   onChange={(e,s)=>this.radioChange(index,'funding')}>
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
                                             {this.state.data[this.state.currentAgency].structure? this.state.data[this.state.currentAgency].structure.map((items,index)=> 
                                                <label className={items.status ? "box-label check":"box-label "} key={index}   onChange={(e,s)=>this.radioChange(index,'structure')}>
                                                    <span>{items.name}</span>
                                                    <input type="radio" name="location" id="ol1" value=""  checked={items.status ? "checked":"null"}/>
                                                </label>
                                            ):''}
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className="upload-fieldset">
                            <div className="form-row">
                                <div className="drag-drop-function">
                                    <div className="selected-files">
                                        <div className="upload-system drop">
                                            <div className="upload-left">
                                                <h3>upload</h3>
                                                <FileUpload data={this.state.data[this.state.currentAgency].fileUploaded} getInput={this.handleInput}/>
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
                        <fieldset className="half">
                            <div className="form-group custom">
                                <h3>first name</h3>
                                    <input type="text" value={this.state.data[this.state.currentAgency].firstName} onChange={(x,v)=>this.changeTextData(x,'firstName')} />
                                <p> {this.state.data[this.state.currentAgency].firstName}</p>
                            </div>
                            <div className="form-group custom">
                                <h3>phone</h3>
                                    <input type="text" value={this.state.data[this.state.currentAgency].phone} onChange={(x,v)=>this.changeTextData(x,'phone')} />
                                <p> {this.state.data[this.state.currentAgency].phone}</p>
                            </div>
                        </fieldset>
                        <fieldset className="half rt">
                            <div className="form-group custom">
                                <h3>skype</h3>
                                    <input type="text" value={this.state.data[this.state.currentAgency].skype} onChange={(x,v)=>this.changeTextData(x,'skype')} />
                                <p> {this.state.data[this.state.currentAgency].skype}</p>
                            </div>
                            <div className="form-group custom">
                                <h3>last name</h3>
                                    <input type="text" value={this.state.data[this.state.currentAgency].lastname} onChange={(x,v)=>this.changeTextData(x,'lastname')} />
                                <p> {this.state.data[this.state.currentAgency].lastname}</p>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="form-row">
                                <div className="form-group custom_email">
                                    <h3>Email</h3>
                                    <input type="text" value={this.state.data[this.state.currentAgency].email} onChange={(x,v)=>this.changeTextData(x,'email')} />
                                    <p> {this.state.data[this.state.currentAgency].email}</p>
                                </div>
                            </div>
                        </fieldset>
                    </div>
            :        <section class="multi_step_form">
              <div class="content_form">
                  <fieldset>
                      <Loader type="Oval" color="white" height="50" width="50" className="loading" />
                  </fieldset>
              </div>
          </section> }
            </section> 
         </section>
         )
        }else{
            return (
                <section class="multi_step_form">
                    <div class="content_form">
                        <fieldset>
                            <Loader type="Oval" color="white" height="50" width="50" className="loading" />
                        </fieldset>
                    </div>
                </section>
            )
        }
     }
}
const mapStateToProps = (state) => {
    return {
        currentChatID:state.fuelSavings.PROJECTCURRENTCHATID,
    };
  };
  const mapDispatchToProps = (dispatch) => {
   
    return {
        currentState: (id) =>  dispatch(currentChatId(id))
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Projects);