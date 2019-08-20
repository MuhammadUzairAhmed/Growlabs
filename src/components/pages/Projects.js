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
            formData:'',
            matches:[]
        }
    }
    
    componentDidMount(){
        fetch("http://demo5740270.mockable.io/contract")
          .then(res => res.json())
          .then(data => this.setState({formData: data}));
        fetch("https://demo5740270.mockable.io/review")
          .then(res => res.json())
          .then(data => this.setState({matches: data}));
        
    }
   
    handleInput =(x)=>
    {
        console.log('result ',x)
        this.setState({fileUploaded: x})
        console.log('filesUploaded ',this.state.formData.fileUpload.map((items)=> items))
    }
    handleClick = (e) => {
       const posts  = this.state.formData.features;
        const { id } = e.target;
        posts[id].status = !this.state.formData.features[id].status
       this.setState({ posts })
      }
    
     render(){
        const listItems = [];
        if(this.state.formData){this.state.formData.fileUpload.map((files)=> listItems.push(<li>{files.acceptedFile} <br/><span>{files.size}</span></li>))
         return (
             <section className="dial_page">
                 <div className="dp-matches clearfix">
                    <div className="dp-mt-heading">
                        <h1>Your Personal Top 5 Matches</h1>
                        <small>Type something</small>
                    </div>
                    <div className="dp-mt-matches-box">
                        {this.state.matches.companies.map((items,index)=> 
                            <div className="dp-mt-loop-box" key={index}>
                                <div className="lb-box">
                                    <h1>{items.name} <small>{items.location}</small></h1>
                                    <i className="ico check-icon"></i>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <section className="multi_step_form ">
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
                                    {this.state.formData.features.map((items,index)=> 
                                    <label className={items.status ? "box-label check":"box-label "}  id={index} key={index}  onClick={this.handleClick}>
                                        <div className="box-title"><span>{items.name}</span></div>
                                        <input type="checkbox" name="features" value="" className="hidden"   checked={items.status}   />
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
                                    <h3>Quality Level</h3>
                                    <div className="form-row full">
                                        <div className="radioList">
                                            {this.state.formData.quality.map((items,index)=> 
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
                                            {this.state.formData.organisation.map((items,index)=> 
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
                                    <h3>Funding</h3>
                                    <div className="form-row full">
                                        <div className="radioList">
                                            {this.state.formData.funding.map((items,index)=> 
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
                                    <h3>Internal structure</h3>
                                    <div className="form-row full">
                                        <div className="radioList">
                                            {this.state.formData.structure.map((items,index)=> 
                                                <label className={items.status ? "box-label check":"box-label "} key={index}>
                                                    <span>{items.name}</span>
                                                    <input type="radio" name="location" id="ol1" value=""  checked={items.status ? "checked":"null"}/>
                                                </label>
                                            )}
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
                        </fieldset>
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
            classNameName="loading" />
        }
     }
}

export default Projects;
  