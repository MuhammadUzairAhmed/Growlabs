import React, { Component } from 'react';
import CurrentLocation from './contractComponents/CurrentLocation';
import TDataPicker from './contractComponents/TdatePicker';
import RangeSlider from './contractComponents/RangeSlider';
import FileUpload from './contractComponents/FileUpload';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


class Contact extends Component {
    constructor(props){
        super(props);
        this.state={
            fileUploaded:[],
            formData:''
        }
    }
    
    componentDidMount(){
        fetch("http://demo5740270.mockable.io/contract")
          .then(res => res.json())
          .then(data => this.setState({formData: data}));
    }

    handleInput =(x)=>
    {
     console.log('result ',x)
     this.setState({fileUploaded: x})
     console.log('filesUploaded ',this.state.formData.fileUpload.map((items)=> items))

    }
     render(){
        const listItems = [];
        if(this.state.formData){this.state.formData.fileUpload.map((files)=>   listItems.push(<li>{files.acceptedFile} <br/><span>{files.size}</span></li>))
         return (
             <section class="multi_step_form ">
                 <div class="content_form">
                     <fieldset>
                         <TDataPicker timelineStart={this.state.formData.timelineStart} timelineEnd={this.state.formData.timelineEnd} />
                     </fieldset>
                     <fieldset>
                         <h3>Budget</h3>
                         <div class="form-row" id="counter">
                             <div class="price-slider">
                                 <div id="slider"></div>
                                 <div class="ps-slide-col">
                                   <RangeSlider range={this.state.formData.budget} />
                                 </div>
                             </div>
                         </div>
                     </fieldset>
                     <fieldset>
                         <h3>Features</h3>
                         <div class="form-row">
                             <div class="box">
                                {this.state.formData.features.map((items,index)=> 
                                 <label class={items.status ? "box-label check":"box-label "}  key={index}>
                                     <div class="box-title"><span>{items.name}</span></div>
                                     <input type="checkbox" name="features" value="" class="hidden"  checked={items.status ? "checked":"null"} />
                                     <i class="check"></i>
                                 </label>
                                 )}
                             </div>
                         </div>
 
                     </fieldset>
                     <fieldset>
                         <h3>Description</h3>
                         <div class="form-row">
                             <div class="form-group">
                                 <p>{this.state.formData.description}</p>
                             </div>
                         </div>
                     </fieldset>
                     <fieldset>
                         <h3>Reasoning behind project</h3>
                         <div class="form-row">
                             <div class="form-group">
                                 <p>{this.state.formData.reasoning}</p>
                             </div>
                         </div>
                     </fieldset>
                     <fieldset>
                         <h3>Similar products</h3>
                         <div class="form-row">
                             <div class="form-group">
                                 <p>{this.state.formData.products}</p>
                             </div>
                         </div>
                     </fieldset>
                     <fieldset>
                         <div class="col-md-4">
                             <div class="row">
                                 <h3>Location</h3>
                                 <div class="form-row full">
                                     <div class="radioList">
                                        {this.state.formData.location.map((items,index)=> 
                                            <label class={items.status ? "box-label check":"box-label "}  key={index}>
                                                <span>{items.name}</span>
                                                <input type="radio" name="location" id="ol1" value=""  checked={items.status ? "checked":"null"}/>
                                            </label>
                                        )}
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div class="col-md-4">
                             <div class="row">
                                 <h3>Quality Level</h3>
                                 <div class="form-row full">
                                     <div class="radioList">
                                        {this.state.formData.quality.map((items,index)=> 
                                                <label class={items.status ? "box-label check":"box-label "}  key={index}>
                                                    <span>{items.name}</span>
                                                    <input type="radio" name="location" id="ol1" value=""  checked={items.status ? "checked":"null"}/>
                                                </label>
                                            )}
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div class="col-md-4">
                             <div class="row">
                                 <h3>Team dynamics</h3>
                                 <div class="form-row full">
                                     <div class="radioList">
                                            {this.state.formData.dynamics.map((items,index)=> 
                                                <label class={items.status ? "box-label check":"box-label "}  key={index}>
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
                         <div class="form-row">
                             <div class="checklist">
                                {this.state.formData.technology.map((items,index)=> 
                                    <label class={items.status ? "box-label check":"box-label "}  key={index}>
                                        <span>{items.name}</span>
                                        <input type="checkbox" name="location" id="ol1" value=""  checked={items.status ? "checked":"null"}/>
                                    </label>
                                )}
                            </div>
                         </div>
                     </fieldset>
                     <fieldset>
                         <h3>Framework</h3>
                         <div class="form-row ">
                             <div class="checklist">
                                {this.state.formData.framework.map((items,index)=> 
                                    <label class={items.status ? "box-label check":"box-label "} key={index}>
                                        <span>{items.name}</span>
                                        <input type="checkbox" name="location" id="ol1" value=""  checked={items.status ? "checked":"null"}/>
                                    </label>
                                )}
                             </div>
                         </div>
                     </fieldset>
                     <fieldset>
                         <div class="col-md-4">
                             <div class="row">
                                 <h3>project type</h3>
                                 <div class="form-row full">
                                     <div class="radioList">
                                        {this.state.formData.projectType.map((items,index)=> 
                                            <label class={items.status ? "box-label check":"box-label "}  key={index}>
                                                <span>{items.name}</span>
                                                <input type="radio" name="location" id="ol1" value=""  checked={items.status ? "checked":"null"}/>
                                            </label>
                                        )}
                                     </div>
                                  </div>
                             </div>
                         </div>
                         <div class="col-md-4">
                             <div class="row">
                                 <h3>Current stage</h3>
                                 <div class="form-row full">
                                     <div class="radioList">
                                        {this.state.formData.currentStage.map((items,index)=> 
                                            <label class={items.status ? "box-label check":"box-label "} key={index}>
                                                <span>{items.name}</span>
                                                <input type="radio" name="location" id="ol1" value=""  checked={items.status ? "checked":"null"}/>
                                            </label>
                                        )}
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div class="col-md-4">
                             <div class="row">
                                 <h3>Team dynamics</h3>
                                 <div class="form-row full">
                                     <div class="radioList">
                                        {this.state.formData.dynamics.map((items,index)=> 
                                            <label class={items.status ? "box-label check":"box-label "}  key={index}>
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
                         <div class="col-md-4">
                             <div class="row">
                                 <h3>Organisation</h3>
                                 <div class="form-row full">
                                     <div class="radioList">
                                        {this.state.formData.organisation.map((items,index)=> 
                                            <label class={items.status ? "box-label check":"box-label "} key={index}>
                                                <span>{items.name}</span>
                                                <input type="radio" name="location" id="ol1" value=""  checked={items.status ? "checked":"null"}/>
                                            </label>
                                        )}
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div class="col-md-4">
                             <div class="row">
                                 <h3>Funding</h3>
                                 <div class="form-row full">
                                     <div class="radioList">
                                        {this.state.formData.funding.map((items,index)=> 
                                            <label class={items.status ? "box-label check":"box-label "} key={index}>
                                                <span>{items.name}</span>
                                                <input type="radio" name="location" id="ol1" value=""  checked={items.status ? "checked":"null"}/>
                                            </label>
                                        )}
                                     </div>
                                 </div>
                             </div>
                         </div>
                         <div class="col-md-4">
                             <div class="row">
                                 <h3>Internal structure</h3>
                                 <div class="form-row full">
                                     <div class="radioList">
                                        {this.state.formData.structure.map((items,index)=> 
                                            <label class={items.status ? "box-label check":"box-label "} key={index}>
                                                <span>{items.name}</span>
                                                <input type="radio" name="location" id="ol1" value=""  checked={items.status ? "checked":"null"}/>
                                            </label>
                                        )}
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </fieldset>
                     <fieldset class="upload-fieldset">
                         <div class="form-row">
                             <div class="drag-drop-function">
                                 <div class="selected-files">
                                     <div class="upload-system drop">
                                         <div class="upload-left">
                                             <h3>upload</h3>
                                             <FileUpload data={this.state.formData.fileUploaded} getInput={this.handleInput}/>
                                         </div>
                                         <div class="upload-right">
                                         <h3>Files</h3>
                                             <div class="ur-dd">
                                                 <ul>{listItems}</ul>
                                             </div>
                                             <div class="dropdrag-files"></div>
                                         </div>
                                         <div class="clearfix"></div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </fieldset>
                     <fieldset class="half">
                        <div class="form-group custom">
                            <h3>first name</h3>
                            <p> {this.state.formData.firstName}</p>
                        </div>
                        <div class="form-group custom">
                            <h3>phone</h3>
                            <p> {this.state.formData.phone}</p>
                        </div>
                     </fieldset>
                     <fieldset class="half rt">
                        <div class="form-group custom">
                            <h3>skype</h3>
                            <p> {this.state.formData.skype}</p>
                        </div>
                        <div class="form-group custom">
                            <h3>last name</h3>
                            <p> {this.state.formData.lastname}</p>
                        </div>
                     </fieldset>
                     <fieldset>
                         <div class="form-row">
                             <div class="form-group custom_email">
                                <h3>Email</h3>
                                <p> {this.state.formData.email}</p>
                             </div>
                         </div>
                     </fieldset>
                </div>
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
 
 
 
 
 
 export default Contact
 