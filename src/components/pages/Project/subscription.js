import React, { Component } from 'react';
class Subscription extends Component {
    constructor(props){
        super(props)
        this.state = {
           
        }
    }
    render(){
        return(
            <div class="subscriptionforms">
                <div class="content_pricing" id="pricing">
                 <div class="price">
                    <div class="center">
                        <div class="package">
                            <p>freemium</p>
                        </div>
                        <div class="heading">
                            <i class="fa fa-eur" aria-hidden="true"></i>
                            <h1>0,00</h1>
                            <small>/month</small>
                        </div>
                    </div>
                    <div class="inform">
                        <ul>
                            <li>Build Any IT Product Quickly And Easily</li>
                            <li>Connect With The Developers Worldwide</li>
                            <li>Receive Proposals Within 24 Hours</li>
                            <li>Secure Payment System</li>
                            <li>Code Quality Assurance</li>
                            <li class="disabled">Software Vulnerability Scan</li>
                            <li class="disabled">Technical Specifications Manual</li>
                            <li class="disabled">Development Agencies Preselection</li>
                            <li class="disabled">Agencies Discovery Calls</li>
                            <li class="disabled">In-house Project Management</li>
                            <li class="disabled">Wireframe MVP Product</li>

                        </ul>
                    </div>
                </div>
                <div class="price active">
                    <div class="mostPop">
                        <span>Most populair</span>
                    </div>
                    <div class="center">
                        <div class="package">
                            <p>Advanced</p>
                        </div>
                        <div class="heading">
                            <i class="fa fa-eur" aria-hidden="true"></i>
                            <h1>1.999</h1>
                            <small>/month</small>
                        </div>
                    </div>
                    <div class="inform">
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
                            <li class="disabled">In-house Project Management</li>
                            <li class="disabled">Wireframe MVP Product</li>
                        </ul>
                    </div>
                </div>

                <div class="price">
                    <div class="center">
                        <div class="package">
                            <p>premium</p>
                        </div>
                        <div class="heading">
                            <i class="fa fa-eur" aria-hidden="true"></i>
                            <h1>3.999</h1>
                            <small>/month</small>
                        </div>
                    </div>
                    <div class="inform">
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
            </div> 
        </div>
        )
    }
}

export default Subscription;
  