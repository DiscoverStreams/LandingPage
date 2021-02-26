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

  <vue-echarts :option="option" style="height: 500px" ref="chart" />
</template>

<script>
// import LineChart from './Chart.vue'
// import { Line } from 'vue-chartjs'
import axios from 'axios'
import { VueEcharts } from 'vue3-echarts';

export default {
  name: "Kansas",
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
      xAxis: {
        type: 'category',
        data: [1900]
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [8.33],
        type: 'line'
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
      const {data} = await axios.get('http://localhost:5000/getData')
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
