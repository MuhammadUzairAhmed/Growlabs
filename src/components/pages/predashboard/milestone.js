import React, { Component } from 'react';

class Milestone extends Component {
    render(){
      return (
        <section className="timeframe">
               
			   <div className="timeframe_top">
                  <h1>Milestones</h1> 
                  <p>Determine Sprints, timeframe, and budget</p>
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
			    <a href=""className="button"> 3  Milestones </a>
			   
			  
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
					 <img src="images/1024px-Infobox_info_icon.svg Copy 4.png" />
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
				  <label>MILESTONES</label>
				  <p>02.</p>
				 </div>
			     
				  <div className="timeframe_secound">
				    <label>NUMBER OF SPRINTS</label>
					 <input type="text" name="fname" placeholder="05" />
				  </div>
			   
			      <div className="timeframe_third">
				    <label>MILESTONES DESCRIPTION</label>
					 <input type="text" name="fname" placeholder="Milestones 01" />
					 <img src="images/1024px-Infobox_info_icon.svg Copy 4.png" />
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
				  <label>MILESTONES</label>
				  <p>03.</p>
				 </div>
			     
				  <div className="timeframe_secound">
				    <label>NUMBER OF SPRINTS</label>
					 <input type="text" name="fname" placeholder="05" />
				  </div>
			   
			      <div className="timeframe_third">
				    <label>MILESTONES DESCRIPTION</label>
					 <input type="text" name="fname" placeholder="Milestones 01" />
					 <img src="images/1024px-Infobox_info_icon.svg Copy 4.png" />
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
			   
			   
			   <div className="timeframe_add">
			   
			     <div className="timeframe_add_number">
				  <p>04.</p>
				 </div>
			   
			     <div className="timeframe_add_plus">
				   <img src="images/plus.png" />
				   <p>New Milestone</p>
				 </div>
			   </div>
			   </div>
			   <div className="timeframe_calander">
			   </div>
            </section>
      );  
    };  
  };
  
  export default Milestone;
  