import React, {Component} from 'react';
import PERSONAL from './../personal'


class Personal extends Component
{
    
    //  componentWillReceiveProps(nextprops)
    //  {
    //     fetch("https://virtserver.swaggerhub.com/GROW-Labs/GROWLabs_API/1.0.0/api_projects/personal")
    //     .then(res => res)
    //     .then(data =>
    //        console.log(data,'xyz')
    //     );
    //  }
     handleSave =(values)=>
     {
         console.log('forClient',values)
         
         
        //  fetch('https://virtserver.swaggerhub.com/GROW-Labs/GROWLabs_API/1.0.0/api_projects/personal', {
        //     method: 'post',
        //     body: JSON.stringify(values)
        //   }).then((response) => {
        //      console.log(response,"resData")
        //     return response.json();
        //   }).then((data)=> {
        //     console.log('Created List:', data);
        //     alert('successfully inserted')
        //   });


     }
    render()
    {
        
        
        return(
            <PERSONAL getData={this.handleSave}/>
    )
}
}
export default Personal