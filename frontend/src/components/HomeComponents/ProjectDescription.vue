<template>
<div class="ProjectDescriptionContainer"> 
    <img class="BackgroundImage" src="@/assets/test.jpg">
    <h class="Title"> Research, Collaborate, Visualize, Solve <br> </h>

<div class="ProjectDescriptionGrids">
    <div class="LeftSide"> 
        <div> </div>
        <h class="Description">  
            DiscoverStreams goal is to provide tools to enable the visualization of
            streamflow depletion. These tools will provide vital information that
            will be easily accessible for water managers, landowners, farmers,
            researchers and many more. Here is a snapshot of our visualization tool showing the "blank" watershed
            and some statistics about this region.
            </h>
            <div class="Map"> </div>
    </div>
    <div class="RightSide"> 
            <div class="Chart"> </div>
    </div>
    </div>
    <div class="Divider"> </div>
     <h class="VisualizationLink"> To learn more about the DiscoverStreams visualization tool click
     <router-link to="/VisualizationData"> here </router-link> </h>
     </div>
</template>

<script>
</script>

<style scoped>

.ProjectDescriptionContainer {
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
}

.BackgroundImage{
    display: flex;
    position: absolute;
    width:100%;
    height:125vh;
}

.Title {
    font-size: 3.5vw;
    position: relative;
    color:GhostWhite;
    font-family: "Grille";
    border-bottom: 2px solid LightSlateGrey;
}

.ProjectDescriptionGrids{
    display: grid;
    position: absolute;
    grid-template-columns: 3fr 4fr;
}

.LeftSide{
    width: 100%;
    height: 100%;
    position: relative;
    text-align: justify;
}

.Description {
    display: flex;
    position: relative;
    margin: 10px 20px 10px 20px;
    font-size: 1.35vw;
    color:Ivory;
    font-family: "Orwell";
}

.Map {
    display: flex;
    position: relative;
    margin-left: 10px;
    width: 100%;
    height: 80vh;
    background-color:bisque;
}

.RightSide {
    width: 100%;
    height: 100%;
    position: relative;
    float: right;
}

.Chart {
    margin: 40px 20px 0px 40px;
    height: 95vh;
    background-color: bisque;
    display: flex;
    position: relative;
}

.ChartDescription {
    margin-left: 50px;
    margin-top: 0px;
    font-size: 1.2vw;
    color: FloralWhite;
    display: flex;
    position: relative;
    font-family: "Orwell";
}

.Divider {
    position: absolute;
    bottom: 80px;
    width: 100%;
    height: 1px;
    background-color: MidnightBlue;
}

.VisualizationLink {
    position: absolute;
    bottom: 30px;
    left: 10px;
    font-size: 2vw;
    color:azure;
    font-family: "Orwell";
    border-bottom: LightSlateGrey solid 2px;
}

@media (max-height: 510px) {

.Divider {
    position: absolute;
    bottom: 0px;
}

.VisualizationLink {
    position: absolute;
    bottom: 10px;
}

}


</style>