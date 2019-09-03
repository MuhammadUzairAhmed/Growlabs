import React, { Component } from 'react';
import {connect} from "react-redux";
import { itemsFetchData } from '../../../../actions/fuelSavingsActions';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class Financial extends Component {
  constructor(props){
    super(props)
    this.state = {
      paid:'',
      funded:'',
      data: '',
      fundChecked: false
    }
    
  }
  componentWillMount(){
    this.props.fetchData('http://react2.zepcomtesting.com/api/financial.json','FINANCIAL');
   
  }
  componentWillReceiveProps(props,state){
    this.setState({
      data:props
    })
    this.setState({
      paid: Math.round((props.financial.paid * 100) / props.financial.total) +'%',
      funded:Math.round((props.financial.funded * 100) / props.financial.total) +'%'
    })
  }
  handleAccept = () => {
    this.setState({actDiv:true},()=>{
      setTimeout(() => {
        this.props.changeValue(6, 'fundings..')
      }, 2000);
    })
   
}
setChecked=(val)=>
{
  if(val == 'release')
  {
    this.setState({fundChecked: !this.state.fundChecked})
    console.log(val,'cheked')
  }
}
  render(){
      let paidPer = {width:this.state.paid}
      let fundedPer = {width:this.state.funded}
    if(this.state.data){ 
      return (
        <section className="finance">
        {console.log(this.state)}
          
          <div className="according_main">
              <div className="according_header">
                <div className="status"> CLIENT NAME    </div>
                <div className                         ="reference"> CLIENT NAME   </div>
                <div className="submission"> TEST    </div>
                <div className="form"> CLIENT COMPANY    </div>
                <div className="till"> TESTINOMIAL POSTED    </div>
                <div className="sprints"> SENT DATE    </div>
                
              </div>
              {this.state.data.financial.paymentData.map((items,index) =>
              <section key={index}>
                <div className={"according_box "+items.status}>
                  <div className="check_box">
                      <label className="fancy-checkbox">
                      <input type="checkbox" onChange={()=>this.setChecked(items.status)} checked={items.status == 'release'?this.state.fundChecked:false} />
                      <span className="checkmark"></span> </label>
                  </div>
                  <div className="button">
                      <a target="_blank" href="#"><img 
                      src={'./assets/img/book.png'+ 
                        (() => {
                          if (items.status == 'fund') {
                            return 'ARROW.png';
                          }
                          if (items.status == 'funded') {
                            return 'Finance-Money-icon.png';
                          }
                          if (items.status == 'release') {
                            return 'book.png';
                          }
                          else{
                            return '126157@3x.png';
                          }
                        })() 
                      }
                      className={
                      (() => {
                        if (items.status == 'paid') {
                          return 'doler';
                        }
                      })()
                    }
                      />{items.status}</a>
                  </div>
                  <div className="miestone">
                      <p>{items.payreference}</p>
                  </div>
                  <div className="sub_date">
                      <p>{items.submission}</p>
                  </div>
                  <div className="form_date">
                      <p>{items.from}</p>
                  </div>
                  <div className="arrow">
                      <img src="./assets/img/ARROW.png"/>
                  </div>
                  <div className="till_date">
                      <p>{items.till}</p>
                  </div>
                  <div className="apring_numb">
                      <p>{items.sprint}</p>
                  </div>
                  <div className="source_numb">
                      <p>{items.source}</p>
                  </div>
                  <div className="eur_numb">
                      <a target="_blank" href="#">{items.till}</a>
                  </div>
                </div>
                {items.status == 'release' ? <div className="according_box according_box-hea"> <div className="check_box"></div> <p>PREVIOUS</p> </div>:''}
              </section>

              )}
           
          {this.state.fundChecked ?
          <a target="_blank" onClick={this.handleAccept} className="button">Accept Funding<br /><span> Accept setup as the grounds on which to finalize parthnership</span></a> 
            : <a target="_blank"  className="button"   style={{background:'rgb(212, 217, 221)'}}>Accept Funding<br /><span> Accept setup as the grounds on which to finalize parthnership</span></a>}
              
          </div>
          
        </section>
      );  
  }else{
    return <Loader
    type="Oval"
    color="white"
    height="50"
    width="50"
    className="loading" />
  } 
};
};


const mapStateToProps = (state) => {
  return {
      financial:state.fuelSavings.FINANCIAL,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (url,action) => dispatch(itemsFetchData(url,action)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Financial);
