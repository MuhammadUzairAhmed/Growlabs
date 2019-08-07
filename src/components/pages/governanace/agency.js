import React, { Component } from 'react';
import $ from 'jquery';
// import DummyTree from './dummyTree';


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
         formSubmitted: false,
         editId:null,
         editSubId:null,
         saveId:true,
         index: [],
         EditKey:null,
         numbers: [

         ],
         rightUser: [

         ],
         leftUser: [

         ],
         agentDetail:[]

      }
   }
   componentDidMount() {
      fetch("http://demo2532200.mockable.io/milestone")
         .then(res => res.json())
         .then(data => JSON.stringify(data));
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
   midClick = () => {
      
      var RC = {
         id: 0,
         key: 'RC',
         status: false
      }
      var LC = {
         id: 0,
         key: 'LC',
         status: false,
         fname:'',
         lname:''
      }
      var addChild =
      {
         id: this.state.formId + 1,
         key: 'mid',
         status: false,
         Rchild: [RC],
         Lchild: [LC]
      }
      this.setState({ data: [...this.state.data, addChild] }, () => {
         console.log(this.state.data, "dataMid")
      })

   }

   rightClick = () => {
      console.log(this.state.formMainId,this.state.formChildId,'cheking')
      var rc = this.state.formChildId + 1;
      var ObjRC = {
         id: rc,
         key: 'RC',
         status: false,
         fname: '',
         lname: ''
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
   editLeftChild =(id,lid )=>{
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
      editId: id,
      editSubId: lid,
      fname:foundData.fname,
      lastname: foundData.lname,
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
         editId: id,
         editSubId: rid,
         fname:foundData.fname,
         lastname: foundData.lname,
         saveId: false
      })
       console.log(foundData,'displayDetail')
      }

   leftClick = () => {
      var lc = this.state.formChildId + 1;
      var ObjLC = {
         id: lc,
         key: 'LC',
         status: false,
         fname: '',
         lname: ''
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

   addUser = (id,key) => {
      this.setState({ formId: id, childKey: key })
      console.log(id)
   }

  
   addUserForChilds = (id, cid, key) => {
      this.setState({ formMainId: id, formChildId: cid, childKey: key })
   }
   handleEdit = () =>{
    this.setState({saveId:true},()=>{ 
       if(this.state.EditKey == 'LeftChild'){
      this.setState({
         data: this.state.data.map(item => {
            if (item['id'] == this.state.editId) {
               item['Lchild'].filter((subItem) => {
                  if (subItem['id'] == this.state.editSubId) {
                    subItem['status'] = true;
                    subItem['fname'] = this.state.fname;
                    subItem['lname'] = this.state.lastname;
                     return subItem;
                     // return item;
                  }
                  return subItem;
               })
            }
           return item;
         })
         
      }, () => {
        
         this.setState({ childKey: '',fname:'',lastname:'' })
        console.log('saveId',this.state.saveId) 
      })
   }else  if(this.state.EditKey == 'RightChild'){
      this.setState({
         data: this.state.data.map(item => {
            if (item['id'] == this.state.editId) {
               item['Rchild'].filter((subItem) => {
                  if (subItem['id'] == this.state.editSubId) {
                    subItem['status'] = true;
                    subItem['fname'] = this.state.fname;
                    subItem['lname'] = this.state.lastname;
                     return subItem;
                     // return item;
                  }
                  return subItem;
               })
            }
           return item;
         })
         
      }, () => {
        
         this.setState({ childKey: '',fname:'',lastname:'' })
        console.log('saveId',this.state.saveId) 
      })
   }
   
   
   })
   }
   handleSave = () => {
      if (this.state.childKey === 'child') {
         this.setState({
            data: this.state.data.map(item => {
               if (item['id'] == this.state.formMainId) {
                  item['Rchild'].filter((subItem) => {
                     if (subItem['id'] == this.state.formChildId) {
                        console.log(this.state.formMainId, this.state.formChildId, 'main')
                        subItem['status'] = true;
                        subItem['fname'] = this.state.fname;
                        subItem['lname'] = this.state.lastname;
                        return subItem;
                        // return item;
                     }
                     return subItem;
                  })
                  

               }
              
               return item;
            })
            
         }, () => {
           
            this.setState({ childKey: '' })
            
         })
         this.rightClick()
      }else if (this.state.childKey === 'Lchild') {
         this.setState({
            data: this.state.data.map(item => {
               if (item['id'] == this.state.formMainId) {
                  item['Lchild'].filter((subItem) => {
                     if (subItem['id'] == this.state.formChildId) {
                        console.log(this.state.formMainId, this.state.formChildId, 'main')
                        subItem['status'] = true;
                        subItem['fname'] = this.state.fname;
                        subItem['lname'] = this.state.lastname;
                        return subItem;
                        // return item;
                     }
                     return subItem;
                  })

               }
               return item
            })
         }, () => {
            this.setState({ childKey: '' })
         })
         this.leftClick()
      }
       else if(this.state.childKey === 'mid'){
         this.setState({
            data: this.state.data.filter(item => {
               if (item['id'] == this.state.formId) {
                  item['status'] = true;
                  return item;
               }
               return item;
            })
         })
         this.midClick()
      }
   }
   handleChange = (e) => {
      this.setState({
         [e.target.name]: e.target.value
      })
      console.log('this.state.currentAgent.name ', this.state.fname)
   }
   render() {

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
                  // <div className="plus_Function" attr={rid}>
                  //    <div className="plus_Function_img" >
                  //         <img key={subData.id} src="./assets/img/user2.png"onClick={() => this.addUserForChilds(data.id, subData.id, 'Lchild')} />
                  //    </div>
                  //    <div className="plus_Function_text" >
                  //       <h3>Name</h3>
                  //       <p onClick={() => this.addUserForChilds(data.id, subData.id, 'Lchild')}>add</p>
                  //    </div>

                  // </div>

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
                        <div className="profile" onClick={() => this.midClick(index)} style={{ marginTop: "5px" }}>
                           <img src="./assets/img/user2.png" />
                           <div className="text">
                              <p style={{ color: 'green' }}>added</p>
                           </div>
                        </div>

                     </div>
                     :
                     <div>
                        <div className="plus" >
                      <img key={index} src="./assets/img/close.png" onClick={() => this.addUser(index,'mid')}  />
                     <p >add</p>
                  </div>
                        {/* <div className="plus_Function" >
                           <div className="plus_Function_img" >
                              <img src="./assets/img/close.png" onClick={() => this.addUser(index,'mid')} />
                              
                           </div>

                           <div className="plus_Function_text" >
                             <h3>Name</h3>
                             <p onClick={() => this.addUser(index)}>Function</p>
                           </div>
                        </div> */}

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
                     {/* <div className="text">
                            <p>Added</p>
                         </div> */}
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
               <div className="profile">
                  {this.state.saveId
                 ? <img typeof="file" src={this.state.currentAgent.image} />
                  :<img src="./assets/img/user2.png" />}
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