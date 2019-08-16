import React, { Component } from 'react';
import {connect} from "react-redux";
import { itemsFetchData } from '../../actions/fuelSavingsActions';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class Financial extends Component {
  constructor(props){
    super(props)
    this.state = {
      paid:'',
      funded:'',
      data: ''
    }
    
  }
  componentWillMount(){
    this.props.fetchData('http://demo2532200.mockable.io/financial','FINANCIAL');
   
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
  render(){
      let paidPer = {width:this.state.paid}
      let fundedPer = {width:this.state.funded}
    if(this.state.data){ 
      return (
        <section className="finance">
        {console.log(this.state)}
          <div className="progress">
              <div className="progress-bar" role="progressbar" style={paidPer} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                ${this.props.financial.paid}
                <div className="progress_paid"> PAID</div>
              </div>
              <div className="progress-bar-sec" role="progressbar" style={fundedPer} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                ${this.props.financial.funded}
                <div className="progress_funded"> FUNDED</div>
              </div>
              <div className="progress-bar-third" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div className="progress_doller"> ${this.props.financial.total}</div>
                ${this.props.financial.runaway}
                <div className="progress_runway"> RUNWAY</div>
              </div>
          </div>
          <div className="according_main">
              <div className="according_header">
                <div className="status"> STATUS    </div>
                <div className="reference"> PAY REFERENCE    </div>
                <div className="submission"> SUBMISSION    </div>
                <div className="form"> FROM    </div>
                <div className="till"> TILL    </div>
                <div className="sprints"> #SPRINTS    </div>
                <div className="source"> SOURCE    </div>
                <div className="eur">EUR  </div>
              </div>
              {this.state.data.financial.paymentData.map((items) =>
              <section>
                <div className={"according_box "+items.status}>
                  <div className="check_box">
                      <label className="fancy-checkbox">
                      <input type="checkbox" />
                      <span className="checkmark"></span> </label>
                  </div>
                  <div className="button">
                      <a target="_blank" href="#"><img 
                      src={'./assets/img/'+ 
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
                      <a target="_blank" href="#">${items.eur}</a>
                  </div>
                </div>
                {items.status == 'release' ? <div class="according_box according_box-hea"> <div class="check_box"></div> <p>PREVIOUS</p> </div>:''}
              </section>
              )}
            
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
