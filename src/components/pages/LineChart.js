import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from "react-redux";
import { FetchSprintData } from '../../actions/fuelSavingsActions';

var yVal = '';
var output;
//yAxis
const listData = [180, 160, 110, 160, 175, 170, 180, 170, 185, 190, 170, 180, 190, 195, 180, 170, 184, 179];

//xAxis
const xLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];


class LineChart extends Component {


    getDatasetAtEventick = (tickData) => {
        try {
            //getting yValue
            var getYValue = yVal.split('');
            var yValue = '';
            for (var i = 13; i < getYValue.length; i++) {
                yValue += getYValue[i];
            }
            //getting xvalue
            var getIndex = tickData[0]._index;
            var xValue = tickData[0]._xScale.ticks[getIndex];

            console.log('x ', xValue);
            console.log('y ', yValue);
            // console.log(tickData, " tickData ")
        }
        catch
        {
            console.log("please click on correct value")
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            chartData: {},
            value: 0,
            lineData: [],
            xLabel: []
        }
    }

    componentDidMount() {

        if (this.props.xaxes) {
            console.log('recivedDidMount', this.props.xaxes)
            output = this.props.xaxes.map((data, i) => ({
                id: i + 1,
                listValue: this.props.checkData[i],
            }));
            console.log(output, 'output')
            // this.setState({output:output})
            console.log('complete Data ', output);
            var ctx = document.getElementById('myChart').getContext("2d")
            var gradient = ctx.createLinearGradient(0, 0, 0, 200);
            gradient.addColorStop(0, 'rgba(63,245,183,0.4)');
            gradient.addColorStop(1, 'rgba(25,209,146,0)');
            var changeShadow = ''
            if (this.props.displayChart == 1) {
                changeShadow = gradient;
                this.setState({ dispYLine: true })
            } else {
                changeShadow = ''
                this.setState({ dispYLine: false })
            }
            const data = {
                datasets: [
                    {

                        label: 'Line Dataset',
                        fill: this.props.fillshadow, // below shadow will be hidden
                        data: this.props.checkData,
                        backgroundColor: changeShadow,
                        pointRadius: 0, //to hidden the points
                        borderColor: '#1E9D74',
                        borderWidth: 2,
                        // Changes this dataset to become a line
                        type: 'line',
                        pointHoverRadius: 0,
                        pointHoverBackgroundColor: 'red',
                        dispYLine: true,
                        datalabels: {
                            color: 'black',
                            align: 'end',
                            //    display: function(context) {
                            //        console.log('context.dataIndex % 2 ',context.dataset.data[1])
                            //         return context.dataset.data[1]; // display labels with an odd index
                            //     },
                            display: this.props.showDatalables
                            ,

                            borderWidth: 8,
                            borderRadius: 10,
                            color: 'black',
                            backgroundColor: '#30C391',
                            borderWidth: 8,
                            borderRadius: 10,

                        }

                    },

                ],
                labels: this.props.xaxes
            }
            this.setState({ chartData: data })
        }
        //use ref for getting any value of chart  
        // console.log(this.chartReference.props.data.labels[1]); // returns a Chart.js instance reference

    }
    componentWillReceiveProps(nextprops) {
        console.log('chekced ', nextprops.xaxes)
        var chek = nextprops.getListValue - 1;
        console.log('getData ', nextprops.lstVal, nextprops.barVal, output[chek])
        this.props.FetchSprintData(nextprops.lstVal, nextprops.barVal, output[chek].listValue)
        // this.props.accessVal(output[chek].listValue);

    }

    render() {


        return (
            <div>
                <Line
                    id="myChart"
                    ref={(reference) => this.chartReference = reference}
                    //    onElementsClick={dataset => console.log('dataset ',dataset)}
                    getElementsAtEvent={dataset => this.getDatasetAtEventick(dataset)}
                    // getDatasetAtEvent={dataset => console.log('dataset2 ', dataset)}
                    data={this.state.chartData}
                    width={this.props.lineWidth}
                    height={this.props.lineHeight}
                    options={{
                        plugins: {
                            // Change options for ALL labels of THIS CHART
                            datalabels: {
                                display: false
                            }
                        },
                        responsive: true,

                        legend: {
                            display: false,
                        },
                        maintainAspectRatio: false,
                        scales: {
                            ticks: {
                                max: 5,
                                min: 0,
                                stepSize: 0.5
                            },
                            yAxes: [{
                                display: this.state.dispYLine,
                                ticks: {
                                    suggestedMin: 50,
                                    suggestedMax: 100
                                }
                            }],
                            xAxes: [{ display: false }]
                        },
                        tooltips: {
                            // mode: 'label',
                            // xPadding: 189,
                            // yPadding: 13,
                            // borderWidth:92,
                            // xAlign: 'left',
                            // yAlign: 'left',

                            intersect: !this.state.dispYLine,
                            callbacks: {
                                labelColor: function (tooltipItem, chart) {
                                    return {
                                        borderColor: 'rgb(255, 0, 0)',
                                        backgroundColor: 'rgb(255, 0, 0)'
                                    };
                                },
                                labelTextColor: function (tooltipItem, chart) {
                                    return '#543453';
                                },
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
                        }
                    }}
                />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    // fetchData: (url,action) => dispatch(itemsFetchData(url,action)),
    FetchSprintData: (lineData1, bardata, lineData2) => dispatch(FetchSprintData(lineData1, bardata, lineData2))
})
export default connect(null, mapDispatchToProps)(LineChart);
