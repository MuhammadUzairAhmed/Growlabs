import React, {Component} from 'react';

class Password extends Component {
  constructor(props) {
    super(props)
    this.state = {
      oldData: {
        password_old: "",
        password_new: "",
        password_repeat: ""
      },
      newData: {
        password_old: '',
        password_new: '',
        password_repeat: ''
      },
      status: false,
      delayFor: true,
      active: false
    }
  }

  buttonFunction() {
    this.setState({
      status: false, newData: {
        password_old: '',
        password_new: '',
        password_repeat: ''
      }
    })
  }

  handleChange(x, state) {

    this.setState({
      status: true,
      newData: {...this.state.newData, [state]: x.target.value}
    })
    console.log(this.state)
  }

  handleSave = () => {
    var values = {
      password_old: this.state.newData.password_old,
      password_new: this.state.newData.password_new,
      password_repeat: this.state.newData.password_repeat,
    }
    console.log('password_olds', values)
    this.falseData()
    setTimeout(
      function () {
        this.getData(values)
      }.bind(this)
      , 15)


  }

  stopPostData() {
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
      fetch('http://localhost/growlabs/api_projects/profile_password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMTA1IiwidXNlcl9lbWFpbCI6InRlc3Rjb21wYW55QGdyb3dsYWJzLnRlY2giLCJleHBpcmF0aW9uIjoxNTY5MzkwOTkyLCJzZWNyZXQiOiIwMjIxOWE2OWU4MjhhZDY2OTNiMDc3ZDExMzQ0Mzk3ZTY5MTUxMGQ2MGUyMDRkNjFkNjJjYzdhYWJlODIyN2NmNjhkMmZkMGM0ZjllOWIzNDZkM2YwYjU2ZDc0YTZmMGI1M2M3YWQ2YTIzOWNlYzk1NWRhYTJkZWJkNTBkMjdkMCJ9.ePj6Wnt3slJA6lNMCt8s68VmsVKGyOlSe0BhiC6SZ9s'
        },
        body: JSON.stringify(values)
      }).then((response) => {
        console.log(response.text(), "resData")
        return response.text();
      }).then((data) => {
        console.log('Created List:', data);
        //alert('as')
      });


    }
  }

  render() {
    return (
      <section class="">
        <div className="save_button">
          <button className="one" onClick={this.stopPostData.bind(this)}>Cancel</button>
          <label class={this.state.active ? 'active switch' : 'switch'}>
            <input type="checkbox" checked={this.state.active ? 'checked' : ''}/>
            <span class="slider round">Save Changes</span>
          </label>
        </div>
        <div className="personal_main" onBlur={this.handleSave}>
          {/*2nd column*/}
          <div className="password_old_sec">
            <div className="feild">
              <label>CURRENT password_old</label>
              <input onChange={(x) => this.handleChange(x, 'password_old')} type="text" className={this.state.newData.password_old != '' ? 'active' : ''} name="currentPass" value={this.state.status ? this.state.newData.password_old : this.state.oldData.password_old} placeholder="input"/>
              <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild">
              <label>NEW password_old</label>
              <input onChange={(x) => this.handleChange(x, 'password_new')} className={this.state.newData.password_new != '' ? 'active' : ''} type="text" name="nexPass" value={this.state.status ? this.state.newData.password_new : this.state.oldData.password_new} placeholder="input"/>
              <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild">
              <label>password_repeat password_old</label>
              <input onChange={(x) => this.handleChange(x, 'password_repeat')} className={this.state.newData.password_repeat != '' ? 'active' : ''} type="text" name="password_repeatPass" value={this.state.status ? this.state.newData.password_repeat : this.state.oldData.password_repeat} placeholder="input"/>
              <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>

            {/* {this.state.nexPass != '' && this.state.nexPass  == this.state.password_repeatPass && this.state.password_repeatPass != ''?
                 <button color="primary" onClick={this.handleSave}>Request Approval</button>
     :''}           */}
          </div>


          <div className="Button_sec">
            <button color="primary">Request Approval</button>
            <button className="secd_button">Add google Authenticator</button>
            <p>Request Account Removal</p>
          </div>


        </div>
      </section>
    )
  }
}

export default Password;
