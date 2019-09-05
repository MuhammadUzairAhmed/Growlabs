import React,{Component} from 'react';

var sortedList;
class Referal extends Component{
    constructor(props){
        super(props)
        this.state={
            invitedData:[
                {id:1,username:'Gbc',userEmail:'xyz@gmail.com',registered:'yes',InvitedData:'october 11,2018 4:27 pm'},
                {id:2,username:'Zabc',userEmail:'xyz@gmail.com',registered:'yes',InvitedData:'october 11,2018 4:27 pm'},
                {id:3,username:'Xabc',userEmail:'xyz@gmail.com',registered:'yes',InvitedData:'october 11,2018 4:27 pm'},
                {id:4,username:'Fabc',userEmail:'xyz@gmail.com',registered:'yes',InvitedData:'october 11,2018 4:27 pm'},
                {id:5,username:'Habc',userEmail:'xyz@gmail.com',registered:'yes',InvitedData:'october 11,2018 4:27 pm'},
                {id:6,username:'Tabc',userEmail:'xyz@gmail.com',registered:'yes',InvitedData:'october 11,2018 4:27 pm'},
                {id:7,username:'Nabc',userEmail:'xyz@gmail.com',registered:'yes',InvitedData:'october 11,2018 4:27 pm'},
                {id:8,username:'Jabc',userEmail:'xyz@gmail.com',registered:'yes',InvitedData:'october 11,2018 4:27 pm'},
                {id:9,username:'Wabc',userEmail:'xyz@gmail.com',registered:'yes',InvitedData:'october 11,2018 4:27 pm'},
                {id:10,username:'Kabc',userEmail:'xyz@gmail.com',registered:'yes',InvitedData:'october 11,2018 4:27 pm'},
                {id:11,username:'Aabc',userEmail:'xyz@gmail.com',registered:'yes',InvitedData:'october 11,2018 4:27 pm'},
                {id:12,username:'SDabc',userEmail:'xyz@gmail.com',registered:'yes',InvitedData:'october 11,2018 4:27 pm'},
                {id:13,username:'Oabc',userEmail:'xyz@gmail.com',registered:'yes',InvitedData:'october 11,2018 4:27 pm'},
            ],
            referredAgencyData:[
                {id:1,username:'Gbc',userEmail:'xyz@gmail.com',registered:'yes',InvitedData:'october 11,2018 4:27 pm'},
                {id:2,username:'Zabc',userEmail:'xyz@gmail.com',registered:'yes',InvitedData:'october 11,2018 4:27 pm'},
                {id:3,username:'Xabc',userEmail:'xyz@gmail.com',registered:'yes',InvitedData:'october 11,2018 4:27 pm'},
                {id:4,username:'Fabc',userEmail:'xyz@gmail.com',registered:'yes',InvitedData:'october 11,2018 4:27 pm'},
                {id:5,username:'Habc',userEmail:'xyz@gmail.com',registered:'yes',InvitedData:'october 11,2018 4:27 pm'},
                {id:6,username:'Tabc',userEmail:'xyz@gmail.com',registered:'yes',InvitedData:'october 11,2018 4:27 pm'},
                {id:7,username:'Nabc',userEmail:'xyz@gmail.com',registered:'yes',InvitedData:'october 11,2018 4:27 pm'},
                ],
            refferedClientData:[
                {id:1,username:'Gbc',userEmail:'xyz@gmail.com',registered:'yes',InvitedData:'october 11,2018 4:27 pm'},
                {id:2,username:'Zabc',userEmail:'xyz@gmail.com',registered:'yes',InvitedData:'october 11,2018 4:27 pm'},
                {id:3,username:'Xabc',userEmail:'xyz@gmail.com',registered:'yes',InvitedData:'october 11,2018 4:27 pm'},
                {id:4,username:'Fabc',userEmail:'xyz@gmail.com',registered:'yes',InvitedData:'october 11,2018 4:27 pm'},
                {id:5,username:'Habc',userEmail:'xyz@gmail.com',registered:'yes',InvitedData:'october 11,2018 4:27 pm'},
                {id:6,username:'Tabc',userEmail:'xyz@gmail.com',registered:'yes',InvitedData:'october 11,2018 4:27 pm'},
                {id:7,username:'Nabc',userEmail:'xyz@gmail.com',registered:'yes',InvitedData:'october 11,2018 4:27 pm'},
                {id:8,username:'Jabc',userEmail:'xyz@gmail.com',registered:'yes',InvitedData:'october 11,2018 4:27 pm'},
                {id:9,username:'Wabc',userEmail:'xyz@gmail.com',registered:'yes',InvitedData:'october 11,2018 4:27 pm'},
                {id:10,username:'Kabc',userEmail:'xyz@gmail.com',registered:'yes',InvitedData:'october 11,2018 4:27 pm'},
               ],
            username:'',
            email:'',
            invite:false,
            sortArr:[
            {id:3,name:'Zfh'},
            {id:9,name:'Dfd'},
            {id:5,name:'Cmmb'},
            {id:8,name:'Bgfhd'},
            {id:31,name:'Atyr'},
            {id:12,name:'Nrtre'},
            {id:13,name:'Zfh'},
            {id:19,name:'Dfd'},
            {id:15,name:'Cmmb'},
            {id:18,name:'Bgfhd'},
            {id:32,name:'Atyr'},
            {id:11,name:'Nrtre'},
             {id:12,name:'Nrtre'},
        
        ],
            pagination2:[],
            pagination:[],
            dummyArr:[{id:92,name:'Nrtre'}],

            paginationdummyref:[],
            paginationRef:[],
            finalRef:[{id:0}],

            paginationdummy:[],
            paginationInvited:[],
            finalInvited:[{id:0}],

            paginationdummyClient:[],
            paginationClient:[],
            finalClient:[{id:0}],


            itemId:1
        }
        this.sorting('1')
    }
    componentDidMount(){
       this.inviteDataPagination()
       this.RefDevelopment()
       this.RefClient()
    }
    
