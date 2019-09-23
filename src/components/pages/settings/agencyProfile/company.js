import React, {Component} from 'react'
import FileUpload from './../../governanace/contractComponents/FileUpload';
import $ from 'jquery'

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company_name: '',
      certification: '',
      founded: '',
      company_intro: '',
      description_special: '',
      description_deliver: '',
      company_website: '',
      twitter: '',
      linkedin: '',
      facebook: '',
      github: '',
      company_banner: '',
      company_intro_video: '',
      company_intro_video_url: '',
      delayFor: true,
      active: false,

    }
  }

  componentDidMount() {
    $("#err").fadeIn(1000)
    this.getoldData()
  }

  getoldData = () => {
    fetch("http://localhost/growlabs/api_projects/agency_company", {
      headers: {'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMTA1IiwidXNlcl9lbWFpbCI6InRlc3Rjb21wYW55QGdyb3dsYWJzLnRlY2giLCJleHBpcmF0aW9uIjoxNTY5MzkwOTkyLCJzZWNyZXQiOiIwMjIxOWE2OWU4MjhhZDY2OTNiMDc3ZDExMzQ0Mzk3ZTY5MTUxMGQ2MGUyMDRkNjFkNjJjYzdhYWJlODIyN2NmNjhkMmZkMGM0ZjllOWIzNDZkM2YwYjU2ZDc0YTZmMGI1M2M3YWQ2YTIzOWNlYzk1NWRhYTJkZWJkNTBkMjdkMCJ9.ePj6Wnt3slJA6lNMCt8s68VmsVKGyOlSe0BhiC6SZ9s'}
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          company_name: data.company_name,
          certification: data.certification,
          founded: data.founded,
          company_intro: data.company_intro,
          description_special: data.description_special,
          description_deliver: data.description_deliver,
          company_website: data.company_website,
          twitter: data.twitter,
          linkedin: data.linkedin,
          facebook: data.facebook,
          github: data.github,
          company_banner: data.company_banner,
          company_intro_video: data.company_intro_video,
          company_intro_video_url: data.company_intro_video_url
        }, () => {
          $("#err").fadeOut(2000)
        })
      );
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => {
      if (
        this.state.company_name == '' ||
        this.state.certification == '' ||
        this.state.founded == '' ||
        this.state.company_intro == '' ||
        this.state.description_special == '' ||
        this.state.description_deliver == '' ||
        this.state.company_website == '' ||
        this.state.twitter == '' ||
        this.state.linkedin == '' ||
        this.state.facebook == '' ||
        this.state.github == '' ||
        this.state.company_banner == '' ||
        this.state.company_intro_video == '' ||
        this.state.company_intro_video_url == ''
      ) {
        $("#err").fadeIn(1000)
      } else {
        $("#err").fadeOut(2000)
      }
    })
  }
  handlecompany_banner = (name) => {
    this.setState({company_banner: name[0].acceptedFile})

  }
  handelVideo = (name) => {
    this.setState({company_intro_video: name[0].acceptedFile})
  }
  handleSave = () => {
    var values = {
      company_name: this.state.company_name,
      certification: this.state.certification,
      founded: this.state.founded,
      company_intro: this.state.company_intro,
      description_special: this.state.description_special,
      description_deliver: this.state.description_deliver,
      website: this.state.company_website,
      twitter: this.state.twitter,
      linkedin: this.state.linkedin,
      facebook: this.state.facebook,
      github: this.state.github,
      company_banner: this.state.company_banner,
      company_intro_video: this.state.company_intro_video,
      company_intro_video_url: this.state.company_intro_video_url
    }


    this.falseData()
    setTimeout(
      function () {
        this.getData(values)
      }.bind(this)
      , 15)

    console.log(values, "companyAgenceProfile")

  }

  stopPostData() {
    $("#err").fadeIn()
    this.getoldData()
    this.setState({
      delayFor: false,
      active: false
    })
  }

  falseData() {
    this.setState({
      delayFor: true,
      active: true
    })
  }

  getData(values) {
    if (this.state.delayFor) {
      console.log(values.company_website);
      fetch('http://localhost/growlabs/api_projects/agency_company', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMTA1IiwidXNlcl9lbWFpbCI6InRlc3Rjb21wYW55QGdyb3dsYWJzLnRlY2giLCJleHBpcmF0aW9uIjoxNTY5MzkwOTkyLCJzZWNyZXQiOiIwMjIxOWE2OWU4MjhhZDY2OTNiMDc3ZDExMzQ0Mzk3ZTY5MTUxMGQ2MGUyMDRkNjFkNjJjYzdhYWJlODIyN2NmNjhkMmZkMGM0ZjllOWIzNDZkM2YwYjU2ZDc0YTZmMGI1M2M3YWQ2YTIzOWNlYzk1NWRhYTJkZWJkNTBkMjdkMCJ9.ePj6Wnt3slJA6lNMCt8s68VmsVKGyOlSe0BhiC6SZ9s'
        },
        body: JSON.stringify(values)
      }).then((response) => {
        console.log(response.text(), "resData");
      }).then((data) => {
        // console.log('Created List:', data);
        //alert('as')
      });
    }
  }

  render() {
    return (
      <section className="">
        <div className="save_button">
          <button className="one" onClick={this.stopPostData.bind(this)}>Cancel</button>
          <label className={this.state.active ? 'active switch' : 'switch'}>
            <input type="checkbox" defaultChecked={this.state.active}/>
            <span className="slider round">Save Changes</span>
          </label>
        </div>
        <div className="personal_main company" onBlur={this.handleSave}>
          {/*1st column*/}


          <div className="first_row">
            <h1>General</h1>
            <div className="feild">
              <label>COMPANY NAME</label>
              <input onChange={this.handleChange} type="text" className={this.state.company_name != '' ? 'active' : ''} name="company_name" value={this.state.company_name} placeholder="input"/>
              <div className="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" className=""/><span className="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild">
              <label>certification</label>
              <input onChange={this.handleChange} type="text" className={this.state.certification != '' ? 'active' : ''} name="certification" value={this.state.certification} placeholder="input"/>
              <div className="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" className=""/><span className="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild">
              <label>FOUNDED IN</label>
              <input onChange={this.handleChange} type="text" className={this.state.founded != '' ? 'active' : ''} name="founded" value={this.state.founded} placeholder="input"/>
              <div className="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" className=""/><span className="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>

            <h1>description_specials</h1>
            <div className="feild textarea">
              <label>COMPANY INTRODUCTION</label>
              {/* <input onChange={this.handleChange} type="text" name="company_intro" value={this.state.company_intro} placeholder="input" />*/}
              <div className="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" className=""/><span className="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
              <textarea className="form-control" placeholder="input" rows="6" id="comment" onChange={this.handleChange} className={this.state.company_intro != '' ? 'active' : ''} name="company_intro" value={this.state.company_intro}></textarea>

            </div>
            <div className="feild textarea">
              <label>description_special WHAT MAKES US SPECAL?</label>
              {/* <input onChange={this.handleChange} type="text" name="description_special" value={this.state.description_special} placeholder="input" />*/}
              <textarea className="form-control" placeholder="input" rows="6" id="comment" onChange={this.handleChange} className={this.state.description_special != '' ? 'active' : ''} name="description_special" value={this.state.description_special}></textarea>

              <div className="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" className=""/><span className="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
          </div>

          {/*2nd column*/}
          <div className="secd_row">
            <div className="feild textarea">
              <label>DESCRIBE HOW YOU DELIVER A PROJECT</label>
              {/*<input onChange={this.handleChange} type="text" name="description_deliver" value={this.state.description_deliver} placeholder="input" />*/}
              <textarea className="form-control" placeholder="input" rows="6" id="comment" onChange={this.handleChange} className={this.state.description_deliver != '' ? 'active' : ''} name="description_deliver" value={this.state.description_deliver}></textarea>

            </div>

            <h1>Links</h1>
            <div className="feild">
              <label>COMPANY WEBSITE URL</label>
              <input onChange={this.handleChange} type="text" name="company_website" className={this.state.company_website != '' ? 'active' : ''} value={this.state.company_website} placeholder="input"/>
              <div className="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" className=""/><span className="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild">
              <label>TWITTER URL</label>
              <input onChange={this.handleChange} type="text" name="twitter" className={this.state.twitter != '' ? 'active' : ''} value={this.state.twitter} placeholder="input"/>
              <div className="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" className=""/><span className="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild">
              <label>LINKEDIN URL</label>
              <input onChange={this.handleChange} type="text" name="linkedin" className={this.state.linkedin != '' ? 'active' : ''} value={this.state.linkedin} placeholder="input"/>
              <div className="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" className=""/><span className="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild">
              <label>FACEBOOK URL</label>
              <input onChange={this.handleChange} type="text" className={this.state.facebook != '' ? 'active' : ''} name="facebook" value={this.state.facebook} placeholder="input"/>
              <div className="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" className=""/><span className="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild">
              <label>GITHUB USERNAME</label>
              <input onChange={this.handleChange} type="text" name="github" className={this.state.github != '' ? 'active' : ''} value={this.state.github} placeholder="input"/>
              <div className="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" className=""/><span className="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>

          </div>
          {/*3rd column*/}
          <div className="third_row">
            <h1>General</h1>
            <div className="feild upload">
              <label>company profile banner</label>
              <FileUpload getInput={this.handlecompany_banner} getInput1='company_banner'/>
              <p className="Upload_text">{this.state.company_banner == undefined ? 'Drag and Drop here' : this.state.company_banner}</p>

            </div>
            <div className="feild upload">
              <label>company video</label>
              <FileUpload getInput={this.handelVideo} getInput1='video'/>
              <p className="Upload_text">Drag and Drop here</p>
            </div>
            <div className="feild">
              <label>COMPANY VIDEO LINK</label>
              <input className={this.state.company_intro_video_url != '' ? 'active' : ''} onChange={this.handleChange} type="text" name="company_intro_video_url" value={this.state.company_intro_video_url} placeholder="input"/>
              <div className="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" className=""/><span className="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
          </div>


          <div className="Button_sec ">
            <button color="primary">Request Approval</button>
            <p className="error" id="err">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </p>
            <button className="secd_button">Add google Authenticator</button>
            <p>Request Account Removal</p>
          </div>


        </div>


      </section>
    )
  }
}

export default Company;
