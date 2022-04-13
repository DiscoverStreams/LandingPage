<template>
<div class="ScienceContainer">
   <div class="Intro"> <h class="Title"> Explore Science </h>
    <p class="IntroDescription">Explore the science behind streamflow depletion, 
        understanding what it is, why it is a problem, and how we can measure how much is occurring. 
        This information is summarized from “Quantifying Streamflow Depletion from Groundwater Pumping: 
        A Practical Review of Past and Emerging Approaches for Water Management” by Zipper et al., (2021)
        in review for Journal of the American Water Association.</p> </div>
        <div class="ScienceExplanation">
            <div class="LeftSide"> 
                <div class="FirstImage"> <img :src="StreamflowDepletion" alt="StreamflowDepletion"> </div>
               <div class="SecondDescription"> 
                   <h class="Subtitle"> Why do we care about streamflow depletion?</h>
                   <p> Streamflow is declining in many parts of the world due to factors including groundwater pumping, 
                       land use change, and climate change. Streamflow depletion tends to evolve slowly and can be entirely 
                       invisible for many years to decades. This is because streamflow depletion can be masked by the natural
                       and/or climate change-induced variability in streamflow, and groundwater storage can buffer the impacts 
                       on streams.The negative effects on both anthropogenic and ecological systems can evolve over decades or 
                       more, and specific causes and potential solutions to these issues are often difficult to discern. 
                       The invisible nature of streamflow depletion implies that water managers should be made aware of potential 
                       depletion that may impact their region as conditions develop.</p>
               </div>
                <div class="ThirdImage"> <img :src="MeasureDepletion" alt="MeasureDepletion"> </div>
                </div>
            <div class="RightSide">
                <div class="FirstDescription"> 
                    <h class="Subtitle"> What is Streamflow Depletion?</h>
                    <p> Streamflow depletion is a reduction in streamflow caused by groundwater pumping.
                    Streamflow depletion occurs when wells capture groundwater which otherwise would flow 
                    from the aquifer to the stream, and/or when wells lower the water table and increase 
                    the rate of infiltration losses through the streambed. </p>
                    </div>
                    <div class="SecondImage"> <img :src="StreamGauges" alt="StramGauges"> </div>
               <div class="ThirdDescription">
                   <h class="Subtitle"> How can we Measure Streamflow Depletion? </h> 
                   <p> Streamflow depletion is challenging to quantify because the impacts of pumping are hidden 
                       by variability in streamflow due to weather or other human activities (i.e., reservoir operations, 
                       land use change), and time lags between when pumping occurs and streamflow is affected. </p>
                    <p>Streamflow depletion can be directly estimated at the scale of a stream reach using detailed 
                        field measurements, but this is very effort-intensive and not feasible for scales beyond a single stream. 
                        For regional-scale estimation, there are three categories of approaches:</p>
                </div>
            </div>
       </div> 
</div>
    
</template>

<script>

import MeasureDepletion from "@/assets/ExploreScience/MeasureDepletion.png";
import StreamflowDepletion from "@/assets/ExploreScience/StreamflowDepletion.png";
import StreamGauges from "@/assets/ExploreScience/StreamGauges.png";

export default {
    name: "ScienceExplanation",
    data: () => ({
    MeasureDepletion: MeasureDepletion,
    StreamflowDepletion: StreamflowDepletion,
    StreamGauges: StreamGauges
  })
};

</script>

<style scoped>

.ScienceContainer {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.Title {
  font-size: 3vw;
  font-weight: 500;
  color: aliceblue;
}

.IntroDescription {
    width: 70%;
    padding: 10px 10px;
    margin:auto;
    color: aliceblue;
}


.ScienceExplanation {
    display: grid;
    grid-template-columns: 4fr 4fr;
}

.Subtitle {
    margin-bottom: 10px;
    font-size: 2vw;
    color: aliceblue;
}

.FirstImage {
    height: 50vh;
    padding-left: 10px;
    margin: 20px 0px;
    background-color: SeaShell;
}

.FirstImage img {
    float: left;
    width: 45vw;
    height: 50vh;
}

.FirstDescription {
    height: 50vh;
    padding: 0px 10px;
    margin: 20px 0px;
    font-size: 1.5vw;
    text-align: justify;
    color: aliceblue;
}

.SecondImage {
    height: 50vh;
    padding-right: 10px;
    margin: 20px 0px
}

.SecondImage img {
    float: right;
    width: 50vw;
    height: 50vh;
}

.SecondDescription {
    width: 45vw;
    height: 50vh;
    padding: 0px 10px;
    margin: 20px 0px;
    font-size: 1.25vw;
    text-align: justify;
    color: aliceblue;
}

.ThirdImage {
    height: 50vh;
    padding-left: 10px;
    margin: 20px 0px;
}

.ThirdImage img {
    float: left;
    width: 45vw;
    height: 50vh;
}

.ThirdDescription {
    height: 50vh;
    padding: 0px 10px;
    margin: 20px 0px;
    font-size: 1.5vw;
    text-align: justify;
    color: aliceblue;
}


</style>