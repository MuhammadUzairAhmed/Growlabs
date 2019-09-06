import React,{Component} from 'react';
import { MDBDataTable } from 'mdbreact';
import FileUpload from './../../../pages/governanace/contractComponents/FileUpload'
import $ from 'jquery'

var sortedList;
class DatatablePage extends Component{
  constructor(props){
    super(props)
    this.state={
      vo:1,
      vo2:1,
      vo3:1,
      img:'',
      deletedMP:[],
      deletedMTS:[],
      manageTestData:[
        {id:1,clientName:'Gbc',clientEmail:'xyz@gmail.com',test:'test7',clientCompany:'abc.com',testinomialPosted:'yes',sentDate:'october 11,2018 4:27 pm'},
        {id:2,clientName:'Fbc',clientEmail:'xyz@gmail.com',test:'test7',clientCompany:'abc.com',testinomialPosted:'yes',sentDate:'october 11,2018 4:27 pm'},
        {id:3,clientName:'HGbc',clientEmail:'xyz@gmail.com',test:'test7',clientCompany:'abc.com',testinomialPosted:'yes',sentDate:'october 11,2018 4:27 pm'},
        {id:5,clientName:'ZGbc',clientEmail:'xyz@gmail.com',test:'test7',clientCompany:'abc.com',testinomialPosted:'yes',sentDate:'october 11,2018 4:27 pm'},
        {id:6,clientName:'XGbc',clientEmail:'xyz@gmail.com',test:'test7',clientCompany:'abc.com',testinomialPosted:'yes',sentDate:'october 11,2018 4:27 pm'},
        {id:7,clientName:'YGbc',clientEmail:'xyz@gmail.com',test:'test7',clientCompany:'abc.com',testinomialPosted:'yes',sentDate:'october 11,2018 4:27 pm'},
        {id:8,clientName:'QGbc',clientEmail:'xyz@gmail.com',test:'test7',clientCompany:'abc.com',testinomialPosted:'yes',sentDate:'october 11,2018 4:27 pm'},
        {id:9,clientName:'UGbc',clientEmail:'xyz@gmail.com',test:'test7',clientCompany:'abc.com',testinomialPosted:'yes',sentDate:'october 11,2018 4:27 pm'},
        {id:10,clientName:'IGbc',clientEmail:'xyz@gmail.com',test:'test7',clientCompany:'abc.com',testinomialPosted:'yes',sentDate:'october 11,2018 4:27 pm'},
        {id:11,clientName:'LGbc',clientEmail:'xyz@gmail.com',test:'test7',clientCompany:'abc.com',testinomialPosted:'yes',sentDate:'october 11,2018 4:27 pm'},
        {id:12,clientName:'AGbc',clientEmail:'xyz@gmail.com',test:'test7',clientCompany:'abc.com',testinomialPosted:'yes',sentDate:'october 11,2018 4:27 pm'},
      ],
    manageTestinomialData:[
      {id:1,clientName:'Gbc',clientEmail:'xyz@gmail.com',test:'test7',clientCompany:'abc.com',testinomialPosted:'yes',sentDate:'october 11,2018 4:27 pm'},
      {id:2,clientName:'Fbc',clientEmail:'xyz@gmail.com',test:'test7',clientCompany:'abc.com',testinomialPosted:'yes',sentDate:'october 11,2018 4:27 pm'},
      {id:3,clientName:'HGbc',clientEmail:'xyz@gmail.com',test:'test7',clientCompany:'abc.com',testinomialPosted:'yes',sentDate:'october 11,2018 4:27 pm'},
      {id:4,clientName:'AGbc',clientEmail:'xyz@gmail.com',test:'test7',clientCompany:'abc.com',testinomialPosted:'yes',sentDate:'october 11,2018 4:27 pm'},
      {id:5,clientName:'ZGbc',clientEmail:'xyz@gmail.com',test:'test7',clientCompany:'abc.com',testinomialPosted:'yes',sentDate:'october 11,2018 4:27 pm'},
      {id:6,clientName:'xGbc',clientEmail:'xyz@gmail.com',test:'test7',clientCompany:'abc.com',testinomialPosted:'yes',sentDate:'october 11,2018 4:27 pm'},
      {id:7,clientName:'yGbc',clientEmail:'xyz@gmail.com',test:'test7',clientCompany:'abc.com',testinomialPosted:'yes',sentDate:'october 11,2018 4:27 pm'},
      {id:8,clientName:'qGbc',clientEmail:'xyz@gmail.com',test:'test7',clientCompany:'abc.com',testinomialPosted:'yes',sentDate:'october 11,2018 4:27 pm'},
      {id:9,clientName:'uGbc',clientEmail:'xyz@gmail.com',test:'test7',clientCompany:'abc.com',testinomialPosted:'yes',sentDate:'october 11,2018 4:27 pm'},
      {id:10,clientName:'mGbc',clientEmail:'xyz@gmail.com',test:'test7',clientCompany:'abc.com',testinomialPosted:'yes',sentDate:'october 11,2018 4:27 pm'},
      {id:11,clientName:'LGbc',clientEmail:'xyz@gmail.com',test:'test7',clientCompany:'abc.com',testinomialPosted:'yes',sentDate:'october 11,2018 4:27 pm'},
      {id:12,clientName:'AGbc',clientEmail:'xyz@gmail.com',test:'test7',clientCompany:'abc.com',testinomialPosted:'yes',sentDate:'october 11,2018 4:27 pm'},
      {id:13,clientName:'MGbc',clientEmail:'xyz@gmail.com',test:'test7',clientCompany:'abc.com',testinomialPosted:'yes',sentDate:'october 11,2018 4:27 pm'},
      {id:14,clientName:'LKGbc',clientEmail:'xyz@gmail.com',test:'test7',clientCompany:'abc.com',testinomialPosted:'yes',sentDate:'october 11,2018 4:27 pm'},
  ],
  managePortfolioData:[
    {id:1,title:'obc',type:'xyz@gmail.com',category:'test7',link:'abc.com',addedOn:'yes',action:'october 11,2018 4:27 pm'},
    {id:2,title:'abc',type:'xyz@gmail.com',category:'test7',link:'abc.com',addedOn:'yes',action:'october 11,2018 4:27 pm'},
    {id:3,title:'hbc',type:'xyz@gmail.com',category:'test7',link:'abc.com',addedOn:'yes',action:'october 11,2018 4:27 pm'},
    {id:4,title:'kbc',type:'xyz@gmail.com',category:'test7',link:'abc.com',addedOn:'yes',action:'october 11,2018 4:27 pm'},
    {id:5,title:'lbc',type:'xyz@gmail.com',category:'test7',link:'abc.com',addedOn:'yes',action:'october 11,2018 4:27 pm'},
    {id:6,title:'zbc',type:'xyz@gmail.com',category:'test7',link:'abc.com',addedOn:'yes',action:'october 11,2018 4:27 pm'},
    {id:7,title:'xbc',type:'xyz@gmail.com',category:'test7',link:'abc.com',addedOn:'yes',action:'october 11,2018 4:27 pm'},
    {id:8,title:'bbc',type:'xyz@gmail.com',category:'test7',link:'abc.com',addedOn:'yes',action:'october 11,2018 4:27 pm'},
    {id:9,title:'mbc',type:'xyz@gmail.com',category:'test7',link:'abc.com',addedOn:'yes',action:'october 11,2018 4:27 pm'},
    
],
      paginationdummymanageTest:[],
      paginationmanageTest:[],
      finalmanageTest:[{id:0}],

      paginationdummymanageTestinomial:[],
      paginationmanageTestinomial:[],
      finalmanageTestinomial:[{id:0}],


      paginationdummymanagePorfolio:[],
      paginationmanagePortfolio:[],
      finalmanagePortfolio:[{id:0}],

      unsortMT:false,
      unsortMP:false,
      unsortMTS:false,
      itemIdMT:1,
      itemIdMTS:1,
      itemIdMP:1,
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
      deletedMT:[],
      countId:2,
      addTestinomial: false,
       clientName: '',
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
       result:'',

       x1:'',
       x2:'',
       x3:'',
       x4:'',
       x5:'',
       x6:'',
       x7:'',
       x8:'',
       x9:'',
       x10:'',
      }
    }
  