    inviteDataPagination =()=>{
    var lengthForinvitedDataPagination = this.state.invitedData.length/3;
        var arraysinvited = [];
        lengthForinvitedDataPagination = Math.ceil(lengthForinvitedDataPagination);
        for(var i=0  ;i< lengthForinvitedDataPagination ;i++)
        {
            this.state.paginationdummy.push(i+1)
        }
        for(var j=0 ;j<3 ;j++)
            {   
                if(this.state.invitedData[j] != undefined)
                {
                    arraysinvited.push(this.state.invitedData[j])
                }
        }
        this.setState({paginationInvited: this.state.paginationdummy,finalInvited:arraysinvited})
    }

    RefDevelopment =()=>{
        var lengthForinvitedDataPagination = this.state.referredAgencyData.length/3;
            var arraysinvited = [];
            lengthForinvitedDataPagination = Math.ceil(lengthForinvitedDataPagination);
            for(var i=0  ;i< lengthForinvitedDataPagination ;i++)
            {
                this.state.paginationdummyref.push(i+1)
            }
            for(var j=0 ;j<3 ;j++)
                {   
                    if(this.state.referredAgencyData[j] != undefined)
                    {
                        arraysinvited.push(this.state.referredAgencyData[j])
                    }
            }
            this.setState({paginationRef: this.state.paginationdummyref,finalRef:arraysinvited})
        }
        RefClient =()=>{
            var lengthForinvitedDataPagination = this.state.refferedClientData.length/3;
                var arraysinvited = [];
                lengthForinvitedDataPagination = Math.ceil(lengthForinvitedDataPagination);
                for(var i=0  ;i< lengthForinvitedDataPagination ;i++)
                {
                    this.state.paginationdummyClient.push(i+1)
                }
                for(var j=0 ;j<3 ;j++)
                    {   
                        if(this.state.refferedClientData[j] != undefined)
                        {
                            arraysinvited.push(this.state.refferedClientData[j])
                        }
                }
                this.setState({paginationClient: this.state.paginationdummyClient,finalClient:arraysinvited})
            }

