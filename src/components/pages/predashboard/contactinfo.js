import React, { Component } from 'react';
import Agency from "./../governanace/agency"

class ContactIfo extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      dataValues:'',
      actDiv:false
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
    if(this.state.dataValues != ''){
      this.setState({actDiv:true},()=>{
        setTimeout(() => {
          this.props.changeValue(7, this.state.dataValues)
        }, 1000);
      })
}
}
    render(){
      return (
        <section className={this.state.actDiv ? "ContactIfo animations-disable" : "ContactIfo animations-check" }>
              <div class="ContactIfo_top">
                <h1>Contact information</h1><p>Provide a sufficient number of people for your partner to contact</p>
              </div>
                  
              <Agency getValues={this.getValues} chek='Predashboard'/>
              <div class="clearfix"></div>
           {this.state.dataValues != ''  ? <a target="_blank" onClick={this.handleAccept} class="button">Accept information<br/><span> Accept setup as the grounds on which to finalize parthnership</span></a>
              :  <a target="_blank" style={{background:'rgb(212, 217, 221)'}} class="button">Accept information<br/><span> Accept setup as the grounds on which to finalize parthnership</span></a>}

        </section>
      );  
    };  
  };
  
  export default ContactIfo;
  