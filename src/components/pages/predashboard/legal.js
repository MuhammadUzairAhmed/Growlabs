import React, { Component } from 'react';

class Legal extends Component {
    render(){
      return (
        <section className="legal">
            <div className="legal_top">
                <h1>Legal</h1>
                <p>please Upload Your legal documents here</p>
            </div>
            <div className="legal_center">
                <div className="legal_box-main">
                    <div className="legal_box">
                    <h1>NDA</h1>
                    <div className="legal_green">
                        <p>NDA With Zepcom</p>
                        <h2>PDF</h2>
                    </div>
                    <img src="./assets/img/download.png"/>
                    <p className="last">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type </p>

                    </div>
                </div>
                <div className="legal_box-main">
                    <div className="legal_box">
                    <h1>CONTRACT</h1>
                    <div className="legal_green">
                        <p>Official Contract With Zepcom 00/00/000</p>
                        <h2>PDF</h2>
                    </div>
                    <img src="./assets/img/download.png"/>
                    <p className="last">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type </p>

                    </div>
                </div>
            </div>
            <a target="_blank" href="#" className="button">Accept [Section]<br /><span> Accept setup as the grounds on which to finalize parthnership</span></a>
        </section>
      );  
    };  
  };
  
  export default Legal;
  