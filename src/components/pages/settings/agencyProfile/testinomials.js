import React,{Component} from 'react';
import { MDBDataTable } from 'mdbreact';
import FileUpload from './../../../pages/governanace/contractComponents/FileUpload'



class DatatablePage extends Component{
  constructor(props){
    super(props)
    this.state={
      data:{
        columns: [
          {
            label: 'Id',
            field: 'id',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Manage Test',
            field: 'Manage Test',
            sort: 'asc',
            width: 150
          },
          {
            
            label: 'Client Name',
            field: 'Client Name',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Test',
            field: 'Test',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Client company',
            field: 'Client company',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Testinomial Posted',
            field: 'Testinomial Posted',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Sent Date',
            field: 'Sent Date',
            sort: 'asc',
            width:100
          }
        ],
        rows: [
          {
            id:1,
            manageTest: <input type="checkbox" onClick={()=>this.mangeTest(1)}/>,
            clientName: 'john whick' ,
            clientEmail: 'john@gmail.com',
            test: 'test5',
            clientComapny:'abc.com',
            testinomialPosted:'yes',
            date: '2011/04/25',
           
          }
        ]
      },
      manageData:{
        columns: [
          {
            label: 'Id',
            field: 'id',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Manage Testinomials',
            field: 'Manage Testinomials',
            sort: 'asc',
            width: 150
          },
          {
            
            label: 'Client Name',
            field: 'Client Name',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Client Email',
            field: 'Client Email',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Test',
            field: 'Test',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Client company',
            field: 'Client company',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Testinomial Posted',
            field: 'Testinomial Posted',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Sent Date',
            field: 'Sent Date',
            sort: 'asc',
            width:100
          }
        ],
        rows: [
          {
            id:1,
            manageTest: <input type="checkbox" onClick={()=>this.mangeTestinomials(1)}/>,
            clientName: 'john whick' ,
            clientEmail: 'john@gmail.com',
            test: 'test5',
            clientComapny:'abc.com',
            testinomialPosted:'yes',
            date: '2011/04/25',
           
          }
        ]
      },
      portfolioData:{
        columns: [
          {
            label: 'Id',
            field: 'id',
            sort: 'asc',
            width: 150
          },
          {
            label: 'portfolio data',
            field: 'portfolio data',
            sort: 'asc',
            width: 150
          },
          {
            
            label: 'Client Name',
            field: 'Client Name',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Client Email',
            field: 'Client Email',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Test',
            field: 'Test',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Client company',
            field: 'Client company',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Testinomial Posted',
            field: 'Testinomial Posted',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Sent Date',
            field: 'Sent Date',
            sort: 'asc',
            width:100
          }
        ],
        rows: [
          {
            id:1,
            manageTest: <input type="checkbox" onClick={()=>this.mangeTestinomials(1)}/>,
            clientName: 'john whick' ,
            clientEmail: 'john@gmail.com',
            test: 'test5',
            clientComapny:'abc.com',
            testinomialPosted:'yes',
            date: '2011/04/25',
           
          }
        ]
      },

      countId:2,
      addTestinomial: false,
       clientName: 'jj2',
       clientCompany:'',
       clientWeb:'',
       clientEmail:'',
       clientRole:'',
       projectType:'',
       review:'',

       invite:false,
       developerEmail:'',
       developerName:'',

       testinomialRequest:false,
       testinomaila2: false,
       tests:false,
       portfolio:false,
       test:'',
       result:''
      }
    }
  
  
  changeStates =(key)=>{
    if(key == 'testinomials'){this.setState({addTestinomial:true})} 
    if(key == 'developerInvitation'){this.setState({invite:true})}
    if(key == 'testinomialRequest'){this.setState({testinomialRequest:true})}
    if(key == 'tests'){this.setState({tests:true})} 
    if(key == 'portfolio'){this.setState({portfolio:true})}
  }

  addTest = () =>{
    const {clientName,clientCompany,clientWeb,clientEmail,clientRole,projectType,review}= this.state
    var clientalues ={clientName,clientCompany,clientWeb,clientEmail,clientRole,projectType,review}
    this.setState({countId:this.state.countId+1,tests:false})
    var addChild ={
      id:this.state.countId,
      manageTest: <input type="checkbox" onClick={()=>this.mangeTest(this.state.countId)}/>,
      clientName: this.state.clientName,
      clientEmail: this.state.clientEmail,
      test: 'test5',
      clientComapny:this.state.clientCompany,
      testinomialPosted:'yes',
      date: '2011/04/25',
     
    }
    this.setState({ data:{columns:[...this.state.data['columns']], rows:[...this.state.data['rows'], addChild] }})
    var values ={
      test:this.state.test,
      result:this.state.result
    }
    console.log(values,'tests')
  }

