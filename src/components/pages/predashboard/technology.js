import React, { Component } from 'react';
import { itemsFetchData } from '../../../actions/fuelSavingsActions';

class Technology extends Component {
   constructor(props)
   {
      super(props)
      this.state={
         
            technology:[
               {name:'java' , status: false},
               {name:'Javascript' , status: false},
               {name:'Objecttice ' , status: false},
               {name:'Ruby' , status: false},
               {name:'C' , status: false},
               {name:'.NET' , status: false},
               {name:'Golang' , status: false},
               {name:'Swift' , status: false},
               {name:'Python' , status: false},
               {name:'PHP' , status: false},
               {name:'Perl' , status: false},
               {name:'C++' , status: false},
               {name:'Other' , status: false},
            ],
            framework:[
               {name:'Angular.Js' , status: false},
               {name:'Ruby On Rails' , status: false},
               {name:'Laravel' , status: false},
               {name:'Symphony' , status: false},
               {name:'ASP.NET' , status: false},
               {name:'Other' , status: false},
               {name:'Others' , status: false},
               {name:"Don't Know, Don't Care" , status: false},
            ],
            projectType:[
               {name:"Mobile Website" , status:false},
               {name:"Online Website" , status:false},
               {name:"Computer Program" , status:false},
            ],
            techCount :0,
            frameCount :0,
            proCount :0,
            x1:'',
            x2:'',
            x3:''
         
      }
   }
   activeTechnology =(name)=>
   {  
      this.setState({
     
        technology: this.state.technology.filter((item)=>{
         item['status']= false;
         if(item.name == name)
         {  this.setState({techCount: 1,x1:item.name})
            item['status']= true
            return item
         }
         return item
      })
   
   })
   }
   activeFramework =(name)=>
   {
      this.setState({
     
        framework: this.state.framework.filter((item)=>{
         item['status']= false;
         if(item.name == name)
         {  
            this.setState({frameCount: 1,x2:item.name})
            item['status']= true
            return item
         }
         return item
      })
   
   })
   }
   activeProjectType =(name)=>
   {
      this.setState({
     
        projectType: this.state.projectType.filter((item)=>{
         item['status']= false;
         if(item.name == name)
         {  
            this.setState({proCount: 1,x3:item.name})
            item['status']= true
            return item
         }
         return item
      })
   
   })
   }
  
   handleAccepted =()=>{
      console.log('correct')
      console.log(this.state.x1,'x1')
      console.log(this.state.x2,'x2')
      console.log(this.state.x3,'x3')
      var values ={
         techVal: this.state.x1,
         frameVal:this.state.x2,
         projVal:this.state.x3
      }
      if(this.state.x1 != '' && this.state.x2 != '' && this.state.x3 != '' )
      {this.props.changeValue(2,values)}
    }
    render(){
     const Technology = this.state.technology.map(item=>
         {
            return <div className={item.status ? "technology_box active": "technology_box"} onClick={()=>this.activeTechnology(item.name)}>
            <p>{item.name}</p>
            </div>
         })

      const Framework = this.state.framework.map(item=>
         {
            return <div className={item.status ? "technology_box active": "technology_box"} onClick={()=>this.activeFramework(item.name)}>
            <p>{item.name}</p>
            </div>
         })

      const ProjectType = this.state.projectType.map(item=>
         {
            return <div className={item.status ? "technology_box active": "technology_box"} onClick={()=>this.activeProjectType(item.name)}>
            <p>{item.name}</p>
            </div>
         })
      return (
        <section className="technology">
               <div className="technology_top">
                  
                  <p>Define the terms on Which You will Collaborate</p>
               </div>
               <div className="technology_back">
               <div className="technology_center">
                  <h1>Technology</h1>
                 {Technology}
               </div>
               <div className="technology_center">
                <h4>FRAMEWORK</h4>
                 {Framework}
               </div>
               <div className="technology_center">
                <h4>PROJECT TYPE</h4>
                 {ProjectType}
               </div>
               </div>
               {this.state.techCount == 1 && this.state.frameCount ==1 && this.state.proCount ==1 ?
             
               <a target="_blank" className="button" onClick={this.handleAccepted}>Accept [Section]<br /><span> Accept setup as the grounds on which to finalize parthnership</span></a>
            :   
            <a target="_blank"  className="button"style={{background: 'rgb(212, 217, 221)'}}>Accept [Section]<br /><span> Accept setup as the grounds on which to finalize parthnership</span></a>
            }
             </section>
      );  
    };  
  };
  
  export default Technology;
  