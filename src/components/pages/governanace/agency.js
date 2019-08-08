import React, { Component } from 'react';
import $ from 'jquery';
import FileUpload from './../governanace/contractComponents/FileUpload';
// import DummyTree from './dummyTree';


var RC = {
   id: 0,
   key: 'RC',
   status: false,
   fname: '',
   address: '',
   skype: '',
   phone: '',
   image:'',
   mail: '',
   Function: '',
   lastname: ''
}
var LC = {
   id: 0,
   key: 'LC',
   status: false,
   fname: '',
   address: '',
   skype: '',
   image:'',
   phone: '',
   mail: '',
   Function: '',
   lastname: ''
}
class Agency extends Component {
   constructor(props) {
      super(props)
      this.state = {
         agents: [
            { id: '1', name: 'felix', image: './assets/img/account.png', lastname: 'abcd', function: 'testing', mail: 'mail', phone: '03481293669', skype: 'arsalan.usman@zep-com.com', address: 'testdfaf' },
            { id: '2', name: 'Aralan', image: './assets/img/account.png', lastname: 'abcd', function: 'testing', mail: 'mail', phone: '03481293669', skype: 'arsalan.usman@zep-com.com', address: 'testdfaf' },
            { id: '3', name: 'Baran', image: './assets/img/account.png', lastname: 'abcd', function: 'testing', mail: 'mail', phone: '03481293669', skype: 'arsalan.usman@zep-com.com', address: 'testdfaf' }
         ],
         currentAgent: '',
         data: [
            {
               id: 0,
               key: 'mid',
               status: false,
               fname: '',
               address: '',
               skype: '',
               phone: '',
               mail: '',
               Function: '',
               lastname: '',
               image:'',
               Rchild: [],
               Lchild: []
            }
         ],
         formId: null,
         formMainId: null,
         formChildId: null,
         childKey: '',
         fname: '',
         address: '',
         skype: '',
         phone: '',
         mail: '',
         Function: '',
         lastname: '',
         image:'',
         formSubmitted: false,
         editId:null,
         editSubId:null,
         saveId:true,
         index: [],
         EditKey:null,
         message:'',
         numbers: [

         ],
         rightUser: [

         ],
         leftUser: [

         ],
         agentDetail:[],
         fetchData:[]

      }
   }
   componentDidMount() {

      const method = "POST";
      const body = new FormData(this.form);

      fetch("http://demo2532200.mockable.io/milestone",{method,body:{}})
         .then(res => res.json())
         .then(data => JSON.stringify(data));

         fetch("https://demo9810618.mockable.io/agent")
         .then(res => res.json())
         .then(data => 
            this.setState({fetchData: data.agents},()=>{
               console.log(this.state.fetchData,'agent')
            })
         );
        
   }
   getProfile(en, vl) {
      console.log('dataShow ', vl)
      this.state.agents.map((items) => {
         if (items.id == vl) {
            this.setState({
               currentAgent: items
            })
         }
      })
   }
   addUser = (id,key) => {
      this.setState({saveId:true,message:'Please Fill The Form', formId: id, childKey: key ,fname:'',lastname:'',skype:'' ,phone:'',mail:'',address:'',Function:'',image:''})
      console.log('here comes')
   }
   midClick = () => {
      
      var addChild =
      {
         id: this.state.formId + 1,
         key: 'mid',
         status: false,
         fname: '',
         address: '',
         skype: '',
         image:'',
         phone: '',
         mail: '',
         Function: '',
         lastname: '',
         Rchild: [RC],
         Lchild: [LC]
      }
      this.setState({ data: [...this.state.data, addChild] }, () => {
         this.setState({formId:null,childKey:''})
         console.log(this.state.data, "dataMid")
      })

   }

