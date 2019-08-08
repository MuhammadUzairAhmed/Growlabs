import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import LineChart from './LineChart';
import up3x from './../../images/Up@3x.png';
import same from "./../../images/same@3x.png";
import rpm from "./../../images/rpm.png"
import down from "./../../images/down@3x.png";
import circle1 from "./../../images/circle1.png";
import { connect } from "react-redux";
import { CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import 'chartjs-plugin-datalabels'
import { itemsFetchData } from '../../actions/fuelSavingsActions';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import 'rc-progress/assets/index.css';
import { Circle  } from 'rc-progress';


var output;
var yVal = '';
var lineDataVal = 0;
var dataValue; var barVal; var lstVal;

// const listData = [80, 60, 70, 60, 75, 70, 80, 70, 85, 75, 70, 90, 70, 80, 90, 75, 70, 80,90, 75,95];
// const barData = [50, 30, 35, 12, 14, 22, 45, 14, 35, 12, 22, 35, 12, 45, 35, 12, 14, 22, 45,51];
// const xAxisLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,19,20];
class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayData: [],
      dispSpecificGreenValue: {},
      dispSpecificRedValue: {},
      ChartData: {},
      getRightSideData: [],
      dataValue: 0,
      dahsboardValues: {
        daysLeft: '03',
        stories: 45,
        point: 560,
        codeChanged: 0,
        avgCodeQuality: '',
        velocity: 0,
        commits: 0,
        add:0,
        delete:0
      },
      fetchListData: [],
      fetchBarData: [],
      fetchLineData: [],
      xAxisLabels: [],
      fetchData: [],
      smallData:[],
      count: 1,
      loaded: true,
      score:'86'
    }
  }

  componentWillReceiveProps(nextprops) {
    console.log(nextprops, 'came')
    if (this.state.count === 1) {
      for (var i = 0; i < nextprops.Chart.length; i++) {
        this.state.fetchData.push(nextprops.Chart[i])
        this.state.fetchListData.push(nextprops.Chart[i].charts.listData)
        this.state.fetchBarData.push(nextprops.Chart[i].charts.barData)
        this.state.fetchLineData.push(nextprops.Chart[i].charts.lineData)
        this.state.xAxisLabels.push(nextprops.Chart[i].sprintId)
        this.state.smallData.push(nextprops.Chart[i].charts.smallBarData)
        // this.setState({smallData:[...this.state.smallData,nextprops.Chart[i].charts.smallBarData]})
      }
      this.setState({ count: 2 })
    }
    console.log('this.state.fetchData ', this.state.smallData);
    output = this.state.xAxisLabels.map((data, i) => ({
      id: i + 1,
      barValue: this.state.fetchBarData[i],
      listValue: this.state.fetchListData[i],
    }));
    // this.setState({output:output})
    console.log('complete Data ', output);

    var ctx = document.getElementById('myChart').getContext("2d")
    var gradient = ctx.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, '#334063');
    gradient.addColorStop(1, 'rgba(194,167,194,0)');


    var barGradient = ctx.createLinearGradient(0, 500, 0, 0);
    barGradient.addColorStop(0, 'black');
    barGradient.addColorStop(1, 'rgba(72,162,195,0.7)');
    

