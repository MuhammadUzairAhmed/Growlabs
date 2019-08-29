import React , {Component} from 'react';
import Password from './../password'
class PASSWORD extends Component
{
    handleSave =(values)=>{
        console.log(values,'pass')
    }
    render()
    {
        return(
            <Password getData={this.handleSave}/>
        )
    }
}
export default PASSWORD;