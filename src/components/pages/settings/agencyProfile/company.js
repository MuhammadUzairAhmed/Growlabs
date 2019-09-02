import React , {Component} from 'react'
import FileUpload from './../../governanace/contractComponents/FileUpload';
class Company extends Component
{
    constructor(props){
        super(props);
        this.state={
            companyName:'',
            certification:'',
            foundedIn:'',
            companyIntro:'',
            description:'',
            projectDelivery:'',
            companyURL:'',
            twitterURL:'',
            linkedURL:'',
            facebookURL:'',
            gitUser:'',
            banner:'',
            video:'',
            videoLink:''
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
            companyName:this.state.companyName,
            certification:this.state.certification,
            foundedIn:this.state.foundedIn,
            companyIntro:this.state.companyIntro,
            description:this.state.description,
            projectDelivery:this.state.projectDelivery,
            companyURL:this.state.companyURL,
            twitterURL:this.state.twitterURL,
            linkedURL:this.state.linkedURL,
            facebookURL:this.state.facebookURL,
            gitUser:this.state.gitUser,
            banner:this.state.banner,
            video:this.state.video,
            videoLink:this.state.videoLink
        }
        console.log(values,"companyAgenceProfile")  
      
     }
    render()

{
    return(
        <section class="">

       <div className="personal_main company">
           {/*1st column*/}
          

        <div className="first_row">
        <h1>General</h1>
           <div className="feild">
                  <label>COMPANY NAME</label>
                  <input onChange={this.handleChange} type="text" name="companyName" value={this.state.companyName} placeholder="input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild">
                  <label>CERTIFICATION</label>
                  <input onChange={this.handleChange} type="text" name="certification" value={this.state.certification} placeholder="input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild">
                  <label>FOUNDED IN</label>
                  <input onChange={this.handleChange} type="text" name="foundedIn" value={this.state.foundedIn} placeholder="input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
    
             <h1>Descriptions</h1>
            <div className="feild textarea">
                  <label>COMPANY INTRODUCTION</label>
                  {/* <input onChange={this.handleChange} type="text" name="companyIntro" value={this.state.companyIntro} placeholder="input" />*/}
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
                  <textarea class="form-control" placeholder="input" rows="6" id="comment"></textarea>

            </div>
            <div className="feild textarea">
                  <label>DESCRIPTION WHAT MAKES US SPECAL?</label>
                 {/* <input onChange={this.handleChange} type="text" name="description" value={this.state.description} placeholder="input" />*/}
                  <textarea class="form-control" placeholder="input" rows="6" id="comment"></textarea>

                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
      </div>

            {/*2nd column*/}
            <div className="secd_row">
            <div className="feild textarea">
                  <label>DESCRIBE HOW YOU DELIVER A PROJECT</label>
                  {/*<input onChange={this.handleChange} type="text" name="projectDelivery" value={this.state.projectDelivery} placeholder="input" />*/}
                  <textarea class="form-control" placeholder="input" rows="6" id="comment"></textarea>

            </div>

            <h1>Links</h1>
            <div className="feild">
                  <label>COMPANY WEBSITE URL</label>
                  <input onChange={this.handleChange} type="text" name="companyURL" value={this.state.companyURL} placeholder="input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild">
                  <label>TWITTER URL</label>
                  <input onChange={this.handleChange} type="text" name="twitterURL" value={this.state.twitterURL} placeholder="input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild">
                  <label>LINKEDIN URL</label>
                  <input onChange={this.handleChange} type="text" name="linkedURL" value={this.state.linkedURL} placeholder="input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild">
                  <label>FACEBOOK URL</label>
                  <input onChange={this.handleChange} type="text" name="facebookURL" value={this.state.facebookURL} placeholder="input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            <div className="feild">
                  <label>GITHUB USERNAME</label>
                  <input onChange={this.handleChange} type="text" name="gitUser" value={this.state.gitUser} placeholder="input" />
                  <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>

            </div>
            {/*3rd column*/}
            <div className="third_row">
            <h1>General</h1>
            <div className="feild upload">
                <label>COMPANY BANNER PROFILE</label>
                <FileUpload getInput={this.handleBanner} getInput1='banner' />
                <p>{this.state.banner}</p>
            </div>
            <div className="feild upload">
                <label>COMPANY BANNER VIDEO</label>
                <FileUpload getInput={this.handelVideo} getInput1='video' />
                <p>{this.state.video}</p>
            </div>
            <div className="feild">
                <label>COMPANY INTRODUCTION VIDEO LINK</label>
                <input onChange={this.handleChange} type="text" name="videoLink" value={this.state.videoLink} placeholder="input" />
                <div class="tooltip"><img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class="" /><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

            </div>
            </div>


            <div className="Button_sec ">
               <button color="primary" onClick={this.handleSave}>Request Approval</button>
                <p className="error">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </p>
               <button className="secd_button">Add google Authenticator</button>
             <p>Request Account Removal</p>
               </div>


       </div>



       
       </section>
    )
}
}

export default Company;