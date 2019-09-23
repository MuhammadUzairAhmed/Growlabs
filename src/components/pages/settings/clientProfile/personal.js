import React, {Component} from 'react';
import PERSONAL from './../personal'


class Personal extends Component
{
    
    constructor(props){
        super(props);
        this.state={
            delayFor:true,
            active:false,
            dntShow:false,
        }
    }
    
    componentWillReceiveProps(nextprops)
    {
       fetch("https://virtserver.swaggerhub.com/GROW-Labs/GROWLabs_API/1.0.0/api_projects/personal")
       .then(res => res)
       .then(data =>
          console.log(data,'xyz')
       );
    }

     handleSave =(values)=>
     {
        if(this.state.delayFor){
            fetch('http://localhost/growlabs/api_projects/personal', {
              method: 'post',
              headers: {'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMTA1IiwidXNlcl9lbWFpbCI6InRlc3Rjb21wYW55QGdyb3dsYWJzLnRlY2giLCJleHBpcmF0aW9uIjoxNTY5MzkwOTkyLCJzZWNyZXQiOiIwMjIxOWE2OWU4MjhhZDY2OTNiMDc3ZDExMzQ0Mzk3ZTY5MTUxMGQ2MGUyMDRkNjFkNjJjYzdhYWJlODIyN2NmNjhkMmZkMGM0ZjllOWIzNDZkM2YwYjU2ZDc0YTZmMGI1M2M3YWQ2YTIzOWNlYzk1NWRhYTJkZWJkNTBkMjdkMCJ9.ePj6Wnt3slJA6lNMCt8s68VmsVKGyOlSe0BhiC6SZ9s'},
              body: JSON.stringify(values)
            }).then((response) => {
               console.log(response,"resData")
               return response.json();
            }).then((data)=> {
               console.log('Created List:', data);
               //alert('as')
            });
         
            
         }


     }
     stopPostData(){
      this.setState({
         dntShow:true,
         delayFor:false,
         active:false
        })
     }
     falseData(){
        this.setState({
         delayFor:true,
         active:true
        })
     }

    render()
    {
        
        
        return(
            <div>
                <div className="save_button">
                    <button className="one" onClick={this.stopPostData.bind(this)}>Cancel</button> 
                    <label class={this.state.active?'active switch':'switch'}>
                    <input type="checkbox" checked={this.state.active?'checked':''}/>
                    <span class="slider round">Save Changes</span>
                    </label>
                </div>
                <PERSONAL projectType=''  activeAdditional='' buttonActive={this.falseData.bind(this)} dntShow={this.state.dntShow}  getData={this.handleSave} currentPageStatus='' sendInfo=''/>
            </div>
    )
}
}
export default Personal
