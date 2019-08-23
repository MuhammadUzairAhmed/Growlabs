import React, { Component } from 'react';
import FileUpload from './../governanace/contractComponents/FileUpload';

class Legal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: '',
            image2: '',
            actDiv:false
        }
    }
    handleAccept = () => {
        var values = {
            nda: this.state.image,
            contract: this.state.image2
        }
        this.setState({actDiv:true},()=>{
            setTimeout(() => {
                this.props.changeValue(5, values)
            }, 2000);
          })

    }
    handleInput = (x, val) => {
        console.log('dataFile1', val)
        if (val == '1m') {
            this.setState({ image: `` }, () => {
                this.setState({ image: `./assets/img/${x[0].acceptedFile}` }, () => {
                    console.log('imagesss', this.state.image)
                })

            })
        } else if (val == '2m') {

            this.setState({ image2: `` }, () => {
                this.setState({ image2: `./assets/img/${x[0].acceptedFile}` }, () => {
                    console.log('imagesss', this.state.image2)
                })

            })
        }
    }

    render() {
        return (
            <section className={this.state.actDiv ? "legal animations-disable" : "legal animations-check" }>
                <div className="legal_top">
                    <h1>Legal</h1>
                    <p>please Upload Your legal documents here</p>
                </div>
                <div className="legal_center">
                    <div className="legal_box-main" active={this.state.image ? 'active':''}>
                        <div className="legal_box">
                            <h1>NDA</h1>
                            <div className="legal_green">
                                <p>NDA With Zepcom</p>
                                <h2>PDF</h2>
                                <FileUpload getInput='' getInput1={this.handleInput} name="1m" />
                            </div>
                            <img src={this.state.image.length > 0 ? this.state.image : "./assets/img/download.png"} />

                            <p className="last">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type </p>

                        </div>
                    </div>
                    <div className="legal_box-main" active={this.state.image2 ? 'active':''}>
                        <div className="legal_box">
                            <h1>CONTRACT</h1>
                            <div className="legal_green">
                                <p>Official Contract With Zepcom 00/00/000</p>
                                <h2>PDF</h2>
                                <FileUpload getInput='' getInput1={this.handleInput} name="2m" />

                            </div>
                            <img src={this.state.image2.length > 0 ? this.state.image2 : "./assets/img/download.png"} />
                            <p className="last">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type </p>

                        </div>
                    </div>
                </div>
                {this.state.image != '' && this.state.image2 != '' ?
                <a target="_blank" onClick={this.handleAccept} className="button">Accept [Section]<br /><span> Accept setup as the grounds on which to finalize parthnership</span></a>
               : <a target="_blank"  className="button" style={{background:'rgb(212, 217, 221)'}}>Accept [Section]<br /><span> Accept setup as the grounds on which to finalize parthnership</span></a>}
            </section>
        );
    };
};

export default Legal;
