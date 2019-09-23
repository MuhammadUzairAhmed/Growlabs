import React, { Component } from 'react';
import FileUpload from './../governanace/contractComponents/FileUpload';

class Legal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: '',
            image2: '',
            fileName:'',
            secondfileName:'',
            actDiv:false
        }
    }
    componentDidMount()
    {
        fetch('https://virtserver.swaggerhub.com/GROW-Labs/GROWLabs_API/1.0.0/api_calibration/legal')
        .then(res=>res.json())
        .then((data)=>{
            console.log(data,'legalData')
        // if(this.props.legalData.nda != null)
        // {
            // this.setState({fileName: data.nda,
            // secondfileName: data.contract
            // })
        })
        // }
    }
    handleAccept = () => {
        var values = {
            nda: this.state.fileName,
            contract: this.state.secondfileName
        }
        fetch('https://virtserver.swaggerhub.com/GROW-Labs/GROWLabs_API/1.0.0/api_calibration/legal',{
            method:'POST',
            body: JSON.stringify(values)
          }).then(res=>console.log('postData',res))
        this.setState({actDiv:true},()=>{
            setTimeout(() => {
                this.props.changeValue(5, values)
            }, 1000);
          })

    }
    handleInput = (x, val) => {
        console.log('dataFile1', val)
        console.log('dataFile1', x)
        if (val == '1m') {
            this.setState({ image: `` }, () => {
                this.setState({ image: `./assets/img/${x[0].acceptedFile}`, fileName:x[0].acceptedFile }, () => {
                    console.log('imagesss', this.state.image)
                })

            })
        } else if (val == '2m') {

            this.setState({ image2: `` }, () => {
                this.setState({ image2: `./assets/img/${x[0].acceptedFile}`, secondfileName:x[0].acceptedFile }, () => {
                    console.log('imagesss', this.state.image2)
                })

            })
        }
    }
    downloading=(key)=>{
        console.log(key,'file that should be download')
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
                                {this.state.fileName ? <p>{this.state.fileName}</p>:<p>NDA With Zepcom</p>}
                                <h2>PDF</h2>
                                <FileUpload getInput='' getInput1={this.handleInput} name="1m" />
                            </div>
                            {/*<img src={this.state.image.length > 0 ? this.state.image : "./assets/img/download.png"} />*/}
                             <img src="./assets/img/download.png" onClick={()=>this.downloading('nds')}/>

                            <p className="last">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type </p>

                        </div>
                    </div>
                    <div className="legal_box-main" active={this.state.image2 ? 'active':''}>
                        <div className="legal_box">
                            <h1>CONTRACT</h1>
                            <div className="legal_green">
                                {this.state.secondfileName ? <p>{this.state.secondfileName}</p>: <p>Official Contract With Zepcom 00/00/000</p>}
                                <h2>PDF</h2>
                                <FileUpload getInput='' getInput1={this.handleInput} name="2m" />

                            </div>
                            {/*<img src={this.state.image2.length > 0 ? this.state.image2 : "./assets/img/download.png"} />*/}
                             <img src="./assets/img/download.png" onClick={()=>this.downloading('contract')} />
                            <p className="last">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type </p>

                        </div>
                    </div>
                </div>
                {this.state.fileName != '' && this.state.secondfileName != '' ?
                <a target="_blank" onClick={this.handleAccept} className="button">Accept [Section]<br /><span> Accept setup as the grounds on which to finalize parthnership</span></a>
               : <a target="_blank"  className="button" style={{background:'rgb(212, 217, 221)'}}>Accept [Section]<br /><span> Accept setup as the grounds on which to finalize parthnership</span></a>}
            </section>
        );
    };
};

export default Legal;
