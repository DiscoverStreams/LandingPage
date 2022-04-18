<template>
<div class="Container">
  <div class="Title"> The three approaches for determing streamflow depletion </div>
    <div class="FirstMethod">
    <h class="Methods"> <h class="MethodsTitle"> <i>Analytical approaches: </i> </h> 
    Analytical approaches use simplifying assumptions (commonly including linear streams and homogeneous aquifers)
     to derive an exact mathematical equation for streamflow depletion. 
     They have low data requirements and are relatively easy to use, 
     but these simplifying assumptions mean that they are very crude approximations of the real world. 
     They were the first approach to streamflow depletion estimation and are still used widely. 
     The Glover model and Hunt model are two widely used analytical solutions, 
     and emerging approaches also include semi-analytical models and analytical depletion functions.</h>
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
          •	Many simplifying assumptions (constant stream water level, no drying streams,
           homogeneous subsurface, etc.)<br><br>
          •	Derivations not available for many stream-aquifer systems<br><br>
          •	Limited capability for scenario analysis due to inability to 
           represent many processes (evapotranspiration, unsaturated flow)<br><br>
          •	Limited spatial extent (point based predictions)<br><br>
        </td>
      </tr>
    </table>     </div>
    <div class="SecondMethod">
    <h class="Methods">
      <h class="MethodsTitle"> <i>Numerical models: </i> </h>  
      Numerical models estimate changes in water storage and flux associated with
       groundwater pumping across a variety of scales, and have been used to assess 
       streamflow depletion at scales ranging from small watersheds to global models. 
       They often implement a gridded representation of the landscape and therefore are able to simulate 
       complex stream-aquifer geometry and aquifer heterogeneity, as well as processes such as surface water management,
        and unsaturated zone processes. However, this increased complexity means that they can have 
        substantial data needs for parametrization and calibration, and require significant time and resources to develop. 
        Numerical models used for streamflow depletion estimation include MODFLOW, FEFLOW, ParFlow, HydroGeoSphere, and others. 
    </h>
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
    </table> </div>
    <div class="ThirdMethod">
    <h class="Methods">
      <h class="MethodsTitle"> <i>Statistical approaches (including machine learning): </i> </h>  
      Statistical approaches attempt to infer streamflow depletion by analyzing the relationships 
      between different hydrologic variables such as streamflow, precipitation, and groundwater pumping.
       Statistical approaches are highly flexible to different input data and target metrics, 
       but are challenging to develop causal attribution. They can be broadly divided into statistical assessments,
        which attempt to document change (i.e., trend analysis), and statistical models, 
        which attempt to relate change in stream flow to potential predictor variables (i.e., regression analysis). 
        Other statistical approaches used for streamflow depletion estimation include time series analysis and machine learning. 
    </h>
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
    </table> </div>
</div>
    
</template>

<script>

export default {
    name: "DepletionMethods",
};

</script>

<style scoped>

.Container {
    position: relative;
    width: 80vw;
    height: 100%;
}

.Title {
  margin-bottom: 1vw;
  font-size: 3vw;
  color: MintCream;
  font-family: "Handwriting";
}

.Methods {
  color: MintCream;
  font-family: "PhilosopherBold";
}

.MethodsTitle {
  font-size: 2vw;
  font-family: "PhilosopherBold"
}

.FirstMethod {
  width: 90vw;
  margin: auto;
}

.SecondMethod {
  width: 90vw;
  margin: auto;
}

.ThirdMethod {
  width: 90vw;
  margin: auto;
}

table{
  font-size: 1.4vw;
  font-weight: 900;
  font-family: "Leorio";
  margin: 2vw 0vw;
  background-color: AliceBlue;
}

td{
  text-align: justify;
  vertical-align: top;
  padding: 1rem;
}

th {
  border: 1px solid #dddddd8c;
  border-bottom: 0px;
  color: black;
}

tr:nth-child(even) {
  background-color: LightSlateGrey;
}

</style>