  addTestinomial=()=>{
    const {clientName,clientCompany,clientWeb,clientEmail,clientRole,projectType,review}= this.state
    var clientalues ={clientName,clientCompany,clientWeb,clientEmail,clientRole,projectType,review}
    this.setState({countId:this.state.countId+1,addTestinomial:false})
    var addChild ={
      id:this.state.countId,
      manageTest: <input type="checkbox" onClick={()=>this.mangeTest(this.state.countId)}/>,
      clientName: this.state.clientName,
      clientEmail: this.state.clientEmail,
      test: 'test5',
      clientComapny:this.state.clientCompany,
      testinomialPosted:'yes',
      date: '2011/04/25',
     
    }
    this.setState({ manageData:{ rows:[...this.state.manageData['rows'], addChild] }})
    console.log(clientalues,'testinomialAdde')
  }

  DeveloperRequest =() =>{
    this.setState({invite:false})
    const {developerName,developerEmail} = this.state;
    console.log(developerName,developerEmail,'developerRequest')
  }


  clientTestinomialReq =()=>{
    this.setState({testinomialRequest:false})
    const {clientName,clientCompany,clientWeb,clientEmail,clientRole}= this.state
    var clientalues ={clientName,clientCompany,clientWeb,clientEmail,clientRole}
    console.log(clientalues,'testinomialRequest')
   
  }

  addPortfolio =() =>{
    const {clientName,clientCompany,clientWeb,clientEmail,clientRole,projectType,review}= this.state
    var clientalues ={clientName,clientCompany,clientWeb,clientEmail,clientRole,projectType,review}
    this.setState({countId:this.state.countId+1,portfolio:false})
    var addChild ={
      id:this.state.countId,
      manageTest: <input type="checkbox" onClick={()=>this.mangeTest(this.state.countId)}/>,
      clientName: this.state.clientName,
      clientEmail: this.state.clientEmail,
      test: 'test5',
      clientComapny:this.state.clientCompany,
      testinomialPosted:'yes',
      date: '2011/04/25',
     
    }
    this.setState({ portfolio:{ rows:[...this.state.portfolio['rows'], addChild] }})
    console.log(clientalues,'testinomialAdde')
  }

