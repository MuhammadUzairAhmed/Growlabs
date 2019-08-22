import React, { Component } from 'react';
class BacklogSprint extends Component {
    selectId(value,en){
        this.props.selectedSpt(value)
    }
    render(){
       return( 
       <section className="colleborate">
            <div className="colleborate_top">   
                {this.props.data.map((items)=>
                
                <div className={"colleborate_box "+items.status} key={items.sprint_id} onClick={(value, event) => this.selectId(items.sprint_id, event)}>
                    <h1>Sprint {items.sprint_id}</h1>
                    <div className="colleborate_top_round">
                        <span>
                        <label className="fancy-checkbox">
                        <input type="checkbox" checkbox={items.status ? 'checkbox' : "disable"} />
                        <span className="checkmark"></span> </label>
                        </span>
                    </div>
                    <p>{items.weeks}</p>
                </div>
                )} 
            </div>
      </section>
      )
    }
}
export default BacklogSprint