   addUserForChilds = (id, cid, key) => {
      if(key == 'Lchild')
      {  console.log(id,key,'lchildsss')
         this.setState({saveId:true,message:'Fill Form for left child', formMainId: id, formChildId: cid, childKey: key ,fname:'',lastname:'',skype:'' ,phone:'',mail:'',address:'',Function:'',image:''})
      }else if(key == 'child'){
         console.log(id,key,'Rchildsss')
         this.setState({saveId:true,message:'Fill Form for right child', formMainId: id, formChildId: cid, childKey: key,fname:'',lastname:'',skype:'' ,phone:'',mail:'',address:'',Function:'',image:'' })
    
      }
      
   }
   rightClick = () => {
      console.log(this.state.formMainId,this.state.formChildId,'cheking')
      var rc = this.state.formChildId + 1;
      var ObjRC = {
         id: rc,
         key: 'RC',
         status: false,
         fname: '',
         address: '',
         skype: '',
         image:'',
         phone: '',
         mail: '',
         Function: '',
         lastname: '',
      }
      this.setState({
         data: this.state.data.filter(item => {
            if (item['id'] == this.state.formMainId) {
               item['Rchild'] = [...item['Rchild'], ObjRC];
               return item;
            }
            return item;
         })
      })
   }

   leftClick = () => {
      var lc = this.state.formChildId + 1;
      var ObjLC = {
         id: lc,
         key: 'LC',
         status: false,
         fname: '',
         address: '',
         skype: '',
         image:'',
         phone: '',
         mail: '',
         Function: '',
         lastname: '',
      }
      this.setState({
         data: this.state.data.filter(item => {
            if (item['id'] == this.state.formMainId) {
               item['Lchild'] = [...item['Lchild'], ObjLC];
               return item;
            }
            return item;
         })
      })
      
   }

   editLeftChild =(id,lid )=>{
      console.log('chekingss',id,lid)
   var displayDetail = this.state.data.find(item=>{
       if(item['id'] == id)
       { return item}
      })
    var foundData= displayDetail.Lchild.find(item=>{
       if(item['id']==lid)
       {return item}
    })
    this.setState({
      EditKey:'LeftChild',
      message:'You can update your left child',
      formMainId: id,
      formChildId: lid,
      fname: foundData.fname,
      address:  foundData.address,
      skype: foundData.skype,
      phone: foundData.phone,
      mail: foundData.mail,
      Function: foundData.Function,
      lastname: foundData.lastname,
      image: foundData.image,
      saveId: false
   })
    console.log(foundData,'displayDetail')
   }

   editRightChild =(id,rid )=>{
      var displayDetail = this.state.data.find(item=>{
          if(item['id'] == id)
          { return item}
         })
       var foundData= displayDetail.Rchild.find(item=>{
          if(item['id']==rid)
          {return item}
       })
       this.setState({
         EditKey:'RightChild',
         message:'You can update your right child',
         formMainId: id,
         formChildId: rid,
         fname: foundData.fname,
         address:  foundData.address,
         skype: foundData.skype,
         phone: foundData.phone,
         image: foundData.image,
         mail: foundData.mail,
         Function: foundData.Function,
         lastname: foundData.lastname,
         saveId: false
      })
       console.log(foundData,'displayDetail')
      }

      editMidChild = (id)=>{
         this.setState({message:`You can update, your id is: ${id}`})
         console.log('midChild ',id)
         var foundData = this.state.data.find(item=>{
            if(item['id'] == id)
            { return item}
           })
         this.setState({
           EditKey:'midChild',
           formId: id,
           fname: foundData.fname,
           address:  foundData.address,
           skype: foundData.skype,
           phone: foundData.phone,
           image: foundData.image,
           mail: foundData.mail,
           Function: foundData.Function,
           lastname: foundData.lastname,
           saveId: false
        })
         console.log(foundData,'displayDetail')
      }
    

