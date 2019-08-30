import React, { Component } from 'react';
import  Agreement  from './predashboard/agreement';
import  Description  from './predashboard/descriptions';
import  Legal  from './predashboard/legal';
import  Milestone  from './predashboard/milestone';
import  Technology  from './predashboard/technology';
import  Contactinfo  from './predashboard/contactinfo';
import Funding from './predashboard/funding'


class PreDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      numofpages:[
        {"name":"Agreements","id":"1","description":"Explaining What neeeds to happen at this particulair step","status":"active"},
        {"name":"technology","id":"2","description":"Explaining What neeeds to happen at this particulair step","status":""},
        {"name":"Milestons","id":"3","description":"Explaining What neeeds to happen at this particulair step","status":""},
        {"name":"Milestons","id":"4","description":"Explaining What neeeds to happen at this particulair step","status":""},
        {"name":"Milestons","id":"5","description":"Explaining What neeeds to happen at this particulair step","status":""},
        {"name":"Milestons","id":"6","description":"Explaining What neeeds to happen at this particulair step","status":""},
        {"name":"Milestons","id":"7","description":"Explaining What neeeds to happen at this particulair step","status":""}],
      agreement:'',
      description:{},
      technology:{},
      mileStone:{},
      legal:{},
      funding:{},
      contact:'',
      trnas:'width 1s',
      changeWidth:'240px',
      aggVal:1,
      techVal:null,
      milestoneVal:null,
      descVal:null,
      legalVal:null,
      countingDiv:[]
    }
  }
  acceptedAgreement =(value,info)=>{
    this.setState({index: value})
    if(value == 1)
    {
      this.setState({agreement: info, changeWidth:'500px',techVal:1,countingDiv: [...this.state.countingDiv,1]})
      this.setState({numofpages:  this.state.numofpages.map((items,index)=> { if(items.id == '1'){items.status='disable'; return items; } if(items.id == '2'){items.status='active'; return items; } return items; })})
      console.log(this.state.numofpages)
    }else if(value == 2)
    {

      this.setState({numofpages:  this.state.numofpages.map((items,index)=> { if(items.id == '2'){items.status='disable'; return items; } if(items.id == '3'){items.status='active'; return items; } return items; } )})
     this.setState({technology: info,changeWidth:'700px', milestoneVal: 1,countingDiv:  [...this.state.countingDiv,1]},()=>{
        console.log('valuesOfTechnology',this.state.technology)
      })
      console.log(this.state.numofpages)
    }else if(value == 3)
    {
      this.setState({numofpages:  this.state.numofpages.map((items,index)=> { if(items.id == '3'){items.status='disable'; return items; } if(items.id == '4'){items.status='active'; return items; } return items; } )})
      this.setState({mileStone: info,changeWidth:'900px',descVal:1,countingDiv:  [...this.state.countingDiv,1]},()=>{
        console.log('valuesOfTechnologymileStone',this.state.mileStone)
      })
      console.log(this.state.numofpages)
    }else if(value == 4)
    {
      this.setState({numofpages:  this.state.numofpages.map((items,index)=> { if(items.id == '4'){items.status='disable'; return items; } if(items.id == '5'){items.status='active'; return items; } return items; } )})
      this.setState({description: info,changeWidth:'1250px',legalVal:1,countingDiv:  [...this.state.countingDiv,1]},()=>{
        console.log('valuesOfDwesc',this.state.description)
      })
    }else if(value == 5)
    {
      this.setState({numofpages:  this.state.numofpages.map((items,index)=> { if(items.id == '5'){items.status='disable'; return items; } if(items.id == '6'){items.status='active'; return items; } return items; } )})
      this.setState({legal: info,countingDiv:  [...this.state.countingDiv,1]},()=>{
        console.log('valuesOflegal',this.state.legal)
      })
    }else if(value == 6)
    {
      this.setState({numofpages:  this.state.numofpages.map((items,index)=> { if(items.id == '6'){items.status='disable'; return items; } if(items.id == '7'){items.status='active'; return items; } return items; } )})
     
      this.setState({contact: info},()=>{
         console.log('valuesOflegal',this.state.contact)
      })
    }else if(value == 7)
    {
      this.setState({funding: info,changeWidth:'1600px',contactVal:1},()=>{
        console.log('valuesOflegal',this.state.funding)
      })
    }

  }

  renderSwitch (index)
  {
    switch (index) {
      case 0:
        return <Agreement changeValue={this.acceptedAgreement} agreementData={this.state.agreement}/>;
      case 1:
        return <Technology changeValue={this.acceptedAgreement} technologyData={this.state.technology}/>;
      case 2:
        return <Milestone changeValue={this.acceptedAgreement} mileStonedata={this.state.mileStone} />;
      case 3:
        return <Description changeValue={this.acceptedAgreement} mileStonedata={this.state.mileStone}/>;
      case 4:
        return <Legal changeValue={this.acceptedAgreement}  legalData={this.state.legal} />;
      case 5:
        return <Contactinfo  changeValue={this.acceptedAgreement} contactData={this.state.contact} />;
      case 6:
        return <Funding changeValue={this.acceptedAgreement} />;
      default:
        return null;
    }
  }
  changePage = (val)=>{
    console.log(val)
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

    return (
      <section className="preDashboard">
        <div className="preDashboard_notification">
          {this.state.numofpages.map((items,index)=>
            <div className="NotiProgMain"  key={index} onClick={(e)=>this.changePage(index)}>
            <div className="header_box">
              <div className="header_top" >
                  <ul>
                      <li>STEP {items.id} </li>
                      <li>{items.name}</li>
                      <li><span>...</span></li>
                  </ul>
              </div>
              <div className="header_center">
                    <div className="header_flt">
                        <h1>{items.description}</h1>
                    </div>
                    <div className="header_rgt">
                        
                    </div>
                </div>
              </div>
              <div className='PreNotifiProgress'>{items.status == 'disable' ? <div className="PreNotifiProgressadded"> </div> : items.status == 'active' ?  <div className="PreNotifiactive"> </div> : <div className="PreNotifidisable"> </div>  } </div>
            </div>
          )}
        </div>
      
       {this.renderSwitch(this.state.index)}
      </section>
    );  
  };  
};

export default PreDashboard;
