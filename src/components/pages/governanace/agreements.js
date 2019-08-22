import React, { Component } from 'react';

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
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        fetch(proxyurl+"http://react2.zepcomtesting.com/api/agreement.json")
          .then(res => res.json())
          .then(data => this.setState({formData: data}));
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
                            <input type="text" readOnly name="amount" value={this.state.formData.amount}/>
                            <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
                        <h4>BONUS AMOUNT FOR ACHIEVING DEADLINE</h4>
                        <div className="input_box">
                            <input type="text"  name='descriptionBeforeStart' value={this.state.formData.descriptionBeforeStart} readOnly/>
                            <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
                        <h2>Communication</h2>
                        <h4>SPRINTS START ON</h4>
                        <div className="input_box">
                            <input type="text" name="sprintDay"  value={this.state.formData.sprintDay} readOnly/>
                            <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
                        </div>
                        <h4>SPRINTS CALLS</h4>
                        <div className="input_box hlf">
                            <input type="text" name="sprintDate"  value={this.state.formData.sprintDate} readOnly />
                        </div>
                        <div className="input_box hlf rgt">
                            <input type="text" name="sprintTime" value={this.state.formData.sprintTime} readOnly />
                        </div>
                        <div className="clearfix"></div>
                        <h4>MEDIUM</h4>
                        <div className="input_box">
                            <input type="text" name="skype" value={this.state.formData.skype} readOnly />
                            <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
                    </div>
                    <div className="agreements_rht">
                        <h1>Procedures</h1>
                        <h4>SPRINTS START ON</h4>
                        <div className="input_box">
                            <input type="text" name="proceduresSprint" value={this.state.formData.proceduresSprint} readOnly />
                            <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
                        </div>
                        <h4>WILL USE GROW LABS MANAGMENT TOOL</h4>
                        <div className="input_box">
                            <input type="text" name="managmentTool"  value={this.state.formData.managmentTool} readOnly/>
                            <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
                        </div>
                        <h4>WILL USE GROW LABS COMMUNICATION TOOL</h4>
                        <div className="input_box">
                            <input type="text" name="communicationTool"  value={this.state.formData.communicationTool} readOnly/>
                            <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
                        </div>
                        <br /> <br />
                        <h4>WILL ALWAYS FILL IN SPRINT DESCRIPTION AND STORIES </h4>
                        <div className="input_box">
                            <input type="text" name="stroies" value={this.state.formData.stroies} readOnly />
                            <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
                        </div>
                        <h4>ALWAYS FILL IN FINAL MILESTONE DESCRIPTION IN ADVANCE </h4>
                        <div className="input_box">
                            <input type="text" name="advance"  value={this.state.formData.advance} readOnly />
                            <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
                        </div>
                        <h4>ALWAYS FILL IN FINAL MILESTONE DESCRIPTION IN ADVANCE </h4>
                        <div className="input_box">
                            <input type="text" name="advance2"  value={this.state.formData.advance2} readOnly  />
                            <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
                        </div>
                        <br /> <br />
                        <h4>STORY POINTS </h4>
                        <div className="input_box">
                            <input type="text" name="stroyPoints" value={this.state.formData.stroyPoints} readOnly />
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
export default Agreements