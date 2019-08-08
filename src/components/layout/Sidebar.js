
import 'rc-progress/assets/index.css';
import React, { Component } from 'react';
import { NavLink,  BrowserRouter, Route, Switch } from 'react-router-dom';
import LineChart from './../../components/pages/LineChart';
import {connect} from "react-redux";
import { itemsFetchData} from '../../actions/fuelSavingsActions';
import CommitLineChart from './../pages/CommitLineChart';
import ProgressBars from './../pages/sidebarComponents/ProgressBars';
import StraightProgressBar from './../pages/sidebarComponents/StraightProgressBar';
import { Circle  } from 'rc-progress';

const routes = [
    { path: '/statistics', name: 'Statistics', icon:'401382365'},
    { path: '/collaboration', name: 'Collaboration', icon:'401382288' },
    { path: '/backlog', name: 'Backlog', icon:'401385358' },
    { path: '/financial', name: 'Financial', icon:'401385359'},
    { path: '/files', name: 'Files', icon:'401385364'},
    { path: '/Governance', name: 'Governance', icon:'401385365' },
]
const tension =  {tension: 0}
const tnesion2 = {}
// Since this component is simple and static, there's no parent container for it.

class Sidebar extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            fetchListData:[],
            fetchLineData:[],
            xAxisLabels:[],
            count:1,
            height:'',
            minHeight:'',
            score:'86'
        }
    }
    componentDidMount()
    {
        this.props.fetchData('https://demo9810618.mockable.io/fetchSprintData', 'CHART');

    }
componentWillReceiveProps(nextprops)
{
    console.log('next ',nextprops)
    if (this.state.count === 1) {
        for (var i = 0; i < nextprops.Chart.length; i++) {

          this.state.fetchListData.push(nextprops.Chart[i].charts.listData)
          this.state.fetchLineData.push(nextprops.Chart[i].charts.lineData)
          this.state.xAxisLabels.push(nextprops.Chart[i].sprintId)

          // this.setState({smallData:[...this.state.smallData,nextprops.Chart[i].charts.smallBarData]})
        }
        this.setState({ count: 2 })
      }
}
    refCallback = element => {
        if (element) {
            var elmnt = document.querySelector(".center_part");
            setTimeout(() => {
                this.setState({
                    height:elmnt.clientHeight
                })
            }, 500)
        }
    };
    render() {
        let styleHeight = {
            minHeight: this.state.height
        }

        return (

            <section className="sidebar " style={styleHeight}>
                <div className="score_section ">
                    <div className="score ">
                         <Circle percent={this.state.score} gapDegree={140} gapPosition="bottom" strokeWidth="30" trailWidth="30"  strokeLinecap="square" />
                        <div className="scoreText"><h1>{this.state.score}</h1><p>Growlabs Score</p></div>
                    </div>
                    <div className="score ">
                        {/* <img src="./assets/img/img_2.png" /> */}
                        <table>
                            <tr>
                                <td>
                                    <ProgressBars dataValue={45} textValue={`456`} dispValue={`Points`}/>

                                </td>
                                <td>
                                    <ProgressBars dataValue={67} textValue={`03`} dispValue={`Days`}/>

                                </td>
                                <td>
                                    <ProgressBars dataValue={20} textValue={`07`} dispValue={`Sprint`}/>

                                </td>
                                <td>
                                    <ProgressBars dataValue={95} textValue={`01`} dispValue={`Milestone`}/>

                                </td>
                            </tr>
                        </table>

                    </div>
                    <div className="score ">
                        {/* linchart */}
                        {/* <h2>Line chart</h2>
                  <img src="./assets/img/img_3.png" /> */}
                        <table>
                            <tr>
                                <td>
                                    < div className="line_chatw"><CommitLineChart xaxes={this.state.xAxisLabels}
                                                                                  data={this.state.fetchLineData}
                                                                                  tension={tnesion2} color={'#1E9D74'}/>
                                    </div>
                                </td>
                                <td style={{color: '#1E9D74'}}>32</td>
                            </tr>
                        </table>

                        <p style={{fontSize: '10px', color: '#64696D'}}>Velocity</p>
                    </div>
                    <div className="score ">
                        {/* <img src="./assets/img/img_4.png" /> */}
                        {/* <div class="row">
                      <div class="col-sm-6">6</div>
                      <div class="col-sm-6">6</div>
                  </div> */}
                        <table>
                            <tr>
                                <td><CommitLineChart data={this.state.fetchListData} xaxes={this.state.xAxisLabels}
                                                     tension={tension} color={'#4355C8'}/></td>
                                <td style={{color: '#4355C8'}}>16</td>
                            </tr>
                        </table>

                        <p style={{fontSize: '10px', color: '#64696D'}}>Commits</p>
                    </div>
                    <div className="score">
                        <StraightProgressBar dispStraightValue={75} percentage={75}/>
                        <p style={{fontSize: '10px', color: '#64696D'}}>Expenditure</p>
                    </div>
                </div>
                <div className="menu ">
                    <div className="jquery-accordion-menu">


                        {routes.map((links) => <NavLink key={links.name} to={links.path} activeClassName="active"><img
                            src={"./assets/img/" + links.icon + ".png"}/><span>{links.name}</span></NavLink>)}

                    </div>
                </div>
                <div className="logo_user ">
                    <div className="logo_sec ">
                        <img src="./assets/img/logo.png"/>
                    </div>
                </div>
            </section>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchData: (url, action) => dispatch(itemsFetchData(url, action)),
  })
const mapStateToProps = state => ({
    // chartValues: state.fuelSavings.chartValues,
    Chart: state.fuelSavings.CHART,
  })
export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);

