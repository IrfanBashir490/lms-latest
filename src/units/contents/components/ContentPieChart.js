import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import '../ContentMain.css';

class ContentPieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width1: '160',
      series: [23, 5, 15, 8, 19, 19, 30],
      options: {
        chart: {
          width: '100',
          type: 'pie',
        },
        labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
        colors: ['#2B4F85', '#4D80CE', '#EE893B', '#FFFFFF', '#F9C647', '#67A6DD', '#7DB447'],
        dataLabels: {
          enabled: false,
          formatter(val, opts) {
            const name = opts.w.globals.labels[opts.seriesIndex]
            return Math.round(val);
          }, style: {
            fontSize: '10px',
            fontFamily: 'SourceSansPro',
            fontWeight: 'bold',
            colors: ['#362c59', '#362c59', '#362c59', '#362c59', '#362c59', '#362c59', '#362c59']
          }, dropShadow: {
            enabled: false,
          }
        },
        legend: {
          show: false
        }
      },
      series1: [23, 5, 15, 8, 19, 19, 30],
      options1: {
        chart: {
          width: '100',
          type: 'pie',
        },
        labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
        colors: ['#1E5772', '#368CB3', '#F07759', '#FFFFFF', '#F4A340', '#50B0C0', '#A7A940'],
        dataLabels: {
          enabled: false,
          formatter(val, opts) {
            const name = opts.w.globals.labels[opts.seriesIndex]
            return Math.round(val);
          }, style: {
            fontSize: '10px',
            fontFamily: 'SourceSansPro',
            fontWeight: 'bold',
            colors: ['#362c59', '#362c59', '#362c59', '#362c59', '#362c59', '#362c59', '#362c59']
          }, dropShadow: {
            enabled: false,
          }
        },
        legend: {
          show: false
        }
      },
      series2: [23, 5, 15, 19, 30, 19, 8],
      options2: {
        chart: {
          width: '100',
          type: 'pie',
        },
        labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
        colors: ['#F1853B', '#FFFFFF', '#F9C747', '#59A9EC', '#75B931', '#235094', '#4281E2'],
        dataLabels: {
          enabled: false,
          formatter(val, opts) {
            const name = opts.w.globals.labels[opts.seriesIndex]
            return Math.round(val);
          }, style: {
            fontSize: '10px',
            fontFamily: 'SourceSansPro',
            fontWeight: 'bold',
            colors: ['#362c59', '#362c59', '#362c59', '#362c59', '#362c59', '#362c59', '#362c59']
          }, dropShadow: {
            enabled: false,
          }
        },
        legend: {
          show: false
        }
      },
      series3: [15, 30, 23, 5, 19, 8, 19],
      options3: {
        chart: {
          width: '100',
          type: 'pie',
        },
        labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
        colors: ['#67A6DD', '#7DB447', '#2B4F85', '#4D80CE', '#EE893B', '#FFFFFF', '#F9C647'],
        dataLabels: {
          enabled: false,
          formatter(val, opts) {
            const name = opts.w.globals.labels[opts.seriesIndex]
            return Math.round(val);
          }, style: {
            fontSize: '10px',
            fontFamily: 'SourceSansPro',
            fontWeight: 'bold',
            colors: ['#362c59', '#362c59', '#362c59', '#362c59', '#362c59', '#362c59', '#362c59']
          }, dropShadow: {
            enabled: false,
          }
        },
        legend: {
          show: false
        }
      },
      series4: [23, 5, 15, 30, 14, 19, 8],
      options4: {
        chart: {
          width: '100',
          type: 'pie',
        },
        labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
        colors: ['#EE893B', '#4D80CE', '#2B4F85', '#7DB447', '#67A6DD', '#F9C647', '#FFFFFF'],
        dataLabels: {
          enabled: false,
          formatter(val, opts) {
            const name = opts.w.globals.labels[opts.seriesIndex]
            return Math.round(val);
          }, style: {
            fontSize: '10px',
            fontFamily: 'SourceSansPro',
            fontWeight: 'bold',
            colors: ['#362c59', '#362c59', '#362c59', '#362c59', '#362c59', '#362c59', '#362c59']
          }, dropShadow: {
            enabled: false,
          }
        },
        legend: {
          show: false
        }
      },

      series5: [23, 5, 15, 30, 14, 19, 8],
      options5: {
        chart: {
          width: '100',
          type: 'pie',
        },
        labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
        colors: ['#EE893B', '#4D80CE', '#2B4F85', '#7DB447', '#67A6DD', '#F9C647', '#FFFFFF'],
        dataLabels: {
          enabled: false,
          formatter: function (val, opts) {
            const name = opts.w.globals.labels[opts.seriesIndex]
            return Math.round(val);
          }, style: {
            fontSize: '10px',
            fontFamily: 'SourceSansPro',
            fontWeight: 'bold',
            colors: ['#362c59', '#362c59', '#362c59', '#362c59', '#362c59', '#362c59', '#362c59']
          }, dropShadow: {
            enabled: false,
          }
        },
        legend: {
          show: false
        }
      },
    }
  }
  render() {
    return <span style={{ display: "flex", marginTop: "20px" }}>
      <ReactApexChart className="piestyle" style={{ marginLeft: "0px" }} options={this.state.options} series={this.state.series} type="pie" width={this.state.width1} />
      <ReactApexChart className="piestyle" options={this.state.options1} series={this.state.series1} type="pie" width={this.state.width1} />
      <ReactApexChart className="piestyle" options={this.state.options2} series={this.state.series2} type="pie" width={this.state.width1} />
      <ReactApexChart className="piestyle" options={this.state.options3} series={this.state.series3} type="pie" width={this.state.width1} />
      <ReactApexChart className="piestyle" options={this.state.options4} series={this.state.series4} type="pie" width={this.state.width1} />
      <ReactApexChart className="piestyle" options={this.state.options5} series={this.state.series5} type="pie" width={this.state.width1} />

    </span>
  }
}

export default ContentPieChart;
