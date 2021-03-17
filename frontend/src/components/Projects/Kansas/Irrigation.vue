<template>
  <!-- <line-chart 
    v-show="loaded"
    :chartdata="chartData"
    :options="options"  
  /> -->
    <!-- v-show="loaded" -->

  <!-- <LineChart 
    :chartdata="chartData"
    :options="options"  
  /> -->

  <!-- <vue-echarts :option="option" style="height: 400px" ref="chart" />
   -->

  <vue-highcharts 
    type="chart"
    :options="chartOptions" 
    :redrawOnUpdate="true"
    :oneToOneUpdate="false"
    :animateOnUpdate="true"
    @rendered="onRender"
    @update="onUpdate"
    @destroy="onDestroy"
  />
</template>

<script>
// import LineChart from './Chart.vue'
// import { Line } from 'vue-chartjs'
import axios from 'axios'
// import { VueEcharts } from 'vue3-echarts';
import VueHighcharts from 'vue3-highcharts';
// import Highcharts from 'highcharts'



export default {
  name: "Irrigation",
  components: {
    // LineChart
    // VueEcharts
    VueHighcharts
  },
  data: () => ({
    // loaded: false,
    // chartData: null,
    // options: {
    //   responsive: true,
    //   maintainAspectRatio: false
    // }
    chartOptions: {
      chart: {
        type: 'line',
        zoomType:'x'
      },
      title: {
        text: 'Irrigation',
      },
      xAxis: {
        crosshair: {
          width: 1,
          color: 'red',
          dashStyle: 'shortdot'
        },
        type: 'datetime',
        categories: ['Jun', 'Jul', 'Aug', 'Sept'],
        
      },
      yAxis: {
        title: {
          text: 'Average ft^3/s',
        },
      },
      // plotOptions: {
      //   area: {
      //     fillColor: {
      //       linearGradient: {
      //         x1: 0,
      //         y1: 0,
      //         x2: 0,
      //         y2: 1
      //       },
      //       stops: [
      //         [0, Highcharts.getOptions().colors[4]],
      //         [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0.2).get('rgba')]
      //       ]
      //     },
      //     marker: {
      //       radius: 2
      //     },
      //     lineWidth: 3,
      //     states: {
      //       hover: {
      //         lineWidth: 3
      //       }
      //     },
      //     threshold: null
      //   }
      // },
      tooltip: {
        positioner: function () {
          return { x: 70, y: 50 };
        },
        shadow: false,
        borderWidth: 1,
        backgroundColor: 'rgba(156, 228, 255,0.8)',
        shape: 'square',
        shared: true
      },  
      series: [{
        // type: 'area',
        name: 'Average ft^3/s',
        data: [25, 39, 30, 15],
      }],
    },
    chartdata: null,
    // option : {
    //   darkmode: true,
    //   backgroundColor: "#100C2A",    
    //   textStyle: {
    //     color: "white"
    //   },
    //   title: {
    //     text: 'Irrigation',
    //     left: '1%',
    //     textStyle: {
    //       color: "white"
    //     },
    //   },
    //   tooltip: {
    //     trigger: 'axis'
    //   },
    //   grid: {
    //     left: '5%',
    //     right: '15%',
    //     bottom: '15%'
    //   },
    //   xAxis: {
    //     type: 'category',
    //     data: [1900]
    //   },
    //   yAxis: {
    //     type: 'value',
    //   },
    //   toolbox: {
    //     right: 10,
    //     feature: {
    //       dataZoom: {
    //         yAxisIndex: 'none'
    //       },
    //       restore: {},
    //       saveAsImage: {}
    //     }
    //   },
    //   dataZoom: [{
    //     startValue: '1984'
    //   }, {
    //     type: 'inside'
    //   }],
    //   visualMap: {
    //     top: 50,
    //     right: 10,
    //     textStyle: {
    //       color: "white"
    //     },
    //     pieces: [{
    //       gt: 0,
    //       lte: 20,
    //       color: '#34dab4'
    //     }, {
    //       gt: 20,
    //       lte: 40,
    //       color: '#56f14f'
    //     }, {
    //       gt: 40,
    //       lte: 60,
    //       color: '#cdfe05'
    //     }, {
    //       gt: 60,
    //       lte: 80,
    //       color: '#fec408'
    //     }, {
    //       gt: 80,
    //       lte: 100,
    //       color: '#ff5c00'
    //     }, {
    //       gt: 100,
    //       color: '#f40c0c'
    //     }],
    //     outOfRange: {
    //       color: '#999'
    //     }
    //   },
    //   series: [{
    //     name: "Title",
    //     data: [8.33],
    //     type: 'line',
    //     markLine: {
    //       silent: true,
    //       lineStyle: {
    //         color: '#ff9b69',
    //         type: 'solid'
    //       },
    //       data: [{
    //         yAxis: 20
    //       }, {
    //         yAxis: 40
    //       }, {
    //         yAxis: 60
    //       }, {
    //         yAxis: 80
    //       }, {
    //         yAxis: 100
    //       }]
    //     }
    //   }]
    // } 
  }),
  methods: {
    fillData: function() {
      this.chartdata.forEach((array, i) => {
        this.chartOptions.xAxis.categories[i] = `${array[1]}-${array[0]}`
        this.chartOptions.series[0].data[i] = array[2]
      });
    },
    
    onRender: () => {
      console.log('Chart rendered');
    },

    onUpdate: () => {
      console.log('Chart updated');
    },

    onDestroy: () => {
      console.log('Chart destroyed');
    },

  },
  
  async mounted () {
    this.loaded = false
    try {
      const {data} = await axios.get('http://localhost:5000/getData', {
        params: {
          index: 0,
        }
      })
      this.chartdata = data;
      this.fillData();
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
};
</script>

<style scoped>
.vue-highcharts {
  width: 100%;
}
</style>
