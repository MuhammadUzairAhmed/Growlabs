import React, {Component} from 'react';
import PERSONAL from './../personal'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';


class Personal extends Component
{
    
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
         
         
         fetch('https://virtserver.swaggerhub.com/GROW-Labs/GROWLabs_API/1.0.0/api_projects/personal', {
            method: 'post',
            body: JSON.stringify(values)
          }).then((response) => {
             console.log(response,"resData")
            return response.json();
          }).then((data)=> {
            console.log('Created List:', data);
            alert('successfully inserted')
          });


     }
     addInfo(){
      this.props.activeAdditional()
     }
    render()
    {
        
        const from = new Date(2017, 3, 2)
        const to =new Date(2017, 3, 12)
        
        return(
            <div>
            <PERSONAL getData={this.handleSave} currentPageStatus={this.props.projectType} sendInfo={this.addInfo.bind(this)}/>
            {/* <DayPicker 
            initialMonth={new Date(2017  , 3)}
            selectedDays={[from, {from, to}]}
            /> */}
    </div>
    
    )
}
}
export default Personal