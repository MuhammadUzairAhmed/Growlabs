import React, {Component} from 'react'

class Operations extends Component {
  constructor(props) {
    super(props);
    this.state = {

      projeDevLang: '',
      teamChar: '',
      teamLocation: '',
      offInCountries: '',
      minBudget: '',
      avgRate: '',
      projFrameworks: '',
      industries: '',
      projOS: '',

      noOfDevelopers: '',
      noOfProdManagers: '',
      teamDynamics: '',

      delayFor: true,
      active: false,

      languages: '',
      development_languages: '',
      team_characteristics: '',
      team_location: '',
      office_countries: '',
      average_rate: '',
      min_budget: '',
      frameworks: '',
      operating_systems: '',
      devices: '',
      developers: '',
      product_managers: '',
      other_members: '',
      team_dynamics: ''

    }
  }

  componentDidMount() {
    this.getOldData()
  }

  getOldData = () => {
    fetch("http://localhost/growlabs/api_projects/agency_operations", {
      headers: {'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMTA1IiwidXNlcl9lbWFpbCI6InRlc3Rjb21wYW55QGdyb3dsYWJzLnRlY2giLCJleHBpcmF0aW9uIjoxNTY5MzkwOTkyLCJzZWNyZXQiOiIwMjIxOWE2OWU4MjhhZDY2OTNiMDc3ZDExMzQ0Mzk3ZTY5MTUxMGQ2MGUyMDRkNjFkNjJjYzdhYWJlODIyN2NmNjhkMmZkMGM0ZjllOWIzNDZkM2YwYjU2ZDc0YTZmMGI1M2M3YWQ2YTIzOWNlYzk1NWRhYTJkZWJkNTBkMjdkMCJ9.ePj6Wnt3slJA6lNMCt8s68VmsVKGyOlSe0BhiC6SZ9s'}
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          languages: data.languages,
          development_languages: data.development_languages,
          team_characteristics: data.team_characteristics,
          team_location: data.team_location,
          office_countries: data.office_countries,
          average_rate: data.average_rate,
          min_budget: data.min_budget,
          frameworks: data.frameworks,
          industries: data.industries,
          operating_systems: data.operating_systems,
          devices: data.devices,
          developers: data.developers,
          product_managers: data.product_managers,
          other_members: data.other_members,
          team_dynamics: data.team_dynamics
        })
      );
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleBanner = (name) => {
    this.setState({banner: name[0].acceptedFile})

  }
  handelVideo = (name) => {
    this.setState({video: name[0].acceptedFile})
  }
  handleSave = () => {
    const {
      languages, development_languages, team_characteristics, team_location, office_countries,
      average_rate, min_budget, frameworks, industries, operating_systems,
      devices, developers, product_managers, other_members, team_dynamics
    } = this.state
    var values = {
      languages, development_languages, team_characteristics, team_location, office_countries,
      average_rate, min_budget, frameworks, industries, operating_systems,
      devices, developers, product_managers, other_members, team_dynamics
    }
    this.falseData()
    setTimeout(
      function () {
        this.getData(values)
      }.bind(this)
      , 15)
  }

