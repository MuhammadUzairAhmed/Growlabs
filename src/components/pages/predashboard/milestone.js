import React, { Component } from 'react';

class Milestone extends Component {
    render(){
      return (
        <section className="timeframe">
               
			   <div className="timeframe_top">
                  <h1>Milestones</h1> 
                  <p>Determine Sprints, timeframe, and budget</p>
               </div>
			   
			  

			  <div className="timeframe_calander">
			  <h2>WEEKS IN SPRINT</h2>
			   <h1>Friday 10th of april,2019</h1>
			   </div>   


			    <div className="timeframe_tabs">
			   
			     <h2>WEEKS IN SPRINT</h2>
				 
				 <ul>
				  <li className="active"> 1 </li>
				  <li> 2 </li>
				  <li> 3 </li>
				 </ul>
			   
			   </div>
			   
			   
			   <div className="timeframe_milestones">
			    <h2>MILESTONES</h2>
			    <a href=""className="button"> 44  SPRINTS </a>
			   

				<div className="timeframe_bar">
      
				<div className="timeframe_bar_persant"> <p>20  SPRINTS</p> </div>
				<p>24  SPRINTS</p>
               </div>
			  
			   <div className="timeframe_box">
			   
			     <div className="timeframe_first">
				  <label>MILESTONES</label>
				  <p>01.</p>
				 </div>
			     
				  <div className="timeframe_secound">
				    <label>NUMBER OF SPRINTS</label>
					 <input type="text" name="fname" placeholder="05" />
				  </div>
			   
			      <div className="timeframe_third">
				    <label>MILESTONES DESCRIPTION</label>
					 <input type="text" name="fname" placeholder="Milestones 01" />
					

				  </div>
			   
			      <div className="timeframe_for">
				    <label>START DATE</label>
					 <p>00/00/000</p>
				  </div>
			   
			      <div className="timeframe_five">
				    <label>END DATE</label>
					<p>00/00/000</p>
				  </div>
			   
			   
			   </div>
			   
			   <div className="timeframe_box">
			   
			     <div className="timeframe_first">
				  <label></label>
				  <p>02.</p>
				 </div>
			     
				  <div className="timeframe_secound">
				    <label>NUMBER OF SPRINTS</label>
					 <input type="text" name="fname" placeholder="05" />
				  </div>
			   
			      <div className="timeframe_third">
				    <label>MILESTONES DESCRIPTION</label>
					 <input type="text" name="fname" placeholder="Milestones 01" />
					
				  </div>
			   
			      <div className="timeframe_for">
				    <label>START DATE</label>
					 <p>00/00/000</p>
				  </div>
			   
			      <div className="timeframe_five">
				    <label>END DATE</label>
					<p>00/00/000</p>
				  </div>
			   
			   
			   </div>
			   <div className="timeframe_box">
			   
			     <div className="timeframe_first">
				  <label></label>
				  <p>03.</p>
				 </div>
			     
				  <div className="timeframe_secound">
				    <label>NUMBER OF SPRINTS</label>
					 <input type="text" name="fname" placeholder="05" />
				  </div>
			   
			      <div className="timeframe_third">
				    <label>MILESTONES DESCRIPTION</label>
					 <input type="text" name="fname" placeholder="Milestones 01" />
					
				  </div>
			   
			      <div className="timeframe_for">
				    <label>START DATE</label>
					 <p>00/00/000</p>
				  </div>
			   
			      <div className="timeframe_five">
				    <label>END DATE</label>
					 <p>00/00/000</p>
				  </div>
			   
			   
			   </div>

			   <div className="timeframe_box add">
			   
			   <div className="timeframe_first">
				<label></label>
				<p>04.</p>
			   </div>
			   
			   <div className="timeframe_add">
			   
			  
			 
			   <div className="timeframe_add_plus">
				 <img src="./assets/img/plus.png" />
				 <p>New Milestone</p>
			   </div>
			 </div>
			 
			
			 
			 </div>



			   
			   
			 
			   </div>
			   <a target="_blank" href="#" class="buttons">Accept Milestone<br /><span> Accept setup as the grounds on which to finalize parthnership</span></a>
            </section>
      );  
    };  
  };
  
  export default Milestone;
  