   saveRightNode =()=>{
      this.setState({
         data: this.state.data.map(item => {
            if (item['id'] == this.state.formMainId) {
               item['Rchild'].filter((subItem) => {
                  if (subItem['id'] == this.state.formChildId) {
                     console.log(this.state.formMainId, this.state.formChildId, 'main')
                     subItem['status'] = true,
                     subItem['fname'] = this.state.fname,
                     subItem['lastname'] = this.state.lastname,
                     subItem['mail'] = this.state.mail,
                     subItem['Function'] = this.state.Function,
                     subItem['image'] = this.state.image
                     subItem['phone'] = this.state.phone,
                     subItem['skype'] = this.state.skype
                     subItem['address'] = this.state.address
                     return subItem;
                     // return item;
                  }
                  return subItem;
               })
               

            }
           
            return item;
         })
         
      }, () => {
        
         this.setState({ childKey: '',message:'Right Child Created Successfully',Function:'',fname:'',lastname:'',skype:'' ,phone:'',mail:'',address:'',image:'' })
         
      })
   }
   saveLeftNode = ()=>{
      this.setState({
         data: this.state.data.map(item => {
            if (item['id'] == this.state.formMainId) {
               item['Lchild'].filter((subItem) => {
                  if (subItem['id'] == this.state.formChildId) {
                     console.log(this.state.formMainId, this.state.formChildId, 'main')
                     subItem['status'] = true,
                     subItem['fname'] = this.state.fname,
                     subItem['lastname'] = this.state.lastname,
                     subItem['mail'] = this.state.mail,
                     subItem['Function'] = this.state.Function,
                     subItem['phone'] = this.state.phone,
                     subItem['skype'] = this.state.skype
                     subItem['image'] = this.state.image
                     subItem['address'] = this.state.address
                     return subItem;
                     // return item;
                  }
                  return subItem;
               })

            }
            return item
         })
      }, () => {
         this.setState({ childKey: '' ,message:'Left Child Created Successfully',fname:'',lastname:'',skype:'' ,phone:'',mail:'',address:'',Function:'',image:''})
      })
   }
   saveParentNode =()=>{
      this.setState({
         data: this.state.data.filter(item => {
            if (item['id'] == this.state.formId) {
               item['status'] = true,
               item['fname'] = this.state.fname,
               item['lastname'] = this.state.lastname,
               item['mail'] = this.state.mail,
               item['Function'] = this.state.Function,
               item['phone'] = this.state.phone,
               item['skype'] = this.state.skype
               item['image'] = this.state.image
               item['address'] = this.state.address
               return item;
            }
            return item;
         })
      },()=>{this.setState({saveId:true,message:'Successfully Registered.',fname:'',lastname:'',mail:'',Function:'',phone:'',skype:'',address:'',image:''})})
   }

   handleEdit = () =>{

      this.setState({saveId:true},()=>{ 
     if(this.state.EditKey == 'LeftChild'){
      this.saveLeftNode()
     }else  if(this.state.EditKey == 'RightChild'){
        this.saveRightNode()
     } else if(this.state.EditKey == 'midChild'){
        console.log('midd')
        this.saveParentNode();
     }
     
     })
     }
     handleSave = () => {
        if (this.state.childKey === 'child') {
           //Facade Pattern
           this.saveRightNode()
           this.rightClick()
        }else if (this.state.childKey === 'Lchild') {
           this.saveLeftNode()
           this.leftClick()
        }
         else if(this.state.childKey === 'mid'){
           this.saveParentNode();
           this.midClick()
        }
     }
     
