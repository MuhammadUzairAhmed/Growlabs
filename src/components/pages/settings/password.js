import React , {Component} from 'react'
class Bank extends Component
{
    constructor(props){
        super(props);
        this.state={
            currentPass:'',
            nexPass:'',
            confirmPass:'',
            
        }
    }
    handleChange = (e) => {
        this.setState({
           [e.target.name]: e.target.value
        })
     }
     handleBanner =(name)=>{
        this.setState({banner: name[0].acceptedFile})
         
     }
     handelVideo =(name)=>{
        this.setState({video: name[0].acceptedFile}) 
     }
     handleSave =()=>
     {
        var values ={
            currentPass:this.state.currentPass,
            nexPass:this.state.nexPass,
            confirmPass:this.state.confirmPass,
            
        }
        this.props.buttonActive()
        setTimeout(
            function(){this.props.getData(values)}.bind(this)
        ,15000)
      
     }
    render()

{
    return(
        <section class="">

       <div className="personal_main" onBlur={this.handleSave}>
           {/*2nd column*/}
                <div className="password_sec">
           <div className="feild">
                  <label>CURRENT PASSWORD</label>
                  <input onChange={this.handleChange} type="text" className={this.state.currentPass != '' ? 'active':''} name="currentPass" value={this.state.currentPass} placeholder="input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild">
                  <label>NEW PASSWORD</label>
                  <input onChange={this.handleChange} type="text" className={this.state.nexPass != '' ? 'active':''} name="nexPass" value={this.state.nexPass} placeholder="input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild">
                  <label>CONFIRM PASSWORD</label>
                  <input onChange={this.handleChange} type="text" className={this.state.confirmPass != '' ? 'active':''} name="confirmPass" value={this.state.confirmPass} placeholder="input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
    
{this.state.nexPass != '' && this.state.nexPass  == this.state.confirmPass && this.state.confirmPass != ''?
            <button color="primary">Request Approval</button>
:''}            </div>
            


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

export default Bank;
