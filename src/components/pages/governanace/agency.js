import React, { Component } from 'react';
import $ from 'jquery';
import FileUpload from './../governanace/contractComponents/FileUpload';
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
         activeLeftContainer:'',
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
               image: '',
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
         image: '',
         formSubmitted: false,
         editId: null,
         editSubId: null,
         saveId: true,
         index: [],
         EditKey: null,
         message: '',
         numbers: [

         ],
         rightUser: [

         ],
         leftUser: [

         ],
         agentDetail: [],
         fetchData: []

      }
   }
   componentDidMount() {

      if(this.props.storedDetail != '' && this.props.chek == 'Predashboard')
      {
         this.setState({data:this.props.storedDetail})
      }
      
      const method = "POST";
      const body = new FormData(this.form);

      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      fetch(proxyurl+"http://react2.zepcomtesting.com/api/milestone.json", { method, body: {} })
         .then(res => res.json())
         .then(data => JSON.stringify(data));

      fetch(proxyurl+"http://react2.zepcomtesting.com/api/agent.json")
         .then(res => res.json())
         .then(data =>
            this.setState({ fetchData: data.agents }, () => {
               console.log(this.state.fetchData, 'agent')
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
   midClick = () => {

      var RC = {
         id: 0,
         key: 'RC',
         status: false,
         fname: '',
         address: '',
         skype: '',
         phone: '',
         image: '',
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
         image: '',
         phone: '',
         mail: '',
         Function: '',
         lastname: ''
      }
      var addChild =
      {
         id: this.state.formId + 1,
         key: 'mid',
         status: false,
         fname: '',
         address: '',
         skype: '',
         image: '',
         phone: '',
         mail: '',
         Function: '',
         lastname: '',
         Rchild: [RC],
         Lchild: [LC]
      }
      this.setState({ data: [...this.state.data, addChild] }, () => {
         this.setState({ formId: null, childKey: '' })
         if(this.props.chek  && this.props.chek == 'Predashboard')
         {this.props.getValues(this.state.data)}
         console.log(this.state.data, "dataMid")
      })

   }

   rightClick = () => {
      console.log(this.state.formMainId, this.state.formChildId, 'cheking')
      var rc = this.state.formChildId + 1;
      var ObjRC = {
         id: rc,
         key: 'RC',
         status: false,
         fname: '',
         address: '',
         skype: '',
         image: '',
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
      },()=>{
         if(this.props.chek  && this.props.chek == 'Predashboard')
         {this.props.getValues(this.state.data)}
      })
   }
   editLeftChild = (id, lid) => {
      console.log('chekingss', id, lid)
      var displayDetail = this.state.data.find(item => {
         if (item['id'] == id) { return item }
      })
      var foundData = displayDetail.Lchild.find(item => {
         if (item['id'] == lid) { return item }
      })
      this.setState({
         activeLeftContainer: 'active',
         EditKey: 'LeftChild',
         message: 'You can update your left child',
         editId: id,
         editSubId: lid,
         fname: foundData.fname,
         address: foundData.address,
         skype: foundData.skype,
         phone: foundData.phone,
         mail: foundData.mail,
         Function: foundData.Function,
         lastname: foundData.lastname,
         image: foundData.image,
         saveId: false
      })
      console.log(foundData, 'displayDetail')
   }

   editRightChild = (id, rid) => {
      var displayDetail = this.state.data.find(item => {
         if (item['id'] == id) { return item }
      })
      var foundData = displayDetail.Rchild.find(item => {
         if (item['id'] == rid) { return item }
      })
      this.setState({
         activeLeftContainer: 'active',
         EditKey: 'RightChild',
         message: 'You can update your right child',
         editId: id,
         editSubId: rid,
         fname: foundData.fname,
         address: foundData.address,
         skype: foundData.skype,
         phone: foundData.phone,
         image: foundData.image,
         mail: foundData.mail,
         Function: foundData.Function,
         lastname: foundData.lastname,
         saveId: false
      })
      console.log(foundData, 'displayDetail')
   }

   editMidChild = (id) => {
      this.setState({activeLeftContainer:'active', message: `You can update, your id is: ${id}` })
      console.log('midChild ', id)
      var foundData = this.state.data.find(item => {
         if (item['id'] == id) { return item }
      })
      this.setState({
         EditKey: 'midChild',
         editId: id,
         fname: foundData.fname,
         address: foundData.address,
         skype: foundData.skype,
         phone: foundData.phone,
         image: foundData.image,
         mail: foundData.mail,
         Function: foundData.Function,
         lastname: foundData.lastname,
         saveId: false
      })
      console.log(foundData, 'displayDetail')
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
         image: '',
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
      },()=>{
         if(this.props.chek  && this.props.chek == 'Predashboard')
         {this.props.getValues(this.state.data)}
         
      })

   }

   addUser = (id, key) => {
      this.setState({activeLeftContainer: 'active', saveId: true, message: 'Please Fill The Form', formId: id, childKey: key,fname:'',lastname:'',mail:'',Function:'',phone:'',skype:'',address:'',image:'' })
      console.log('here comes')
   }


   addUserForChilds = (id, cid, key) => {

      this.setState({activeLeftContainer: 'active'})
      if (key == 'Lchild') {
         console.log(id, key, 'lchildsss')
         this.setState({ saveId: true, message: 'Fill Form for left child', formMainId: id, formChildId: cid, childKey: key,fname:'',lastname:'',mail:'',Function:'',phone:'',skype:'',address:'',image:'' })
      } else if (key == 'child') {
         console.log(id, key, 'Rchildsss')
         this.setState({ saveId: true, message: 'Fill Form for right child', formMainId: id, formChildId: cid, childKey: key,fname:'',lastname:'',mail:'',Function:'',phone:'',skype:'',address:'',image:'' })

      }

   }
   handleEdit = () => {
      this.setState({activeLeftContainer:''})
      this.setState({ saveId: true }, () => {
         if (this.state.EditKey == 'LeftChild') {
            this.setState({
               data: this.state.data.map(item => {
                  if (item['id'] == this.state.editId) {
                     item['Lchild'].filter((subItem) => {
                        if (subItem['id'] == this.state.editSubId) {
                           subItem['status'] = true,
                              subItem['fname'] = this.state.fname,
                              subItem['lastname'] = this.state.lastname
                           subItem['mail'] = this.state.mail
                           subItem['Function'] = this.state.Function
                           subItem['phone'] = this.state.phone
                           subItem['skype'] = this.state.skype
                           subItem['image'] = this.state.image
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

               this.setState({ childKey: '', fname: '', lastname: '', skype: '', phone: '', mail: '', address: '', Function: '', message: 'Successfully Updated Left Child', image: '' })
               if(this.props.chek  && this.props.chek == 'Predashboard')
                  {this.props.getValues(this.state.data)}
               console.log('saveId', this.state.saveId)
            })
         } else if (this.state.EditKey == 'RightChild') {
            this.setState({
               data: this.state.data.map(item => {
                  if (item['id'] == this.state.editId) {
                     item['Rchild'].filter((subItem) => {
                        if (subItem['id'] == this.state.editSubId) {
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
                  return item;
               })

            }, () => {

               this.setState({ childKey: '', fname: '', lastname: '', skype: '', phone: '', mail: '', address: '', Function: '', message: 'Successfully Updated Right Child', image: '' })
               if(this.props.chek  && this.props.chek == 'Predashboard')
                  {this.props.getValues(this.state.data)}
               console.log('saveId', this.state.saveId)
            })
         } else if (this.state.EditKey == 'midChild') {
            console.log('midd')
            this.setState({
               data: this.state.data.filter(item => {
                  if (item['id'] == this.state.editId) {
                     item['status'] = true;
                     item['fname'] = this.state.fname;
                     item['lastname'] = this.state.lastname;
                     item['skype'] = this.state.skype
                     item['phone'] = this.state.phone
                     item['image'] = this.state.image
                     item['mail'] = this.state.mail
                     item['address'] = this.state.address
                     return item
                  }
                  return item;
               })
            }, () => {

               this.setState({ saveId: true, message: 'Successfully Updated', childKey: '', fname: '', lastname: '', skype: '', phone: '', mail: '', address: '', Function: '', image: '' })
               if(this.props.chek  && this.props.chek == 'Predashboard')
                  {this.props.getValues(this.state.data)}
               console.log('saveId', this.state.saveId)
            })
         }


      })
   }
   handleSave = () => {
      this.setState({activeLeftContainer:''})
      if (this.state.childKey === 'child') {
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
                           subItem['image'] = this.state.image,
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

            this.setState({ childKey: '', message: 'Right Child Created Successfully', Function: '', fname: '', lastname: '', skype: '', phone: '', mail: '', address: '', image: '' })

         })
         if(this.state.formChildId < 1){
         this.rightClick()}
      } else if (this.state.childKey === 'Lchild') {
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
            this.setState({ childKey: '', message: 'Left Child Created Successfully', fname: '', lastname: '', skype: '', phone: '', mail: '', address: '', Function: '', image: '' })
         })
         if(this.state.formChildId < 1){
         this.leftClick()}
      }
      else if (this.state.childKey === 'mid') {
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
         }, () => { this.setState({ saveId: true, message: 'Successfully Registered.', fname: '', lastname: '', mail: '', Function: '', phone: '', skype: '', address: '', image: '' }) })
         this.midClick()
      }
   }
   handleChange = (e) => {
      this.setState({
         [e.target.name]: e.target.value
      })
      console.log('this.state.currentAgent.name ', this.state.fname)
   }
   handleInput = (x) => {
      console.log('dataFile', x[0].acceptedFile)
      this.setState({ image: `` }, () => {
         this.setState({ image: `./assets/img/${x[0].acceptedFile}` })
         console.log('imagesss', this.state.image)
      })
   }
   render() {
      this.state.fetchData.map((item) => {
         console.log('fetchAgents', item)
      })

      const displayTree = this.state.data.map((data, index) =>

         <div className={data.Lchild.length > 0 ? "added_row" : "without_row"}>
            <div className="boder_main" >
               <div className="boder_main_center" ></div>
            </div>

            {console.log('dataMap', data)}
            {/* <ul>
               <li>
                  <div className="plus">
                     <img src="./assets/img/close.png" />
                     <p >add</p>
                  </div>
               </li>
               <li>
                  <div className="plus">
                     <img src="./assets/img/close.png" />
                     <p >add</p>
                  </div>
                  <ul>
                     <li>
                     <div className="plus">
                        <img src="./assets/img/close.png" />
                        <p >add</p>
                     </div>
                     </li>
                  </ul>
               </li>
               <li>
                  <div className="plus">
                     <img src="./assets/img/close.png" />
                     <p >add</p>
                  </div>
               </li>
            </ul> */}
           
            <div class="boxes">
               <div className="left_box">
                  {Object.values(data.Lchild).map((subData, lid) =>
                     subData.status == true ?
                        <div className="profile"  attr={lid} onClick={() => this.editLeftChild(data.id, subData.id)}>
                           <div className="profile_img">
                              {subData.image == '' ? <img src="./assets/img/user2.png" /> : <img src={subData.image} class="profile-fix-img"/>}
                           </div>
                           <div className="text">
                              <h3>{subData.fname}</h3>
                              <p>{subData.Function}</p>
                           </div>
                        </div>
                        :


                        <div className="plus" attr={lid}>
                           <img key={subData.id} src="./assets/img/close.png" onClick={() => this.addUserForChilds(data.id, subData.id, 'Lchild')} />
                           <p >add</p>
                        </div>

                  )}
               </div>
               <div className="first_box">
                  <div className="mid">
                     {data.status === true ?
                        <div className="profile">
                           <div className="profile_img">
                               {data.image == '' ? <img src="./assets/img/user2.png" /> : <img src={data.image} onClick={() => this.editMidChild(data.id)}  class="profile-fix-img"/>}
                           </div>
                              <div className="text">
                              <h3>{data.fname}</h3>
                              <p>{data.Function}</p>
                              </div>
                        </div>

                        :
                        <div>
                           <div className="plus">
                              <img key={index} src="./assets/img/close.png" onClick={() => this.addUser(index, 'mid')} />
                              <p>add</p>
                           </div>


                        </div>
                     }
                  </div>
               </div>

               <div className="third_box">
                  {Object.values(data.Rchild).map((subData, rid) =>
                     subData.status == true ?
                        <div className="profile"  attr={rid} onClick={() => this.editRightChild(data.id, subData.id)}> 
                           <div className="profile_img">
                              {subData.image == '' ? <img src="./assets/img/user2.png" /> : <img src={subData.image} class="profile-fix-img"/>}
                           </div>
                           <div className="text">
                              <h3>{subData.fname}</h3>
                              <p>{subData.Function}</p>
                           </div>
                        </div>
                        :
                        <div className="plus" attr={rid}>
                           <img key={subData.id} src="./assets/img/close.png" onClick={() => this.addUserForChilds(data.id, subData.id, 'child')} />
                           <p >add</p>
                        </div>


                  )
                  }</div>

            </div>
         </div>

      );

      return (
         <div className="agency">
            <div className={this.state.activeLeftContainer == 'active'?"left_side active": "left_side"}>
           
               <div className="profile">
                  {/* {this.state.saveId
                     ? <img src={this.state.image != '' ? this.state.image : './assets/img/user2.png'} alt='sorry' className={} />
                     : <img src={this.state.image != '' ? this.state.image : './assets/img/close.png'} alt='sorry' />} */}
<img src={this.state.image != '' ? this.state.image : './assets/img/user2.png'} alt='sorry' className={this.state.image != '' ? "upload_user":"blank_user"} />
<div className="proflie_upload">
               <FileUpload getInput={this.handleInput} getInput1='' />
              </div>
               </div>
               <div className="feild half">
                  <label>first name</label>
                  <input onChange={this.handleChange} type="text" name="fname" className={this.state.fname !=  '' ? 'active':''} value={this.state.fname} placeholder="Name" />
               </div>
               <div className="feild half">
                  <label>Last Name </label>
                  <input onChange={this.handleChange} type="text" name="lastname" className={this.state.lastname !=  '' ? 'active':''} value={this.state.lastname} placeholder="Last name" />
               </div>
               <div className="feild">
                  <label>function</label>
                  <input onChange={this.handleChange} type="text" name="Function"  className={this.state.Function !=  '' ? 'active':''} value={this.state.Function} placeholder="Felix" />
               </div>
               <div className="feild">
                  <label>mail</label>
                  <input onChange={this.handleChange} type="text" name="mail" className={this.state.mail !=  '' ? 'active':''} value={this.state.mail} placeholder="Felix" />
               </div>
               <div className="feild">
                  <label>Phone</label>
                  <input onChange={this.handleChange} type="text" name="phone" className={this.state.phone !=  '' ? 'active':''} value={this.state.phone} placeholder="Felix" />
               </div>

               <div className="feild">
                  <label>skype</label>
                  <input onChange={this.handleChange} type="text" name="skype" className={this.state.skype !=  '' ? 'active':''} value={this.state.skype} placeholder="Felix" />
               </div>
               <div className="feild">
                  <label>address</label>
                  <input onChange={this.handleChange} type="text" name="address" className={this.state.address !=  '' ? 'active':''} value={this.state.address} placeholder="Felix" />
               </div>
               <button color="primary" onClick={this.state.saveId ? this.handleSave : this.handleEdit}>Save</button>

            </div>





            <div className="right_side">

               <div className="center">

                  <div class="added_center">{displayTree}</div>


               </div></div>
         </div>
      )
   }
}
export default Agency