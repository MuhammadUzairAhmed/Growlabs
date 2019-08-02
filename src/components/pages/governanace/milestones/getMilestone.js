import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

class GetMilestone extends Component {
    render(){
        console.log(this.props.data)
        return (
           this.props.data.map((item)=>
                <div className="milestone_main" key={item.milestoneId}>
                  <div className="milestone_section">
                      <div className="milestone_header">
                        <div className="milestone_header_lft">
                            <p>MILESTONE {item.milestoneId}</p>
                            <h2>Framework setup</h2>
                        </div>
                        <div className="milestone_header_rgt">	
                            <NavLink key="locked" to="/locked"><img src="assets/img/Password.png" /> Locked</NavLink>
                            <NavLink key="finance" to="/financial"><img src="assets/img/Finance-Money-icon.png" /> Funded</NavLink>
                        </div>
                      </div>
                      <div className="milestone_Content">
                        <div className="milestone_box">
                            <h1>MILESTONE DESCRIPTION </h1>
                            <p>
                            {item.description}
                            </p>
                        </div>
                        <div className="milestone_box">
                            <h1>BUDGET </h1>
                            <label>EUR</label>
                            <input type="text" name="fname" placeholder="$ 10.000" value={item.price} />
                        </div>
                      </div>
                  </div>
                   
                  <section className="colleborate">
                      <div className="colleborate_top">
                        {item.sprints.map((sprint)=>
                          <div className={"colleborate_box "+sprint.status} key={sprint.id} >
                              <h1>Sprint {sprint.id}</h1>
                              <div className="colleborate_top_round">
                                  <span>
                                    <label className="fancy-checkbox">
                                    <input type="checkbox" checked={sprint.status == "disable" ? 'checked' : ''} />
                                    <span className="checkmark"></span> </label>
                                  </span>
                              </div>
                              <p>W{sprint.id}</p>
                          </div>
                        )}
                      </div>
                  </section>
                  <Carousel>
                    {item.sprints.map((sprint)=>
                     <Carousel.Item key={sprint.id}>
                        <Carousel.Caption><h3>SPRINT {sprint.id} </h3><p>{sprint.desicription} </p> </Carousel.Caption>
                      </Carousel.Item>
                      )}
                  </Carousel>
                </div>
                
            )
        )
    }
}
export default GetMilestone