    componentDidMount(){
     this.manageTest()
     this.manageTestinomial()
     this.managePortfolio()
   }
   manageTest =()=>{
    this.setState({paginationdummymanageTest: []})
    var lengthForinvitedDataPagination = this.state.manageTestData.length/3;
        var arraysinvited = [];
        lengthForinvitedDataPagination = Math.ceil(lengthForinvitedDataPagination);
        for(var i=0  ;i< lengthForinvitedDataPagination ;i++)
        {
            this.state.paginationdummymanageTest.push(i+1)
        }
        for(var j=0 ;j<3 ;j++)
            {   
                if(this.state.manageTestData[j] != undefined)
                {
                    arraysinvited.push(this.state.manageTestData[j])
                }
        }
        this.setState({paginationmanageTest: this.state.paginationdummymanageTest,finalmanageTest:arraysinvited})
    }
    manageTestinomial =()=>{
      
      var lengthForinvitedDataPagination = this.state.manageTestinomialData.length/3;
          var arraysinvited = [];
          lengthForinvitedDataPagination = Math.ceil(lengthForinvitedDataPagination);
          for(var i=0  ;i< lengthForinvitedDataPagination ;i++)
          {
              this.state.paginationdummymanageTestinomial.push(i+1)
          }
          for(var j=0 ;j<3 ;j++)
              {   
                  if(this.state.manageTestinomialData[j] != undefined)
                  {
                      arraysinvited.push(this.state.manageTestinomialData[j])
                  }
          }
          this.setState({paginationmanageTestinomial: this.state.paginationdummymanageTestinomial,finalmanageTestinomial:arraysinvited})
      }
      managePortfolio =()=>{
        this.setState({paginationdummymanagePorfolio: []})
        var lengthForinvitedDataPagination = this.state.managePortfolioData.length/3;
            var arraysinvited = [];
            lengthForinvitedDataPagination = Math.ceil(lengthForinvitedDataPagination);
            for(var i=0  ;i< lengthForinvitedDataPagination ;i++)
            {
                this.state.paginationdummymanagePorfolio.push(i+1)
            }
            for(var j=0 ;j<3 ;j++)
                {   
                    if(this.state.managePortfolioData[j] != undefined)
                    {
                        arraysinvited.push(this.state.managePortfolioData[j])
                    }
            }
            this.setState({paginationmanagePortfolio: this.state.paginationdummymanagePorfolio,finalmanagePortfolio:arraysinvited})
        }
    changePage =(id,key)=>{
      console.log(id,key,'chekeddd')
     if(key== 'manageTest' && id <= Math.ceil(this.state.manageTestData.length/3) && id > 0 ){
      this.setState({itemIdMT:id},()=>{
        console.log(this.state.itemIdMT,'itemIdMT')
           var count =0;
           var arr = [];
           for(var i=0; i< this.state.itemIdMT ;i++)
           {  arr = [];
               for(var j=count ;j<count+3 ;j++)
               {  
                    this.setState({unsortMT: false}) 
                    // $("#row1").fadeOut();
                       if(this.state.manageTestData[j] != undefined){arr.push(this.state.manageTestData[j])}
                }
               count = count+3;
           }
          this.setState({finalmanageTest:arr})
         })}

         if(key== 'manageTestinomial' && id <= Math.ceil(this.state.manageTestinomialData.length/3) && id > 0){
          this.setState({itemIdMTS:id},()=>{
            console.log(this.state.itemIdMTS,'itemIdMT')
               var count =0;
               var arr = [];
               for(var i=0; i< this.state.itemIdMTS ;i++)
               {
                   arr = [];
                   for(var j=count ;j<count+3 ;j++)
                   {  
                      
                       this.setState({unsortMTS: false})
                        // $("#row2").fadeOut(1000);
                           if(this.state.manageTestinomialData[j] != undefined){arr.push(this.state.manageTestinomialData[j])}
                   }
                   count = count+3;
               }
               this.setState({finalmanageTestinomial:arr})
               })}

               if(key== 'managePortfolio' && id <= Math.ceil(this.state.managePortfolioData.length/3) && id > 0){
              this.setState({itemIdMP:id},()=>{
                console.log(this.state.itemIdMP,'itemIdMT')
                   var count =0;
                   var arr = [];
                   for(var i=0; i< this.state.itemIdMP ;i++)
                   {
                       arr = [];
                       for(var j=count ;j<count+3 ;j++)
                       {  
                          this.setState({unsortMP: false}) 
                            // $("#row3").fadeOut(1000);
                               if(this.state.managePortfolioData[j] != undefined){arr.push(this.state.managePortfolioData[j])}
                      }
                       
                       count = count+3;
                   }
                  this.setState({finalmanagePortfolio:arr})
                  })}
   }
   sorting =(key)=>{
     console.log(key,'keyss')
    if(key == 'manageTest'){
      $("#row1").fadeOut(1000);
      this.setState({unsortMT: true})
    sortedList=  this.state.finalmanageTest.sort((a, b) => {
        return (a.clientName > b.clientName ?1 : -1);
    }); $("#row1").fadeIn(1000);this.setState({finalmanageTest:sortedList})}  
    else if(key== 'manageTestUnsort'){
      $("#row1").fadeOut(1000);
      this.setState({unsortMT: false})
      sortedList=  this.state.finalmanageTest.sort((a, b) => {
        return (  b.clientName - a.clientName ? 1 : -1);
    }); $("#row1").fadeIn(1000);this.setState({finalmanageTest:sortedList})
    }

    if(key == 'manageTestinomial'){
      $("#row2").fadeOut(1000);
        this.setState({unsortMTS: true})
        sortedList=  this.state.finalmanageTestinomial.sort((a, b) => {
            return (a.clientName > b.clientName ?1 : -1);
        });$("#row2").fadeIn(1000);this.setState({finalmanageTestinomial:sortedList})}
        else if(key== 'unsortmanageTestinomial'){
          $("#row2").fadeOut(1000);
          this.setState({unsortMTS: false})
          sortedList=  this.state.finalmanageTestinomial.sort((a, b) => {
            return (  b.clientName - a.clientName ? 1 : -1);
        });
        $("#row2").fadeIn(1000);
        this.setState({finalmanageTestinomial:sortedList})
        }
         
        
    if(key == 'managePortfolio'){
      $("#row3").fadeOut(1000);
        this.setState({unsortMP: true})
        sortedList=  this.state.finalmanagePortfolio.sort((a, b) => {
            return (a.title > b.title ?1 : -1);
        }); $("#row3").fadeIn(1000);this.setState({finalmanagePortfolio:sortedList})}
        else if(key == 'unsortmanagePortfolio'){
          $("#row3").fadeOut(1000);
          this.setState({unsortMP: false})
          sortedList=  this.state.finalmanagePortfolio.sort((a, b) => {
            return (b.title - a.title ?1 : -1);
        }); $("#row3").fadeIn(1000);this.setState({finalmanagePortfolio:sortedList})
        } 
    }
  changeStatesForPopups =(key)=>{
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
   var testData= {id:this.state.manageTestData.length+1,clientName:'AGbc',clientEmail:'xyz@gmail.com',test:'test7',clientCompany:'abc.com',testinomialPosted:'yes',sentDate:'october 11,2018 4:27 pm'}
      
    // var addChild ={
    //   id:this.state.countId,
    //   manageTest: <input type="checkbox" onClick={()=>this.mangeTest(this.state.countId)}/>,
    //   clientName: this.state.clientName,
    //   clientEmail: this.state.clientEmail,
    //   test: 'test5',
    //   clientComapny:this.state.clientCompany,
    //   testinomialPosted:'yes',
    //   date: '2011/04/25',
     
    // }
    // this.setState({ data:{columns:[...this.state.data['columns']], rows:[...this.state.data['rows'], addChild] }})
    this.setState({manageTestData:[...this.state.manageTestData,testData],itemIdMT:1},()=>{
      this.manageTest() 
    console.log(this.state.manageTestData,'tests')
    })
    var values ={
      test:this.state.test,
      result:this.state.result
    }
  }