var datasetConst = [
  {
    backgroundColor: barGradient,

    label: "Bar Dataset",
    borderWidth: 1,
    data: this.state.fetchBarData,
    xAxisID: "bar-x-axis2",
    // Change options only for labels of THIS DATASET
    datalabels: {
      color: '#4D809A',
      align: 'end',
      display: true,

    }

  },
  {

    label: 'Line Dataset',
    fill: true, // below shadow will be hidden
    data: this.state.fetchListData,

    // Change options only for labels of THIS DATASET
    datalabels: {
      color: 'black',
      clamp: true,
      align: 'end',
      display: true,
      borderWidth: 8,
      borderRadius: 10,
      backgroundColor: '#266690'

    },
    backgroundColor: gradient,
    pointBackgroundColor: 'black',
    pointBorderColor: 'rgba(72,162,195,0.7)',
    borderWidth: 3,
    borderColor: '#514391',
    borderWidth: 2,
    // Changes this dataset to become a line
    type: 'line',

  },
]
var finalData = [...this.state.smallData,...datasetConst]
console.log('final',finalData)
    var data = {
      labels: this.state.xAxisLabels,
      datasets: finalData 
    }
    
    this.setState({ ChartData: data },()=>{
      this.setState({ loaded: false})
    })

  }
 
  componentDidMount() {
    this.props.fetchData('https://demo9810618.mockable.io/fetchSprintData', 'CHART');

    console.log(this.props.Chart)
   
  }
  getDatasetAtEventick = (tickData) => {
    try {
      console.log('dataTick ', tickData)
      //---------------------------------------------------
      var yValue = yVal.replace(/\D/g, '');

      //getting xvalue
      var getIndex = tickData[0]._index;
      console.log('getIndex ', getIndex)
      var colr = tickData[getIndex]._model.backgroundColor;


      console.log('colr ', colr)
      var xValue = tickData[0]._xScale.ticks[getIndex];
      var finalData =
      {
        x: xValue,
        y: yValue
      }
      this.state.displayData.push(finalData)
      console.log('displayData ', this.state.displayData)
      console.log('x ', xValue);
      console.log('y ', yValue);
      // console.log(tickData, " tickData ")
      if (colr == 'rgb(186, 23, 58)') {
        this.setState({
          dispSpecificGreenValue: finalData
        }, () => {
          console.log('check ', this.state.dispSpecificGreenValue)
        })
      } else if (colr == 'rgb(1, 137, 96)') {
        this.setState({
          dispSpecificRedValue: finalData
        }, () => {
          console.log('check ', this.state.dispSpecificRedValue)
        })
      }


    }
    catch
    {
      console.log("please click on correct value")
    }
  }
  selectSprintId = (dataVal) => {


    this.state.fetchData.find((data) => {
      if (data.sprintId == dataVal) {
        this.setState({
          dahsboardValues: {
            velocity: data.velocity,
            commits: data.commits,
            codeChanged: data.codeChanges,
            avgCodeQuality: data.avgQuality,
            daysLeft: '03',
            stories: 45,
            point: 560,
            add: data.charts.smallBarData.data[2],
            delete: data.charts.smallBarData.data[1]
          }
        })
        console.log('get it', data)
      }
    })

    // let getData = output.find((data) => {

    //   return data.id == dataVal

    // })
    // this.setState({
    //   dataValue: dataVal
    // })

    // barVal = getData.barValue;
    // lstVal = getData.listValue;


  }

  getLineDataValue = (data) => {

    lineDataVal = data;
  }
  chartReference = (x) => {
    console.log('color ', x);
  }

  render() {
console.log('xaxeslabels',this.state.xAxisLabels)
    var displaySprint = this.state.xAxisLabels.map(data =>
      <div class={"colleborate_box "} key={data} onClick={() => this.selectSprintId(data)}>
        <h1>Sprint {data}</h1>
        <div class="colleborate_top_round" className={data}>
          <span>
            <label class="fancy-checkbox">
              <input type="checkbox" />
              <span class="checkmark"></span> </label>
          </span>
        </div>
        <p>{data}</p>
      </div>
    )


    return (
      
      <div>
      {this.state.loaded ? <Loader
         type="Oval"
         color="white"
         height="50"
         width="50"
      />
    
    :  
      <div>  <div class="dashbord_left">
          <section class="colleborate" >
            <div class="colleborate_top" >
              {displaySprint}
            </div>
          </section>
          {this.state.fetchLineData.length > 1  ?
            <LineChart xaxes={this.state.xAxisLabels} checkData={this.state.fetchLineData} fillshadow={true} showDatalables={true} lineHeight={250} displayChart={1} />
            : ''}
          <Bar
            data={this.state.ChartData}
            width={100}
            height={30}
            ref={(reference) => this.chartReference(reference)}
            // onElementsClick={dataset => console.log('dataset ',dataset)}
            getElementsAtEvent={dataset => this.getDatasetAtEventick(dataset)}
            options={{

              plugins: {
                // Change options for ALL labels of THIS CHART
                datalabels: {
                  display: false
                }
              },
              legend: {
                display: false,
              },
              scales: {
                xAxes: [
                  {
                    id: "bar-x-axis5",

                    barThickness: 2,
                    display: false
                  }, {
                    display: false,
                    stacked: true,
                    id: "bar-x-axis2",
                    barThickness: 40,
                    // these are needed because the bar controller defaults set only the first x axis properties
                    type: 'category',
                    categoryPercentage: 0.8,
                    barPercentage: 0.9,
                    pointBackgroundColor: 'rgba(72,162,195,0.7)',
                    gridLines: {
                      offsetGridLines: true
                    },
                    offset: true
                  }],
                yAxes: [{
                  stacked: false,
                  ticks: {
                    beginAtZero: true
                  },
                }]

              },

              tooltips: {
                intersect: false,
                // mode:'y',
                callbacks: {
                  label: function (tooltipItem, data) {
                    var label = data.datasets[tooltipItem.datasetIndex].label || '';

                    if (label) {
                      label += ': ';
                    }
                    label += Math.round(tooltipItem.yLabel * 100) / 100;
                    yVal = label
                    return label;

                  }
                }
              },
              elements: {
                line: {
                  tension: 0 // disables bezier curves
                }
              }
            }}
          />
        </div>
        
        <div class="dashbord_right">

          <div class="card-base1 clearfix">
            <div class="base-420">

            <div class="tooltip">
              <img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/> 
               <span class="tooltiptext">Tooltip text</span>
            </div>

              <div class="base-420-text">
                <h1>{this.state.dahsboardValues.velocity}</h1>
                <p>VELOCITY</p>
                <img src="images/Up@3x.png" />
              </div>
            </div>
            <div class="base-86">
               <div class="tooltip">
              <img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/> 
               <span class="tooltiptext">Tooltip text</span>
            </div>
            
              <div class="base-86-text">
              <div className="score ">
              <div className="score_height ">
              <Circle percent={this.state.score} gapDegree={130} gapPosition="bottom" strokeWidth="30" trailWidth="30"  strokeLinecap="square" />
              </div>
              <div className="scoreText"><h1>{this.state.score}</h1><p>Growlabs Score</p></div>
              </div>
              </div>
            </div>
          </div>


          <div class="card-base2">
            <div class="oval">
            <div class="tooltip">
              <img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/> 
               <span class="tooltiptext">Tooltip text</span>
            </div>
              <div class="oval-text">
                {/* <img src={circle1} /> */}
                <div className="circleBar">

                  {/* 2nd circle*/}
                  <div className="circle1"><CircularProgressbar value={30} className=" topParent" /></div>
                  {/* 3rd smallest circle */}
                  <div className="circle2"><CircularProgressbar value={40} className=" topParent" /></div>
                  {/* 1st biggest circle */}
                  <div className="circle3"><CircularProgressbar value={50} className=" topParent" /></div>
                </div>
              </div>
              <div class="oval-text">
                <h1>{this.state.dahsboardValues.daysLeft}</h1>
                <p>DAYS LEFT</p>
              </div>
              <div class="oval-text">
                <label>{this.state.dahsboardValues.stories}</label>
                <p>STORIES</p>
              </div>
              <div class="oval-text">
                <span>{this.state.dahsboardValues.point}</span>
                <p>POINT</p>
              </div>


            </div>
          </div>


          <div class="card-base3">
            <div class="card-base3-left">
              <div class="commits">
                
                <div class="commits-text">
                  <h1>{this.state.dahsboardValues.commits}</h1>
                  <p>COMMITS</p>
                  <img src="images/Up@3x.png" />
                </div>
              </div>
              <div class="commits">
              <div class="tooltip">
              <img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/> 
               <span class="tooltiptext">Tooltip text</span>
            </div>
                <div class="commits-text">
                  <h1>{this.state.dahsboardValues.codeChanged}</h1>
                  <p>CODE CHANGED</p>
                  <img src={down} />
                </div>
              </div>

            </div>

            <div class="card-base3-right">
              <div class="average-code">
              <div class="tooltip">
              <img src="./assets/img/1024px-Infobox_info_icon.svg Copy 4.png" class=""/> 
               <span class="tooltiptext">Tooltip text</span>
            </div>
                <div class="average-code-text">
                  <span >{this.state.dahsboardValues.avgCodeQuality}</span>
                  <p>AVERAGE</p><p>CODE QUALITY</p>
                  <img src={up3x} />
                </div>

              </div>
            </div>
            <div class="del-add">
              <div class="del-add-text">
                {/* <span >{this.state.dispSpecificRedValue.y || '0'}</span> */}
                <span>{this.state.dahsboardValues.delete}</span>
                <p>DELETED</p>
                <img src="images/Up@3x.png" />
              </div>
              <div class="del-add-text">
                {/* <h1>{this.state.dispSpecificGreenValue.y || '0'}</h1> */}
                <h1>{this.state.dahsboardValues.add}</h1>
                <p>ADDED</p>
                <img src={same} />
              </div>
            </div>



          </div>
        </div>
        </div>}
      </div>
    );
  }
};

const mapStateToProps = state => ({
  chartValues: state.fuelSavings.chartValues,
  Chart: state.fuelSavings.CHART,
})
const mapDispatchToProps = dispatch => ({
  fetchData: (url, action) => dispatch(itemsFetchData(url, action)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
