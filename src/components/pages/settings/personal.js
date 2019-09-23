import React, {Component} from 'react';
import MaskedInput from 'react-text-mask'
import FileUpload from './../governanace/contractComponents/FileUpload'

class Personal extends Component {
  constructor(props) {
    super(props)
    this.state = {

      formId: null,
      formMainId: null,
      formChildId: null,
      childKey: '',
      first_name: '',
      address: '',
      skype: '',
      phone: '',
      email: '',
      zipcode: '',
      last_name: '',
      dob: '',
      image: '',
      city: '',
      country: '',
      formSubmitted: false,
      image: ''


    }
  }

  componentDidMount() {
    if (this.props.projectType == 'additionalInformationPopup') {
      console.log('additionalInformationPopup')
    }
    this.getOldData()
  }

  getOldData = () => {
    fetch(
      "http://localhost/growlabs/api_projects/personal",
      {
        headers: {'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMTA1IiwidXNlcl9lbWFpbCI6InRlc3Rjb21wYW55QGdyb3dsYWJzLnRlY2giLCJleHBpcmF0aW9uIjoxNTY5MzkwOTkyLCJzZWNyZXQiOiIwMjIxOWE2OWU4MjhhZDY2OTNiMDc3ZDExMzQ0Mzk3ZTY5MTUxMGQ2MGUyMDRkNjFkNjJjYzdhYWJlODIyN2NmNjhkMmZkMGM0ZjllOWIzNDZkM2YwYjU2ZDc0YTZmMGI1M2M3YWQ2YTIzOWNlYzk1NWRhYTJkZWJkNTBkMjdkMCJ9.ePj6Wnt3slJA6lNMCt8s68VmsVKGyOlSe0BhiC6SZ9s'}
      })
      .then(res =>
        res.json()
      )
      .then(data =>
        this.setState({
          first_name: data.first_name,
          last_name: data.last_name,
          address: data.address,
          phone: data.phone,
          email: data.email,
          zipcode: data.zipcode,
          dob: data.dob,
          city: data.city,
          country: data.country,
          skype: data.skype
        })
      );
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSave = () => {
    let values = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      dob: this.state.dob,
      skype: this.state.skype,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      zipcode: this.state.zipcode,
      city: this.state.city,
      country: this.state.country
    }

    if (this.props.projectType == 'additionalInformationPopup') {
      fetch('http://localhost/growlabs/api_projects/moreinfo', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMTA1IiwidXNlcl9lbWFpbCI6InRlc3Rjb21wYW55QGdyb3dsYWJzLnRlY2giLCJleHBpcmF0aW9uIjoxNTY5MzkwOTkyLCJzZWNyZXQiOiIwMjIxOWE2OWU4MjhhZDY2OTNiMDc3ZDExMzQ0Mzk3ZTY5MTUxMGQ2MGUyMDRkNjFkNjJjYzdhYWJlODIyN2NmNjhkMmZkMGM0ZjllOWIzNDZkM2YwYjU2ZDc0YTZmMGI1M2M3YWQ2YTIzOWNlYzk1NWRhYTJkZWJkNTBkMjdkMCJ9.ePj6Wnt3slJA6lNMCt8s68VmsVKGyOlSe0BhiC6SZ9s'
        },
        body: JSON.stringify(values)
      }).then((response) => {
        // console.log(response, "resData")
        return response.json();
      }).then((data) => {
        // console.log('Created List:', data);
        //alert('as')
      });
    } else {
      this.props.buttonActive()
      setTimeout(
        function () {
          this.props.getData(values)
        }.bind(this), 15)
    }
  }

  checkInfo() {
    this.props.sendInfo();
  }

  handleImage = (x) => {
    this.setState({image: `./assets/img/${x[0].acceptedFile}`})
    console.log(this.state.image, 'imagesss')
  }

  checkData() {
    this.props.sendDataSave();
  }

  render() {
    return (
      <div className="personal_main" onBlur={this.handleSave}>

        {this.props.currentPageStatus == "additionalInformationPopup" ? <h1>Additional Information</h1> : ''}
        <div className="personal_user">
          {/* {this.state.saveId
                     ? <img src={this.state.image != '' ? this.state.image : './assets/img/user2.png'} alt='sorry' className={} />
                     : <img src={this.state.image != '' ? this.state.image : './assets/img/close.png'} alt='sorry' />} */}
          <img src={this.state.image != '' ? this.state.image : './assets/img/new_user.png'} alt='sorry' className={this.state.image != '' ? "upload_user" : "blank_user"}/>
          <div className="personal_upload">
            <FileUpload getInput={this.handleImage} getInput1='PS'/>
          </div>
        </div>

        <div className="personal_flt">

          {this.props.currentPageStatus == "additionalInformationPopup" ? '' : <h1>General</h1>}
          <div className="feild ">
            <label>First Name</label>
            <input onChange={this.handleChange} className={this.state.first_name != '' ? 'active' : ''} type="text" name="first_name" value={this.state.first_name} placeholder="Input"/>
            {/*<div className="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" className="" /><span className="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>*/}

            <div className="tooltip"><img src={this.props.currentPageStatus == "additionalInformationPopup" ? "./assets/img/black_img.png" : "./assets/img/1024px-Infobox_info_icon.svg Copy 4.png"} className=""/><span className="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
          </div>
          <div className="feild ">
            <label>Last Name </label>
            <input onChange={this.handleChange} className={this.state.last_name != '' ? 'active' : ''} type="text" name="last_name" value={this.state.last_name} placeholder="Input"/>
            {/*<div className="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" className="" /><span className="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>*/}
            <div className="tooltip"><img src={this.props.currentPageStatus == "additionalInformationPopup" ? "./assets/img/black_img.png" : "./assets/img/1024px-Infobox_info_icon.svg Copy 4.png"} className=""/><span className="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
          </div>
          <div className="feild ">
            <label>DATE OF BIRTH</label>
            <MaskedInput
              className={this.state.dob != '' ? 'active' : ''}
              value={this.state.dob}
              name="dob"
              onChange={this.handleChange}
              guide={true}
              mask={[/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
              placeholder="00-00-0000"
            />
            <div className="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" className=""/><span className="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

          </div>
          <div className="feild ">
            <label>Skype</label>
            <input onChange={this.handleChange} className={this.state.skype != '' ? 'active' : ''} type="text" name="skype" value={this.state.skype} placeholder="Input"/>
            <div className="tooltip"><img src={this.props.currentPageStatus == "additionalInformationPopup" ? "./assets/img/black_img.png" : "./assets/img/1024px-Infobox_info_icon.svg Copy 4.png"} className=""/><span className="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
          </div>
          <div className="feild">
            <label>Email address</label>
            <input onChange={this.handleChange} className={this.state.email != '' ? 'active' : ''} type="text" name="email" value={this.state.email} placeholder="Input"/>
            {/*<div className="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" className="" /><span className="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>*/}
            {/*<input onChange={this.handleChange} type="text" name="mail" value={this.state.mail} placeholder="Input" />*/}
            <div className="tooltip"><img src={this.props.currentPageStatus == "additionalInformationPopup" ? "./assets/img/black_img.png" : "./assets/img/1024px-Infobox_info_icon.svg Copy 4.png"} className=""/><span className="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
          </div>

        </div>

        <div className="personal_rgt">

          <div className="feild">
            <label>Phone</label>
            <input className={this.state.phone != '' ? 'active' : ''} onChange={this.handleChange} type="text" name="phone" value={this.state.phone} placeholder="Input"/>
            <div className="tooltip"><img src={this.props.currentPageStatus == "additionalInformationPopup" ? "./assets/img/black_img.png" : "./assets/img/1024px-Infobox_info_icon.svg Copy 4.png"} className=""/><span className="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
          </div>

          <div className="feild">
            {this.props.currentPageStatus == "additionalInformationPopup" ? '' : <h1>Adress</h1>}
            <label>Adress</label>
            <input className={this.state.address != '' ? 'active' : ''} onChange={this.handleChange} type="text" name="address" value={this.state.address} placeholder="Input"/>
            <div className="tooltip"><img src={this.props.currentPageStatus == "additionalInformationPopup" ? "./assets/img/black_img.png" : "./assets/img/1024px-Infobox_info_icon.svg Copy 4.png"} className=""/><span className="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
          </div>
          <div className="feild">
            <label>Zipcode</label>
            <input className={this.state.zipcode != '' ? 'active' : ''} onChange={this.handleChange} type="text" name="zipcode" value={this.state.zipcode} placeholder="Input"/>
            <div className="tooltip"><img src={this.props.currentPageStatus == "additionalInformationPopup" ? "./assets/img/black_img.png" : "./assets/img/1024px-Infobox_info_icon.svg Copy 4.png"} className=""/><span className="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
          </div>
          <div className="feild">
            <label>city</label>
            <input className={this.state.city != '' ? 'active' : ''} onChange={this.handleChange} type="text" name="city" value={this.state.city} placeholder="Input"/>
            <div className="tooltip"><img src={this.props.currentPageStatus == "additionalInformationPopup" ? "./assets/img/black_img.png" : "./assets/img/1024px-Infobox_info_icon.svg Copy 4.png"} className=""/><span className="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
          </div>
          <div className="feild">
            <label>country</label>
            <input className={this.state.country != '' ? 'active' : ''} onChange={this.handleChange} type="text" name="country" value={this.state.country} placeholder="Input"/>
            <div className="tooltip"><img src={this.props.currentPageStatus == "additionalInformationPopup" ? "./assets/img/black_img.png" : "./assets/img/1024px-Infobox_info_icon.svg Copy 4.png"} className=""/><span className="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
          </div>
        </div>

        {this.props.currentPageStatus == "additionalInformationPopup" ? <button className="account_but" color="primary" onClick={this.checkInfo.bind(this)}>Add Information</button> :
          <div className="Button_sec">
            <button color="primary">Request Approval</button>

            <button className="secd_button">Add google Authenticator</button>
            <p>Request Account Removal</p>
          </div>

        }


      </div>
    )
  }
}

export default Personal
