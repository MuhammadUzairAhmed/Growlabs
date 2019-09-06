import React, {Component} from 'react';
import CommitLineChart from '../CommitLineChart';
import ProgressBars from '../sidebarComponents/ProgressBars';
import StraightProgressBar from '../sidebarComponents/StraightProgressBar';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import 'rc-progress/assets/index.css';
import { Circle  } from 'rc-progress';

class ProjectReview extends Component
{
   constructor(props){
      super(props)
      this.state = {
         project:[
            {
               "id":"1",
               "name":"MobileAPP",
               "agency":"zepcom",
               "status":"process",
               "event":"live",
               "score":"86",
               "sprint":[
                  {"id":"2","week":"4","status":""},
                  {"id":"3","week":"6","status":"active"},
                  {"id":"5","week":"8","status":""},
               ],
               "labels":["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"],
               "fatchlist":["180", "180", "120", "160", "150", "130", "124", "170", "190", "128", "162", "160", "185", "110", "160", "170", "168", "140", "160", "130"]
            },
            {
               "id":"2",
               "name":"DesktopWeb",
               "agency":"Cloud",
               "status":"process",
               "event":"live",
               "score":"86",
               "sprint":[
                  {"id":"2","week":"4","status":""},
                  {"id":"3","week":"6","status":"active"},
                  {"id":"5","week":"8","status":""},
               ],
               "labels":["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"],
               "fatchlist":["180", "180", "120", "160", "150", "130", "124", "170", "190", "128", "162", "160", "185", "110", "160", "170", "168", "140", "160", "130"]
            }
         ]
      }
   }
   
    render()
    {

       if(this.state.project){
        
      return(
         <section>
            
         {this.state.project.map((items,index)=> 

            
    
            <div className="Addproject_box active">
               <div className="project_score">
                  <div className="score">
                        <div className="score_height ">
                           <Circle percent={items.score} gapDegree={138} gapPosition="bottom" strokeWidth="30" trailWidth="30"  strokeLinecap="square" />
                        </div>
                        <div className="scoreText"><h1>{items.score}</h1><p>Growlabs Score</p></div>
                  </div>
               </div>
               <div className="project_comt_expen">
                  <div className="project_comt">
                  <CommitLineChart data={items.fatchlist} xaxes={items.labels}  tension={1} color={'#4355C8'}/>
                 <span style={{color: '#1E9D74'}}>32</span>
                        <p style={{fontSize: '10px', color: '#64696D'}}>Velocity</p>
                  </div>
                  <div className="project_expen">
                     <StraightProgressBar dispStraightValue={75} percentage={75}/>
                     <p style={{fontSize: '10px', color: '#64696D'}}>Expenditure</p>
                  </div>
               </div>
               <div className="project_points">
                  <table>
                     <tr>
                        <td><ProgressBars dataValue={45} textValue={`456`} dispValue={`Points`}/></td>
                        <td><ProgressBars dataValue={67} textValue={`03`} dispValue={`Days`}/></td>
                        <td><ProgressBars dataValue={20} textValue={`07`} dispValue={`Sprint`}/></td>
                        <td><ProgressBars dataValue={95} textValue={`01`} dispValue={`Milestone`}/></td>
                     </tr>
                  </table>
               </div>
               <div className="project_velocity">
                  <CommitLineChart tension={1} xaxes={items.labels} data={items.fatchlist} color={'#1E9D74'}/>
                  <span style={{color: '#1E9D74'}}>32</span>
                  <p style={{fontSize: '10px', color: '#64696D'}}>Velocity</p>
               </div>
               <div className="project_sprints">
                  <div className="colleborate_top">
                     {items.sprint.map((data,index) =>
                        <div className={"colleborate_box "} key={index}>
                        <h1>Sprint {data.id}</h1>
                        <div className="colleborate_top_round" className={data.id}>
                           <span>
                              <label className="fancy-checkbox">
                              <input type="checkbox" checked={data.status == 'active' ? 'checked':''} />
                              <span className="checkmark"></span> </label>
                           </span>
                        </div>
                        <p>W{data.week}</p>
                        </div>
                     )}
                  </div>
               </div>
               <div className="project_plussec">
                  <button type="button">DEAL</button>
                  <button type="button">INVITED</button>
                  <button type="button">LIVE</button>
                  <button type="button">ACHIVED!</button>
                  <button type="button">REJECTED</button>
                  <div className="project_namesec">
                     <div className="number">{items.id}</div>
                     <div className="name">
                        <h1>{items.name}</h1>
                     </div>
                     <div className="name_sub">
                        <h2>{items.agency}</h2>
                     </div>
                  </div>
            </div>
         </div>
         )}
      <div className="Addproject_box add">
        <div className="project_score">
           
        </div>
        <div className="project_comt_expen">
           <div className="project_comt">
              
           </div>
           <div className="project_expen">
             
           </div>
        </div>
        <div className="project_points">
           
        </div>
        <div className="project_velocity">
          
        </div>
        <div className="project_sprints">
           
        </div>
        <div className="project_plussec">
          
           <div className="project_namesec">
           <div className="project_plussing"></div>
           </div>
        </div>
     </div>

     </section>



        )
      }else{
         return(
            <Loader type="Oval" color="white" height="50" width="50" className="loading" />
        )
      }

    }
}

export default ProjectReview;