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
  <div v-if="loaded">
    <vue-highcharts 
      type="chart"
      :options="chartOption" 
      :redrawOnUpdate="true"
      :oneToOneUpdate="true"
      :animateOnUpdate="true"
      @rendered="onRender"
      @update="onUpdate"
      @destroy="onDestroy"
    />
  </div>
  
</template>

<script>
// import LineChart from './Chart.vue'
// import { Line } from 'vue-chartjs'
import axios from 'axios'
// import { VueEcharts } from 'vue3-echarts';
import VueHighcharts from 'vue3-highcharts';
import Highcharts from 'highcharts'



export default {
  name: "Chart",
  components: {
    // LineChart
    // VueEcharts
    VueHighcharts
  },
  props: {
    index: {
      type: Number,
    },
    chartOptions: {
      type: Object
    },
    fillData: {
      type: Function
    },
    title:{
      type: String
    }
  },
  data: () => ({    
    chartdata: null,
    chartOption: null,
    loaded: false,
    tooltip: {
      positioner: function () {
        return { x: 80, y: 50 };
      },
      shadow: false,
      borderWidth: 2,
      backgroundColor: 'rgba(156, 228, 255,0.8)',
      shape: 'square',
      shared: true
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0.2).get('rgba')]
          ]
        },
        marker: {
          radius: 2
        },
        lineWidth: 3,
        states: {
          hover: {
            lineWidth: 3
          }
        },
        threshold: null
      }
    },
    xAxis: {
      crosshair: {
        width: 2,
        color: 'red',
        dashStyle: 'shortdot'
      },
      type: 'datetime',
      categories: ['Jun', 'Jul', 'Aug', 'Sept'],
      events: {
        afterSetExtremes: function (e) {
          let min = e.min;
          let max = e.max;
          Highcharts.charts.forEach((chart) => {
            if (chart && chart.index !== e.chartId) {
              chart.xAxis[0].setExtremes(min, max);
            }
          });
        }
      }
    },
  }),
  methods: {
    options(){
      this.chartOption = JSON.parse(JSON.stringify(this.chartOptions));
      this.chartOption.tooltip= this.tooltip;
      this.chartOption.plotOptions= this.plotOptions;
      this.chartOption.xAxis = this.xAxis;
      this.chartOption.title.text = this.title;
    },
    onRender(){
      console.log(`${this.title} rendered`);
      
    },
    onUpdate(){
      console.log(`${this.title} updated`);
    },
    onDestroy(){
      console.log(`${this.title} destroyed`);
    },
  },
  async mounted () {
    this.options();
    try {
      const {data} = await axios.get('http://localhost:5000/getData', {
        params: {
          index: this.index,
        }
      })
      this.chartdata = data;
      this.fillData(this.chartdata, this.chartOption);
      this.loaded= true
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
