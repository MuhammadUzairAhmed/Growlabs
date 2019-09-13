import React, { Component } from 'react';
import Unmatch from './Project/unmatch';
import {connect} from "react-redux";
import { currentChatId } from '../../actions/fuelSavingsActions';
import TDataPicker from './governanace/contractComponents/TdatePicker';
import RangeSlider from './governanace/contractComponents/RangeSlider';
import PERSONAL from './settings/personal';
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
            unmatch:{'status':false},
            changeVersion:false,
            versions:[],
            userData: { password:'',password_r:''},
            currentVersion:0,
            finalizedAccount:false,
            activeAddition:false,
            animate: false,
            unmatchID:''
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    componentWillMount(){
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        fetch(proxyurl+"http://react2.zepcomtesting.com/api/contract.json")
          .then(res => res.json())
          .then(datas => this.setState({formData: datas,versions: datas,}));
        fetch(proxyurl+"http://react2.zepcomtesting.com/api/review.json")
          .then(res => res.json())
          .then(datas => this.setState({matches: datas, dataTrue:true, showdata:true}));
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
    changeDate(from,to){
        console.log(from,to,'dates came')
        this.setState({
            data : {
                ...this.state.data,
                [this.state.currentAgency]:{
                    ...this.state.data[this.state.currentAgency],
                    timelineEnd:to,
                    timelineStart:from,
                    }
                },
                
            }
        )
    }
    changeBudget(e){
        console.log(e,'rangeDATA')

        // this.state.data[this.state.currentAgency]
        console.log(this.state.versions,'versions')
        console.log(this.state.data,'dataAgerncy')
        this.setState({
            data : {
                ...this.state.data,
                [this.state.currentAgency]:{
                    ...this.state.data[this.state.currentAgency],
                    budget:e.toString()
                    }
                }
            }
        )
    }
    getMatchesData(id,dataChat){
        this.setState({
            currentAgency:id,
            animate:true,
        })
        this.props.currentState(id)
        if(this.state.data[id]){
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            fetch(proxyurl+"http://react2.zepcomtesting.com/api/contract.json")
              .then(res => res.json())
              .then(datas => this.setState({data: {...this.state.data, [id]: datas},changeVersion:false}));
        }else{
            if(this.state.data[id] != this.state.currentAgency){
                const proxyurl = "https://cors-anywhere.herokuapp.com/";
                fetch(proxyurl+"http://react2.zepcomtesting.com/api/contract.json")
                  .then(res => res.json())
                  .then(datas => this.setState({data: {...this.state.data, [id]: datas},changeVersion:false}));
                //this.setState({data: {...this.state.data, [id]:  this.state.formData}})
            }
        }
        console.log(this.state)
        setTimeout(function(){
            this.setState({
                animate:false
            })
        }.bind(this),2000)
     
    }
    deleteUnmatchDataFun(value,id){
        this.setState({
            unmatch:{status:true},
            unmatchID:[id]
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
    changeVersion(){
        this.setState({
            changeVersion:true,
        })
        console.log(this.state.formData)
        this.setState({
            versions : this.state.data[this.state.currentAgency]
        })
    }
    getVersionData(i){
        this.setState({
            changeVersion:false,
        })
    }
    updateVersionData(data){
        this.setState({
            versions : data
        })
        console.log(this.state)
        // console.log(this.state)
        // this.setState({
        //     currentVersion:[x],
        //         data : {
        //             ...this.state.data,
        //             [this.state.currentAgency]:value
        //         }
        //     })
        //     console.log(x)
        //     console.log(this.state)
        //  console.log(this.state)   
    }
    handleChange = (e) => {
        this.setState({
            userData:{ ...this.state.userData, [e.target.name]: e.target.value}
        })
        console.log(this.state.userData)
     }
     handleSave =(e)=>
     {
        this.setState({
            activeAddition:true,
            finalizedAccount:true
        })
        const{password, password_r}=this.state
        var values= {
            password, password_r
        }
        fetch('https://virtserver.swaggerhub.com/GROW-Labs/GROWLabs_API/1.0.0/api_projects/finalizeAccount', {
            method: 'post',
            body: JSON.stringify(values)
         }).then((response) => {
            console.log(response,"resData")
            return response.json();
         }).then((data)=> {
            console.log('Created List:', data);
            //alert('as')
         });
     }
     activeAd(){
        this.setState({
            activeAddition:false
        })
     }
     render(){
        const listItems = [];
        if(this.state.showdata == true){
         return (
             <section className="dial_page">
                 {this.state.unmatch.status? <Unmatch closePopup={this.closePopup.bind(this)} id={this.state.unmatchID} deleteUnmatchData={this.getMatchesDelete.bind(this)}/>:''}
                 <div className="dp-matches clearfix">
                     <h1>Final Proposal</h1>
                    <div className="dp-mt-matches-box">
                        {this.state.matches.companies ?
                            this.state.matches.companies.map((items,index)=> 
                            <div className={this.state.currentAgency == index ?"dp-mt-loop-box active" : "dp-mt-loop-box"} active={items.status}  key={index} onClick={() =>this.getMatchesData(index,items)}>
                                <div class="delete" onClick={() =>this.deleteUnmatchDataFun(items,index)}><img src="./assets/img/delete_b.png"/></div>
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
                       {this.state.changeVersion ? <a class="button save"  onClick={(data)=>this.getVersionData(this.state.data[this.state.currentAgency])}>Send updated proposal to {this.state.matches.companies[this.state.currentAgency] ? this.state.matches.companies[this.state.currentAgency].name:'[agency]'}<br/><span> Accept setup as the grounds on which to finalize parthnership</span></a> : <a class="button"  onClick={(data)=>this.sendDataApi(this.state.formData)}>Partner up with  {this.state.matches.companies[this.state.currentAgency] ? this.state.matches.companies[this.state.currentAgency].name:'[agency]'}<br/><span> Accept setup as the grounds on which to finalize parthnership</span></a>}
                    </div>
                </div>
                <div className="version_tabs">
                    <ul class="ui-tabs-nav">
                        <li class={this.state.changeVersion ? '':'active'} onClick={()=>this.updateVersionData(this.state.formData,this.setState({changeVersion:false}))}><a>Version 1</a></li>  
                       {/* <li class={this.state.changeVersion ? 'active':''} onClick={()=>this.updateVersionData(this.state.data[this.state.currentAgency],this.setState({changeVersion:true}))} ><a>Version 2</a></li> */}
                       <li class={this.state.changeVersion ? 'active':''} ><a>Version 2</a></li>
                    </ul>
                </div>
                        
                {
                this.state.finalizedAccount == false ? 
                <div className="modal Finalize">
                    <h1>Finalize Account</h1>
                     <div className="feild Finalize">
                        <label>PASSWORD</label>
                        <img src="./assets/img/lock.png" class="lock"/>
                        <input onChange={this.handleChange} type="text" name="password" value={this.state.userData.password} placeholder="" />
                        <img src="./assets/img/eyes.png" class="eyes"/>
                    </div>
                    <div className="feild Finalize">
                        <label>CONFIRM</label>
                        <img src="./assets/img/lock.png" class="lock"/>
                        <input onChange={this.handleChange} type="text" name="password_r" value={this.state.userData.password_r} placeholder="" />
                    </div>
                     {this.state.userData.password != '' && this.state.userData.password  == this.state.userData.password_r && this.state.userData.password_r != '' ? <button className="account_but" color="primary" onClick={this.handleSave}>FINISH ACCOUNT</button>:''}
                    
                </div>
                :''}
                {this.state.activeAddition ? 
                    <div className="modal Personal">
                        <button class="cancel_but" color="primary" onClick={this.activeAd.bind(this)}>x</button>
                        <PERSONAL projectType='additionalInformationPopup'  activeAdditional={this.activeAd.bind(this)} getData='' buttonActive='' dntShow='' currentPageStatus='' sendInfo=''/>
                    </div>   
                    :''
                }
                 <section className="multi_step_form" onBlur={()=>this.changeVersion(1)}>

                    {this.state.data[this.state.currentAgency] ? 
                    <div className="content_form" animate={this.state.animate? 'active':''}>
                    
                        <fieldset>
                            <h2 className="Profieldset_hea">TIMELINE</h2>
                            <TDataPicker timelineStart={this.state.versions.timelineStart} timelineEnd={this.state.versions.timelineEnd} onChangeDate={this.changeDate}/>
                        </fieldset>
                        <fieldset>
                            <h3>Budget</h3>
                            <div className="form-row" id="counter">
                                <div className="price-slider">
                                    <div id="slider"></div>
                                    <div className="ps-slide-col">
                                        <RangeSlider range={this.state.versions.budget} changeRangeData={this.changeBudget.bind(this)} />
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <h3>Features</h3>
                            <div className="form-row">
                                <div className="box">
                                    
                                    {this.state.versions.features.map((items,index)=> 
                                    <label className={this.state.versions.features[index].status == true ? "box-label check":"box-label "}  id={index} key={index} onChange={()=>this.handleClick(index,'features')}>
                                        <div className="box-title"><span>{items.name}</span></div>
                                        <input type="checkbox" name="features" value={items.name} className="hidden" checked={this.state.versions.features[index].status == true ? "checked":""} />
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
                                    <textarea type="text" className="input_textable" value={this.state.data[this.state.currentAgency].description} onChange={(x,v,s)=>this.changeTextData(x,'description')}> </textarea>
                                   
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <h3>Reasoning behind project</h3>
                            <div className="form-row">
                                <div className="form-group">
                                    <textarea type="text" className="input_textable" value={this.state.data[this.state.currentAgency].reasoning} onChange={(x,v)=>this.changeTextData(x,'reasoning')}></textarea>
                                
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <h3>Similar products</h3>
                            <div className="form-row">
                                <div className="form-group">
                                    <textarea type="text" className="input_textable" value={this.state.data[this.state.currentAgency].products} onChange={(x,v)=>this.changeTextData(x,'products')}></textarea>
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
                                    <textarea type="text" value={this.state.data[this.state.currentAgency].firstName} onChange={(x,v)=>this.changeTextData(x,'firstName')}></textarea>
                            </div>
                            <div className="form-group custom">
                                <h3>phone</h3>
                                    <textarea type="text" value={this.state.data[this.state.currentAgency].phone} onChange={(x,v)=>this.changeTextData(x,'phone')}></textarea>
                            </div>
                        </fieldset>
                        <fieldset className="half rt">
                            <div className="form-group custom">
                                <h3>skype</h3>
                                    <textarea type="text" value={this.state.data[this.state.currentAgency].skype} onChange={(x,v)=>this.changeTextData(x,'skype')}></textarea>
                            </div>
                            <div className="form-group custom">
                                <h3>last name</h3>
                                    <textarea type="text" value={this.state.data[this.state.currentAgency].lastname} onChange={(x,v)=>this.changeTextData(x,'lastname')}></textarea>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="form-row">
                                <div className="form-group custom_email">
                                    <h3>Email</h3>
                                    <textarea type="text" value={this.state.data[this.state.currentAgency].email} onChange={(x,v)=>this.changeTextData(x,'email')}></textarea>
                                </div>
                            </div>
                        </fieldset>
                    </div>
            :  <section class="multi_step_form">
                    <div class="content_form">
                        <fieldset>
                                <div className="form-row">
                                    <div className="form-group"> 
                                        <p>Please select agency...</p>
                                    </div>
                                </div>
                        </fieldset>
                    </div>
                </section> 
            }
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