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
            status:false,
            delayFor:true,
            active:false
        }
    }
    componentWillReceiveProps(nextprops)
    {
       fetch("https://virtserver.swaggerhub.com/GROW-Labs/GROWLabs_API/1.0.0/api_projects/agency_operations")
       .then(res => res)
       .then(data =>
          console.log(data,'xyz')
       );
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
    handleSave =()=>
     {
        var values ={
            password:this.state.newData.password,
            newpass:this.state.newData.newpass,
            confirm:this.state.newData.confirm,
        }
        this.falseData()
        setTimeout(
           function(){this.getData(values)}.bind(this)
        ,15000)

      
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

    getData(values){
     if(this.state.delayFor){
           fetch('https://virtserver.swaggerhub.com/GROW-Labs/GROWLabs_API/1.0.0/api_projects/agency_operations', {
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
    render()
    {
        return(
            <section class="">
                <div className="save_button">
                    <button className="one" onClick={this.stopPostData.bind(this)}>Cancel</button> 
                    <label class={this.state.active?'active switch':'switch'}>
                    <input type="checkbox" checked={this.state.active?'checked':''}/>
                            <span class="slider round">Save Chages</span>
                    </label>
                </div>
            <div className="personal_main" onBlur={this.handleSave}>
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
         
     {/* {this.state.nexPass != '' && this.state.nexPass  == this.state.confirmPass && this.state.confirmPass != ''?
                 <button color="primary" onClick={this.handleSave}>Request Approval</button>
     :''}           */}
       </div>
                 
     
     
                 <div className="Button_sec">
                    <button color="primary">Request Approval</button>
                    <button className="secd_button">Add google Authenticator</button>
                  <p>Request Account Removal</p>
                    </div>
     
     
     
     
     
            </div>
            </section>
        )
    }
}
export default PASSWORD;