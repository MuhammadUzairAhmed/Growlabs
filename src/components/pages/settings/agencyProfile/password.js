import React , {Component} from 'react';
import Password from './../password'
class PASSWORD extends Component
{
    constructor(props){
        super(props)
        this.state = {
            oldData : {
                password: "testing",
                newpass:"testing",
                confirm:"testing"
            },
            newData : {
                password:'',
                newpass:'',
                confirm:''
            },
            status:false
        }
    }
    buttonFunction(){
        this.setState({status:false,newData : {
            password:'',
            newpass:'',
            confirm:''
        }})
    }
    handleChange(x, state){

        this.setState({
            status:true,
            newData: { ...this.state.newData, [state]:x.target.value } 
        })
        console.log(this.state)
    }
    render()
    {
        return(
            <section class="">
                <button onClick={this.buttonFunction.bind(this)}> cancel</button>
            <div className="personal_main">
                {/*2nd column*/}
                     <div className="password_sec">
                <div className="feild">
                       <label>CURRENT PASSWORD</label>
                       <input onChange={(x)=> this.handleChange(x,'password')} type="text" name="currentPass" value={this.state.status ? this.state.newData.password : this.state.oldData.password} placeholder="input" />
                       <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
     
                 </div>
                 <div className="feild">
                       <label>NEW PASSWORD</label>
                       <input onChange={(x)=> this.handleChange(x,'newpass')} type="text" name="nexPass" value={this.state.status ? this.state.newData.newpass : this.state.oldData.newpass} placeholder="input" />
                       <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
     
                 </div>
                 <div className="feild">
                       <label>CONFIRM PASSWORD</label>
                       <input onChange={(x)=> this.handleChange(x,'confirm')} type="text" name="confirmPass" value={this.state.status ? this.state.newData.confirm : this.state.oldData.confirm} placeholder="input" />
                       <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
     
                 </div>
         
     {this.state.nexPass != '' && this.state.nexPass  == this.state.confirmPass && this.state.confirmPass != ''?
                 <button color="primary" onClick={this.handleSave}>Request Approval</button>
     :''}            </div>
                 
     
     
                 <div className="Button_sec">
                    <button color="primary" onClick={this.handleSave}>Request Approval</button>
                    <button className="secd_button">Add google Authenticator</button>
                  <p>Request Account Removal</p>
                    </div>
     
     
     
     
     
            </div>
            </section>
        )
    }
}
export default PASSWORD;