  stopPostData() {
    this.getOldData()
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
      fetch('http://localhost/growlabs/api_projects/agency_operations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMTA1IiwidXNlcl9lbWFpbCI6InRlc3Rjb21wYW55QGdyb3dsYWJzLnRlY2giLCJleHBpcmF0aW9uIjoxNTY5MzkwOTkyLCJzZWNyZXQiOiIwMjIxOWE2OWU4MjhhZDY2OTNiMDc3ZDExMzQ0Mzk3ZTY5MTUxMGQ2MGUyMDRkNjFkNjJjYzdhYWJlODIyN2NmNjhkMmZkMGM0ZjllOWIzNDZkM2YwYjU2ZDc0YTZmMGI1M2M3YWQ2YTIzOWNlYzk1NWRhYTJkZWJkNTBkMjdkMCJ9.ePj6Wnt3slJA6lNMCt8s68VmsVKGyOlSe0BhiC6SZ9s'
        },
        body: JSON.stringify(values)
      }).then((response) => {
        console.log(response, "resData")
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


        <div className="personal_main oprations" onBlur={this.handleSave}>
          {/*1st column*/}
          <div className="first_row">
            <div className="feild dropdown">
              <label>LANGUAGES</label>
              <select form="carform" className={this.state.languages != '' ? 'active' : ''} name="languages" value={this.state.languages} onChange={this.handleChange}>
                <option value=""></option>
                <option value="2" selected={this.state.languages === "2"}>Dutch</option>
                <option value="3" selected={this.state.languages === "3"}>English</option>
                <option value="4" selected={this.state.languages === "4"}>French</option>
                <option value="5" selected={this.state.languages === "5"}>German</option>
                <option value="6" selected={this.state.languages === "6"}>Portuguese</option>
                <option value="7" selected={this.state.languages === "7"}>Spanish</option>
              </select>

              <div class="go-icon"></div>
              <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>

            <div className="feild dropdown">

              <label>DEVELOPMENT LANGUAGES</label>
              <select form="carform" className={this.state.development_languages != '' ? 'active' : ''} name="development_languages" value={this.state.development_languages} onChange={this.handleChange}>
                <option value="" selected={this.state.development_languages === ""}></option>
                <option value="1" selected={this.state.development_languages === "1"}>Java</option>
                <option value="2" selected={this.state.development_languages === "2"}>C</option>
                <option value="3" selected={this.state.development_languages === "3"}>Python</option>
                <option value="4" selected={this.state.development_languages === "4"}>C++</option>
                <option value="5" selected={this.state.development_languages === "5"}>Javascript</option>
                <option value="6" selected={this.state.development_languages === "6"}>.NET</option>
                <option value="7" selected={this.state.development_languages === "7"}>PHP</option>
                <option value="8" selected={this.state.development_languages === "8"}>Swift</option>
                <option value="9" selected={this.state.development_languages === "9"}>Objective C</option>
                <option value="10" selected={this.state.development_languages === "10"}>GoLang</option>
                <option value="11" selected={this.state.development_languages === "11"}>Perl</option>
                <option value="12" selected={this.state.development_languages === "12"}>Ruby</option>
                <option value="13" selected={this.state.development_languages === "13"}>Apex</option>
                <option value="14" selected={this.state.development_languages === "14"}>Other</option>
                <option value="15" selected={this.state.development_languages === "15"}>Don't know, don't care</option>
              </select>
              <div class="go-icon"></div>
              <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>

            <div className="feild dropdown">
              <label>TEAM CHARACTERISTICS</label>
              <select form="carform" className={this.state.team_characteristics != '' ? 'active' : ''} name="team_characteristics" value={this.state.team_characteristics} onChange={this.handleChange}>
                <option value="" selected={this.state.team_characteristics === ""}></option>
                <option value="1" selected={this.state.team_characteristics === "1"}>UI/Visual Design skills</option>
                <option value="2" selected={this.state.team_characteristics === "2"}>Process orientated</option>
                <option value="3" selected={this.state.team_characteristics === "3"}>Backend Focused</option>
                <option value="4" selected={this.state.team_characteristics === "4"}>Frontend Focused</option>
                <option value="5" selected={this.state.team_characteristics === "5"}>DevOps</option>
                <option value="6" selected={this.state.team_characteristics === "6"}>UX Design</option>
                <option value="7" selected={this.state.team_characteristics === "7"}>Project Management</option>
                <option value="8" selected={this.state.team_characteristics === "8"}>Industry Knowhow</option>
                <option value="9" selected={this.state.team_characteristics === "9"}>Domain Focus</option>
                <option value="10" selected={this.state.team_characteristics === "10"}>Technical Knowhow</option>
                <option value="11" selected={this.state.team_characteristics === "11"}>Product Roadmapping</option>
                <option value="12" selected={this.state.team_characteristics === "12"}>Architecture</option>
                <option value="13" selected={this.state.team_characteristics === "13"}>Problem Solving</option>
                <option value="14" selected={this.state.team_characteristics === "14"}>Adaptable & Flexible</option>
                <option value="15" selected={this.state.team_characteristics === "15"}>Timeliness</option>
                <option value="16" selected={this.state.team_characteristics === "16"}>Long-Term Partnership</option>
                <option value="17" selected={this.state.team_characteristics === "17"}>Communication & Transparency</option>
                <option value="18" selected={this.state.team_characteristics === "18"}>Quality Assurance</option>
                <option value="19" selected={this.state.team_characteristics === "19"}>Takes Ownership</option>
                <option value="20" selected={this.state.team_characteristics === "20"}>Robust Security</option>
                <option value="21" selected={this.state.team_characteristics === "21"}>Support & Maintenance</option>
              </select>
              <div class="go-icon"></div>
              <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
            </div>


            <div className="feild dropdown">
              <label>TEAM LOCATION</label>
              <select form="carform" className={this.state.team_location != '' ? 'active' : ''} name="team_location" value={this.state.team_location} onChange={this.handleChange}>
                <option value="" selected={this.state.team_location === ""}></option>
                <option value="1" selected={this.state.team_location === "1"}>Team must work in my office</option>
                <option value="2" selected={this.state.team_location === "2"}>Team can be remote</option>
                <option value="3" selected={this.state.team_location === "3"}>Blended</option>
              </select>
              <div class="go-icon"></div>
              <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
            </div>
            <div className="feild dropdown">
              <label>OFFICES IN COUNTRIES</label>
              <select form="carform" className={this.state.office_countries != '' ? 'active' : ''} name="office_countries" value={this.state.office_countries} onChange={this.handleChange}>
                <option value="1" selected={this.state.office_countries === "1"}>Afghanistan</option>
                <option value="2" selected={this.state.office_countries === "2"}>Albania</option>
                <option value="3" selected={this.state.office_countries === "3"}>Algeria</option>
                <option value="4" selected={this.state.office_countries === "4"}>American Samoa</option>
                <option value="5" selected={this.state.office_countries === "5"}>Andorra</option>
                <option value="6" selected={this.state.office_countries === "6"}>Angola</option>
                <option value="7" selected={this.state.office_countries === "7"}>Anguilla</option>
                <option value="8" selected={this.state.office_countries === "8"}>Antarctica</option>
                <option value="9" selected={this.state.office_countries === "9"}>Antigua And Barbuda</option>
                <option value="10" selected={this.state.office_countries === "10"}>Argentina</option>
                <option value="11" selected={this.state.office_countries === "11"}>Armenia</option>
                <option value="12" selected={this.state.office_countries === "12"}>Aruba</option>
                <option value="13" selected={this.state.office_countries === "13"}>Australia</option>
                <option value="14" selected={this.state.office_countries === "14"}>Austria</option>
                <option value="15" selected={this.state.office_countries === "15"}>Azerbaijan</option>
                <option value="16" selected={this.state.office_countries === "16"}>Bahamas The</option>
                <option value="17" selected={this.state.office_countries === "17"}>Bahrain</option>
                <option value="18" selected={this.state.office_countries === "18"}>Bangladesh</option>
                <option value="19" selected={this.state.office_countries === "19"}>Barbados</option>
                <option value="20" selected={this.state.office_countries === "20"}>Belarus</option>
                <option value="21" selected={this.state.office_countries === "21"}>Belgium</option>
                <option value="22" selected={this.state.office_countries === "22"}>Belize</option>
                <option value="23" selected={this.state.office_countries === "23"}>Benin</option>
                <option value="24" selected={this.state.office_countries === "24"}>Bermuda</option>
                <option value="25" selected={this.state.office_countries === "25"}>Bhutan</option>
                <option value="26" selected={this.state.office_countries === "26"}>Bolivia</option>
                <option value="27" selected={this.state.office_countries === "27"}>Bosnia and Herzegovina</option>
                <option value="28" selected={this.state.office_countries === "28"}>Botswana</option>
                <option value="29" selected={this.state.office_countries === "29"}>Bouvet Island</option>
                <option value="30" selected={this.state.office_countries === "30"}>Brazil</option>
                <option value="31" selected={this.state.office_countries === "31"}>British Indian Ocean Territory</option>
                <option value="32" selected={this.state.office_countries === "32"}>Brunei</option>
                <option value="33" selected={this.state.office_countries === "33"}>Bulgaria</option>
                <option value="34" selected={this.state.office_countries === "34"}>Burkina Faso</option>
                <option value="35" selected={this.state.office_countries === "35"}>Burundi</option>
                <option value="36" selected={this.state.office_countries === "36"}>Cambodia</option>
                <option value="37" selected={this.state.office_countries === "37"}>Cameroon</option>
                <option value="38" selected={this.state.office_countries === "38"}>Canada</option>
                <option value="39" selected={this.state.office_countries === "39"}>Cape Verde</option>
                <option value="40" selected={this.state.office_countries === "40"}>Cayman Islands</option>
                <option value="41" selected={this.state.office_countries === "41"}>Central African Republic</option>
                <option value="42" selected={this.state.office_countries === "42"}>Chad</option>
                <option value="43" selected={this.state.office_countries === "43"}>Chile</option>
                <option value="44" selected={this.state.office_countries === "44"}>China</option>
                <option value="45" selected={this.state.office_countries === "45"}>Christmas Island</option>
                <option value="46" selected={this.state.office_countries === "46"}>Cocos (Keeling) Islands</option>
                <option value="47" selected={this.state.office_countries === "47"}>Colombia</option>
                <option value="48" selected={this.state.office_countries === "48"}>Comoros</option>
                <option value="49" selected={this.state.office_countries === "49"}>Congo</option>
                <option value="50" selected={this.state.office_countries === "50"}>Congo The Democratic Republic Of The</option>
                <option value="51" selected={this.state.office_countries === "51"}>Cook Islands</option>
                <option value="52" selected={this.state.office_countries === "52"}>Costa Rica</option>
                <option value="53" selected={this.state.office_countries === "53"}>Cote D'Ivoire (Ivory Coast)</option>
                <option value="54" selected={this.state.office_countries === "54"}>Croatia (Hrvatska)</option>
                <option value="55" selected={this.state.office_countries === "55"}>Cuba</option>
                <option value="56" selected={this.state.office_countries === "56"}>Cyprus</option>
                <option value="57" selected={this.state.office_countries === "57"}>Czech Republic</option>
                <option value="58" selected={this.state.office_countries === "58"}>Denmark</option>
                <option value="59" selected={this.state.office_countries === "59"}>Djibouti</option>
                <option value="60" selected={this.state.office_countries === "60"}>Dominica</option>
                <option value="61" selected={this.state.office_countries === "61"}>Dominican Republic</option>
                <option value="62" selected={this.state.office_countries === "62"}>East Timor</option>
                <option value="63" selected={this.state.office_countries === "63"}>Ecuador</option>
                <option value="64" selected={this.state.office_countries === "64"}>Egypt</option>
                <option value="65" selected={this.state.office_countries === "65"}>El Salvador</option>
                <option value="66" selected={this.state.office_countries === "66"}>Equatorial Guinea</option>
                <option value="67" selected={this.state.office_countries === "67"}>Eritrea</option>
                <option value="68" selected={this.state.office_countries === "68"}>Estonia</option>
                <option value="69" selected={this.state.office_countries === "69"}>Ethiopia</option>
                <option value="70" selected={this.state.office_countries === "70"}>External Territories of Australia</option>
                <option value="71" selected={this.state.office_countries === "71"}>Falkland Islands</option>
                <option value="72" selected={this.state.office_countries === "72"}>Faroe Islands</option>
                <option value="73" selected={this.state.office_countries === "73"}>Fiji Islands</option>
                <option value="74" selected={this.state.office_countries === "74"}>Finland</option>
                <option value="75" selected={this.state.office_countries === "75"}>France</option>
                <option value="76" selected={this.state.office_countries === "76"}>French Guiana</option>
                <option value="77" selected={this.state.office_countries === "77"}>French Polynesia</option>
                <option value="78" selected={this.state.office_countries === "78"}>French Southern Territories</option>
                <option value="79" selected={this.state.office_countries === "79"}>Gabon</option>
                <option value="80" selected={this.state.office_countries === "80"}>Gambia The</option>
                <option value="81" selected={this.state.office_countries === "81"}>Georgia</option>
                <option value="82" selected={this.state.office_countries === "82"}>Germany</option>
                <option value="83" selected={this.state.office_countries === "83"}>Ghana</option>
                <option value="84" selected={this.state.office_countries === "84"}>Gibraltar</option>
                <option value="85" selected={this.state.office_countries === "85"}>Greece</option>
                <option value="86" selected={this.state.office_countries === "86"}>Greenland</option>
                <option value="87" selected={this.state.office_countries === "87"}>Grenada</option>
                <option value="88" selected={this.state.office_countries === "88"}>Guadeloupe</option>
                <option value="89" selected={this.state.office_countries === "89"}>Guam</option>
                <option value="90" selected={this.state.office_countries === "90"}>Guatemala</option>
                <option value="91" selected={this.state.office_countries === "91"}>Guernsey and Alderney</option>
                <option value="92" selected={this.state.office_countries === "92"}>Guinea</option>
                <option value="93" selected={this.state.office_countries === "93"}>Guinea-Bissau</option>
                <option value="94" selected={this.state.office_countries === "94"}>Guyana</option>
                <option value="95" selected={this.state.office_countries === "95"}>Haiti</option>
                <option value="96" selected={this.state.office_countries === "96"}>Heard and McDonald Islands</option>
                <option value="97" selected={this.state.office_countries === "97"}>Honduras</option>
                <option value="98" selected={this.state.office_countries === "98"}>Hong Kong S.A.R.</option>
                <option value="99" selected={this.state.office_countries === "99"}>Hungary</option>
                <option value="100" selected={this.state.office_countries === "100"}>Iceland</option>
                <option value="101" selected={this.state.office_countries === "101"}>India</option>
                <option value="102" selected={this.state.office_countries === "102"}>Indonesia</option>
                <option value="103" selected={this.state.office_countries === "103"}>Iran</option>
                <option value="104" selected={this.state.office_countries === "104"}>Iraq</option>
                <option value="105" selected={this.state.office_countries === "105"}>Ireland</option>
                <option value="106" selected={this.state.office_countries === "106"}>Israel</option>
                <option value="107" selected={this.state.office_countries === "107"}>Italy</option>
                <option value="108" selected={this.state.office_countries === "108"}>Jamaica</option>
                <option value="109" selected={this.state.office_countries === "109"}>Japan</option>
                <option value="110" selected={this.state.office_countries === "110"}>Jersey</option>
                <option value="111" selected={this.state.office_countries === "111"}>Jordan</option>
                <option value="112" selected={this.state.office_countries === "112"}>Kazakhstan</option>
                <option value="113" selected={this.state.office_countries === "113"}>Kenya</option>
                <option value="114" selected={this.state.office_countries === "114"}>Kiribati</option>
                <option value="115" selected={this.state.office_countries === "115"}>Korea North</option>
                <option value="116" selected={this.state.office_countries === "116"}>Korea South</option>
                <option value="117" selected={this.state.office_countries === "117"}>Kuwait</option>
                <option value="118" selected={this.state.office_countries === "118"}>Kyrgyzstan</option>
                <option value="119" selected={this.state.office_countries === "119"}>Laos</option>
                <option value="120" selected={this.state.office_countries === "120"}>Latvia</option>
                <option value="121" selected={this.state.office_countries === "121"}>Lebanon</option>
                <option value="122" selected={this.state.office_countries === "122"}>Lesotho</option>
                <option value="123" selected={this.state.office_countries === "123"}>Liberia</option>
                <option value="124" selected={this.state.office_countries === "124"}>Libya</option>
                <option value="125" selected={this.state.office_countries === "125"}>Liechtenstein</option>
                <option value="126" selected={this.state.office_countries === "126"}>Lithuania</option>
                <option value="127" selected={this.state.office_countries === "127"}>Luxembourg</option>
                <option value="128" selected={this.state.office_countries === "128"}>Macau S.A.R.</option>
                <option value="129" selected={this.state.office_countries === "129"}>Macedonia</option>
                <option value="130" selected={this.state.office_countries === "130"}>Madagascar</option>
                <option value="131" selected={this.state.office_countries === "131"}>Malawi</option>
                <option value="132" selected={this.state.office_countries === "132"}>Malaysia</option>
                <option value="133" selected={this.state.office_countries === "133"}>Maldives</option>
                <option value="134" selected={this.state.office_countries === "134"}>Mali</option>
                <option value="135" selected={this.state.office_countries === "135"}>Malta</option>
                <option value="136" selected={this.state.office_countries === "136"}>Man (Isle of)</option>
                <option value="137" selected={this.state.office_countries === "137"}>Marshall Islands</option>
                <option value="138" selected={this.state.office_countries === "138"}>Martinique</option>
                <option value="139" selected={this.state.office_countries === "139"}>Mauritania</option>
                <option value="140" selected={this.state.office_countries === "140"}>Mauritius</option>
                <option value="141" selected={this.state.office_countries === "141"}>Mayotte</option>
                <option value="142" selected={this.state.office_countries === "142"}>Mexico</option>
                <option value="143" selected={this.state.office_countries === "143"}>Micronesia</option>
                <option value="144" selected={this.state.office_countries === "144"}>Moldova</option>
                <option value="145" selected={this.state.office_countries === "145"}>Monaco</option>
                <option value="146" selected={this.state.office_countries === "146"}>Mongolia</option>
                <option value="147" selected={this.state.office_countries === "147"}>Montserrat</option>
                <option value="148" selected={this.state.office_countries === "148"}>Morocco</option>
                <option value="149" selected={this.state.office_countries === "149"}>Mozambique</option>
                <option value="150" selected={this.state.office_countries === "150"}>Myanmar</option>
                <option value="151" selected={this.state.office_countries === "151"}>Namibia</option>
                <option value="152" selected={this.state.office_countries === "152"}>Nauru</option>
                <option value="153" selected={this.state.office_countries === "153"}>Nepal</option>
                <option value="154" selected={this.state.office_countries === "154"}>Netherlands Antilles</option>
                <option value="155" selected={this.state.office_countries === "155"}>Netherlands The</option>
                <option value="156" selected={this.state.office_countries === "156"}>New Caledonia</option>
                <option value="157" selected={this.state.office_countries === "157"}>New Zealand</option>
                <option value="158" selected={this.state.office_countries === "158"}>Nicaragua</option>
                <option value="159" selected={this.state.office_countries === "159"}>Niger</option>
                <option value="160" selected={this.state.office_countries === "160"}>Nigeria</option>
                <option value="161" selected={this.state.office_countries === "161"}>Niue</option>
                <option value="162" selected={this.state.office_countries === "162"}>Norfolk Island</option>
                <option value="163" selected={this.state.office_countries === "163"}>Northern Mariana Islands</option>
                <option value="164" selected={this.state.office_countries === "164"}>Norway</option>
                <option value="165" selected={this.state.office_countries === "165"}>Oman</option>
                <option value="166" selected={this.state.office_countries === "166"}>Pakistan</option>
                <option value="167" selected={this.state.office_countries === "167"}>Palau</option>
                <option value="168" selected={this.state.office_countries === "168"}>Palestinian Territory Occupied</option>
                <option value="169" selected={this.state.office_countries === "169"}>Panama</option>
                <option value="170" selected={this.state.office_countries === "170"}>Papua new Guinea</option>
                <option value="171" selected={this.state.office_countries === "171"}>Paraguay</option>
                <option value="172" selected={this.state.office_countries === "172"}>Peru</option>
                <option value="173" selected={this.state.office_countries === "173"}>Philippines</option>
                <option value="174" selected={this.state.office_countries === "174"}>Pitcairn Island</option>
                <option value="175" selected={this.state.office_countries === "175"}>Poland</option>
                <option value="176" selected={this.state.office_countries === "176"}>Portugal</option>
                <option value="177" selected={this.state.office_countries === "177"}>Puerto Rico</option>
                <option value="178" selected={this.state.office_countries === "178"}>Qatar</option>
                <option value="179" selected={this.state.office_countries === "179"}>Reunion</option>
                <option value="180" selected={this.state.office_countries === "180"}>Romania</option>
                <option value="181" selected={this.state.office_countries === "181"}>Russia</option>
                <option value="182" selected={this.state.office_countries === "182"}>Rwanda</option>
                <option value="183" selected={this.state.office_countries === "183"}>Saint Helena</option>
                <option value="184" selected={this.state.office_countries === "184"}>Saint Kitts And Nevis</option>
                <option value="185" selected={this.state.office_countries === "185"}>Saint Lucia</option>
                <option value="186" selected={this.state.office_countries === "186"}>Saint Pierre and Miquelon</option>
                <option value="187" selected={this.state.office_countries === "187"}>Saint Vincent And The Grenadines</option>
                <option value="188" selected={this.state.office_countries === "188"}>Samoa</option>
                <option value="189" selected={this.state.office_countries === "189"}>San Marino</option>
                <option value="190" selected={this.state.office_countries === "190"}>Sao Tome and Principe</option>
                <option value="191" selected={this.state.office_countries === "191"}>Saudi Arabia</option>
                <option value="192" selected={this.state.office_countries === "192"}>Senegal</option>
                <option value="193" selected={this.state.office_countries === "193"}>Serbia</option>
                <option value="194" selected={this.state.office_countries === "194"}>Seychelles</option>
                <option value="195" selected={this.state.office_countries === "195"}>Sierra Leone</option>
                <option value="196" selected={this.state.office_countries === "196"}>Singapore</option>
                <option value="197" selected={this.state.office_countries === "197"}>Slovakia</option>
                <option value="198" selected={this.state.office_countries === "198"}>Slovenia</option>
                <option value="199" selected={this.state.office_countries === "199"}>Smaller Territories of the UK</option>
                <option value="200" selected={this.state.office_countries === "200"}>Solomon Islands</option>
                <option value="201" selected={this.state.office_countries === "201"}>Somalia</option>
                <option value="202" selected={this.state.office_countries === "202"}>South Africa</option>
                <option value="203" selected={this.state.office_countries === "203"}>South Georgia</option>
                <option value="204" selected={this.state.office_countries === "204"}>South Sudan</option>
                <option value="205" selected={this.state.office_countries === "205"}>Spain</option>
                <option value="206" selected={this.state.office_countries === "206"}>Sri Lanka</option>
                <option value="207" selected={this.state.office_countries === "207"}>Sudan</option>
                <option value="208" selected={this.state.office_countries === "208"}>Suriname</option>
                <option value="209" selected={this.state.office_countries === "209"}>Svalbard And Jan Mayen Islands</option>
                <option value="210" selected={this.state.office_countries === "210"}>Swaziland</option>
                <option value="211" selected={this.state.office_countries === "211"}>Sweden</option>
                <option value="212" selected={this.state.office_countries === "212"}>Switzerland</option>
                <option value="213" selected={this.state.office_countries === "213"}>Syria</option>
                <option value="214" selected={this.state.office_countries === "214"}>Taiwan</option>
                <option value="215" selected={this.state.office_countries === "215"}>Tajikistan</option>
                <option value="216" selected={this.state.office_countries === "216"}>Tanzania</option>
                <option value="217" selected={this.state.office_countries === "217"}>Thailand</option>
                <option value="218" selected={this.state.office_countries === "218"}>Togo</option>
                <option value="219" selected={this.state.office_countries === "219"}>Tokelau</option>
                <option value="220" selected={this.state.office_countries === "220"}>Tonga</option>
                <option value="221" selected={this.state.office_countries === "221"}>Trinidad And Tobago</option>
                <option value="222" selected={this.state.office_countries === "222"}>Tunisia</option>
                <option value="223" selected={this.state.office_countries === "223"}>Turkey</option>
                <option value="224" selected={this.state.office_countries === "224"}>Turkmenistan</option>
                <option value="225" selected={this.state.office_countries === "225"}>Turks And Caicos Islands</option>
                <option value="226" selected={this.state.office_countries === "226"}>Tuvalu</option>
                <option value="227" selected={this.state.office_countries === "227"}>Uganda</option>
                <option value="228" selected={this.state.office_countries === "228"}>Ukraine</option>
                <option value="229" selected={this.state.office_countries === "229"}>United Arab Emirates</option>
                <option value="230" selected={this.state.office_countries === "230"}>United Kingdom</option>
                <option value="231" selected={this.state.office_countries === "231"}>United States</option>
                <option value="232" selected={this.state.office_countries === "232"}>United States Minor Outlying Islands</option>
                <option value="233" selected={this.state.office_countries === "233"}>Uruguay</option>
                <option value="234" selected={this.state.office_countries === "234"}>Uzbekistan</option>
                <option value="235" selected={this.state.office_countries === "235"}>Vanuatu</option>
                <option value="236" selected={this.state.office_countries === "236"}>Vatican City State (Holy See)</option>
                <option value="237" selected={this.state.office_countries === "237"}>Venezuela</option>
                <option value="238" selected={this.state.office_countries === "238"}>Vietnam</option>
                <option value="239" selected={this.state.office_countries === "239"}>Virgin Islands (British)</option>
                <option value="240" selected={this.state.office_countries === "240"}>Virgin Islands (US)</option>
                <option value="241" selected={this.state.office_countries === "241"}>Wallis And Futuna Islands</option>
                <option value="242" selected={this.state.office_countries === "242"}>Western Sahara</option>
                <option value="243" selected={this.state.office_countries === "243"}>Yemen</option>
                <option value="244" selected={this.state.office_countries === "244"}>Yugoslavia</option>
                <option value="245" selected={this.state.office_countries === "245"}>Zambia</option>
                <option value="246" selected={this.state.office_countries === "246"}>Zimbabwe</option>
              </select>
              <div class="go-icon"></div>
              <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
            </div>

            <div className="feild">
              <label>AVERAGE RATE (PER HOUR)</label>
              <input onChange={this.handleChange} type="text" className={this.state.average_rate != '' ? 'active' : ''} name="average_rate" value={this.state.average_rate} placeholder="input"/>
              <div className="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" className=""/><span className="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
            </div>

            <div className="feild dropdown">
              <label>MINIMUM BUDGET</label>
              <select name="min_budget" className={this.state.min_budget != '' ? 'active' : ''} form="carform" value={this.state.min_budget} onChange={this.handleChange}>
                <option value="" selected={this.state.min_budget === ""}>Doesn’t matter</option>
                <option value="1" selected={this.state.min_budget === "1"}>€ 5000</option>
                <option value="2" selected={this.state.min_budget === "2"}>€ 15000</option>
                <option value="3" selected={this.state.min_budget === "3"}>€ 50000</option>
                <option value="4" selected={this.state.min_budget === "4"}>€ 100.000</option>
              </select>
              <div class="go-icon"></div>
              <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

              {/* <input onChange={this.handleChange} type="text" name="minBudget" value={this.state.minBudget} placeholder="input" /> */}
            </div>
          </div>
          {/*2nd column*/}
          <div className="secd_row">
            <div className="feild dropdown">
              <label>PROJECT FRAMEWORKS</label>
              <select form="carform" className={this.state.frameworks != '' ? 'active' : ''} name="frameworks" value={this.state.frameworks} onChange={this.handleChange}>
                <option value="" selected={this.state.frameworks === ""}></option>
                <option value="1" selected={this.state.frameworks === "1"}>Angular.JS</option>
                <option value="4" selected={this.state.frameworks === "4"}>Laravel</option>
                <option value="7" selected={this.state.frameworks === "7"}>Ruby on Rails</option>
                <option value="8" selected={this.state.frameworks === "8"}>Symfony</option>
                <option value="11" selected={this.state.frameworks === "11"}>React.js</option>
                <option value="12" selected={this.state.frameworks === "12"}>Node.js</option>
                <option value="13" selected={this.state.frameworks === "13"}>ASP.NET</option>
                <option value="100" selected={this.state.frameworks === "100"}>Other</option>
              </select>
              <div class="go-icon"></div>
              <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
            </div>


            <div className="feild dropdown">
              <label>INDUSTRIES</label>
              <select form="carform" className={this.state.industries != '' ? 'active' : ''} name="industries" value={this.state.industries} onChange={this.handleChange}>
                <option value="1" selected={this.state.industries === "1"}>Accounting</option>
                <option value="2" selected={this.state.industries === "2"}>Animation</option>
                <option value="3" selected={this.state.industries === "3"}>Architecture</option>
                <option value="4" selected={this.state.industries === "4"}>Arts</option>
                <option value="5" selected={this.state.industries === "5"}>Automotive</option>
                <option value="6" selected={this.state.industries === "6"}>Aviation</option>
                <option value="7" selected={this.state.industries === "7"}>Biotechnology</option>
                <option value="8" selected={this.state.industries === "8"}>Business Services</option>
                <option value="9" selected={this.state.industries === "9"}>Chemicals</option>
                <option value="10" selected={this.state.industries === "10"}>Civil Engineering</option>
                <option value="11" selected={this.state.industries === "11"}>Computer Games</option>
                <option value="12" selected={this.state.industries === "12"}>Computer Hardware</option>
                <option value="13" selected={this.state.industries === "13"}>Computer Networking</option>
                <option value="14" selected={this.state.industries === "14"}>Computer Software / Engineering</option>
                <option value="15" selected={this.state.industries === "15"}>Computer/Network Security</option>
                <option value="16" selected={this.state.industries === "16"}>Construction</option>
                <option value="17" selected={this.state.industries === "17"}>Consumer Electronics</option>
                <option value="18" selected={this.state.industries === "18"}>Cosmetics</option>
                <option value="19" selected={this.state.industries === "19"}>Defense / Space</option>
                <option value="20" selected={this.state.industries === "20"}>Design</option>
                <option value="21" selected={this.state.industries === "21"}>E-commerce</option>
                <option value="22" selected={this.state.industries === "22"}>E-Learning</option>
                <option value="23" selected={this.state.industries === "23"}>Education</option>
                <option value="24" selected={this.state.industries === "24"}>Equipment</option>
                <option value="25" selected={this.state.industries === "25"}>Farming</option>
                <option value="26" selected={this.state.industries === "26"}>Fashion</option>
                <option value="27" selected={this.state.industries === "27"}>Finance</option>
                <option value="28" selected={this.state.industries === "28"}>Food/Beverages</option>
                <option value="29" selected={this.state.industries === "29"}>Fundraising</option>
                <option value="30" selected={this.state.industries === "30"}>Gaming</option>
                <option value="31" selected={this.state.industries === "31"}>Graphic Design</option>
                <option value="32" selected={this.state.industries === "32"}>Hospital / Health Care</option>
                <option value="33" selected={this.state.industries === "33"}>Hospitality</option>
                <option value="34" selected={this.state.industries === "34"}>Human Resources</option>
                <option value="35" selected={this.state.industries === "35"}>Industrial Automation</option>
                <option value="36" selected={this.state.industries === "36"}>Information Technology</option>
                <option value="37" selected={this.state.industries === "37"}>Insurance</option>
                <option value="38" selected={this.state.industries === "38"}>Leisure</option>
                <option value="39" selected={this.state.industries === "39"}>Logistics / Procurement</option>
                <option value="40" selected={this.state.industries === "40"}>Maritime</option>
                <option value="41" selected={this.state.industries === "41"}>Marketing Advertising</option>
                <option value="42" selected={this.state.industries === "42"}>Media</option>
                <option value="43" selected={this.state.industries === "43"}>Military Industry</option>
                <option value="44" selected={this.state.industries === "44"}>Music</option>
                <option value="45" selected={this.state.industries === "45"}>Nanotechnolgy</option>
                <option value="46" selected={this.state.industries === "46"}>Nonprofit</option>
                <option value="47" selected={this.state.industries === "47"}>Oil/Energy/Solar/Greentech</option>
                <option value="48" selected={this.state.industries === "48"}>Other Industry</option>
                <option value="49" selected={this.state.industries === "49"}>Real Estate</option>
                <option value="50" selected={this.state.industries === "50"}>Retail</option>
                <option value="51" selected={this.state.industries === "51"}>Sports</option>
                <option value="52" selected={this.state.industries === "52"}>Staffing / Recruiting</option>
                <option value="53" selected={this.state.industries === "53"}>Telecommunications</option>
                <option value="54" selected={this.state.industries === "54"}>Tourism</option>
                <option value="55" selected={this.state.industries === "55"}>Travel</option>
                <option value="56" selected={this.state.industries === "56"}>Utilities</option>
                <option value="57" selected={this.state.industries === "57"}>Web Design</option>
              </select>
              <div class="go-icon"></div>
              <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
            </div>
            <div className="feild dropdown">
              <label>PROJECT OPERATING SYSTEMS</label>
              <select form="carform" className={this.state.operating_systems != '' ? 'active' : ''} name="operating_systems" value={this.state.operating_systems} onChange={this.handleChange}>
                <option value="" selected={this.state.operating_systems === ""}></option>
                <option value="0" selected={this.state.operating_systems === "0"}>iOS</option>
                <option value="1" selected={this.state.operating_systems === "1"}>Android</option>
                <option value="2" selected={this.state.operating_systems === "2"}>Windows</option>
                <option value="3" selected={this.state.operating_systems === "3"}>Hybrid</option>
                <option value="4" selected={this.state.operating_systems === "4"}>Mac OS</option>
                <option value="5" selected={this.state.operating_systems === "5"}>Linux</option>
                <option value="6" selected={this.state.operating_systems === "6"}>Windows</option>
              </select>
              <div class="go-icon"></div>
              <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

              {/* <input onChange={this.handleChange} type="text"  placeholder="input" /> */}
            </div>
            <div className="feild dropdown">
              <label>PROJECT DEVICES</label>
              <select form="carform" className={this.state.devices != '' ? 'active' : ''} name="devices" value={this.state.devices} onChange={this.handleChange}>
                <option value="" selected={this.state.devices === ""}></option>
                <option value="1" selected={this.state.devices === "1"}>Phone</option>
                <option value="2" selected={this.state.devices === "2"}>Tablet</option>
                <option value="3" selected={this.state.devices === "3"}>TV</option>
                <option value="4" selected={this.state.devices === "4"}>Watch</option>
                <option value="5" selected={this.state.devices === "5"}>Other</option>
              </select>
              <div class="go-icon"></div>
              <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

              {/* <input onChange={this.handleChange} type="text" name="development_languages" value={this.state.development_languages} placeholder="input" /> */}
            </div>

            <div className="feild">
              <label>NO. OF DEVELOPERS</label>
              <input onChange={this.handleChange} type="text" className={this.state.developers != '' ? 'active' : ''} name="developers" value={this.state.developers} placeholder="input"/>
              <div className="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" className=""/><span className="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
            </div>

            <div className="feild">
              <label>NO. OF PRODUCT MANAGERS</label>
              <input onChange={this.handleChange} type="text" className={this.state.product_managers != '' ? 'active' : ''} name="product_managers" value={this.state.product_managers} placeholder="input"/>
              <div className="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" className=""/><span className="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
            </div>

            <div className="feild">
              <label>NO. OF OTHER MEMBERS</label>
              <input onChange={this.handleChange} type="text" className={this.state.other_members != '' ? 'active' : ''} name="other_members" value={this.state.other_members} placeholder="input"/>
              <div className="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" className=""/><span className="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
            </div>

            <div className="feild dropdown">
              <label>TEAM DYNAMICS</label>
              <select form="carform" className={this.state.team_dynamics != '' ? 'active' : ''} name="team_dynamics" value={this.state.team_dynamics} onChange={this.handleChange}>
                <option value="" selected={this.state.team_dynamics === ""}></option>
                <option value="1" selected={this.state.team_dynamics === "1"}>Ideation team</option>
                <option value="2" selected={this.state.team_dynamics === "2"}>Staff augmented</option>
                <option value="3" selected={this.state.team_dynamics === "3"}>Project team</option>
              </select>
              <div class="go-icon"></div>
              <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

              {/* <input onChange={this.handleChange} type="text"  placeholder="input" /> */}
            </div>


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

export default Operations;
