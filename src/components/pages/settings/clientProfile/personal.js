import React, {Component} from 'react';
import PERSONAL from './../personal'


class Personal extends Component
{
    
    constructor(props){
        super(props);
        this.state={
            delayFor:true,
            active:false
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
            fetch('https://virtserver.swaggerhub.com/GROW-Labs/GROWLabs_API/1.0.0/api_projects/personal', {
               method: 'post',
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
                    <span class="slider round">Save Chages</span>
                    </label>
                </div>
                <PERSONAL buttonActive={this.falseData.bind(this)}   getData={this.handleSave}/>
            </div>
    )
}
}
export default Personal