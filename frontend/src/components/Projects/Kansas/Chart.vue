<template>
  <div >
    <vue-highcharts
      v-if="loaded"
      type="chart"
      :options="chartOption"
      :redrawOnUpdate="true"
      :oneToOneUpdate="true"
      :animateOnUpdate="true"
      @rendered="onRender"
      @update="onUpdate"
      @destroy="onDestroy"
    />
    <div v-else-if="!loaded && !error && query != 'default' ">
      Loading...
    </div>
    <div v-else-if="error">
      There was an error retrieving this data
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import VueHighcharts from 'vue3-highcharts';
import Highcharts from 'highcharts';

export default {
  name: 'Chart',
  components: {
    VueHighcharts,
  },
  props: {
    chartOptions: {
      type: Object,
    },
    city: {
      type: String,
    },
    startDate: {
      type: String,
    },
    endDate: {
      type: String,
    },
    query: {
      type: String,
    },
    label: {
      type: String,
    },
    unit: {
      type: String
    }
  },
  data: () => ({
    startDateCopy: '',
    endDateCopy: '',
    chartdata: null,
    chartOption: null,
    loaded: false,
    error: false,
    category: null,
    y: null,
    tooltip: {
      positioner: function() {
        return { x: 75, y: 5 };
      },
      useHTML: true,
      shadow: false,
      borderWidth: 2,
      backgroundColor: 'rgba(156, 228, 255,0.8)',
      shape: 'square',
      shared: true,
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 2,
            y1: 1,
            x2: 2,
            y2: 0,
          },

          stops: [
            [0, Highcharts.getOptions().colors[4]],
            [
              1,
              Highcharts.color(Highcharts.getOptions().colors[0])
                .setOpacity(0.1)
                .get('rgba'),
            ],
          ],
        },
        marker: {
          radius: 2,
        },
        lineWidth: 3,
        states: {
          hover: {
            lineWidth: 3,
          },
        },
        threshold: null,
      },
      series: {
        point: {
          events: {
            mouseOver: function(e) {
              let series = e.target.series;
              let index = series.xData.indexOf(e.target.index);
              Highcharts.charts.forEach((chart) => {
                if (chart && chart.index !== e.chartId) {
                  let data = chart.series[0].data[index];
                  if (data) {
                    data.setState('hover');
                    chart.xAxis[0].drawCrosshair(e, data);
                    chart.tooltip.refresh([data]);
                  }
                }
              });
            },
            mouseOut: function(e) {
              let series = e.target.series;
              let index = series.xData.indexOf(e.target.index);
              Highcharts.charts.forEach((chart) => {
                if (chart && chart.index !== e.chartId) {
                  let data = chart.series[0].data[index];
                  if (data) {
                    data.setState('');
                    chart.xAxis[0].hideCrosshair();
                  }
                }
              });
            },
          },
        },
      },
    },
    yAxis: {
      title: {
        text: "Average",
      }
    },
    xAxis: {
      crosshair: {
        width: 2,
        color: 'red',
        dashStyle: 'shortdot',
      },
      type: 'datetime',
      categories: ['Jun', 'Jul', 'Aug', 'Sept'],
      events: {
        afterSetExtremes: function(e) {
          let min = e.min;
          let max = e.max;
          Highcharts.charts.forEach((chart) => {
            if (chart) {
              if (chart.index !== e.chartId) {
                chart.xAxis[0].setExtremes(min, max);
              }
              chart.legend.update({
                labelFormatter: function() {
                  return (
                    'Average: ' +
                    (chart.series[0].dataMax + chart.series[0].dataMin) / 2
                  );
                },
              });
            }
          });
        },
      },
    },
    rangeSelector: {
      selected: 0,
    },
    legend: {
      layout: 'vertical',
      backgroundColor: 'transparent',
      floating: true,
      align: 'right',
      verticalAlign: 'top',
      
    },
    // pointer: {
    //   reset: function() {
    //     return undefined;
    //   }
    // },
  }),
  methods: {
    // Fills the data from chartdata to chartoption.Xaxis, and yaxis
    fillData: function(chartdata, chartOption, label) {
      
      chartdata.forEach((array, i) => {
        // The X Values (yyyy-mm)
        chartOption.xAxis.categories[i] = `${array.Year}-${array.Month}`;

        // The actual data
        chartOption.series[0].data[i ] = parseFloat(array[label]); 
        
      }); 

      
    },

    options() {
      // Convert this.chartOptions to chartOption since props cant be mutated
      this.chartOption = JSON.parse(JSON.stringify(this.chartOptions));

      // Functions inside tooltip and plotOptions
      this.chartOption.tooltip = this.tooltip;
      this.chartOption.plotOptions = this.plotOptions;
      this.chartOption.xAxis = this.xAxis;

      // Label and Unit need to be assigned here not inside the object
      this.chartOption.yAxis.title.text = `${this.label} (${this.unit})`;
      this.chartOption.series[0].name = `Average ${this.label}`;

      this.chartOption.legend = this.legend;
      this.chartOption.rangeSelector = this.rangeSelector;
      
      // Trying to boost loading speed
      this.chartOption.boostThreshold = 1;
      this.chartOption.turboThreshold = 0;
    },

    onRender() {
      
      // Important for inital render, will get overwritten by function after but without this no average will be displayed
      Highcharts.charts.forEach((chart) => {
        if (chart) {
          chart.legend.update({
            labelFormatter: function() {
              return (
                'Average: ' +
                (chart.series[0].dataMax + chart.series[0].dataMin) / 2
                + `${this.unit}`
              );
            },
          });
        }
      });
      console.log(`${this.query} rendered`);
      // console.log(this.chartOption.xAxis);
      // console.log(this.chartOption.series);

    },

    onUpdate() {
      console.log(`${this.query} updated`);
    },

    onDestroy() {
      console.log(`${this.query} destroyed`);
    },

    updateLegendLabel() {
      console.log('here');
    },
  },
  async mounted() {
    
    if (this.query != 'default') {

      if (this.startDate) {
        this.startDateCopy = this.startDate.split('-')[0];
      } else {
        this.startDateCopy = '1950'
      }
      if (this.endDate) {
        this.endDateCopy = this.endDate.split('-')[0];
      }else{
        this.endDateCopy = new Date().getFullYear();
      }
      this.loaded = false;
      this.options();
      try {
        // console.log("pre data send" , (new Date()).getSeconds(), (new Date()).getMilliseconds());
        
        const { data } = await axios.get(
          // `https://interactiveviz.ku.edu/DiscoverStreams/PHP-API-DEV/get.php?query=${this.query}&city=${this.city}&startDate=${this.startDateCopy}&endDate=${this.endDateCopy}`
          `https://interactiveviz.ku.edu/DiscoverStreams/PHP-API-DEV/get.php`,
          {
            params: {
              query: `${this.query}`,
              city: `${this.city}`,
              startDate: `${this.startDateCopy}`,
              endDate: `${this.endDateCopy}`
            },
            headers: { 
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          },
        );
        this.chartdata = Object.freeze(data);
        this.fillData(this.chartdata, this.chartOption, this.label);
        // console.log("data processed" , (new Date()).getSeconds(), (new Date()).getMilliseconds());
        
        this.loaded = true;
        this.error = false;
      } catch (e) {
        this.loaded = false;
        this.error = true;
        console.error(e);
      }
    }
  },
};
</script>

<style scoped>
.vue-highcharts {
  width: 100%;
  margin-top: 1rem;
}
</style>
