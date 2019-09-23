import React, { Component } from 'react';
import RangeSlider from '../governanace/contractComponents/RangeSlider';

var values;
var sprntArr = [];
var count = 0;
var counting = 0;
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
         actDiv: false,
         sprintId: 1,
         activeSEC: 'animations-check',
         miledata: []
      }
   }
   componentDidMount() {
      fetch('https://virtserver.swaggerhub.com/GROW-Labs/GROWLabs_API/1.0.0/api_calibration/descriptions')
      .then(res => res.json())
      .then(data => console.log('resTechData', data))
      sprntArr = [];
      if (this.props.mileStonedata.data != null) { this.setState({ miledata: this.props.mileStonedata.data }) }

   }
   componentWillReceiveProps(nextprops) {
      console.log('wilrecieveProps')
      if (nextprops.mileStonedata) {
         console.log(nextprops.mileStonedata, 'mileStonedata')
         this.setState({ miledata: nextprops.mileStonedata.data }, () => {
            console.log(this.state.miledata, 'miledata')
            if (this.state.miledata) {
               this.setState({ x2: this.state.miledata[0].input2, x3: this.state.miledata[0].MSBudget })
               if (count == 0) {
                  for (var i = 0; i < this.state.miledata[0].input1; i++) {
                     sprntArr.push(i)

                  }
                  count++;
               }
               console.log(sprntArr, 'nextprops')
            }
         })
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
   handleAccept = () => {
      const { x1, x2, x3 } = this.state;
      console.log(x1, 'yeah')
      var postalues = {
         description: '',
         milestones: this.state.miledata
      }
      fetch('https://virtserver.swaggerhub.com/GROW-Labs/GROWLabs_API/1.0.0/api_calibration/descriptions', {
         method: 'POST',
         body: JSON.stringify(postalues)
      }).then(res => console.log('postData', res))
      this.setState({ actDiv: true }, () => {
         setTimeout(() => {
            this.props.changeValue(4, values)
         }, 1000);
      })

   }
   sprintClicked = (id, key) => {
      sprntArr = [];
      var output = this.state.miledata.find((item) => {
         return item.userd == id
      })
      for (var i = 0; i < output.input1; i++) {
         sprntArr.push(i)
      }
      setTimeout(() => {
         this.setState({
            sprintId: id, activeSEC: 'animations-disable',

            data: this.state.miledata.filter(item => {

               if (key == 'next') {
                  if (item['userd'] == id - 1) {
                     item['status'] = true;
                     return item
                  }
               } else {
                  if (item['userd'] >= id) {
                     item['status'] = false;
                     return item
                  }
               }

               return item;
            }),
            x2: output.input2, x3: output.MSBudget,
         }, () => {
            console.log(this.state.sprintId, 'sprrn')
         })
      }, 0);
   }
   UpdateInput = (id, key) => {

      this.setState({
         data: this.state.miledata.filter(item => {
            if (item['userd'] == id) {
               if (key == 'mName') {
                  item['input2'] = this.state.x2;
               }
               else {
                  item['MSBudget'] = this.state.x3;
               }
               return item
            }
            return item;
         })
      })
   }
   render() {
      counting = 0;
      if (this.state.miledata) {
         this.state.miledata.map((item) => {
            if (item.input2 == '' || item.MSBudget == '') {
               counting++;
            }
         })
      }
      console.log(counting, 'countingStart')
      console.log(this.state.miledata, 'miledatas')
      return (
         <section className={this.state.actDiv ? "descriptions animations-disable" : "descriptions animations-check"}>




            <div className="descriptions_top">
               <h1>Descriptions</h1>
               <p>Define what will be delivered in total and per milestone</p>
            </div>

            <div className="descriptions_buget">
               <h2>BUDGET </h2>
               <div className="form-row" id="counter">
                  <div className="price-slider">
                     <div id="slider"></div>
                     <div className="ps-slide-col">
                        <RangeSlider range={2000} />
                     </div>
                  </div>
               </div>


            </div>


            <div className="descriptions_product">


               <div className="descriptions_end">
                  <h2>END PRODUCT DESCRIPTION</h2>
                  <div className="descriptions_end_back">
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  </div>
               </div>

               <a href="" class="button"> {this.props.mileStonedata ? this.props.mileStonedata.weeks : 'No'}  Milestones </a>




               <section className="colleborate descriptions">
                  <div className="colleborate_top">
                     {/* <div className="colleborate_box actives">
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
                     </div> */}
                     {this.state.miledata && this.state.miledata.map((item) => {
                        return <div className="colleborate_box actives" key={item.id}>
                           <h1>Sprint {item.userd}</h1>
                           <div className="colleborate_top_round">
                              <span>
                                 <label className="fancy-checkbox">
                                    {/* <input type="checkbox"/> */}
                                    <input type="" />
                                    <span className="checkmark" style={{ background: item.userd == this.state.sprintId && item.status == false ? '#a9a9a9' : item.status == true ? '#19D192' : '' }}></span> </label>
                              </span>
                           </div>
                           <p>W23</p>
                        </div>
                     })
                     }
                  </div>
               </section>

            </div>



            <div className="descriptions_milestone">
               <h2> MILESTONES DESCRIPTION</h2>

               {this.state.sprintId && this.state.miledata ? this.state.miledata.map((item) => {

                  return this.state.sprintId == item.userd ? <div>
                     <a className="left carousel-control" href="#myCarousel" data-slide="prev" onClick={() => this.sprintClicked(this.state.sprintId - 1, 'prev')}> </a>
                     <a className="right carousel-control" data-slide="next" onClick={() => this.sprintClicked(this.state.sprintId + 1, 'next')}></a>
                     <div className={`descriptions_milestone_center ${this.state.activeSEC}`} >

                        <div className="descriptions_milestone_box">
                           <label>SPRINTS</label>
                           <p>{item.userd}.</p>
                           <input type="text" name="x1" placeholder="07" value={item.input1} readOnly />
                        </div>

                        <div className="descriptions_milestone_box">
                           <label>MILESTONES NAME</label>
                           <input type="text" name="x2" placeholder="Milestone 01" value={this.state.x2} onInput={this.handleChange} onChange={() => this.UpdateInput(item.userd, 'mName')} />
                           {/* <span style={{ color: 'red' }}>{this.state.x2Err}</span> */}
                           <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext" >Tooltip text</span></div>

                        </div>

                        <div className="descriptions_milestone_box budget">
                           <label>MILESTONES BUDGET</label>
                           <input type="text" name="x3" placeholder="€5.000 (estimation based on sprints)" value={this.state.x3} onInput={this.handleChange} onChange={() => this.UpdateInput(item.userd, 'MBudget')} />
                           {/* <span style={{ color: 'red' }}>{this.state.x3Err}</span> */}
                           <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Tooltip text</span></div>

                        </div>

                        <div className="descriptions_milestone_box date">
                           <label>START DATE </label>
                           <h4>{item.startDate[4]}{item.startDate[5]}{item.startDate[6]}/{item.startDate[8]}{item.startDate[9]}/{item.startDate[11]}{item.startDate[12]}{item.startDate[13]}{item.startDate[14]}</h4>
				
                         


                        </div>

                        <div className="descriptions_milestone_box date">
                           <label>END DATE</label>
                           <h4>{item.EndTime[4]}{item.EndTime[5]}{item.EndTime[6]}/{item.EndTime[8]}{item.EndTime[9]}/{item.EndTime[11]}{item.EndTime[12]}{item.EndTime[13]}{item.EndTime[14]}</h4>
				
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


                        </div>
                        <a href="" class="button"> {item.input1}  SPRINTS </a>
                     </div>

                     <section className="colleborate milestone">
                        <div className="colleborate_top">
                           {sprntArr.map((item) => {
                              return <div className="colleborate_box" key={item}>
                                 <h1>Sprint {item}</h1>
                                 <div className="colleborate_top_round">
                                    <span>
                                       <label className="fancy-checkbox">
                                          <input type="checkbox" />
                                          <span className="checkmark"></span> </label>
                                    </span>
                                 </div>
                                 <p>W{item}</p>
                              </div>
                           }
                           )}
                        </div>
                     </section>
                  </div>
                     : ''
               }) : ''}
            </div>

            {counting == 0 ? <a target="_blank" class="buttons" onClick={this.handleAccept}>Accept Descriptions<br /><span> Accept setup as the grounds on which to finalize parthnership</span></a>
               : <a target="_blank" class="buttons" style={{ background: `#d4d9dd` }}>Accept Descriptions<br /><span> Accept setup as the grounds on which to finalize parthnership</span></a>}
         </section>
      );
   };
};

export default Description;
