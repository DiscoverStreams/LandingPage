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

  <vue-echarts :option="option" style="height: 400px" ref="chart" />
</template>

<script>
// import LineChart from './Chart.vue'
// import { Line } from 'vue-chartjs'
import axios from 'axios'
import { VueEcharts } from 'vue3-echarts';

export default {
  name: "Streamflow",
  components: {
    // LineChart
    VueEcharts
  },
  data: () => ({
    // loaded: false,
    // chartData: null,
    // options: {
    //   responsive: true,
    //   maintainAspectRatio: false
    // }
    chartdata: null,
    option : {
      darkmode: true,
      backgroundColor: "#100C2A",    
      textStyle: {
        color: "white"
      },
      title: {
        text: 'Irrigation',
        left: '1%',
        textStyle: {
          color: "white"
        },
      },
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '5%',
        right: '15%',
        bottom: '15%'
      },
      xAxis: {
        type: 'category',
        data: [1900]
      },
      yAxis: {
        type: 'value',
      },
      toolbox: {
        right: 10,
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          restore: {},
          saveAsImage: {}
        }
      },
      dataZoom: [{
        startValue: '1984'
      }, {
        type: 'inside'
      }],
      visualMap: {
        top: 50,
        right: 10,
        textStyle: {
          color: "white"
        },
        pieces: [{
          gt: 0,
          lte: 20,
          color: '#34dab4'
        }, {
          gt: 20,
          lte: 40,
          color: '#56f14f'
        }, {
          gt: 40,
          lte: 60,
          color: '#cdfe05'
        }, {
          gt: 60,
          lte: 80,
          color: '#fec408'
        }, {
          gt: 80,
          lte: 100,
          color: '#ff5c00'
        }, {
          gt: 100,
          color: '#f40c0c'
        }],
        outOfRange: {
          color: '#999'
        }
      },
      series: [{
        name: "Title",
        data: [8.33],
        type: 'line',
        markLine: {
          silent: true,
          lineStyle: {
            color: '#ff9b69',
            type: 'solid'
          },
          data: [{
            yAxis: 20
          }, {
            yAxis: 40
          }, {
            yAxis: 60
          }, {
            yAxis: 80
          }, {
            yAxis: 100
          }]
        }
      }]
    }
  }),
  methods: {
    fillData: function() {
      this.chartdata.forEach((array, i) => {
        this.option.xAxis.data[i] = array[0]
        this.option.series[0].data[i] = array[1]
      });
      (this.$refs.chart).refreshOption();
      console.log(this.option);
    }
  },
  async mounted () {
    this.loaded = false
    try {
      const {data} = await axios.get('http://localhost:5000/getStreamflowData')
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

</style>
