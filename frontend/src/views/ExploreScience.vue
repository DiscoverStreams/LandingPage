<template>
  <div class="container">
    <h2><br>Explore Science</h2>
    <h4>Explore the science behind streamflow depletion, understanding what it is, why it is a problem, and how we can measure how much is occurring. This information is summarized from “Quantifying Streamflow Depletion from Groundwater Pumping: A Practical Review of Past and Emerging Approaches for Water Management” by Zipper et al., (2021) in review for Journal of the American Water Association.</h4>
    <h3>What is streamflow depletion?</h3>
    <img :src="StreamflowDepletion" alt="StreamflowDepletion">
    <h4>Streamflow depletion is a reduction in streamflow caused by groundwater pumping. Streamflow depletion occurs when wells capture groundwater which otherwise would flow from the aquifer to the stream, and/or when wells lower the water table and increase the rate of infiltration losses through the streambed.</h4>
    <h3>Why do we care about streamflow depletion?</h3>
    <h4>Streamflow is declining in many parts of the world due to factors including groundwater pumping, land use change, and climate change. Streamflow depletion tends to evolve slowly and can be entirely invisible for many years to decades. This is because streamflow depletion can be masked by the natural and/or climate change-induced variability in streamflow, and groundwater storage can buffer the impacts on streams. The negative effects on both anthropogenic and ecological systems can evolve over decades or more, and specific causes and potential solutions to these issues are often difficult to discern. The invisible nature of streamflow depletion implies that water managers should be made aware of potential depletion that may impact their region as conditions develop.</h4>
    <h3>How can we measure the streamflow depletion?</h3>
    <img :src="MeasureDepletion" alt="MeasureDepletion">
    <h4>Streamflow depletion is challenging to quantify because the impacts of pumping are hidden by variability in streamflow due to weather or other human activities (i.e., reservoir operations, land use change), and time lags between when pumping occurs and streamflow is affected. </h4>
    <h4>Streamflow depletion can be directly estimated at the scale of a stream reach using detailed field measurements, but this is very effort-intensive and not feasible for scales beyond a single stream. For regional-scale estimation, there are three categories of approaches:</h4>
    <h4><strong><i>Analytical approaches:</i></strong> Analytical approaches use simplifying assumptions (commonly including linear streams and homogeneous aquifers) to derive an exact mathematical equation for streamflow depletion. They have low data requirements and are relatively easy to use, but these simplifying assumptions mean that they are very crude approximations of the real world. They were the first approach to streamflow depletion estimation and are still used widely. The Glover model and Hunt model are two widely used analytical solutions, and emerging approaches also include semi-analytical models and analytical depletion functions.</h4>
    <table>
      <tr>
        <th>Advantages</th>
        <th>Disadvantages</th>
      </tr>
      <tr>
        <td>
          •	Low data, expertise, and computational requirements<br><br>
          •	Ability to explore different pumping scenarios quickly<br><br>
          •	Provide exact mathematical solution (no convergence required)<br><br>
          •	Can be useful as screening tool to prioritize further investigation with other approaches<br><br>
          •	Long history in water management applications<br><br>
        </td>
        <td>
          •	Many simplifying assumptions (constant stream water level, no drying streams, homogeneous subsurface, etc.)<br><br>
          •	Derivations not available for many stream-aquifer systems<br><br>
          •	Limited capability for scenario analysis due to inability to  represent many processes (evapotranspiration, unsaturated flow)<br><br>
          •	Limited spatial extent (point based predictions)<br><br>
        </td>
      </tr>
    </table>
    <h4>
      <strong><i>Numerical models:</i></strong> 
      Numerical models estimate changes in water storage and flux associated with groundwater pumping across a variety of scales, and have been used to assess streamflow depletion at scales ranging from small watersheds to global models. They often implement a gridded representation of the landscape and therefore are able to simulate complex stream-aquifer geometry and aquifer heterogeneity, as well as processes such as surface water management, and unsaturated zone processes. However, this increased complexity means that they can have substantial data needs for parametrization and calibration, and require significant time and resources to develop. Numerical models used for streamflow depletion estimation include MODFLOW, FEFLOW, ParFlow, HydroGeoSphere, and others. 
    </h4>
    <table>
      <tr>
        <th>Advantages</th>
        <th>Disadvantages</th>
      </tr>
      <tr>
        <td>
          •	Physical representation of processes in up to 3 spatial dimensions plus time<br><br>
          •	Ability to assign/test causation<br><br>
          •	Flexibility to explore different scenarios<br><br>
          •	Can provide solutions for both storage and flux<br><br>
          •	Widely used and perceived as accurate for streamflow depletion calculations<br><br>
          •	Can estimate uncertainties in parameters and predictions<br><br>
          •	Identify locations and types of data that could help reduce uncertainty<br><br>
        </td>
        <td>
          •	High data, expertise, time required<br><br>
          •	Can be large computational costs<br><br>
          •	Challenging to validate<br><br>
          •	Predictions outside training conditions may not be reliable (but maybe better than other approaches?)<br><br>
          •	Mass balance errors can overwhelm pumping signal<br><br>
          •	Can appear realistic even when error are large<br><br>
          •	Estimates of uncertainty can be unrealistic<br><br>
        </td>
      </tr>
    </table>
    <h4>
      <strong><i>Statistical approaches (including machine learning) : </i></strong> 
      Statistical approaches attempt to infer streamflow depletion by analyzing the relationships between different hydrologic variables such as streamflow, precipitation, and groundwater pumping. Statistical approaches are highly flexible to different input data and target metrics, but are challenging to develop causal attribution. They can be broadly divided into statistical assessments, which attempt to document change (i.e., trend analysis), and statistical models, which attempt to relate change in stream flow to potential predictor variables (i.e., regression analysis). Other statistical approaches used for streamflow depletion estimation include time series analysis and machine learning. 
    </h4>
    <table>
      <tr>
        <th>Advantages</th>
        <th>Disadvantages</th>
      </tr>
      <tr>
        <td>
          •	Flexible framework incorporating various information sources <br><br>
          •	Generally lower computational needs and less domain-specific expertise required <br><br>
          •	Works well for the analysis and simulation of long records <br><br>
          •	Adaptable to a wide range of data availability and target metrics <br><br>

        </td>
        <td>
          •	Challenging to develop causal attribution <br><br>
          •	May not provide the needed level of detail/resolution in terms of space and time <br><br>
          •	Often narrow focus; designed around specific objectives with challenges to moving outside of that objective<br><br>
          •	Often need large datasets for training<br><br>
          •	Predictions outside training conditions may not be reliable<br><br>

        </td>
      </tr>
    </table>
  
  
  </div>
</template>

<script>

import MeasureDepletion from "../assets/ExploreScience/MeasureDepletion.png";
import StreamflowDepletion from "../assets/ExploreScience/StreamflowDepletion.png";

export default {
  name: "ExploreScience",
  data: () => ({
    MeasureDepletion: MeasureDepletion,
    StreamflowDepletion: StreamflowDepletion
  })
};
</script>

<style scoped>
.container {
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center; */
  padding: 0rem 1rem;
}

h3{
  font-style: italic;
  margin: 4rem 0rem 1rem 0rem;
  text-align: left;
}

img {
  width: 60%;
  margin: 1rem 0rem;
}

h4{
  text-align: left;
}

table{
  margin: 3rem 0rem;
}

td{
  text-align: left;
  vertical-align: top;
  padding: 1rem;
  border: 1px solid #dddddd;
}

th {
  border: 1px solid #dddddd8c;
  border-bottom: 0px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

h4{
  font-weight: normal;
}

</style>
