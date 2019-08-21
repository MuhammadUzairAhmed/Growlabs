import React, { Component } from 'react';

class CreateMilestone extends Component {
    constructor(props){
        super(props)
        this.state =  {
            sprintLimit:20
        }
    }
    createMileStoneForm() {
        const method = "POST";
        const body = new FormData(this.form);
        console.log(event)
        fetch("http://demo2532200.mockable.io/milestone", { method, body })
            .then(res => res.json())
            .then(data => JSON.stringify(data));
    }
    render(){
        let numrows = this.state.sprintLimit;
        var sprintList = [];
        var sprintSlide = [];
        for (var i = 1; i < numrows; i++) {
            sprintList.push(
            <div className="colleborate_box" key={i} id={i} onClick={(value,event)=>this.getSprint(i,event)} >
              <h1>Sprint {i}</h1>
              <div className="colleborate_top_round">
                <span>
                <label className="fancy-checkbox">
                <input name={"sprintCheck"+i} type="checkbox" />
                <span className="checkmark"></span> </label>
                </span>
              </div>
              <p>W{i}</p>
          </div>
          )
         } 
         for (var i = 1; i < numrows; i++) {
            sprintSlide.push(
            <div className="item">
                <h1>SPRINT {i} </h1>
                <p>
                   <textarea name="sprintDescription">Testing</textarea>
                   <input type="hidden" name={"sprintId"+i} />
                </p>
            </div>
            )
         }
        return (
            <section>
            <form ref={el => (this.form = el)}>
            <div className="milestone_main">
                <div className="milestone_section">
                    <div className="milestone_header">
                      <div className="milestone_header_lft">
                          <p>MILESTONE {this.props.id}</p>
                          <h2>Framework setup</h2>
                      </div>
                      <div className="milestone_header_rgt">	
                          <a href="#"><img src="assets/img/Password.png" />   Locked </a>
                          <a href="#"><img src="assets/img/Finance-Money-icon.png" />funded</a>
                      </div>
                    </div>
                    <div className="milestone_Content">
                      <div className="milestone_box">
                          <h1>MILESTONE DESCRIPTION </h1>
                            <p>
                               <textarea name='milestoneDescription'></textarea>
                            </p>
                      </div>
                      <div className="milestone_box">
                          <h1>BUDGET </h1>
                          <label>EUR</label>
                          <input type="text" name="price" placeholder="$ 10.000" />
                      </div>
                    </div>
                </div>
                <section className="colleborate">
                    <div className="colleborate_top">
                        {sprintList}
                    </div>
                </section>
                    
                  <div className="milestone_slider">
                      <div className="carousel-inner">
                        {sprintSlide}
                      </div>
                      <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" ></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                        <li data-target="#myCarousel" data-slide-to="1" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                      </ol>
                      <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <img src="assets/img/arrow_rgt.png" /> 
                      </a>
                      <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <img src="assets/img/aorrow_lft.png" />
                      </a>
                  </div>
                  
              </div>    

            </form>
            
            <button onClick={() => this.createMileStoneForm()}>Send</button>
            </section>
        )
    }
}
export default CreateMilestone