  addTestinomial=()=>{
    const {clientName,clientCompany,clientWeb,clientEmail,clientRole,projectType,review}= this.state
    var clientalues ={clientName,clientCompany,clientWeb,clientEmail,clientRole,projectType,review}
    this.setState({countId:this.state.countId+1,addTestinomial:false})
    // var addChild ={
    //   id:this.state.countId,
    //   manageTest: <input type="checkbox" onClick={()=>this.mangeTest(this.state.countId)}/>,
    //   clientName: this.state.clientName,
    //   clientEmail: this.state.clientEmail,
    //   test: 'test5',
    //   clientComapny:this.state.clientCompany,
    //   testinomialPosted:'yes',
    //   date: '2011/04/25',
     
    // }
    // this.setState({ manageData:{ rows:[...this.state.manageData['rows'], addChild] }})
    var addValues =   {id:this.state.manageTestinomialData.length+1,clientName:'newly Added',clientEmail:'xyz@gmail.com',test:'test7',clientCompany:'abc.com',testinomialPosted:'yes',sentDate:'october 11,2018 4:27 pm'}
    this.setState({manageTestinomialData:[...this.state.manageTestinomialData,addValues],itemIdMTS:1,paginationdummymanageTestinomial:[]},()=>{
     this.manageTestinomial();
    })
   
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
    const {x1,x2,x3,x4,x5,x6,x7,x8,x9,x10}= this.state
    var clientalues ={x1,x2,x3,x4,x5,x6,x7,x8,x9,x10}
    this.setState({countId:this.state.countId+1,portfolio:false})
    // var addChild ={
    //   id:this.state.countId,
    //   manageTest: <input type="checkbox" onClick={()=>this.mangeTest(this.state.countId)}/>,
    //   clientName: this.state.clientName,
    //   clientEmail: this.state.clientEmail,
    //   test: 'test5',
    //   clientComapny:this.state.clientCompany,
    //   testinomialPosted:'yes',
    //   date: '2011/04/25',
     
    // }
    // this.setState({ portfolio:{ rows:[...this.state.portfolio['rows'], addChild] }})
    var addValue = {id:this.state.managePortfolioData.length+1,title:'mbc',type:'xyz@gmail.com',category:'test7',link:'abc.com',addedOn:'yes',action:'october 11,2018 4:27 pm'}
   
    this.setState({managePortfolioData:[...this.state.managePortfolioData,addValue],itemIdMP:1},()=>{
      this.managePortfolio() 
    console.log(this.state.managePortfolioData,'managePortfolioData')
    })
  
    console.log(clientalues,'portfolioAdded')
  }

