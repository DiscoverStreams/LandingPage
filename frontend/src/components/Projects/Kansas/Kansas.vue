<template>
  <!-- <line-chart 
    v-show="loaded"
    :chartdata="chartData"
    :options="options"  
  /> -->
    <!-- v-show="loaded" -->

  <LineChart 
    :chartdata="chartData"
    :options="options"  
  />
</template>

<script>
import LineChart from './Chart.vue'
// import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
  name: "Kansas",
  components: {
    LineChart
  },
  data: () => ({
    // loaded: false,
    chartData: null,
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),
  async mounted () {
    this.loaded = false
    try {
      const {data} = await axios.get('http://localhost:5000/getData')
      console.log(data);
      
      this.chartData = data
      this.renderChart(this.chartdata, this.options)
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
};
</script>

<style scoped>

</style>
