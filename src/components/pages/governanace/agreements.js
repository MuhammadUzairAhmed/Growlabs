import React, { Component } from 'react';
import {connect} from "react-redux";
import { itemsFetchData } from '../../../actions/fuelSavingsActions';

class Agreements extends Component {
    
    //   send() {
    //     const method = "POST";
    //     const body = new FormData(this.form);
    //     fetch("http://demo2532200.mockable.io/agreement", { method, body })
    //       .then(res => res.json())
    //       .then(data => console.log(JSON.stringify(data.form, null, "\t")));
    //   }
    constructor(props){
        super(props)
        this.state = {
            formData : ''
        }
    }
    componentDidMount(){
        // const proxyurl = "https://cors-anywhere.herokuapp.com/";
        // fetch(proxyurl+"http://react2.zepcomtesting.com/api/agreement.json")
        //   .then(res => res.json())
        //   .then(data => ));
          this.setState({formData: this.props.milestone.agreements})
    }
   
    
    render(){
      
        return (
            <section className="agreements">
                <div className="agreements_form">
                    <form>
                    <div className="agreements_flt">
                        <h1>Financial</h1>
                        <h4>BONUS AMOUNT FOR ACHIEVING DEADLINE</h4>
                        <div className="input_box">
                            <input type="text" readOnly name="amount" value={this.state.formData.bonus_amount}/>
                            <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
                        <h4>BONUS AMOUNT FOR ACHIEVING DEADLINE</h4>
                        <div className="input_box">
                            <input type="text"  name='descriptionBeforeStart' value={this.state.formData.milestone_payment} readOnly/>
                            <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
                        <h2>Communication</h2>
                        <h4>SPRINTS START ON</h4>
                        <div className="input_box">
                            <input type="text" name="sprintDay"  value={this.state.formData.sprints_start_on} readOnly/>
                            <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
                        </div>
                        <h4>SPRINTS CALLS</h4>
                        <div className="input_box hlf">
                            <input type="text" name="sprintDate"  value={this.state.formData.sprint_calls_day} readOnly />
                        </div>
                        <div className="input_box hlf rgt">
                            <input type="text" name="sprintTime" value={this.state.formData.sprint_calls_time} readOnly />
                        </div>
                        <div className="clearfix"></div>
                        <h4>MEDIUM</h4>
                        <div className="input_box">
                            <input type="text" name="skype" value={this.state.formData.medium} readOnly />
                            <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
                    </div>
                    <div className="agreements_rht">
                        <h1>Procedures</h1>
                        {/* <h4>SPRINTS START ON</h4>
                        <div className="input_box">
                            <input type="text" name="proceduresSprint" value={this.state.formData.proceduresSprint} readOnly />
                            <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
                        </div> */}
                        <h4>WILL USE GROW LABS MANAGMENT TOOL</h4>
                        <div className="input_box">
                            <input type="text" name="managmentTool"  value={this.state.formData.grow_management_tool ? 'Yes':'NO'} readOnly/>
                            <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
                        </div>
                        <h4>WILL USE GROW LABS COMMUNICATION TOOL</h4>
                        <div className="input_box">
                            <input type="text" name="communicationTool"  value={this.state.formData.grow_communication_tool ? 'Yes':'NO'} readOnly/>
                            <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
                        </div>
                        <br /> <br />
                        <h4>WILL ALWAYS FILL IN SPRINT DESCRIPTION AND STORIES </h4>
                        <div className="input_box">
                            <input type="text" name="stroies" value={this.state.formData.sprint_details} readOnly />
                            <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
                        </div>
                        <h4>ALWAYS FILL IN FINAL MILESTONE DESCRIPTION IN ADVANCE </h4>
                        <div className="input_box">
                            <input type="text" name="advance"  value={this.state.formData.milestone_details} readOnly />
                            <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
                        </div>
                        <h4>ALWAYS FILL IN FINAL MILESTONE DESCRIPTION IN ADVANCE </h4>
                        <div className="input_box">
                            <input type="text" name="advance2"  value={this.state.formData.github} readOnly  />
                            <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
                        </div>
                        <br /> <br />
                        <h4>STORY POINTS </h4>
                        <div className="input_box">
                            <input type="text" name="stroyPoints" value={this.state.formData.story_points ? 'Yes':'NO'} readOnly />
                            <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>	
                    </form>	   	
                </div>
            </section>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        milestone:state.fuelSavings.MILESTONE,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url,action) => dispatch(itemsFetchData(url,action))
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Agreements);