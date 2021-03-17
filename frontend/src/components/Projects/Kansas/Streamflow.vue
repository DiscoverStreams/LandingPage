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

  <!-- <vue-echarts :option="option" style="height: 400px" ref="chart" /> -->
  <vue-highcharts 
    type="chart"
    :options="chartOptions" 
    :redrawOnUpdate="true"
    :oneToOneUpdate="true"
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


export default {
  name: "Streamflow",
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
    chartdata: null,
    // option : {
    //   darkmode: true,
    //   backgroundColor: "#100C2A",    
    //   textStyle: {
    //     color: "white"
    //   },
    //   title: {
    //     text: 'Streamflow',
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
    //       lte: 500,
    //       color: '#34dab4'
    //     }, {
    //       gt: 500,
    //       lte: 1000,
    //       color: '#56f14f'
    //     }, {
    //       gt: 1000,
    //       lte: 1500,
    //       color: '#cdfe05'
    //     }, {
    //       gt: 1500,
    //       lte: 2000,
    //       color: '#fec408'
    //     }, {
    //       gt: 2000,
    //       lte: 2500,
    //       color: '#ff5c00'
    //     }, {
    //       gt: 2500,
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
    //         yAxis: 500
    //       }, {
    //         yAxis: 1000
    //       }, {
    //         yAxis: 1500
    //       }, {
    //         yAxis: 2000
    //       }, {
    //         yAxis: 2500
    //       }]
    //     }
    //   }]
    // }
    chartOptions: {
      chart: {
        type: 'line',
        zoomType:'x'
      },
      title: {
        text: 'Streamflow',
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
          text: 'Average ft',
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
        name: 'Average ft',
        data: [25, 39, 30, 15],
      }],
    },
  }),
  methods: {
    // fillData: function() {
    //   this.chartdata.forEach((array, i) => {
    //     this.option.xAxis.data[i] = `${array[1]}-${array[0]}`
    //     this.option.series[0].data[i] = array[2]
    //   });
    // }
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
          index: 2,
        }
      })
      this.chartdata = data;
      this.fillData();
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  },
};
</script>

<style scoped>

</style>
