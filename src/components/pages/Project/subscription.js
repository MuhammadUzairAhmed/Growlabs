import React, { Component } from 'react';
class Subscription extends Component {
    constructor(props){
        super(props)
        this.state = {
           
        }
    }
    render(){
        return(
            <div className="subscriptionforms">
                <div className="content_pricing" id="pricing">
                <div className="price_over">
                 <div className="price">
                    <div className="center">
                        <div className="package">
                            <p>freemium</p>
                        </div>
                        <div className="heading">
                            <i className="fa fa-eur" aria-hidden="true"></i>
                            <h1><spna>&#8364;</spna>0,00</h1>
                            <small>/month</small>
                        </div>
                    </div>
                    <div className="inform">
                        <ul>
                            <li>Build Any IT Product Quickly And Easily</li>
                            <li>Connect With The Developers Worldwide</li>
                            <li>Receive Proposals Within 24 Hours</li>
                            <li>Secure Payment System</li>
                            <li>Code Quality Assurance</li>
                            <li className="disabled">Software Vulnerability Scan</li>
                            <li className="disabled">Technical Specifications Manual</li>
                            <li className="disabled">Development Agencies Preselection</li>
                            <li className="disabled">Agencies Discovery Calls</li>
                            <li className="disabled">In-house Project Management</li>
                            <li className="disabled">Wireframe MVP Product</li>

                        </ul>
                    </div>
                    
                </div>
                <button type="button">Seclect</button>
                </div>

                <div className="price_over active">
                <div className="price active">
               
                    <div className="mostPop">
                        <span>Most <br/>populair</span>
                    </div>
                    <div className="center">
                        <div className="package">
                            <p>Advanced</p>
                        </div>
                        <div className="heading">
                            <i className="fa fa-eur" aria-hidden="true"></i>
                            <h1><spna>&#8364;</spna>1.999</h1>
                            <small>/month</small>
                        </div>
                    </div>
                    <div className="inform">
                        <ul>
                            <li>Build Any IT Product Quickly And Easily</li>
                            <li>Connect With The Developers Worldwide</li>
                            <li>Receive Proposals Within 24 Hours</li>
                            <li>Secure Payment System</li>
                            <li>Code Quality Assurance</li>
                            <li>Software Vulnerability Scan</li>
                            <li>Technical Specifications Manual</li>
                            <li>Development Agencies Preselection</li>
                            <li>Agencies Discovery Calls</li>
                            <li className="disabled">In-house Project Management</li>
                            <li className="disabled">Wireframe MVP Product</li>
                        </ul>
                    </div>
                    
                </div> 
                <button type="button">Seclect</button>
                </div> 
               
                <div className="price_over">
                <div className="price">
                    <div className="center">
                        <div className="package">
                            <p>premium</p>
                        </div>
                        <div className="heading">
                            <i className="fa fa-eur" aria-hidden="true"></i>
                            <h1><spna>&#8364;</spna>3.999</h1>
                            <small>/month</small>
                        </div>
                    </div>
                    <div className="inform">
                        <ul>
                            <li>Build Any IT Product Quickly And Easily</li>
                            <li>Connect With The Developers Worldwide</li>
                            <li>Receive Proposals Within 24 Hours</li>
                            <li>Secure Payment System</li>
                            <li>Code Quality Assurance</li>
                            <li>Software Vulnerability Scan</li>
                            <li>Technical Specifications Manual</li>
                            <li>Development Agencies Preselection</li>
                            <li>Agencies Discovery Calls</li>
                            <li>In-house Project Management</li>
                            <li>Wireframe MVP Product</li>
                        </ul>
                    </div>
                   
                </div>
                <button type="button">Seclect</button>
                </div>
            </div> 
        </div>
        )
    }
}

export default Subscription;
