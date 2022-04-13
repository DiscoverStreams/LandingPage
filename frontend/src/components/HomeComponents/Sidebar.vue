<template>
<div class="SidebarBackground">
    <div class="SidebarColumns">
        <div class="LeftColumn">
            <div class="LinkTop"> </div>
            <div class="VisualizationLink"> <router-link to="/VisualizationData"> Visualization Tool </router-link> 
            <p class="VisualizationDescription">  Utilize the DiscoverStreams Visualization Tool </p> </div>
            <div class="ProjectLink"> <router-link to="/Information"> Project Information </router-link> 
            <p class="ProjectDescription">  Learn about the Goal of DiscoverStreams </p> </div>
            <div class="LinkBottom"> </div>
        </div>
        <div class="RightColumn"> <img class="SideBarRightBackgroundImage" src="@/assets/test2.jpg">
        <div class="RightColumnLinks"> <div class="LinkTop"> </div>
            <div class="ScienceLink"> <router-link to="/ExploreScience"> Beyond The Science</router-link>
            <p class="ScienceDescription"> Learn of the Science of Streamflow Depletion </p> </div>
             <div class="TeamLink"> <router-link to="/ProjectTeam"> Team </router-link>
             <p class="TeamDescription"> Learn about the Team Behind the Project </p> </div>
             <div class="ContactLink"> <router-link to="/Contact"> Contact </router-link> 
             <p class="ContactDescription"> Contact Details for Inquiries </p> </div>
             <div class="LinkBottom"> </div> </div>
        </div>
    </div>
</div>

</template>

<script>
export default {
  name: "SideBar",
  }
</script>

<style scoped>

.SidebarBackground {
    width: 100%;
    height: 100vh;
    background-color: white;
}

.SidebarColumns {
    display: grid;
    height: 100vh;
    grid-template-columns: 6fr 4fr;
}
.LeftColumn {
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 4fr 1fr 1fr 4fr;
    gap: 60px;
    font-size: 5vw;
    font-family: roughwork;
    text-decoration: none;
    background-color: rgb(10, 10, 10);
    border-bottom: 5px solid;
    border-color:aliceblue;
}

.LeftColumn a {
    color:aliceblue;
    text-decoration: none;
}

.LeftColumn a:hover {
    color: green;
}

.VisualizationDescription {
    margin: 10px;
    font-size: 20px;
    color:blanchedalmond;
    font-family: Orwell;
}

.ProjectDescription {
    margin: 10px;
    font-size: 20px;
    color: blanchedalmond;
    font-family: Orwell;
}

.SideBarRightBackgroundImage {
    width:1000%;
    height: 100%;
    display: flex;
    position: absolute;
}

.RightColumnLinks {
    width: 40%;
    height: 100vh;
    display: grid;
    position: absolute;
    grid-template-rows: 2fr 1fr 1fr 4fr;
    gap: 40px;
    font-size: 3.5vw;
    font-family: "HandwritingShaded";
    text-decoration: none;
    border-bottom: 5px solid;
    border-color:aliceblue;
}

.RightColumn a {
    color:aliceblue;
    text-decoration: none;
}

.RightColumn a:hover {
    color: green;
}

.ScienceDescription {
    margin: 10px;
    font-size: 20px;
    font-family: Orwell;
    color: blanchedalmond;
}

.TeamDescription {
    margin: 10px;
    font-size: 20px;
    font-family: Orwell;
    color: blanchedalmond;
}

.ContactDescription {
    margin: 10px;
    font-size: 20px;
    font-family: Orwell;
    color: blanchedalmond;
}

</style>