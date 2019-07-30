import React, { Component } from 'react';
class BacklogCategory extends Component {
    selectId(values,en){
        this.props.selectedCat(values)
    }
    render(){
        return(
        <ul class="ui-tabs-nav">
            {this.props.data.map((items)=> <li key={items} onClick={(value, event) => this.selectId(items, event)}><a>{items}</a></li>)}
          <li><a><img src="./assets/img/Group.png" /></a></li>
        </ul>
        )
    }
}
export default BacklogCategory
