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

        var values ={
            proposal_id:id[0],
            reason:this.state.currentReview,
            example:this.state.specificExample
        }
        console.log(values,"umnatch data")
        fetch('https://virtserver.swaggerhub.com/GROW-Labs/GROWLabs_API/1.0.0/api_projects/unmatch',{
        method:'POST',
        body: JSON.stringify(values)
      }).then(res=>console.log('unmatchPostData',res))
        // this.props.deleteUnmatchData(values);
     console.log(id,'idsss')
        this.props.deleteUnmatchData(id,this.state.currentReview,this.state.specificExample);
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