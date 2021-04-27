<template>
  <div class="container">
     
    <div class="irrigation charts" >
      <div>  
        <input class="subselections" type="month" :min="MIN_DATE" v-model="startDate"> -
        <input class="subselections" type="month" :min="startDate ? startDate : MIN_DATE" v-model="endDate">

        <span>
          <span > &emsp;City: </span> 
          <select class="subselections" v-model="chosenCity">
            <option class="dropdown" v-for="(city, i) in cities" :value="city.value" :key="i">
              {{ city.text }}
            </option>
          </select>
        </span>
      </div>
      
      <!-- Need to seperate query1 from query2 so both graphs dont rerender on selecting a different option -->
      <select class="selection" v-model="query1">
        <option class="dropdown" v-for="(option, i) in options" :value="option.value" :key="i">
          {{ option.text }}
        </option>
      </select>

      <!-- The keys have to be different to rerender individually -->
      <Chart 
        :v-if='query1 != "default" '
        :chartOptions='chartOptions' 
        :label='label'
        :unit='unit'
        :query='query1'
        :startDate='startDate' 
        :endDate='endDate' 
        :city='chosenCity' 
        :key="rerender1" />
      <!-- <Irrigation /> -->
    </div>


    <div class="groundwater charts" >
      
      <select class="selection" v-model="query2">
        <option class="dropdown" v-for="(option, i) in options" :value="option.value" :key="i">
          {{ option.text }}
        </option>
      </select>

      <Chart 
        :v-if='query2 != "default" '
        :chartOptions='chartOptions' 
        :label='label'
        :unit='unit'
        :query='query2'
        :startDate='startDate' 
        :endDate='endDate' 
        :city='chosenCity' 
        :key="rerender2" />
      <!-- <Chart :chartOptions='chartOptions' title='Groudwater' /> -->
    </div>
    <div class="streamflow charts" >
      <!-- <Chart :chartOptions='chartOptions' title='Streamflow' /> -->
    </div>
    <div class="hydro-moments">
      <h2>
        KEY HYDROLOGICAL MOMENTS:
      </h2>
      <ul>
        <li>
          <b>
            1954: 
          </b>
            Before extensive pumping, major droughts cause declines in groundwater and streamflow, with flows as low as 7.0 ft3/s.
        </li>
        <li>
          <b>
            1974 - 1979:
          </b>
           Modest dry period produces extremely low streamflows at 0.2 ft3/s. The consequences of center pivot irrigation on streamflow are revealed.  
        </li>
        <li>
          <b>
            Sept - Nov 1983: 
          </b>
          Second highest recorded pumping corresponds with second lowest groundwater level while streamflow remains normal at 83.3 ft3/s.
        </li>
        <li>
          <b>
            1992 - 2001:
          </b>
           Long mostly wet period allows streamflow and groundwater to recover.
        </li>
        <li>
          <b>
            2003 - 2006:
          </b>
           Pumping during a moderate drought leads to smaller steamflows of 1.4 ft3/s than occurred in the more severe 1950’s drought.
        </li>
        <li>
          <b>
            2010 - 2014:
          </b>
           Pumping during severe drought leads to lowest recorded streamflow of 0.01 ft3/s.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Chart from "../components/Projects/Kansas/Chart"
import Highcharts from 'highcharts'

