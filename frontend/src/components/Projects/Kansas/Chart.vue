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
    <div v-if="!loaded && query != 'default'">
      Loading...
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
    title: {
      type: String,
    },
    query: {
      type: String,
    }
  },
  data: () => ({
    chartdata: null,
    chartOption: null,
    loaded: false,
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
    fillData: function(chartdata, chartOption, query) {
      // console.log("query", query);
      chartdata.forEach((array, i) => {
        if (i > 0) {
          chartOption.xAxis.categories[i - 1] = array.DATE.split(" ")[0];
          chartOption.series[0].data[i - 1] = parseFloat(array[query]); 
          // console.log(parseFloat(array[query]));
          // chartOption.series[0].data[i - 1] = parseFloat(array.PH); 
          // console.log(parseFloat(array.PH));
        }
      }); 

      
    },

    options() {
      this.chartOption = JSON.parse(JSON.stringify(this.chartOptions));
      this.chartOption.tooltip = this.tooltip;
      this.chartOption.plotOptions = this.plotOptions;
      // this.chartOption.plotOptions.area = this.plotOptions.area;
      this.chartOption.xAxis = this.xAxis;
      // this.chartOption.pointer = this.pointer;
      // this.chartOption.title.text = this.title;
      this.chartOption.legend = this.legend;
      this.chartOption.rangeSelector = this.rangeSelector;
    },

    onRender() {
      Highcharts.charts.forEach((chart) => {
        if (chart) {
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
    this.options();
    this.loaded = false;
    if (this.query != 'default') {
      try {
        const { data } = await axios.get(
          'https://interactiveviz.ku.edu/DiscoverHABs/Cheney/CyanoHABs-PHP-DEV/get.php',
          {
            params: {
              q: `DATE, ${this.query}`,
            },
          },
        );
        this.chartdata = Object.freeze(data);
        // console.log(this.chartdata);
        this.fillData(this.chartdata, this.chartOption, this.query);
        
        this.loaded = true;
      } catch (e) {
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
