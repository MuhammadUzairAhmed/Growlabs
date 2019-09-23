import React, {Component} from 'react';
import MILESTONES from './governanace/milestones';
import PASSWORD from './settings/agencyProfile/password';
import COMPANY from './settings/agencyProfile/company';
import OPERATIONS from './settings/agencyProfile/operations';
import PERSONAL from './settings/agencyProfile/personal'
import BANK from './settings/agencyProfile/bank'
import PROFILE from './settings/agencyProfile/testinomials'
import PERSONALCLIENT from './settings/clientProfile/personal'
import COMPANYCLIENT from './settings/clientProfile/company'
import PASSWORDCLIENT from './settings/clientProfile/password'
import REFFERAL from './settings/agencyProfile/referal'

import FileUpload from './../pages/governanace/contractComponents/FileUpload'

import {connect} from "react-redux";
import {finalizeAccount, stopData, displayComponent} from '../../actions/fuelSavingsActions';

class Settings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activePage: '1',
      TotalPage: [
        {"id": "1", "name": "Personal"},
        {"id": "2", "name": "Company"},
        {"id": "3", "name": "Operations"},
        {"id": "4", "name": "Password"},
        {"id": "5", "name": "Bank"},
        {"id": "6", "name": "Profile"},
        // {"id": "7", "name": "Referal"}
      ],
      TotalPageClient: [
        {"id": "1", "name": "Personal"},
        {"id": "2", "name": "Company"},
        {"id": "3", "name": "Password"},
      ],
      height: '',
      pass: '',
      confirm: '',
      userType: '',
      selectedType: '',
      activeModal: 'modal',
      activeState: false
    };
  }

  componentDidMount() {
    if (this.props.dispComp == '') {
      this.props.displayComponent(1);
      this.props.stopData('clear');
    }

    let localUrl = 'http://localhost/growlabs/api_data/user';
    fetch(
      localUrl,
      {
        headers: {'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMTA1IiwidXNlcl9lbWFpbCI6InRlc3Rjb21wYW55QGdyb3dsYWJzLnRlY2giLCJleHBpcmF0aW9uIjoxNTY5MzkwOTkyLCJzZWNyZXQiOiIwMjIxOWE2OWU4MjhhZDY2OTNiMDc3ZDExMzQ0Mzk3ZTY5MTUxMGQ2MGUyMDRkNjFkNjJjYzdhYWJlODIyN2NmNjhkMmZkMGM0ZjllOWIzNDZkM2YwYjU2ZDc0YTZmMGI1M2M3YWQ2YTIzOWNlYzk1NWRhYTJkZWJkNTBkMjdkMCJ9.ePj6Wnt3slJA6lNMCt8s68VmsVKGyOlSe0BhiC6SZ9s'}
      }
    )
      .then(function (response) {
        return response.json();
      }).then(data => {
        this.setState({userType: data.type});
        this.setState({selectedType: data.type});
    });
  }

  componentWillReceiveProps(nextprops) {
    // this.setState({selectedType: nextprops.user.userType, activePage: '1'})
  }

  CurrentPage(value, event) {
    this.setState({
      activePage: value
    }, () => {
      this.props.displayComponent(this.state.activePage)
    })
    setTimeout(function () {
      var elmnt = document.querySelector(".center_part");
      var sidebarHeight = document.querySelector(".sidebar");
      sidebarHeight.style.minHeight = elmnt.clientHeight + 'px'
    }, 500)
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSave = (e) => {
    e.preventDefault()
    this.setState({activeState: false})
    var values = {
      password: this.state.pass,
      confirm: this.state.confirm,
      userType: this.state.userType
    }
    //  this.setState({activeModal:'modal'})
    this.props.finalizeAccount(values)
  }

  handleSelect = () => {
    this.setState({activeState: true})
    //  if(this.state.activeModal=='modal active'){
    //  this.setState({activeModal:'modal'})}
    //  else if(this.state.activeModal=='modal'){
    //  this.setState({activeModal:'modal active'})}
  }
  stopPostData = () => {
    this.props.stopData('clear')
  }

  render() {
    const CurrentPageKey = this.props.dispComp
    let activePage;
    if (this.state.selectedType == 'Agency') {
      if (CurrentPageKey == 1) {
        activePage = <PERSONAL/>
      }
      if (CurrentPageKey == 4) {
        activePage = <PASSWORD/>
      }
      if (CurrentPageKey == 2) {
        activePage = <COMPANY/>
      }
      if (CurrentPageKey == 3) {
        activePage = <OPERATIONS/>
      }
      if (CurrentPageKey == 5) {
        activePage = <BANK/>
      }
      if (CurrentPageKey == 6) {
        activePage = <PROFILE/>
      }
      if (CurrentPageKey == 7) {
        activePage = <REFFERAL/>
      }
    } else if (this.state.selectedType == 'Client') {
      if (CurrentPageKey == 1) {
        activePage = <PERSONALCLIENT/>
      }
      if (CurrentPageKey == 3) {
        activePage = <PASSWORDCLIENT/>
      }
      if (CurrentPageKey == 2) {
        activePage = <COMPANYCLIENT/>
      }
    }

    return (
      <section className="backlog settings">
        <div>

          {this.state.activeState && <div className="modal Finalize">
            <h1>Finalize Account</h1>
            <div className="feild Finalize">
              <label>PASSWORD</label>
              <img src="./assets/img/lock.png" className="lock"/>
              <input onChange={this.handleChange} type="password" name="password"/>
            </div>
            <div className="feild Finalize">
              <label>CONFIRM</label>
              <img src="./assets/img/lock.png" className="lock"/>
              <input onChange={this.handleChange} type="password" name="password_r"/>
            </div>
            <input type="hidden" name="userType" form="carform" value={this.state.userType} onChange={this.handleChange}/>
            <button className="account_but" color="primary" onClick={this.handleSave}>{this.state.userType} - FINISH ACCOUNT</button>

          </div>}
          <br></br>

          <br></br>

          {this.state.selectedType == 'Agency' || this.state.selectedType == 'Client' ?
            <div>
              <h1 className="settings_hea">Settings</h1>
            </div>
            : ''}
          <ul className="ui-tabs-nav">
            {this.state.selectedType == 'Agency' ?
              this.state.TotalPage.map(
                (items) =>
                  <li className={items.id == this.props.dispComp ? "active" : ""} key={items.id} onClick={(value, event) => this.CurrentPage(items.id, event)}>
                    <a>{items.name}</a>
                  </li>
              )
              : this.state.selectedType == 'Client' ? this.state.TotalPageClient.map(
                (items) =>
                  <li className={items.id == this.props.dispComp ? "active" : ""} key={items.id} onClick={(value, event) => this.CurrentPage(items.id, event)}>
                    <a>{items.name}</a>
                  </li>
              ) : ''
            }
          </ul>

          {activePage}
        </div>
      </section>
    );


  };
};

const mapStateToProps = state => ({
  user: state.fuelSavings.user,
  bankData: state.fuelSavings.bankData,
  dispComp: state.fuelSavings.dispComp,
  stopPosting: state.fuelSavings.stopPosting
})
// const mapDispatchToProps = dispatch => ({
//   fetchData: (url, action) => dispatch(itemsFetchData(url, action)),
// })
export default connect(mapStateToProps, {finalizeAccount, stopData, displayComponent})(Settings);

