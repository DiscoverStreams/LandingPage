<template>
  <div class="container">
    <div class="irrigation charts" >
      <Irrigation />
    </div>
    <div class="groundwater charts" >
      <Groundwater />
    </div>
    <div class="streamflow charts" >
      <Streamflow />
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
import Irrigation from "@/components/Projects/Kansas/Irrigation";
import Groundwater from "@/components/Projects/Kansas/Groundwater";
import Streamflow from "@/components/Projects/Kansas/Streamflow";

export default {
  name: "ExploreKansas",
  components: {
    Irrigation,
    Groundwater,
    Streamflow
  },
  data: () => ({
    
  })
};
</script>

<style scoped>
li {
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: left;
}

.container {
  display: grid;
  padding: 1rem 0rem;
  grid-template-columns: 50% 50%;
  grid-template-rows: 410px 410px 410px 410px;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
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
    padding: 0rem 3rem;
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
</style>
