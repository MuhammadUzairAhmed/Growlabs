import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

var yVal = '';
var output;
//yAxis
const listData = [180, 160, 110, 160, 175, 170, 180, 170, 185, 190, 170, 180, 190, 195, 180, 170, 184, 179];

//xAxis
const xLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];


class CommitLineChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: {},
            value: 0,
            lineHeight: '250px'
        }
    }
    componentDidMount() {


        output = this.props.xaxes.map((data, i) => ({
            id: i + 1,
            listValue: this.props.data[i],
        }));
        // this.setState({output:output})
        console.log('complete Data ', output);
        var ctx = document.getElementById('myChart').getContext("2d")

        const data = {
            datasets: [
                {

                    label: 'Line Dataset',
                    fill: false, // below shadow will be hidden
                    data: this.props.data,
                    pointRadius: 0, //to hidden the points
                    borderColor: this.props.color,
                    borderWidth: 2,
                    // Changes this dataset to become a line
                    type: 'line',
                    pointHoverRadius: 0,
                    pointHoverBackgroundColor: this.props.color,
},

            ],
            labels: this.props.xaxes
        }
        this.setState({ chartData: data })

    }


    render() {


        return (
            <div>
                <Line
                    id="myChart"
                    //    ref={(reference) => this.chartReference = reference}
                    //    onElementsClick={dataset => console.log('dataset ',dataset)}
                    // getElementsAtEvent={dataset => this.getDatasetAtEventick(dataset)}
                    // getDatasetAtEvent={dataset => console.log('dataset2 ', dataset)}
                    data={this.state.chartData}
                    width={145}
                    height={38}
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
                                display: false,
                                ticks: {
                                    suggestedMin: 50,
                                    suggestedMax: 100
                                }
                            }],
                            xAxes: [{ display: false }]
                        },
                        tooltips: {

                            intersect: true,


                        },
                        elements: {
                            line: this.props.tension
                        }
                    }}
                />


            </div>
        );
    }
}
export default CommitLineChart;