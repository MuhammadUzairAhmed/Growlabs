import React, { Component } from 'react';
import  Agreement  from './predashboard/agreement';
import  Description  from './predashboard/descriptions';
import  Legal  from './predashboard/legal';
import  Milestone  from './predashboard/milestone';
import  Technology  from './predashboard/technology';
import  Contactinfo  from './predashboard/contactinfo';


class PreDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      agreement:{},
      description:{},
      technology:{},
      mileStone:{},
      legal:{},
      trnas:'width 1s',
      changeWidth:'240px',
      aggVal:1,
      techVal:null,
      milestoneVal:null,
      descVal:null,
      legalVal:null
    }
  }
  acceptedAgreement =(value,info)=>{
    this.setState({index: value})
    if(value == 1)
    {
      this.setState({agreement: info, changeWidth:'500px',techVal:1})
    }else if(value == 2)
    {
      this.setState({technology: info,changeWidth:'700px', milestoneVal: 1},()=>{
        console.log('valuesOfTechnology',this.state.technology)
      })
    }else if(value == 3)
    {
      this.setState({mileStone: info,changeWidth:'900px',descVal:1},()=>{
        console.log('valuesOfTechnologymileStone',this.state.mileStone)
      })
    }else if(value == 4)
    {
      this.setState({description: info,changeWidth:'1250px',legalVal:1},()=>{
        console.log('valuesOfDwesc',this.state.description)
      })
    }else if(value == 5)
    {
      this.setState({legal: info},()=>{
        console.log('valuesOflegal',this.state.legal)
      })
    }

  }

  renderSwitch (index)
  {
    switch (index) {
      case 0:
        return <Agreement changeValue={this.acceptedAgreement}/>;
      case 1:
        return <Technology changeValue={this.acceptedAgreement}/>;
      case 2:
        return <Milestone changeValue={this.acceptedAgreement}/>;
      case 3:
        return <Description changeValue={this.acceptedAgreement}/>;
      case 4:
        return <Legal changeValue={this.acceptedAgreement}/>;
      default:
        return null;
    }
  }
  changePage = (val)=>{
    if(val == 0 && this.state.aggVal > 0)
    {
      this.setState({index: val,changeWidth:'240px'})
    }else  if(val == 1 && this.state.techVal > 0)
    {
      this.setState({index: val,changeWidth:'500px'})
    }else  if(val == 2 && this.state.milestoneVal > 0)
    {
      this.setState({index: val,changeWidth:'700px'})
    }else  if(val == 3 && this.state.descVal > 0)
    {
      this.setState({index: val,changeWidth:'900px'})
    }else  if(val == 4 && this.state.legalVal > 0)
    {
      this.setState({index: val,changeWidth:'1250px'})
    }


  }
  render() {
    console.log(this.state,'check')
    return (
      <section className="preDashboard">
        <Agreement />
        <Description />
        <Legal />
        <Milestone />
        <Technology />
        <Contactinfo />
        <div style={{display: 'inline-flex'}}>
        <p style={{ color:'white'}} onClick={()=>this.changePage(0)}>A heading with a A heading with a solid red top border A heading with a solid red top borderA heading with a solid red top border solid red top border</p>
        <p style={{ color:'white'}} onClick={()=>this.changePage(1)}>A heading with a A heading with a solid red top border A heading with a solid red top borderA heading with a solid red top border solid red top border</p>
        <p style={{ color:'white'}} onClick={()=>this.changePage(2)}>A heading with a A heading with a solid red top border A heading with a solid red top borderA heading with a solid red top border solid red top border</p>
        <p style={{color:'white'}} onClick={()=>this.changePage(3)}>A  heading with a A heading with a solid red top border A heading with a solid red top borderA heading with a solid red top border solid red top border</p>
        <p style={{ color:'white'}} onClick={()=>this.changePage(4)}>A heading with a A heading with a solid red top border A heading with a solid red top borderA heading with a solid red top border solid red top border</p>
        </div>
        <div style={{width:`${this.state.changeWidth}`,height: '2px',background:'#19d192',transition:'width 1s'}}></div>
       {this.renderSwitch(this.state.index)}
       {/* <Milestone /> */}
       {/* <Legal />
       */}
       {/* <Technology /> */}
      </section>
    );  
  };  
};

export default PreDashboard;