  handleChange = (e) => {
    this.setState({
       [e.target.name]: e.target.value
    },()=>{
      console.log('changeData',this.state.clientName)
    })
 }
 handleBanner=(x)=>{
   console.log("imageName",x)
 }
  render(){
  return (
    <div >
      {/*client add testinomials */}
     {this.state.addTestinomial && <div className="modal">
            <h1>Client Add Testinomials</h1>
            <div className="feild Invite">
                  <label>CLIENT NAME</label>
                  <input onChange={this.handleChange} type="text" name="clientName" value={this.state.clientName} placeholder="Input"/>
                  <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

               </div>
               <div className="feild Invite">
                  <label>CLIENT COMPANY</label>
                  <input onChange={this.handleChange} type="text" name="clientCompany" value={this.state.clientCompany} placeholder="Input" />
                  <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

               </div>
               <div className="feild Invite">
                  <label>COMPANY WEBSITE</label>
                  <input onChange={this.handleChange} type="text" name="clientWeb" value={this.state.clientWeb} placeholder="Input" />
                  <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

               </div>
               <div className="feild Invite">
                  <label>CLIENT EMAIL</label>
                  <input onChange={this.handleChange} type="text" name="clientEmail" value={this.state.clientEmail} placeholder="Input" />
                  <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

               </div>
               <div className="feild Invite">
                  <label>CLIENT ROLE</label>
                  <input onChange={this.handleChange} type="text" name="clientRole" value={this.state.clientRole} placeholder="Input" />
                  <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

               </div>
                <div className="feild Invite">
                <label>CLIENT LOGO</label>
                <FileUpload getInput={this.handleBanner} getInput1='modal' />
                <p className="Upload_text">Drag and Drop here</p>
            </div>
           
            <h2 class="no-span">Review</h2>
            <div className="feild dropdown Invite">
               <label>PROJECT TYPE</label>
                  <select name="projectType" form="carform" value={this.state.projectType} onChange={this.handleChange}>
                  <option value="">Input</option>
                  <option value="Agency">programming</option>
                  <option value="Client">react</option>
                 </select>
                 <div class="go-icon"></div>
                 <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

              </div>
              <div className="rating textarea">
                  <label>REVIEW</label>
                  <textarea class="form-control" placeholder="input" name="review" value={this.state.review} onChange={this.handleChange} rows="6" id="comment"></textarea>
                  <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

               </div>
               <div className="rating_main">
                  <label>PRICE RATING</label>
                  <div class="rating">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </div>               </div>
                              <div className="rating_main">
                                  <label>QUALITY RATING</label>
                                  <div class="rating">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </div>
                              </div>
                              <div className="rating_main">
                                  <label>PARTNERSHIP RATING</label>
                                  <div class="rating">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </div>
                              </div>
                              <div className="rating_main">
                                  <label>SCHEDULE RATING</label>
                                  <div class="rating">
                <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                </div>               </div>
             
            <button class="account_but" color="primary" onClick={this.addTestinomial}>REQUEST</button>
          </div>
      }
      

       {/*Invite new developer */}
       {this.state.invite && <div className="modal Invite">
            <h1>Invite new developer</h1>
            <div className="feild dropdown Invite">
               <label>DEVELOPER NAME</label>
                  <select name="developerName" form="carform" value={this.state.developerName} onChange={this.handleChange}>
               
                  <option value="practical">practical</option>
                  <option value="technical">technical</option>
                 </select>
                 <div class="go-icon"></div>
                 <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>
                </div>
               <div className="feild Invite">
                  <label>DEVELOPER EMAIL</label>
                  <input onChange={this.handleChange} type="text" name="developerEmail" value={this.state.developerEmail} placeholder="INput" />
                  <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

               </div>
               <button className="account_but" color="primary" onClick={this.DeveloperRequest}>SEND TEST TO DEVELOPER</button>
            </div>}


            
          {/*manage testinomials */}
{this.state.testinomialRequest &&          <div className="modal Testinomials">
            <h1>Client Testinomials request</h1>
            <div className="feild Invite">
                  <label>CLIENT NAME</label>
                  <input onChange={this.handleChange} type="text" name="clientName" value={this.state.clientName} placeholder="Input"/>
                  <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

               </div>
               <div className="feild Invite">
                  <label>CLIENT COMPANY</label>
                  <input onChange={this.handleChange} type="text" name="clientCompany" value={this.state.clientCompany} placeholder="Input" />
                  <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

               </div>
               <div className="feild Invite">
                  <label>COMPANY WEBSITE</label>
                  <input onChange={this.handleChange} type="text" name="clientWeb" value={this.state.clientWeb} placeholder="Input" />
                  <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

               </div>
               <div className="feild Invite">
                  <label>CLIENT EMAIL</label>
                  <input onChange={this.handleChange} type="text" name="clientEmail" value={this.state.clientEmail} placeholder="Input" />
                  <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

               </div>
               <div className="feild Invite">
                  <label>CLIENT ROLE</label>
                  <input onChange={this.handleChange} type="text" name="clientRole" value={this.state.clientRole} placeholder="Input" />
                  <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

               </div>
                <div className="feild Invite">
                <label>CLIENT LOGO</label>
                <FileUpload getInput={this.handleBanner} getInput1='modal' />
                <p className="Upload_text">Drag and Drop here</p>
            </div>
            <button class="account_but" color="primary" onClick={this.clientTestinomialReq}>REQUEST</button>
          </div>

}
      
       {/*manage test */}
      {this.state.tests && <div className="modal Test">
       <h1>Add New Test</h1>
       <div className="feild dropdown Invite">
          <label>Test</label>
             <select name="test" form="carform" value={this.state.test} onChange={this.handleChange}>
             <option value=""></option>
             <option value="john">JOHN</option>
             <option value="whick">WICK</option>
            </select>
            <div class="go-icon"></div>
            <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

           </div>
          <div className="feild Invite">
             <label>RESULTS</label>
             <input onChange={this.handleChange} type="text" name="result" value={this.state.result} placeholder="Felix" />
             <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

          </div>
          <div className="feild">
           <label>TEST RESULT FILE</label>
           <FileUpload getInput={this.handleBanner} getInput1='modal' />
           <p className="Upload_text">Drag and Drop here</p>
       </div>
       <button className="account_but" color="primary" onClick={this.addTest}>ADD TEST</button>
     </div>

      }
       {/*manage add portfolio */}
      {this.state.portfolio &&   
          <div className="modal">
            <h1>Add New Portfolio</h1>
            <div className="feild Invite">
                  <label>CLIENT PROJECT TITLE</label>
                  <input onChange={this.handleChange} type="number" name="confirm" value={this.state.confirm} placeholder="Input" min="0" max="100"/>
                  <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

               </div>
               <div className="feild Invite">
                  <label>PROJECT LINK</label>
                  <input onChange={this.handleChange} type="number" name="confirm" value={this.state.confirm} placeholder="Input" min="0" max="100"/>
                  <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

               </div>
               <div className="feild dropdown Invite">
               <label>PROJECT TYPE</label>
                  <select name="userType" form="carform" value={this.state.userType} onChange={this.handleChange}>
                  <option value="">Input</option>
                  <option value="Agency">JOHN</option>
                  <option value="Client">WICK</option>
                 </select>
                 <div class="go-icon"></div>
                 <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

                </div>
                <div className="feild dropdown Invite">
               <label>OPERATING SYSTEM</label>
                  <select name="userType" form="carform" value={this.state.userType} onChange={this.handleChange}>
                  <option value="">Input</option>
                  <option value="Agency">JOHN</option>
                  <option value="Client">WICK</option>
                 </select>

                 <div class="go-icon"></div>
                 <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

                </div>
                <div className="feild dropdown Invite">
               <label>PROJECT FEATURES</label>
                  <select name="userType" form="carform" value={this.state.userType} onChange={this.handleChange}>
                  <option value="">Input</option>
                  <option value="Agency">JOHN</option>
                  <option value="Client">WICK</option>
                 </select>
                 <div class="go-icon"></div>
                 <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

                </div>
                <div className="feild dropdown Invite">
               <label>PROJECT INDUSTRY</label>
                  <select name="userType" form="carform" value={this.state.userType} onChange={this.handleChange}>
                  <option value="">Input</option>
                  <option value="Agency">JOHN</option>
                  <option value="Client">WICK</option>
                 </select>
                 <div class="go-icon"></div>
                 <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

                </div>
                <div className="feild dropdown Invite">
                <label>PROJECT TECHNOLOGIES</label>
                  <select name="userType" form="carform" value={this.state.userType} onChange={this.handleChange}>
                  <option value="">Input</option>
                  <option value="Agency">JOHN</option>
                  <option value="Client">WICK</option>
                 </select>
                 <div class="go-icon"></div>
                 <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

                </div>
                <div className="feild dropdown Invite">
               <label>PROJECT QUOTE</label>
                  <select name="userType" form="carform" value={this.state.userType} onChange={this.handleChange}>
                  <option value="">Input</option>
                  <option value="Agency">JOHN</option>
                  <option value="Client">WICK</option>
                 </select>
                 <div class="go-icon"></div>
                 <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

                </div>
                <div className="feild dropdown Invite">
               <label>PROJECT DURATION</label>
                  <select name="userType" form="carform" value={this.state.userType} onChange={this.handleChange}>
                  <option value="">Input</option>
                  <option value="Agency">JOHN</option>
                  <option value="Client">WICK</option>
                 </select>
                 <div class="go-icon"></div>
                 <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

                </div>
               <div className="feild">
                <label>CLIENT LOGO</label>
                <FileUpload getInput={this.handleBanner} getInput1='modal' />
                <p className="Upload_text">Drag and Drop here</p>
            </div>
            <div className="feild dropdown Invite">
               <label>IS THIS PORTFOLIO ITEM A USECASE?</label>
                  <select name="userType" form="carform" value={this.state.userType} onChange={this.handleChange}>
                  <option value="">Input</option>
                  <option value="Agency">JOHN</option>
                  <option value="Client">WICK</option>
                 </select>
                 <div class="go-icon"></div>
                 <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

                </div>
            <button class="account_but" color="primary" onClick={this.addPortfolio}>save</button>
          </div>

      }
     {/* <div class="Add_box">
     <div class="plus"></div>
    <button type="button" onClick={()=>this.changeStates('tests')}>New</button>
    </div> */}
    {/* <MDBDataTable
     searching={false}
      striped
      bordered
      hover
      data={this.state.data}
    /> */}
    {/* <button type="button" onClick={}>Delete</button> */}
    {/* <button type="button" onClick={()=>this.changeStates('developerInvitation')}>Invite New Developer</button> */}



    <br />
   
    {/* <MDBDataTable
    
    searching={false}
     striped
      bordered
      hover
      data={this.state.manageData}
    /> */}
     {/* <button type="button" onClick={()=>this.changeStates('testinomialRequest')}>Client Tesatinomial Request</button>
    <br></br>
    <div class="Add_box">
    <div class="plus"></div>
    <button type="button" onClick={()=>this.changeStates('portfolio')}>New</button>
    </div> */}
    {/* <MDBDataTable
      searching={false}
     striped
      bordered
      hover
      data={this.state.portfolioData}
    /> */}
   
   <div className="Settings_profiles">

   <div className="manage_test">

       <div className="manage_header">
          <div className="col_1"> Manage Test</div>
          <div className="col_2"> Clients Name   <div className="sorting"><p>&#8593;</p></div> </div>
          <div className="col_3">Clients Name </div>
          <div className="col_4">Test </div>
          <div className="col_5"> Clients Company </div>
          <div className="col_6"> Testimonal Posted</div>
          <div className="col_7">Send Data </div>
       </div>  

        <div class="Add_box">
          <div class="plus"></div>
          <button type="button">New</button>
        </div>

        <div class="Added_box">
          <div class="Added_box_numer"> 1. </div>
          <div className="col_1"> <label class="fancy-checkbox"><input type="checkbox"/><span class="checkmark"></span> </label><p>Request</p></div>
          <div className="col_2"> Name  </div>
          <div className="col_3"> Testing@gmail.com  </div>
          <div className="col_4">Test 5</div>
          <div className="col_5"> Testing .com </div>
          <div className="col_6"> Yes</div>
          <div className="col_7">October 11,2019 4:20 Pm </div>
        </div>
        <div class="Added_box">
        <div class="Added_box_numer"> 2. </div>
          <div className="col_1"> <label class="fancy-checkbox"><input type="checkbox"/><span class="checkmark"></span> </label><p>Request</p></div>
          <div className="col_2"> Name  </div>
          <div className="col_3"> Testing@gmail.com  </div>
          <div className="col_4">Test 5</div>
          <div className="col_5"> Testing .com </div>
          <div className="col_6"> Yes</div>
          <div className="col_7">October 11,2019 4:20 Pm </div>
        </div>
        <div class="Added_box">
        <div class="Added_box_numer"> 3. </div>
          <div className="col_1"> <label class="fancy-checkbox"><input type="checkbox"/><span class="checkmark"></span> </label><p>Request</p></div>
          <div className="col_2"> Name  </div>
          <div className="col_3"> Testing@gmail.com  </div>
          <div className="col_4">Test 5</div>
          <div className="col_5"> Testing .com </div>
          <div className="col_6"> Yes</div>
          <div className="col_7">October 11,2019 4:20 Pm </div>
        </div>

       

        <div class="manage_buttons">
          <button class="delete"><img src="./assets/img/pro_delete.png"/></button>
          <button class="delete_invite"><img src="./assets/img/pro_delete.png"/><p>Invite New Developer</p></button>
        </div>
   
        <div class="manage_pagenation">
          <div class="pagenation_left"><div class="go-icon"></div></div>
          <div class="pagenation_number">1</div>
          <div class="pagenation_number">2</div>
          <div class="pagenation_number">3</div>
          <div class="pagenation_number">4</div>
          <div class="pagenation_number">5</div>
          <div class="pagenation_right"><div class="go-icon"></div></div>
        </div>
        </div>
        <div className="manage_test">

<div className="manage_header">
   <div className="col_1"> Manage Test</div>
   <div className="col_2"> Clients Name   <div className="sorting"><p>&#8593;</p></div> </div>
   <div className="col_3">Clients Name </div>
   <div className="col_4">Test </div>
   <div className="col_5"> Clients Company </div>
   <div className="col_6"> Testimonal Posted</div>
   <div className="col_7">Send Data </div>
</div>  

 <div class="Add_box">
   <div class="plus"></div>
   <button type="button">New</button>
 </div>

 <div class="Added_box">
   <div class="Added_box_numer"> 1. </div>
   <div className="col_1"> <label class="fancy-checkbox"><input type="checkbox"/><span class="checkmark"></span> </label><p>Request</p></div>
   <div className="col_2"> Name  </div>
   <div className="col_3"> Testing@gmail.com  </div>
   <div className="col_4">Test 5</div>
   <div className="col_5"> Testing .com </div>
   <div className="col_6"> Yes</div>
   <div className="col_7">October 11,2019 4:20 Pm </div>
 </div>
 <div class="Added_box">
 <div class="Added_box_numer"> 2. </div>
   <div className="col_1"> <label class="fancy-checkbox"><input type="checkbox"/><span class="checkmark"></span> </label><p>Request</p></div>
   <div className="col_2"> Name  </div>
   <div className="col_3"> Testing@gmail.com  </div>
   <div className="col_4">Test 5</div>
   <div className="col_5"> Testing .com </div>
   <div className="col_6"> Yes</div>
   <div className="col_7">October 11,2019 4:20 Pm </div>
 </div>
 <div class="Added_box">
 <div class="Added_box_numer"> 3. </div>
   <div className="col_1"> <label class="fancy-checkbox"><input type="checkbox"/><span class="checkmark"></span> </label><p>Request</p></div>
   <div className="col_2"> Name  </div>
   <div className="col_3"> Testing@gmail.com  </div>
   <div className="col_4">Test 5</div>
   <div className="col_5"> Testing .com </div>
   <div className="col_6"> Yes</div>
   <div className="col_7">October 11,2019 4:20 Pm </div>
 </div>



 <div class="manage_buttons">
   <button class="delete"><img src="./assets/img/pro_delete.png"/></button>
   <button class="delete_invite"><img src="./assets/img/pro_delete.png"/><p>Invite New Developer</p></button>
 </div>

 <div class="manage_pagenation">
   <div class="pagenation_left"><div class="go-icon"></div></div>
   <div class="pagenation_number">1</div>
   <div class="pagenation_number">2</div>
   <div class="pagenation_number">3</div>
   <div class="pagenation_number">4</div>
   <div class="pagenation_number">5</div>
   <div class="pagenation_right"><div class="go-icon"></div></div>
 </div>
 </div>
 <div className="manage_test">

       <div className="manage_header">
          <div className="col_1"> Manage Test</div>
          <div className="col_2"> Clients Name   <div className="sorting"><p>&#8593;</p></div> </div>
          <div className="col_3">Clients Name </div>
          <div className="col_4">Test </div>
          <div className="col_5"> Clients Company </div>
          <div className="col_6"> Testimonal Posted</div>
          <div className="col_7">Send Data </div>
       </div>  

        <div class="Add_box">
          <div class="plus"></div>
          <button type="button">New</button>
        </div>

        <div class="Added_box">
          <div class="Added_box_numer"> 1. </div>
          <div className="col_1"> <label class="fancy-checkbox"><input type="checkbox"/><span class="checkmark"></span> </label><p>Request</p></div>
          <div className="col_2"> Name  </div>
          <div className="col_3"> Testing@gmail.com  </div>
          <div className="col_4">Test 5</div>
          <div className="col_5"> Testing .com </div>
          <div className="col_6"> Yes</div>
          <div className="col_7">October 11,2019 4:20 Pm </div>
        </div>
        <div class="Added_box">
        <div class="Added_box_numer"> 2. </div>
          <div className="col_1"> <label class="fancy-checkbox"><input type="checkbox"/><span class="checkmark"></span> </label><p>Request</p></div>
          <div className="col_2"> Name  </div>
          <div className="col_3"> Testing@gmail.com  </div>
          <div className="col_4">Test 5</div>
          <div className="col_5"> Testing .com </div>
          <div className="col_6"> Yes</div>
          <div className="col_7">October 11,2019 4:20 Pm </div>
        </div>
        <div class="Added_box">
        <div class="Added_box_numer"> 3. </div>
          <div className="col_1"> <label class="fancy-checkbox"><input type="checkbox"/><span class="checkmark"></span> </label><p>Request</p></div>
          <div className="col_2"> Name  </div>
          <div className="col_3"> Testing@gmail.com  </div>
          <div className="col_4">Test 5</div>
          <div className="col_5"> Testing .com </div>
          <div className="col_6"> Yes</div>
          <div className="col_7">October 11,2019 4:20 Pm </div>
        </div>

       

        <div class="manage_buttons">
          <button class="delete"><img src="./assets/img/pro_delete.png"/></button>
          <button class="delete_invite"><img src="./assets/img/pro_delete.png"/><p>Invite New Developer</p></button>
        </div>
   
        <div class="manage_pagenation">
          <div class="pagenation_left"><div class="go-icon"></div></div>
          <div class="pagenation_number">1</div>
          <div class="pagenation_number">2</div>
          <div class="pagenation_number">3</div>
          <div class="pagenation_number">4</div>
          <div class="pagenation_number">5</div>
          <div class="pagenation_right"><div class="go-icon"></div></div>
        </div>
        </div>


   </div>
  

  

    </div>
  );
}
}

export default DatatablePage;