   handleChange = (e) => {
      this.setState({
         [e.target.name]: e.target.value
      })
      console.log('this.state.currentAgent.name ', this.state.fname)
   }
   handleInput=(x)=>{
   console.log('dataFile',x[0].acceptedFile)
   this.setState({image:``},()=>{
   this.setState({image:`./assets/img/${x[0].acceptedFile}`})
   console.log('imagesss',this.state.image)
 })
   }
   render() {
      this.state.fetchData.map((item)=>{
         console.log('fetchAgents',item)
      })
   
      const displayTree = this.state.data.map((data, index) =>

      <div className={data.Lchild.length > 0 ? "added_row" : "without_row"}>
            <div className="boder_main" >
               <div className="boder_main_center" ></div>
             </div>

            {console.log('dataMap', data)}
            

         <div class="boxes">
            <div className="left_box">
            {Object.values(data.Lchild).map((subData, lid) =>
               subData.status == true ?
                  <div className="plus"  onClick={() => this.editLeftChild(data.id, subData.id)}>

                     <img src="./assets/img/user2.png" />
                     <p style={{ color: 'green' }}>added</p>
                  </div>
                  :
                  

                  <div className="plus" attr={lid}>
                  <img key={subData.id} src="./assets/img/close.png"  onClick={() => this.addUserForChilds(data.id, subData.id, 'Lchild')}  />
                  <p >add</p>
                  </div>
                  
                )}
            </div>
            <div className="first_box">
               <div className="mid">
                  {data.status === true ?
                     <div>
                        <div className="profile"  style={{ marginTop: "5px" }}>
                           <img src="./assets/img/user2.png"  onClick={() => this.editMidChild(data.id)}/>
                           <div className="text">
                              <p style={{ color: 'green' }}>added</p>
                           </div>
                        </div>

                     </div>
                     :
                     <div>
                        <div className="plus" >
                      <img key={index} src="./assets/img/close.png" onClick={() => this.addUser(index,'mid')}  />
                     <p>add</p>
                  </div>
                        

                     </div>
                  }
               </div>
            </div>

            <div className="third_box">
            {Object.values(data.Rchild).map((subData, rid) =>
               subData.status == true ?
                  <div className="plus" style={{ marginTop: '-45px' }} onClick={() => this.editRightChild(data.id, subData.id)}>

                     <img src="./assets/img/user2.png" />
                     <p style={{ color: 'green' }}>added</p>
                   
                  </div>
                  :
                  <div className="plus" attr={rid}>
                      <img key={subData.id} src="./assets/img/close.png"  onClick={() => this.addUserForChilds(data.id, subData.id, 'child')}  />
                     <p onClick={() => this.addUserForChilds(data.id, subData.id, 'child')}>add</p>
                  </div>


            )
            }</div>

         </div>
      </div>

      );

      return (
         <div className="agency">
            <div className="left_side">
            <FileUpload  getInput={this.handleInput}/>
               <h3>{this.state.message}</h3>              
                <div className="profile">
                  {this.state.saveId
                 ? <img src={this.state.image != ''? this.state.image : './assets/img/close.png'} alt='sorry' />
                  :<img src={this.state.image != ''? this.state.image : './assets/img/close.png'} alt='sorry' /> }
                   
                 </div>
               <div className="feild half">
                  <label>first name</label>
                  <input onChange={this.handleChange} type="text" name="fname" value={this.state.fname} placeholder="Name" />
               </div>
               <div className="feild half">
                  <label>Last Name </label>
                  <input onChange={this.handleChange} type="text" name="lastname" value={this.state.lastname} placeholder="Last name" />
               </div>
               <div className="feild">
                  <label>function</label>
                  <input onChange={this.handleChange} type="text" name="Function" value={this.state.Function} placeholder="Felix" />
               </div>
               <div className="feild">
                  <label>mail</label>
                  <input onChange={this.handleChange} type="text" name="mail" value={this.state.mail} placeholder="Felix" />
               </div>
               <div className="feild">
                  <label>Phone</label>
                  <input onChange={this.handleChange} type="text" name="phone" value={this.state.phone} placeholder="Felix" />
               </div>

               <div className="feild">
                  <label>skype</label>
                  <input onChange={this.handleChange} type="text" name="skype" value={this.state.skype} placeholder="Felix" />
               </div>
               <div className="feild">
                  <label>address</label>
                  <input onChange={this.handleChange} type="text" name="address" value={this.state.address} placeholder="Felix" />
               </div>
               <button color="primary" onClick={this.state.saveId ? this.handleSave : this.handleEdit}>Save</button>

            </div>





            <div className="right_side">
               {/* <DummyTree /> */}



               {/* <div className="profile" onClick={(event,value) => this.getProfile(event,1)}>
                  <img src="./assets/img/user2.png"/>
                     <div className="text">
                        <p>Name <span>Function</span></p>
                     </div>
               </div> */}
               {/* <div className="border"></div>
                  <div className="border_center">
                  </div> */}
               <div className="center">

                  {/* <div className="profile fl"  onClick={(event,value) => this.getProfile(event,2)}>
                           <img src="./assets/img/user2.png"/> */}
                  {/* <div className="text">
                                 <p>Name <span>Function</span></p>
                              </div> */}
                  {/* </div>
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
                  <p>Add</p> */}


                  <div class="added_center">{displayTree}</div>


               </div></div>
         </div>
      )
   }
}
export default Agency