export default {
  name: "ExploreKansas",
  components: {
    Chart
  },
  watch: {
    query1() {
      if (this.query1 == 'STREAM') {
        this.label = 'Discharge';
        this.unit = 'ft^3/s'
      }
      this.rerender1 = this.rerender1 + 1;
    },
    query2() {
      if (this.query2 == 'STREAM') {
        this.label = 'Discharge';
        this.unit = 'ft^3/s'
      }
      this.rerender2 = this.rerender2 + 1;
    },
    startDate() {
      this.rerender1 = this.rerender1 + 1;
      this.rerender2 = this.rerender2 + 1;

    },
    endDate() {
      this.rerender1 = this.rerender1 + 1;
      this.rerender2 = this.rerender2 + 1;

    },
    chosenCity() {
      this.rerender1 = this.rerender1 + 1;
      this.rerender2 = this.rerender2 + 1;

    },
  },
  methods: {
    

  },
  data: () => ({
    MIN_DATE: '1950-10',
    startDate: '1950-10',
    endDate: '2020-11',
    query1: 'default',
    query2: 'default',
    chosenCity: 'syracuse',
    label: 'Discharge',
    rerender1: 1,
    rerender2: 2,
    unit: '',
    options: [
      {
        value: 'STREAM',
        text: 'Streamflow',
        unit: 'ft^3/s',
        label: 'Discharge'
      },
      {
        value: 'GW',
        text: 'Groundwater',
        unit: 'ft'
      },
      {
        value: 'IW',
        text: 'Irrigation Water Use',
        unit: 'ft^3/s'
      },
      {
        value: 'CLI',
        text: 'Climate PDSI',
        unit: ' '
      },
    ],

    cities: [
      {
        value: 'syracuse',
        text: "Syracuse"
      },
      {
        value: 'gardenCity',
        text: "Garden City"
      },
      {
        value: 'dodgeCity',
        text: "Dodge City"
      },
      {
        value: 'greatBend',
        text: "Great Bend"
      },
      {
        value: 'wichita',
        text: "Wichita"
      },
    ],

    chartOptions: {
      chart: {
        type: 'area',
        zoomType:'x'
      },
      title: {
        text: '',
      },
      xAxis: {
        crosshair: {
          width: 2,
          color: 'red',
          dashStyle: 'shortdot'
        },
        type: 'datetime',
        categories: ['Jun', 'Jul', 'Aug', 'Sept'],
        
      },
      yAxis: {
        title: {
          text: 'Average',
        },
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
              [0, Highcharts.getOptions().colors[4]],
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
      series: [{
        // type: 'area',
        name: 'Average ft',
        data: [25, 39, 30, 15],
      }],
    },
  })
};
</script>

<style scoped>
.subselections {
  margin: auto;
  margin-top: 0.5rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  color: #2c3e5099;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
  -moz-text-size-adjust: none;
  border: 1px solid rgba(220, 220, 220, 0.884);
  padding: 0.25rem;
}

.selection {
  margin: auto;
  margin-top: 0.5rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #2c3e5099;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
  -moz-text-size-adjust: none;
  border: 1px solid rgba(220, 220, 220, 0.884);
  padding: 0.25rem;
}

.selection:focus{
  outline: none;
  border: none;
}

.dropdown{
  outline: none;
  border: none;
  background-color: transparent;
}

.dropdown:hover{
  outline: none;
  border: none;
  background-color: red;
}

li {
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: left;
}

.container {
  display: grid;
  padding: 1rem 0rem;
  grid-template-columns: 50% 50%;
  grid-template-rows: 550px 550px 550px 550px;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  width: 95%;
  margin: auto;
}

.irrigation {
  grid-column-start: 2;
  height: 100%;
  grid-row-start: 1;
  grid-row-end: 1;
}

.groundwater {
  grid-column-start: 2;
  height: 100%;
  grid-row-start: 2;
  grid-row-end: 2;
}

.streamflow {
  grid-column-start: 2;
  height: 100%;
  grid-row-start: 3;
  grid-row-end: 3;
}

.charts {
  padding: 0rem 0.25rem;
}

.hydro-moments{
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 3;
  grid-row-end: 4;
  padding: 0.25rem 2rem 0.25rem 1rem;
}


@media only screen and (max-width: 1200px) {
  .container{
    display: flex;
    flex-direction: column;
    margin: auto;
  }
  .charts {
    padding: 0.25rem 0rem;
  }
}


@media only screen and (max-width: 700px) {
  .container{
    display: flex;
    flex-direction: column;
    padding: 0rem 0.25rem;
    margin: auto;
  }
  .charts {
    padding: 0.25rem 0rem;
  }
  
  .hydro-moments{
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 3;
    grid-row-end: 4;
    padding: 0.25rem 1rem 0.25rem 0rem;
  }
}

@media only screen and (min-width: 2000px) {
  .container {
    width: 85%;
  }
}
</style>
