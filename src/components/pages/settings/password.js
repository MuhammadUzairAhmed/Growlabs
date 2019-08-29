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
console.log(values,'pass')
this.props.getData(values)
      
     }
    render()

{
    return(
        <section class="center_part project">

       <div className="company">
           {/*2nd column*/}
                <div className="secd_row">
           <div className="setcompany_fild">
                  <label>CURRENT PASSWORD</label>
                  <input onChange={this.handleChange} type="text" name="currentPass" value={this.state.currentPass} placeholder="input" />
            </div>
            <div className="setcompany_fild">
                  <label>NEW PASSWORD</label>
                  <input onChange={this.handleChange} type="text" name="nexPass" value={this.state.nexPass} placeholder="input" />
            </div>
            <div className="setcompany_fild">
                  <label>CONFIRM PASSWORD</label>
                  <input onChange={this.handleChange} type="text" name="confirmPass" value={this.state.confirmPass} placeholder="input" />
            </div>
    
{this.state.nexPass != '' && this.state.nexPass  == this.state.confirmPass && this.state.confirmPass != ''?
            <button color="primary" onClick={this.handleSave}>Request Approval</button>
:''}            </div>
            
       </div>
       </section>
    )
}
}

export default Bank;
