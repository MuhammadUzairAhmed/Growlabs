import React, { Component } from 'react';
class Unmatch extends Component {
    constructor(props){
        super(props)
        this.state = {
            review:['Bad Communication','Unacceptable budget','Unacceptable timeline','Untrustworthy','To few reviews'],
            specificExample: '',
            currentReview:''
        }
    }
    deleteMatch(id){
        this.props.deleteUnmatchData(id);
    }
    collectReview(x){
        this.setState({
            currentReview:x.target.innerText
        })
    }
    changeCummincation(x){
        this.setState({
            specificExample:x.target.value
        })
    }
    render(){
        return(
            <div class="unmatchForm">
                <h1 > Unmatch [Agency]</h1>   
                <button class="cancel_but" color="primary" onClick={this.props.closePopup}>x</button>
                <ul onClick={this.collectReview.bind(this)}>
                    {this.state.review.map((items,index)=> 
                        <li key={index} class={this.state.currentReview == items ? 'active':''}>{items}</li>    
                    )}
                </ul>
                <p>SPECIFIC EXAMPLE</p>
                <textarea onChange={this.changeCummincation.bind(this)}>Not clear in communication</textarea>
                <button  onClick={() => this.deleteMatch(this.props.id)}>UNMATCH WITH AGENCY</button>
                <small>Please note that this action is definative and so can not be undone.</small>
            </div>
        )
    }
}

export default Unmatch;
  