    handleChange = (e) => {
        this.setState({
           [e.target.name]: e.target.value
        })
    }
    changeStates =(key)=>{
        switch(key){
            case 'sendInvitates':
                return this.setState({invite:true})
            default :
                null
        }
    }
    sendInvite=()=>{
        this.setState({invite:false})
        const {username,email} = this.state;
        var invitation ={username,email};
        console.log('invitaion',invitation)
    }
    sorting =(key)=>{
        if(key == 'inivtaionSort'){
        sortedList=  this.state.finalInvited.sort((a, b) => {
            return (a.username > b.username ?1 : -1);
        });this.setState({finalInvited:sortedList})}  

        if(key == 'refSort'){
            sortedList=  this.state.finalRef.sort((a, b) => {
                return (a.username > b.username ?1 : -1);
            });this.setState({finalRef:sortedList})} 
            
        if(key == 'refClient'){
            sortedList=  this.state.finalClient.sort((a, b) => {
                return (a.username > b.username ?1 : -1);
            });this.setState({finalClient:sortedList})} 
    }
    changePage =(id,key)=>{
       console.log(id,key,'chekeddd')
          
            this.setState({itemId:id},()=>{ 
            var count =0;
            var arr = [];
            for(var i=0; i< this.state.itemId ;i++)
            {
                arr = [];
                for(var j=count ;j<count+3 ;j++)
                {  
                    if(key== 'invitedData'){ 
                        if(this.state.invitedData[j] != undefined){arr.push(this.state.invitedData[j])}
                    }  
                    if(key== 'refDev'){ 
                        if(this.state.referredAgencyData[j] != undefined){arr.push(this.state.referredAgencyData[j])}
                    }
                    if(key== 'refClient'){ 
                        if(this.state.refferedClientData[j] != undefined){arr.push(this.state.refferedClientData[j])}
                    }
                }
                count = count+3;
            }
            if(key== 'invitedData'){this.setState({finalInvited:arr})}
            if(key== 'refDev'){this.setState({finalRef:arr})}
            if(key== 'refClient'){this.setState({finalClient:arr})}
            })
        
        
       
   
    }
    addNewData=(key)=>{
        this.setState({invite:false})
        if(key == 'invitedData'){
        var values ={id:this.state.invitedData.length+1,username:this.state.username,userEmail:this.state.email,registered:'yes',InvitedData:'october 11,2018 4:27 pm'};
        this.setState({invitedData:[...this.state.invitedData,values]},()=>{ console.log(this.state.invitedData,'inviteData') 
        this.setState({username:'',email:''})})
        }
    }      
    selectedRequest=(id,key)=>{
        console.log(id,key,'selectec')
    }                                               
    render(){
       return(
            <div>
            <div className="Settings_profiles">       
            
            <div className="manage_test">
            <div className="manage_header">
            <div className="col_1"> Send Invites</div>
            <div className="col_2"> SNO   <div className="sorting" onClick={()=>this.sorting('inivtaionSort')}><p>&#8593;</p></div> </div>
            <div className="col_3">UserName </div>
            <div className="col_4">User Email</div>
            <div className="col_5">Registered </div>
            <div className="col_6"> Invite date</div>
            <div className="col_7"></div>
            </div>

            <div class="Add_box" onClick={()=>this.changeStates('sendInvitates')} >
            <div class="plus"></div>
            <button type="button">New</button>
            </div>
            {this.state.finalInvited.map((item,index)=>
            {return <div class="Added_box" key={item.id}>
            <div class="Added_box_numer"> {index+1} </div>
            <div className="col_1"> <label class="fancy-checkbox" onClick={()=>this.selectedRequest(item.id,'invited')}><input type="checkbox"/><span class="checkmark"></span> </label><p>Request</p></div>
            <div className="col_2"> name  </div>
            <div className="col_3"> {item.username}  </div>
            <div className="col_4"> {item.userEmail}  </div>
            <div className="col_5">{item.registered}</div>
            <div className="col_6"> {item.InvitedData} </div>
            <div className="col_7"> </div>
            </div>})
            } 
            <div class="manage_pagenation">
            <div class="pagenation_left" onClick={()=>this.changePage(this.state.itemId-1,'invitedData')}><div class="go-icon"></div></div>
            {this.state.paginationInvited.map(item=> <div class="pagenation_number" key={item} onClick={()=>this.changePage(item,'invitedData')}>{item}</div>)}
            <div class="pagenation_right" onClick={()=>this.changePage(this.state.itemId+1,'invitedData')}><div class="go-icon"></div></div>
           </div>
            </div>
            

            <div className="manage_test">
            <div className="manage_header">
            <div className="col_1"> Reffered Development Agencies</div>
            <div className="col_2"> SNO   <div className="sorting" onClick={()=>this.sorting('refSort')}><p>&#8593;</p></div> </div>
            <div className="col_3">Current Subscription  </div>
            <div className="col_4">Revenue this month</div>
            <div className="col_5">Profit this month </div>
            <div className="col_6">Registeration date</div>
            <div className="col_7"></div>
            </div>
            {this.state.finalRef.map((item,index)=>
            {return <div class="Added_box" key={item.id}>
            <div class="Added_box_numer"> {index+1} </div>
            <div className="col_1"> <label class="fancy-checkbox" onClick={()=>this.selectedRequest(item.id,'refDev')}><input type="checkbox"/><span class="checkmark"></span> </label><p>Request</p></div>
            <div className="col_2"> name  </div>
            <div className="col_3"> {item.username}  </div>
            <div className="col_4"> {item.userEmail}  </div>
            <div className="col_5">{item.registered}</div>
            <div className="col_6"> {item.InvitedData} </div>
            <div className="col_7"> </div>
            </div>})
            } 
            <div class="manage_pagenation">
            <div class="pagenation_left" onClick={()=>this.changePage(this.state.itemId-1,'refDev')}><div class="go-icon"></div></div>
            {this.state.paginationRef.map(item=> <div class="pagenation_number" key={item} onClick={()=>this.changePage(item,'refDev')}>{item}</div>)}
            <div class="pagenation_right" onClick={()=>this.changePage(this.state.itemId+1,'refDev')}><div class="go-icon"></div></div>
           </div>
            </div>


            <div className="manage_test">
            <div className="manage_header">
            <div className="col_1"> Reffered Clients</div>
            <div className="col_2"> SNO   <div className="sorting" onClick={()=>this.sorting('refClient')}><p>&#8593;</p></div> </div>
            <div className="col_3">Current Subscription  </div>
            <div className="col_4">Revenue this month</div>
            <div className="col_5">Profit this month </div>
            <div className="col_6">Registeration date</div>
            <div className="col_7"></div>
            </div>
            {this.state.finalClient.map((item,index)=>
            {return <div class="Added_box" key={item.id}>
            <div class="Added_box_numer"> {index+1} </div>
            <div className="col_1"> <label class="fancy-checkbox" onClick={()=>this.selectedRequest(item.id,'refClient')}><input type="checkbox"/><span class="checkmark"></span> </label><p>Request</p></div>
            <div className="col_2"> name  </div>
            <div className="col_3"> {item.username}  </div>
            <div className="col_4"> {item.userEmail}  </div>
            <div className="col_5">{item.registered}</div>
            <div className="col_6"> {item.InvitedData} </div>
            <div className="col_7"> </div>
            </div>})
            } 
            <div class="manage_pagenation">
            <div class="pagenation_left" onClick={()=>this.changePage(this.state.itemId-1,'refClient')}><div class="go-icon"></div></div>
            {this.state.paginationRef.map(item=> <div class="pagenation_number" key={item} onClick={()=>this.changePage(item,'refClient')}>{item}</div>)}
            <div class="pagenation_right" onClick={()=>this.changePage(this.state.itemId+1,'refClient')}><div class="go-icon"></div></div>
           </div>
            </div>

            </div>
           

           

             {this.state.invite &&
                 <div>
                 <div className="modal Invite" style={{position:'initial'}}>
                 <h1>Invite New User</h1>
                 </div>
                 <br></br>
                 <br></br>
                <div className="modal Invite" style={{position:'initial'}}>
                <h1>Invite link</h1>
                <div className="feild dropdown Invite">
                   <label>COMPANY INTRODUCTION</label>
                  hello hello
                  </div>
                   <div className="feild Invite">
                      <label>EMAIL ADDRESS</label>
                      <input onChange={this.handleChange} type="text" name="email" value={this.state.email} placeholder="INput" />
                      
                   </div>
                   <div className="feild Invite">
                   <button className="account_but" color="primary" onClick={this.sendInvite}>SIGN UP NOW</button>
                   </div>
                </div>
                <br></br>
                <div className="modal Invite" style={{position:'initial'}}>
            <h1>Send email</h1>
            <div className="feild dropdown Invite">
               <label>USER NAME</label>
               <input onChange={this.handleChange} type="text" name="username" value={this.state.username} placeholder="INput" />
                 </div>
               <div className="feild Invite">
                  <label>EMAIL ADDRESS</label>
                  <input onChange={this.handleChange} type="text" name="email" value={this.state.email} placeholder="INput" />
                  
               </div>
               <button className="account_but" color="primary" onClick={()=>this.addNewData('invitedData')}>SEND INVITE</button>
            </div>
            <div className="modal Invite" style={{position:'initial'}}>
            <h1>Share on social media</h1>
            </div>
            </div>
            }

          
          
       
            </div>
        )
    }
}

export default Referal;