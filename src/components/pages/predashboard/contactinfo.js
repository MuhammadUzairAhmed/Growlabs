import React, { Component } from 'react';
import Agency from "./../governanace/agency"
import {Link} from "react-router-dom";

class ContactIfo extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      dataValues:'',
      actDiv:false
    }
  }
  componentDidMount()
  {
    console.log('contactdata');
    console.log(this.props.contactData);
    if(this.props.contactData != '')
    {
      this.setState({dataValues: this.props.contactData})
    }
  }
  getValues = (values)=>
  {
    console.log('agencyValues',values)
    this.setState({dataValues:values},()=>{
      console.log('valuesAGENCY',this.state.dataValues)
    })
  }
  handleAccept = () => {
      this.setState({actDiv:true},()=>{
        setTimeout(() => {
          this.props.changeValue(6, this.state.dataValues)
        }, 1000);
      })

}
    render(){
      return (
        <section className={this.state.actDiv ? "ContactIfo animations-disable" : "ContactIfo animations-check" }>
              <div className="ContactIfo_top">
                <h1>Contact information</h1><p>Provide a sufficient number of people for your partner to contact</p>
              </div>
                  
              <Agency getValues={this.getValues} storedDetail={this.props.contactData != ''? this.props.contactData :''} chek='Predashboard'/>
              <div className="clearfix"></div>
          <Link to="/calibration_legal" className="button" style={{background: `#19D192`}}>Accept Agreement<br/><span> Accept setup as the grounds on which to finalize partnership</span></Link>
        </section>
      );  
    };  
  };
  
  export default ContactIfo;
