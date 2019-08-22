import React, { Component } from 'react';

var values;
class Description extends Component {
   constructor(props) {
      super(props)
      this.state = {
         x1: '',
         x2: '',
         x3: '',
         x1Err: 'Please Fill this field',
         x2Err: 'Please Fill this field',
         x3Err: 'Please Fill this field',
      }
   }
   handleChange = (e) => {
      this.setState({
         [e.target.name]: e.target.value
      }, () => {
         if (this.state.x1 == '') {
            this.setState({ x1Err: 'Please Fill this field' })
         } else {
            this.setState({ x1Err: '' })
         }
         if (this.state.x2 == '') {
            this.setState({ x2Err: 'Please Fill this field' })
         } else {
            this.setState({ x2Err: '' })
         }
         if (this.state.x3 == '') {
            this.setState({ x3Err: 'Please Fill this field' })
         } else {
            this.setState({ x3Err: '' })
         }


         values = {
            x1: this.state.x1,
            x2: this.state.x2,
            x3: this.state.x3,

         }




      })

   }
   handleAccept =()=>{
      const {x1,x2,x3} = this.state;
      console.log(x1,'yeah')
      if(x1 != '' && x2 != '' && x3 != '' )
      {this.props.changeValue(4,values)}
    }
   render() {
      return (
         <section className="descriptions">




            <div className="descriptions_top">
               <h1>Descriptions</h1>
               <p>Define what will be delivered in total and per milestone</p>
            </div>

            <div className="descriptions_buget">
               <h2>BUDGET </h2>



            </div>


            <div className="descriptions_product">


               <div className="descriptions_end">
                  <h2>END PRODUCT DESCRIPTION</h2>
                  <div className="descriptions_end_back">
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  </div>
               </div>

               <a href="" class="button"> 10  Milestones </a>




               <section className="colleborate descriptions">
                  <div className="colleborate_top">
                     <div className="colleborate_box actives">
                        <h1>Sprint 11</h1>
                        <div className="colleborate_top_round">
                           <span>
                              <label className="fancy-checkbox ">
                                 <input type="checkbox" />
                                 <span className="checkmark"></span> </label>
                           </span>
                        </div>
                        <p>W23</p>
                     </div>
                     <div className="colleborate_box actives">
                        <h1>Sprint 11</h1>
                        <div className="colleborate_top_round">
                           <span>
                              <label className="fancy-checkbox">
                                 <input type="checkbox" />
                                 <span className="checkmark"></span> </label>
                           </span>
                        </div>
                        <p>W23</p>
                     </div>
                     <div className="colleborate_box ">
                        <h1>Sprint 11</h1>
                        <div className="colleborate_top_round">
                           <span>
                              <label className="fancy-checkbox">
                                 <input type="checkbox" />
                                 <span className="checkmark"></span> </label>
                           </span>
                        </div>
                        <p>W23</p>
                     </div>
                     <div className="colleborate_box ">
                        <h1>Sprint 11</h1>
                        <div className="colleborate_top_round">
                           <span>
                              <label className="fancy-checkbox">
                                 <input type="checkbox" />
                                 <span className="checkmark"></span> </label>
                           </span>
                        </div>
                        <p>W23</p>
                     </div>
                     <div className="colleborate_box ">
                        <h1>Sprint 11</h1>
                        <div className="colleborate_top_round">
                           <span>
                              <label className="fancy-checkbox">
                                 <input type="checkbox" />
                                 <span className="checkmark"></span> </label>
                           </span>
                        </div>
                        <p>W23</p>
                     </div>
                     <div className="colleborate_box ">
                        <h1>Sprint 11</h1>
                        <div className="colleborate_top_round">
                           <span>
                              <label className="fancy-checkbox">
                                 <input type="checkbox" />
                                 <span className="checkmark"></span> </label>
                           </span>
                        </div>
                        <p>W23</p>
                     </div>
                     <div className="colleborate_box ">
                        <h1>Sprint 11</h1>
                        <div className="colleborate_top_round">
                           <span>
                              <label className="fancy-checkbox">
                                 <input type="checkbox" />
                                 <span className="checkmark"></span> </label>
                           </span>
                        </div>
                        <p>W23</p>
                     </div>
                     <div className="colleborate_box">
                        <h1>Sprint 11</h1>
                        <div className="colleborate_top_round">
                           <span>
                              <label className="fancy-checkbox">
                                 <input type="checkbox" />
                                 <span className="checkmark"></span> </label>
                           </span>
                        </div>
                        <p>W23</p>
                     </div>
                     <div className="colleborate_box">
                        <h1>Sprint 11</h1>
                        <div className="colleborate_top_round">
                           <span>
                              <label className="fancy-checkbox">
                                 <input type="checkbox" />
                                 <span className="checkmark"></span> </label>
                           </span>
                        </div>
                        <p>W23</p>
                     </div>
                     <div className="colleborate_box">
                        <h1>Sprint 11</h1>
                        <div className="colleborate_top_round">
                           <span>
                              <label className="fancy-checkbox">
                                 <input type="checkbox" />
                                 <span className="checkmark"></span> </label>
                           </span>
                        </div>
                        <p>W23</p>
                     </div>
                     <div className="colleborate_box">
                        <h1>Sprint 11</h1>
                        <div className="colleborate_top_round">
                           <span>
                              <label className="fancy-checkbox">
                                 <input type="checkbox" />
                                 <span className="checkmark"></span> </label>
                           </span>
                        </div>
                        <p>W23</p>
                     </div>
                     <div className="colleborate_box">
                        <h1>Sprint 11</h1>
                        <div className="colleborate_top_round">
                           <span>
                              <label className="fancy-checkbox">
                                 <input type="checkbox" />
                                 <span className="checkmark"></span> </label>
                           </span>
                        </div>
                        <p>W23</p>
                     </div>
                     <div className="colleborate_box">
                        <h1>Sprint 11</h1>
                        <div className="colleborate_top_round">
                           <span>
                              <label className="fancy-checkbox">
                                 <input type="checkbox" />
                                 <span className="checkmark"></span> </label>
                           </span>
                        </div>
                        <p>W23</p>
                     </div>
                     <div className="colleborate_box">
                        <h1>Sprint 11</h1>
                        <div className="colleborate_top_round">
                           <span>
                              <label className="fancy-checkbox">
                                 <input type="checkbox" />
                                 <span className="checkmark"></span> </label>
                           </span>
                        </div>
                        <p>W23</p>
                     </div>
                     <div className="colleborate_box">
                        <h1>Sprint 11</h1>
                        <div className="colleborate_top_round">
                           <span>
                              <label className="fancy-checkbox">
                                 <input type="checkbox" />
                                 <span className="checkmark"></span> </label>
                           </span>
                        </div>
                        <p>W23</p>
                     </div>
                  </div>
               </section>

            </div>



            <div className="descriptions_milestone">
               <h2> MILESTONES DESCRIPTION</h2>
               <div className="descriptions_milestone_center">

                  <div className="descriptions_milestone_box">
                     <label>SPRINTS</label>
                     <p>1.</p>
                     <input type="text" name="x1" placeholder="07" value={this.state.x1} onChange={this.handleChange} />
                     <span style={{ color: 'red' }}>{this.state.x1Err}</span>
                  </div>

                  <div className="descriptions_milestone_box">
                     <label>MILESTONES NAME</label>
                     <input type="text" name="x2" placeholder="Milestone 01" value={this.state.x2} onChange={this.handleChange} />
                     <span style={{ color: 'red' }}>{this.state.x2Err}</span>
                     <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Tooltip text</span></div>

                  </div>

                  <div className="descriptions_milestone_box budget">
                     <label>MILESTONES BUDGET</label>
                     <input type="text" name="x3" placeholder="€5.000 (estimation based on sprints)" value={this.state.x3} onChange={this.handleChange} />
                     <span style={{ color: 'red' }}>{this.state.x3Err}</span>
                     <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Tooltip text</span></div>

                  </div>

                  <div className="descriptions_milestone_box date">
                     <label>END DATE </label>

                     <h4>00/00/000</h4>


                  </div>

                  <div className="descriptions_milestone_box date">
                     <label>END DATE</label>
                     <h4>00/00/000</h4>
                  </div>

                  <div className="clearfix"></div>


                  <div className="milestone_slider descriptions">
                     <div className="carousel-inner">
                        <div className="item ">

                           <p>
                              Aenean vulputate eleifend teeifend tellus. Aenean leo ligula, porttitor eu,
                              consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
                              in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus
                              varius laoreet. Quisque rutrum. Aenean imperdiet , feugiat a,
                              tellus. phasellus viverra nulla ut metus varius laoreet.
                                 </p>
                        </div>
                     </div>

                     <a className="left carousel-control" href="#myCarousel" data-slide="prev">

                     </a>
                     <a className="right carousel-control" href="#myCarousel" data-slide="next">

                     </a>
                  </div>
                  <a href="" class="button"> 7  SPRINTS </a>
               </div>

               <section className="colleborate milestone">
                  <div className="colleborate_top">
                     <div className="colleborate_box ">
                        <h1>Sprint 11</h1>
                        <div className="colleborate_top_round">
                           <span>
                              <label className="fancy-checkbox ">
                                 <input type="checkbox" />
                                 <span className="checkmark"></span> </label>
                           </span>
                        </div>
                        <p>W23</p>
                     </div>
                     <div className="colleborate_box ">
                        <h1>Sprint 11</h1>
                        <div className="colleborate_top_round">
                           <span>
                              <label className="fancy-checkbox">
                                 <input type="checkbox" />
                                 <span className="checkmark"></span> </label>
                           </span>
                        </div>
                        <p>W23</p>
                     </div>
                     <div className="colleborate_box ">
                        <h1>Sprint 11</h1>
                        <div className="colleborate_top_round">
                           <span>
                              <label className="fancy-checkbox">
                                 <input type="checkbox" />
                                 <span className="checkmark"></span> </label>
                           </span>
                        </div>
                        <p>W23</p>
                     </div>
                     <div className="colleborate_box ">
                        <h1>Sprint 11</h1>
                        <div className="colleborate_top_round">
                           <span>
                              <label className="fancy-checkbox">
                                 <input type="checkbox" />
                                 <span className="checkmark"></span> </label>
                           </span>
                        </div>
                        <p>W23</p>
                     </div>
                     <div className="colleborate_box ">
                        <h1>Sprint 11</h1>
                        <div className="colleborate_top_round">
                           <span>
                              <label className="fancy-checkbox">
                                 <input type="checkbox" />
                                 <span className="checkmark"></span> </label>
                           </span>
                        </div>
                        <p>W23</p>
                     </div>
                     <div className="colleborate_box ">
                        <h1>Sprint 11</h1>
                        <div className="colleborate_top_round">
                           <span>
                              <label className="fancy-checkbox">
                                 <input type="checkbox" />
                                 <span className="checkmark"></span> </label>
                           </span>
                        </div>
                        <p>W23</p>
                     </div>



                  </div>
               </section>


            </div>
            <a target="_blank" class="buttons" onClick={this.handleAccept}>Accept Descriptions<br /><span> Accept setup as the grounds on which to finalize parthnership</span></a>
         </section>
      );
   };
};

export default Description;
