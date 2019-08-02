import React, { Component } from 'react';

class Agency extends Component {
   constructor(props){
      super(props)   
      this.state = {
         agents:[
            {id:'1',name:'felix',image:'./assets/img/account.png',lastname:'abcd',function:'testing',mail:'mail',phone:'03481293669',skype:'arsalan.usman@zep-com.com',address:'testdfaf'},
            {id:'2',name:'Aralan',image:'./assets/img/account.png',lastname:'abcd',function:'testing',mail:'mail',phone:'03481293669',skype:'arsalan.usman@zep-com.com',address:'testdfaf'},
            {id:'3',name:'Baran',image:'./assets/img/account.png',lastname:'abcd',function:'testing',mail:'mail',phone:'03481293669',skype:'arsalan.usman@zep-com.com',address:'testdfaf'}
         ],
         currentAgent:''
      }
   }
   componentDidMount(){
      fetch("http://demo2532200.mockable.io/milestone")
            .then(res => res.json())
            .then(data => JSON.stringify(data));
   }
   getProfile(en,vl) {
     this.state.agents.map((items) => {
         if(items.id == vl){
            this.setState({
               currentAgent:items
            })
         }
      })
   }
    render(){
        return(
         <div className="agency">
               <div className="left_side">
                  <div className="profile">
                     <img src={this.state.currentAgent.image} />
                  </div>
                  <div className="feild half">
                     <label>first name</label>
                     <input type="text" name="fname" value={this.state.currentAgent.name} placeholder="Name" />
                  </div>
                  <div className="feild half">
                     <label>Last Name </label>
                     <input type="text" name="lastname" value={this.state.currentAgent.lastname} placeholder="Last name" />
                  </div>
                  <div className="feild">
                     <label>function</label>
                     <input type="text" name="function" value={this.state.currentAgent.function} placeholder="Felix" />
                  </div>
                  <div className="feild">
                     <label>mail</label>
                     <input type="text" name="mail" value={this.state.currentAgent.mail} placeholder="Felix" />
                  </div>
                  <div className="feild">
                     <label>Phone</label>
                     <input type="text" name="phone" value={this.state.currentAgent.phone} placeholder="Felix" />
                  </div>
                  <div className="feild">
                     <label>skype</label>
                     <input type="text" name="skype" value={this.state.currentAgent.skype} placeholder="Felix" />
                  </div>
                  <div className="feild">
                     <label>address</label>
                     <input type="text" name="address" value={this.state.currentAgent.address} placeholder="Felix" />
                  </div>
            </div>
            
            <div className="right_side">
               <div className="profile" onClick={(event,value) => this.getProfile(event,1)}>
                  <img src="./assets/img/user2.png"/>
                     <div className="text">
                        <p>Name <span>Function</span></p>
                     </div>
               </div>
               <div className="border"></div>
                  <div className="border_center">
                  </div>
                     <div className="center">
                        
                        <div className="profile fl"  onClick={(event,value) => this.getProfile(event,2)}>
                           <img src="./assets/img/user2.png"/>
                              <div className="text">
                                 <p>Name <span>Function</span></p>
                              </div>
                        </div>
                        <div className="profile fl"  onClick={(event,value) => this.getProfile(event,3)}>
                           <img src="./assets/img/user2.png"/>
                              <div className="text">
                                 <p>Name <span>Function</span></p>
                              </div>
                        </div>
                        <div className="plus">
                              <img src="./assets/img/close.png"/>
                           <p>Add</p>
                        </div>
                     </div>
                  <div className="border_center"></div>
               <div className="plus">
                  <img src="./assets/img/close.png"/>
                  <p>Add</p>
               </div>
            </div>


         
           <div className="right_side">

           <div className="profile_name">
               <div className="profile_name_img">
               <img src="./assets/img/user2.png"/>
               </div>   
               <div className="profile_name_text">
                 <h3>Name</h3>
                 <p>Function</p>
               </div>
  
           </div>


           

         



            </div>





         </div>
        )
    }
}
export default Agency