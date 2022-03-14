<template>
<div class='chartElement'>
    <highcharts class="hc" :options="chartOptions" ref="chart"></highcharts>
<!-- <div id="syncChart">
    <div id="pumpChart"> </div>
    <div id="qChart"> </div>
    <div id="gwChart"> </div>
    <div id="pdsiChart"> </div>
    </div> -->
</div>
</template>

    
    
<script>
//import Vue from 'vue'
//import HighchartsVue from 'highcharts.vue'

export default {
  data() {
    return {
      chartOptions: {
        series: [
          {
            data: [1, 2, 3]
          }
        ]
      }
    };
  }
};      

</script>
    
    
<style scoped>

.chartElement {
    float: right;
    right: 0;
    width: 400px;
    height: 500px;
    padding: 15px;
    z-index: 1000
    }
    
#syncChart {
    position: absolute;
    width: 75%;
    right: 0;
    padding: 15px;
    }
    
#qchart {
    width: 70%;
    height: 210px; 
    margin-left: auto; 
    margin-right: auto
    }   
    
#gwchart {
    width: 70%;
    height: 210px;
    margin-left: auto;
    margin-right: auto
    }
    
#pdsichart {
    width: 70%;
    height: 210px;
    margin-left: auto;
    margin-right: auto
    }
    
</style>