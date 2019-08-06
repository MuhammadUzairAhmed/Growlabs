import React from 'react';
import { NavLink,  BrowserRouter, Route, Switch } from 'react-router-dom';
import LineChart from './../../components/pages/LineChart';
import CommitLineChart from './../pages/CommitLineChart';
import ProgressBars from './../pages/sidebarComponents/ProgressBars';
import StraightProgressBar from './../pages/sidebarComponents/StraightProgressBar';

const routes = [
    { path: '/statistics', name: 'Statistics', icon:'401382365'},
    { path: '/collaboration', name: 'Collaboration', icon:'401382288' },
    { path: '/backlog', name: 'Backlog', icon:'401385358' },
    { path: '/financial', name: 'Financial', icon:'401385359'},
    { path: '/files', name: 'Files', icon:'401385364'},
    { path: '/Governance', name: 'Governance', icon:'401385365' },
]

// Since this component is simple and static, there's no parent container for it.
const Sidebar = () => {
  return (
      <section className="sidebar ">
          <div className="score_section ">
              <div className="score ">
                  <img src="./assets/img/img_1.png" />
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
                          <td> < div className="line_chatw"><LineChart fillshadow={false} showDatalables={false} lineHeight={38} lineWidth={145}/></div></td>
                          <td style={{color:'#1E9D74'}}>32</td>
                      </tr>
                  </table>

                  <p style={{fontSize:'10px',color:'#64696D'}}>Velocity</p>
              </div>
              <div className="score ">
                  {/* <img src="./assets/img/img_4.png" /> */}
                  {/* <div class="row">
                      <div class="col-sm-6">6</div>
                      <div class="col-sm-6">6</div>
                  </div> */}
                  <table>
                      <tr>
                          <td><CommitLineChart /></td>
                          <td style={{color:'#4355C8'}}>16</td>
                      </tr>
                  </table>

                  <p style={{fontSize:'10px',color:'#64696D'}}>Commits</p>
              </div>
              <div className="score">
                 <StraightProgressBar dispStraightValue={75} percentage={75}/>
                  <p style={{fontSize:'10px',color:'#64696D'}}>Expenditure</p>
              </div>
          </div>
          <div className="menu ">
              <div className="jquery-accordion-menu">
                
                   
                  
                    {routes.map((links)=><NavLink key={links.name} to={links.path} activeClassName="active"><img src={"./assets/img/"+links.icon+".png"} /><span>{links.name}</span></NavLink>)}
                 
              </div>
          </div>
          <div className="logo_user ">
              <div className="logo_sec ">
                  <img src="./assets/img/logo.png" />
              </div>
          </div>
      </section>
    );
};

export default Sidebar;
