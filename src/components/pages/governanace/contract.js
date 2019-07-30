import React, { Component } from 'react';
import $ from 'jquery';

class Contact extends Component {
   constructor(props){
       super(props)
   }

    render(){
        return (
            <section class="multi_step_form ">
            <div class="content_form">
                    <fieldset>
                        <h3>Timeline</h3>
                        <div class="form-row calendar_pick">
                            <div class="date">
                                <div class="current"></div>
                                <div class="select-date">
                                    <div class="sd-month">0 Month</div>
                                    <div class="sd-date">0 Days</div>
                                </div>
                            </div>
                            <div class="t-datepicker">
                                <div class="t-check-in"></div>
                                <div class="t-check-out"></div>
                            </div>

                        </div>
                    </fieldset>
                    <fieldset>
                        <h3>Budget</h3>
                        <div class="form-row" id="counter">
                            <div class="price-slider">
                                <div id="slider"></div>
                                <div class="ps-slide-col">
                                    <div class="start-currency">Euro</div>
                                    <div class="end-currency hidden">500.000</div>
                                </div>
                            </div>
                            <div class="custom-budget">
                                <span>€</span>
                                <div class="cb-input"><input type="text" value="250000" name="price" placeholder="Budget" class="btn btn-cb int-price"/></div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <h3>Features</h3>
                        <div class="form-row">
                            <div class="box">
                                <label class="box-label">
                                    <div class="box-title">
                                        <span>Profile</span>
                                    </div>
                                    <input type="checkbox" name="features" value="" class="hidden" autocomplete="off" />
                                    <i class="check"></i>
                                </label>
                                <label class="box-label">
                                    <div class="box-title">
                                        <span>Ratings</span>
                                    </div>
                                    <input type="checkbox" name="features" value="" class="hidden" autocomplete="off" />
                                    <i class="check"></i>
                                </label>
                                <label class="box-label">
                                    <div class="box-title">
                                        <span>Labels</span>
                                    </div>
                                    <input type="checkbox" name="features" value="" class="hidden" autocomplete="off" />
                                    <i class="check"></i>
                                </label>
                                <label class="box-label">
                                    <div class="box-title">
                                        <span>Cloud Sync</span>
                                    </div>
                                    <input type="checkbox" name="features" value="" class="hidden" autocomplete="off" />
                                    <i class="check"></i>
                                </label>
                                <label class="box-label">
                                    <div class="box-title">
                                        <span>Sensors</span>
                                    </div>
                                    <input type="checkbox" name="features" value="" class="hidden" autocomplete="off" />
                                    <i class="check"></i>
                                </label>
                                <label class="box-label">
                                    <div class="box-title">
                                        <span>Phone apps</span>
                                    </div>
                                    <input type="checkbox" name="features" value="" class="hidden" autocomplete="off" />
                                    <i class="check"></i>
                                </label>
                                <label class="box-label">
                                    <div class="box-title">
                                        <span>App Icon</span>
                                    </div>
                                    <input type="checkbox" name="features" value="" class="hidden" autocomplete="off" />
                                    <i class="check"></i>
                                </label>
                                <label class="box-label">
                                    <div class="box-title">
                                        <span>Calender</span>
                                    </div>
                                    <input type="checkbox" name="features" value="" class="hidden" autocomplete="off" />
                                    <i class="check"></i>
                                </label>
                                <label class="box-label">
                                    <div class="box-title">
                                        <span>Maps</span>
                                    </div>
                                    <input type="checkbox" name="features" value="" class="hidden" autocomplete="off" />
                                    <i class="check"></i>
                                </label>
                                <label class="box-label">
                                    <div class="box-title">
                                        <span>API's</span>
                                    </div>
                                    <input type="checkbox" name="features" value="" class="hidden" autocomplete="off" />
                                    <i class="check"></i>
                                </label>
                                <label class="box-label">
                                    <div class="box-title">
                                        <span>Name</span>
                                    </div>
                                    <input type="checkbox" name="features" value="" class="hidden" autocomplete="off" />
                                    <i class="check"></i>
                                </label>
                                <label class="box-label">
                                    <div class="box-title">
                                        <span>Settings</span>
                                    </div>
                                    <input type="checkbox" name="features" value="" class="hidden" autocomplete="off" />
                                    <i class="check"></i>
                                </label>
                                <label class="box-label">
                                    <div class="box-title">
                                        <span>Messaging</span>
                                    </div>
                                    <input type="checkbox" name="features" value="" class="hidden" autocomplete="off" />
                                    <i class="check"></i>
                                </label>
                                <label class="box-label">
                                    <div class="box-title">
                                        <span>Search</span>
                                    </div>
                                    <input type="checkbox" name="features" value="" class="hidden" autocomplete="off" />
                                    <i class="check"></i>
                                </label>
                                <label class="box-label">
                                    <div class="box-title">
                                        <span>Dashboard</span>
                                    </div>
                                    <input type="checkbox" name="features" value="" class="hidden" autocomplete="off" />
                                    <i class="check"></i>
                                </label>
                                <label class="box-label">
                                    <div class="box-title">
                                        <span>CMS</span>
                                    </div>
                                    <input type="checkbox" name="features" value="" class="hidden" autocomplete="off" />
                                    <i class="check"></i>
                                </label>
                                <label class="box-label">
                                    <div class="box-title">
                                        <span>Payments</span>
                                    </div>
                                    <input type="checkbox" name="features" value="" class="hidden" autocomplete="off" />
                                    <i class="check"></i>
                                </label>
                                <label class="box-label">
                                    <div class="box-title">
                                        <span>Marketplace</span>
                                    </div>
                                    <input type="checkbox" name="profile" value="" class="hidden" autocomplete="off" />
                                    <i class="check"></i>
                                </label>
                                <label class="box-label">
                                    <div class="box-title">
                                        <span>Subscriptions</span>
                                    </div>
                                    <input type="checkbox" name="profile" value="" class="hidden" autocomplete="off" />
                                    <i class="check"></i>
                                </label>
                                <label class="box-label">
                                    <div class="box-title">
                                        <span>Forum</span>
                                    </div>
                                    <input type="checkbox" name="profile" value="" class="hidden" autocomplete="off" />
                                    <i class="check"></i>
                                </label>
                                <label class="box-label">
                                    <div class="box-title">
                                        <span>Notifications</span>
                                    </div>
                                    <input type="checkbox" name="profile" value="" class="hidden" autocomplete="off" />
                                    <i class="check"></i>
                                </label>
                                <label class="box-label">
                                    <div class="box-title">
                                        <span>Name</span>
                                    </div>
                                    <input type="checkbox" name="profile" value="" class="hidden" autocomplete="off" />
                                    <i class="check"></i>
                                </label>
                            </div>
                        </div>

                    </fieldset>
                    <fieldset>
                        <h3>Description</h3>
                        <div class="form-row">
                            <div class="form-group">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Donec elementum ligula eu sapien consequat eleifend. Donec nec dolor erat, condimentum sagittis sem. Praesent porttitor porttitor risus, dapibus rutrum ipsum gravida et. Integer lectus nisi, facilisis sit amet eleifend nec, pharetra ut augue. Integer quam nunc, consequat nec egestas ac, volutpat ac nisi. Sed consectetur dignissim</p>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <h3>Reasoning behind project</h3>
                        <div class="form-row">
                            <div class="form-group">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Donec elementum ligula</p>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <h3>Similar products</h3>
                        <div class="form-row">
                            <div class="form-group">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. <br /> <br /></p>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <div class="col-md-4">
                            <div class="row">
                                <h3>Location</h3>
                                <div class="form-row full">
                                    <div class="radioList">
                                        <label class="box-label">
                                            <span>Doesn't Matter</span>
                                            <input type="radio" name="location" id="ol1" value="" />
                                        </label>
                                        <label class="box-label">
                                            <span class="getLocation"></span>
                                            <input type="radio" name="location" id="ol2" value="" />
                                        </label>
                                        <label class="box-label">
                                            <span>Specific country</span>
                                            <input type="radio" name="location" id="ol3" value="" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="row">
                                <h3>Quality Level</h3>
                                <div class="form-row full">
                                    <div class="radioList">
                                        <label class="box-label">
                                            <span>Perfect</span>
                                            <input type="radio" name="quality" id="quality1" value="" />
                                        </label>
                                        <label class="box-label">
                                            <span>Prime</span>
                                            <input type="radio" name="quality" id="quality2" value="" />
                                        </label>
                                        <label class="box-label">
                                            <span>Prototype</span>
                                            <input type="radio" name="quality" id="quality3" value="" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="row">
                                <h3>Team dynamics</h3>
                                <div class="form-row full">
                                    <div class="radioList">
                                        <label class="box-label">
                                            <span>Ideation</span>
                                            <input type="radio" name="dynamics" id="dynamics1" value="" />
                                        </label>
                                        <label class="box-label">
                                            <span>Staff augmentation</span>
                                            <input type="radio" name="dynamics" id="dynamics2" value="" />
                                        </label>
                                        <label class="box-label">
                                            <span>Project team</span>
                                            <input type="radio" name="dynamics" id="dynamics3" value="" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </fieldset>
                    <fieldset>
                        <h3>Technology</h3>
                        <div class="form-row">
                            <div class="checklist">
                                <label class="box-label">
                                    <span>Java</span>
                                    <input type="checkbox" name="technologies" value="" class="hidden" autocomplete="off" />
                                </label>
                                <label class="box-label">
                                    <span>C</span>
                                    <input type="checkbox" name="technologies" value="" class="hidden" autocomplete="off" />
                                </label>
                                <label class="box-label">
                                    <span>Python</span>
                                    <input type="checkbox" name="technologies" value="" class="hidden" autocomplete="off" />
                                </label>
                                <label class="box-label">
                                    <span>C++</span>
                                    <input type="checkbox" name="technologies" value="" class="hidden" autocomplete="off" />
                                </label>
                                <label class="box-label">
                                    <span>Javascript</span>
                                    <input type="checkbox" name="technologies" value="" class="hidden" autocomplete="off" />
                                </label>
                                <label class="box-label">
                                    <span>.NET</span>
                                    <input type="checkbox" name="technologies" value="" class="hidden" autocomplete="off" />
                                </label>
                                <label class="box-label">
                                    <span>PHP</span>
                                    <input type="checkbox" name="technologies" value="" class="hidden" autocomplete="off" />
                                </label>
                                <label class="box-label">
                                    <span>swift</span>
                                    <input type="checkbox" name="technologies" value="" class="hidden" autocomplete="off" />
                                </label>
                                <label class="box-label">
                                    <span>Objectice C</span>
                                    <input type="checkbox" name="technologies" value="" class="hidden" autocomplete="off" />
                                </label>
                                <label class="box-label">
                                    <span>GoLang</span>
                                    <input type="checkbox" name="technologies" value="" class="hidden" autocomplete="off" />
                                </label>
                                <label class="box-label">
                                    <span>Perl</span>
                                    <input type="checkbox" name="technologies" value="" class="hidden" autocomplete="off" />
                                </label>
                                <label class="box-label">
                                    <span>Ruby</span>
                                    <input type="checkbox" name="technologies" value="" class="hidden" autocomplete="off" />
                                </label>
                                <label class="box-label">
                                    <span>Other</span>
                                    <input type="checkbox" name="technologies" value="" class="hidden" autocomplete="off" />
                                </label>
                                <label class="box-label">
                                    <span>Don't know, don't care</span>
                                    <input type="checkbox" name="technologies" value="" class="hidden" autocomplete="off" />
                                </label>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <h3>Framework</h3>
                        <div class="form-row ">
                            <div class="checklist">
                                <label class="box-label">
                                    <span>Angular.JS</span>
                                    <input type="checkbox" name="technology" value="" class="hidden" autocomplete="off" />
                                </label>
                                <label class="box-label">
                                    <span>Laravel</span>
                                    <input type="checkbox" name="technology" value="" class="hidden" autocomplete="off" />
                                </label>
                                <label class="box-label">
                                    <span>React.js</span>
                                    <input type="checkbox" name="technology" value="" class="hidden" autocomplete="off" />
                                </label>
                                <label class="box-label">
                                    <span>Node.js</span>
                                    <input type="checkbox" name="technology" value="" class="hidden" autocomplete="off" />
                                </label>
                                <label class="box-label">
                                    <span>Ruby on rails</span>
                                    <input type="checkbox" name="technology" value="" class="hidden" autocomplete="off" />
                                </label>
                                <label class="box-label">
                                    <span>Symphony</span>
                                    <input type="checkbox" name="technology" value="" class="hidden" autocomplete="off" />
                                </label>
                                <label class="box-label">
                                    <span>ASP.NET</span>
                                    <input type="checkbox" name="technology" value="" class="hidden" autocomplete="off" />
                                </label>
                                <label class="box-label">
                                    <span>Other</span>
                                    <input type="checkbox" name="technology"  value="" class="hidden" autocomplete="off" />
                                </label>
                                <label class="box-label">
                                    <span>Don't know, don't care</span>
                                    <input type="checkbox" name="technology"  value="" class="hidden" autocomplete="off" />
                                </label>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <div class="col-md-4">
                            <div class="row">
                                <h3>project type</h3>
                                <div class="form-row full">
                                    <div class="radioList">
                                        <label class="box-label">
                                            <span>Online Website</span>
                                            <input type="radio" name="desire" id="ol1" value="" />
                                        </label>
                                        <label class="box-label">
                                            <span>Mobile Application</span>
                                            <input type="radio" name="desire" id="ol2" value="" />
                                        </label>
                                        <label class="box-label">
                                            <span>Computer Program</span>
                                            <input type="radio" name="desire" id="ol3" value="" />
                                        </label>
                                        <label class="box-label">
                                            <span>Other</span>
                                            <input type="radio" name="desire" id="ol4" value="" />
                                        </label>
                                    </div>
                                 </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="row">
                                <h3>Current stage</h3>
                                <div class="form-row full">
                                    <div class="radioList">
                                        <label class="box-label">
                                            <span>Concept</span>
                                            <input type="radio" name="stage" id="stage1" value="" />
                                        </label>
                                        <label class="box-label">
                                            <span>Design availability</span>
                                            <input type="radio" name="stage" id="stage2" value="" />
                                        </label>
                                        <label class="box-label">
                                            <span>Design and Functionality</span>
                                            <input type="radio" name="stage" id="stage3" value="" />
                                        </label>
                                        <label class="box-label">
                                            <span>New feautures to existing product</span>
                                            <input type="radio" name="stage" id="stage4" value="" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="row">
                                <h3>Team dynamics</h3>
                                <div class="form-row full">
                                    <div class="radioList">
                                        <label class="box-label">
                                            <span>Ideation</span>
                                            <input type="radio" name="team" id="stage1" value="" />
                                        </label>
                                        <label class="box-label">
                                            <span>Staff augmentation</span>
                                            <input type="radio" name="team" id="stage2" value="" />
                                        </label>
                                        <label class="box-label">
                                            <span>Project team</span>
                                            <input type="radio" name="team" id="stage3" value="" />
                                        </label>
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
                                        <label class="box-label">
                                            <span>Startup</span>
                                            <input type="radio" name="organisation" id="organisation1" value="" />
                                        </label>
                                        <label class="box-label">
                                            <span>Scale Up</span>
                                            <input type="radio" name="organisation" id="organisation2" value="" />
                                        </label>
                                        <label class="box-label">
                                            <span>SME</span>
                                            <input type="radio" name="organisation" id="organisation3" value="" />
                                        </label>
                                        <label class="box-label">
                                            <span>Corperate</span>
                                            <input type="radio" name="organisation" id="organisation4" value="" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="row">
                                <h3>Funding</h3>
                                <div class="form-row full">
                                    <div class="radioList">
                                        <label class="box-label">
                                            <span>Bootstrap</span>
                                            <input type="radio" name="funding" id="stage1" value="" />
                                        </label>
                                        <label class="box-label">
                                            <span>External Investment</span>
                                            <input type="radio" name="funding" id="stage2" value="" />
                                        </label>
                                        <label class="box-label">
                                            <span>Own Revenue</span>
                                            <input type="radio" name="funding" id="stage3" value="" />
                                        </label>
                                        <label class="box-label">
                                            <span>No Funding (Yet!)</span>
                                            <input type="radio" name="funding" id="stage4" value="" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="row">
                                <h3>Internal structure</h3>
                                <div class="form-row full">
                                    <div class="radioList">
                                        <label class="box-label">
                                            <span>No Team</span>
                                            <input type="radio" name="structure" id="structure1" value="" />
                                        </label>
                                        <label class="box-label">
                                            <span>Internal</span>
                                            <input type="radio" name="structure" id="structure2" value="" />
                                        </label>
                                        <label class="box-label">
                                            <span>Outsourced</span>
                                            <input type="radio" name="structure" id="structure3" value="" />
                                        </label>
                                        <label class="box-label">
                                            <span>Blended Team</span>
                                            <input type="radio" name="structure" id="structure4" value="" />
                                        </label>
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
                                            <div class="beforeUpload"><img src="./assets/img/dragCloud.png" /></div>
                                            <div class="arrow_top afterUplaod">
                                                <div class="circle-loader">
                                                    <div class="checkmark draw"></div>
                                                </div>
                                            </div>
                                            <span class="uptxt">Select File</span>
                                            <span class="uploadPer"></span>

                                        </div>
                                        <div class="upload-right">
                                            <h3>Files</h3>
                                            <div class="ur-dd">
                                                <div class="rms">
                                                    <div class="images">
                                                        <img src="./assets/img/drag01.png" />
                                                        <img src="./assets/img/drag02.png" />
                                                        <img src="./assets/img/drag03.png" />
                                                    </div>
                                                    <span>Drap and drop here</span>
                                                </div>
                                                <div id="fileupload">
                                                    <label for="file"></label>
                                                    <input id="file" type="file" name="file" multiple />
                                                </div>
                                            </div>
                                            <div class="dropdrag-files">
                                                <div id="uploads"></div>
                                            </div>

                                        </div>

                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset class="half">
                        <h3>first name</h3>
                        <div class="form-row">
                            <div class="form-group">
                                <p>Felix</p>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset class="half rt">
                        <h3>last name</h3>
                        <div class="form-row">
                            <div class="form-group">
                                <p>Bouma</p>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset>
                        <h3>Email</h3>
                        <div class="form-row">
                            <div class="form-group">
                                <p>Felix@growlabs.tech</p>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset class="half">
                        <h3>phone</h3>
                        <div class="form-row">
                            <div class="form-group">
                                <p>(06) 472 387 492 73</p>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset class="half rt">
                        <h3>skype</h3>
                        <div class="form-row">
                            <div class="form-group">
                                <p>537092357</p>
                            </div>
                        </div>
                    </fieldset>
        </div>
        </section>
        )
    }
}
export default Contact