  selectedRequest=(id,key)=>{
    this.setState({vo:1,vo2:1,vo3:1})
    if(key=="manageTest" && this.state.vo == 1)
    {
      
      console.log('ids',id)
      this.setState({deletedMT:[...this.state.deletedMT,id],vo:2},()=>{console.log('deleteMT',this.state.deletedMT)})
    }
    if(key=="manageTestinomials" && this.state.vo2 == 1)
    {
      this.setState({deletedMTS:[...this.state.deletedMTS,id],vo2:2},()=>{console.log('deleteMTS',this.state.deletedMTS)})
      console.log('ids',id)
    }
    if(key=="managePortfolio" && this.state.vo3 == 1)
    {
      this.setState({deletedMP:[...this.state.deletedMP,id],vo3:2},()=>{console.log('deleteMP',this.state.deletedMP)})
      console.log('ids',id)
    }
  }
  delete1=()=>{
    this.setState({vo:1})
   
this.setState({
  manageTestData: this.state.manageTestData.filter((item,index)=>{
    
    if(this.state.deletedMT[0] != item.id)
    {
      return item
    }
  
  })
},()=>{console.log(this.state.manageTestData,'chkingss')
this.setState({deletedMT:[]})
this.manageTest()})
  }

  delete2=()=>{
    this.setState({vo2:1})
    this.setState({
      manageTestinomialData: this.state.manageTestinomialData.filter((item,index)=>{
        
        if(this.state.deletedMTS[0] != item.id)
        {
          return item
        }
      
      }),
      paginationdummymanageTestinomial:[]
    },()=>{console.log(this.state.manageTestinomialData,'chkingss')
    this.setState({deletedMTS:[]})
    this.manageTestinomial()})
      }
      delete3=()=>{
        this.setState({vo3:1})
        this.setState({
          managePortfolioData: this.state.managePortfolioData.filter((item,index)=>{
            
            if(this.state.deletedMP[0] != item.id)
            {
              return item
            }
          
          })
        },()=>{console.log(this.state.managePortfolioData,'chkingss')
        this.setState({deletedMP:[]})
        this.managePortfolio()})
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
   this.setState({img:x[0].acceptedFile})
 }
  render(){
  return (
    <div >
      {/*client add testinomials */}
     {this.state.addTestinomial && <div className="modal Portfolio" >
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
                <p className="Upload_text">{this.state.img != ''?this.state.img :"Drag and Drop here"}</p>
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
                <p className="Upload_text">{this.state.img != ''?this.state.img :"Drag and Drop here"}</p>
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
           <p className="Upload_text">{this.state.img != ''?this.state.img :"Drag and Drop here"}</p>
       </div>
       <button className="account_but" color="primary" onClick={this.addTest}>ADD TEST</button>
     </div>

      }
       {/*manage add portfolio */}
      {this.state.portfolio &&   
          <div className="modal Portfolio">
            <h1>Add New Portfolio</h1>
            <div className="feild Invite">
                  <label>CLIENT PROJECT TITLE</label>
                  <input onChange={this.handleChange} type="text" name="x1" value={this.state.x1} placeholder="Input" min="0" max="100"/>
                  <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

               </div>
               <div className="feild Invite">
                  <label>PROJECT LINK</label>
                  <input onChange={this.handleChange} type="text" name="x2" value={this.state.x2} placeholder="Input" min="0" max="100"/>
                  <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

               </div>
               <div className="feild dropdown Invite">
               <label>PROJECT TYPE</label>
                  <select name="x3" form="carform" value={this.state.x3} onChange={this.handleChange}>
                  <option value="">Input</option>
                  <option value="JOHN">JOHN</option>
                  <option value="WICK">WICK</option>
                 </select>
                 <div class="go-icon"></div>
                 <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

                </div>
                <div className="feild dropdown Invite">
               <label>OPERATING SYSTEM</label>
                  <select name="x4" form="carform" value={this.state.x4} onChange={this.handleChange}>
                  <option value="">Input</option>
                  <option value="JOHN">JOHN</option>
                  <option value="WICK">WICK</option>
                 </select>

                 <div class="go-icon"></div>
                 <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

                </div>
                <div className="feild dropdown Invite">
               <label>PROJECT FEATURES</label>
                  <select name="x5" form="carform" value={this.state.x5} onChange={this.handleChange}>
                  <option value="">Input</option>
                  <option value="JOHN">JOHN</option>
                  <option value="WICK">WICK</option>
                 </select>
                 <div class="go-icon"></div>
                 <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

                </div>
                <div className="feild dropdown Invite">
               <label>PROJECT INDUSTRY</label>
                  <select name="x6" form="carform" value={this.state.x6} onChange={this.handleChange}>
                  <option value="">Input</option>
                  <option value="JOHN">JOHN</option>
                  <option value="WICK">WICK</option>
                 </select>
                 <div class="go-icon"></div>
                 <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

                </div>
                <div className="feild dropdown Invite">
                <label>PROJECT TECHNOLOGIES</label>
                  <select name="x7" form="carform" value={this.state.x7} onChange={this.handleChange}>
                  <option value="">Input</option>
                  <option value="JOHN">JOHN</option>
                  <option value="WICK">WICK</option>
                 </select>
                 <div class="go-icon"></div>
                 <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

                </div>
                <div className="feild dropdown Invite">
               <label>PROJECT QUOTE</label>
                  <select name="x8" form="carform" value={this.state.x8} onChange={this.handleChange}>
                  <option value="">Input</option>
                  <option value="JOHN">JOHN</option>
                  <option value="WICK">WICK</option>
                 </select>
                 <div class="go-icon"></div>
                 <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

                </div>
                <div className="feild dropdown Invite">
               <label>PROJECT DURATION</label>
                  <select name="x9" form="carform" value={this.state.x9} onChange={this.handleChange}>
                  <option value="">Input</option>
                  <option value="JOHN">JOHN</option>
                  <option value="WICK">WICK</option>
                 </select>
                 <div class="go-icon"></div>
                 <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

                </div>
               <div className="feild">
                <label>CLIENT LOGO</label>
                <FileUpload getInput={this.handleBanner} getInput1='modal' />
                <p className="Upload_text">{this.state.img != ''?this.state.img :"Drag and Drop here"}</p>
            </div>
            <div className="feild dropdown Invite">
               <label>IS THIS PORTFOLIO ITEM A USECASE?</label>
                  <select name="x10" form="carform" value={this.state.x10} onChange={this.handleChange}>
                  <option value="">Input</option>
                  <option value="JOHN">JOHN</option>
                  <option value="WICK">WICK</option>
                 </select>
                 <div class="go-icon"></div>
                 <div class="tooltip"><img src="./assets/img/black_img.png" class=""/><span class="tooltiptext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span></div>

                </div>
            <button class="account_but" color="primary" onClick={this.addPortfolio}>save</button>
          </div>

      }
    

   <div className="Settings_profiles">

   <div className="manage_test">

       <div className="manage_header">
          <div className="col_1"> Manage Test</div>
          <div className="col_2"> Clients Name  <div className={this.state.unsortMT ?"unsorting" :'sorting'}  onClick={this.state.unsortMT ?  ()=>this.sorting('manageTestUnsort'):()=>this.sorting('manageTest')}><p>&#8593;</p></div> </div>
          <div className="col_3">Clients Name </div>
          <div className="col_4">Test </div>
          <div className="col_5"> Clients Company </div>
          <div className="col_6"> Testimonal Posted</div>
          <div className="col_7">Send Data </div>
       </div>

        <div class="Add_box" onClick={()=>this.changeStatesForPopups('tests')}>
          <div class="plus"></div>
          <button type="button">New</button>
        </div>
      <div id="row1">
        {this.state.finalmanageTest.map((item,index)=>
            {return <div class="Added_box">
          <div class="Added_box_numer" > {item.id} </div>
          <div className="col_1"> <label class="fancy-checkbox" onClick={()=>this.selectedRequest(item.id,'manageTest')}><input type="checkbox"/><span class="checkmark"></span> </label><p>Request</p></div>
          <div className="col_2"> {item.clientName}  </div>
          <div className="col_3"> {item.clientEmail} </div>
          <div className="col_4">{item.test}</div>
          <div className="col_5"> {item.clientComapny} </div>
          <div className="col_6"> {item.testinomialPosted}</div>
          <div className="col_7">{item.sentDate} </div>
        </div>})
            }
        </div>
       



        <div class="manage_buttons">
          <button class="delete" onClick={this.delete1}><img src="./assets/img/pro_delete.png"/></button>
          <button class="delete_invite" onClick={()=>this.changeStatesForPopups('developerInvitation')}><img src="./assets/img/pro_delete.png"/><p>Invite New Developer</p></button>
        </div>

        <div class="manage_pagenation">
         {this.state.manageTestData[3] != undefined ? <div class="pagenation_left" onClick={()=>this.changePage(this.state.itemIdMT-1,'manageTest')}><div class="go-icon"></div></div>:''}
          {this.state.paginationmanageTest.map(item=> <div class="pagenation_number" key={item} onClick={()=>this.changePage(item,'manageTest')}>{item}</div>)}
          {this.state.manageTestData[3] != undefined?<div class="pagenation_right" onClick={()=>this.changePage(this.state.itemIdMT+1,'manageTest')}><div class="go-icon"></div></div>:''}
        </div>
        </div>

        <div className="manage_test">

          <div className="manage_header">
            <div className="col_1"> Manage Testinomials</div>
            <div className="col_2"> Clients Name   <div className={this.state.unsortMTS? "unsorting":'sorting'} onClick={this.state.unsortMTS?()=>this.sorting('unsortmanageTestinomial'):()=>this.sorting('manageTestinomial')}><p>&#8593;</p></div> </div>
            <div className="col_3">Clients Name </div>
            <div className="col_4">Test </div>
            <div className="col_5"> Clients Company </div>
            <div className="col_6"> Testimonal Posted</div>
            <div className="col_7">Send Data </div>
          </div>

          <div class="Add_box" onClick={()=>this.changeStatesForPopups('testinomials')}>
            <div class="plus"></div>
            <button type="button">New</button>
          </div>
            <div id="row2">
          {this.state.finalmanageTestinomial.map((item,index)=>
              {return <div class="Added_box" >
            <div class="Added_box_numer"> {item.id} </div>
            <div className="col_1"> <label class="fancy-checkbox" onClick={()=>this.selectedRequest(item.id,'manageTestinomials')}><input type="checkbox"/><span class="checkmark"></span> </label><p>Request</p></div>
            <div className="col_2"> {item.clientName}  </div>
            <div className="col_3"> {item.clientEmail} </div>
            <div className="col_4">{item.test}</div>
            <div className="col_5"> {item.clientComapny} </div>
            <div className="col_6"> {item.testinomialPosted}</div>
            <div className="col_7">{item.sentDate} </div>
          </div>})
              }
          </div>




          <div class="manage_buttons">
            <button class="delete" onClick={this.delete2}><img src="./assets/img/pro_delete.png"/></button>
            <button class="delete_invite" onClick={()=>this.changeStatesForPopups('testinomialRequest')}><img src="./assets/img/pro_delete.png"/><p>Client Testinomial Request</p></button>
          </div>

          <div class="manage_pagenation">
          {this.state.manageTestinomialData[3] != undefined ? <div class="pagenation_left" onClick={()=>this.changePage(this.state.itemIdMTS-1,'manageTestinomial')}><div class="go-icon"></div></div>:''}
            {this.state.paginationmanageTestinomial.map(item=> <div class="pagenation_number" key={item} onClick={()=>this.changePage(item,'manageTestinomial')}>{item}</div>)}
            {this.state.manageTestinomialData[3] != undefined ?  <div class="pagenation_right" onClick={()=>this.changePage(this.state.itemIdMTS+1,'manageTestinomial')}><div class="go-icon"></div></div>:''}
          </div>
          </div> 



            <div className="manage_test">

                  <div className="manage_header">
                    <div className="col_1"> Manage Portfoilio</div>
                    <div className="col_2"> Title  <div className={this.state.unsortMP?"unsorting":"sorting" } onClick={this.state.unsortMP?()=>this.sorting('unsortmanagePortfolio') :()=>this.sorting('managePortfolio')}><p>&#8593;</p></div> </div>
                    <div className="col_3">Type </div>
                    <div className="col_4">Category </div>
                    <div className="col_5"> Link</div>
                    <div className="col_6"> Added on</div>
                    <div className="col_7">Action</div>
                  </div>

                  <div class="Add_box" onClick={()=>this.changeStatesForPopups('portfolio')}>
                    <div class="plus"></div>
                    <button type="button">New</button>
                  </div>
                  <div id="row3">
                  {this.state.finalmanagePortfolio.map((item,index)=>
                      {return <div class="Added_box" >
                    <div class="Added_box_numer"> {item.id} </div>
                    <div className="col_1"> <label class="fancy-checkbox" onClick={()=>this.selectedRequest(item.id,'managePortfolio')}><input type="checkbox"/><span class="checkmark"></span> </label><p>Request</p></div>
                    <div className="col_2"> {item.title}  </div>
                    <div className="col_3"> {item.type} </div>
                    <div className="col_4">{item.category}</div>
                    <div className="col_5"> {item.link} </div>
                    <div className="col_6"> {item.addedOn}</div>
                    <div className="col_7">{item.action} </div>
                  </div>})
                      }
                  </div>




                  <div class="manage_buttons" onClick={this.delete3}>
                    <button class="delete"><img src="./assets/img/pro_delete.png"/></button>
                  </div>

                  <div class="manage_pagenation">
                  {this.state.manageTestinomialData[3] != undefined ?  <div class="pagenation_left" onClick={()=>this.changePage(this.state.itemIdMP-1,'managePortfolio')}><div class="go-icon"></div></div>:''}
                    {this.state.paginationmanagePortfolio.map(item=> <div class="pagenation_number" key={item} onClick={()=>this.changePage(item,'managePortfolio')}>{item}</div>)}
                    {this.state.manageTestinomialData[3] != undefined ? <div class="pagenation_right" onClick={()=>this.changePage(this.state.itemIdMP+1,'managePortfolio')} ><div class="go-icon"></div></div>:''}
                  </div>
                  </div> 


        </div>




    </div>
  );
}
}

export default DatatablePage;