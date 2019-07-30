import React, { Component } from 'react';
class BacklogSprint extends Component {
    selectId(value,en){
        this.props.selectedSpt(value)
    }
    render(){
       return( 
       <section class="colleborate">
            <div class="colleborate_top">   
                {this.props.data.map((items)=>
                
                <div class={"colleborate_box "+items.status} key={items.sprint_id} onClick={(value, event) => this.selectId(items.sprint_id, event)}>
                    <h1>Sprint {items.sprint_id}</h1>
                    <div class="colleborate_top_round">
                        <span>
                        <label class="fancy-checkbox">
                        <input type="checkbox" checkbox={items.status ? 'checkbox' : "disable"} />
                        <span class="checkmark"></span> </label>
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
