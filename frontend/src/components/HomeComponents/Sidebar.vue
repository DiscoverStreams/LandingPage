<template>
<div class="SidebarBackground">
    <div class="SidebarColumns">
        <div class="NavigationLinks">
            <div class="LinkTop"> </div>
            <div class="InformationLink"> <router-link to="/exploreScience"> Project Information </router-link> </div>
            <div class="ScienceLink"> <router-link to="/exploreScience"> Behind The Science </router-link> </div>
            <div class="VisualizationLink"> <router-link to="/exploreScience"> Visualization Tool</router-link> </div>
            <div class="TeamLink"> <router-link to="/exploreScience"> The Team </router-link> </div>
            <div class="ContactLink"> <router-link to="/exploreScience"> Contact </router-link> </div>
            <div class="LinkBottom"> </div>
        </div>
        <div class="ColumnsDivider"> <img class="Divider" src="@/assets/test2.jpg"> </div>
        <div class="LinksDescriptions">
                        <div class="LinkTop"> </div>
            <div class="InformationExplanation"> <p> Learn about the Project's goals and the tools that allow
                those goals to be achieved </p>
            </div>
             <div class="ScienceExplanation"> <p> Learn about the Science behind streamflow depletion </p></div>
             <div class="VisualizationExplanation"> <p> Visualization tool shows information related
                  to streamflow depletion</p> </div>
             <div class="TeamExplanation"> <p> Learn about the Members behind the project </p> </div>
             <div class="ContactExplanation"> <p> Contact information for business and research inquiries </p></div>
                         <div class="LinkBottom"> </div>
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
    grid-template-columns: 12fr 1fr 14fr;
}

.NavigationLinks {
    display: grid;
    grid-template-rows: 3fr 2fr 2fr 2fr 2fr 2fr 5fr;
    gap: 20px;
    font-size: 50px;
    font-family: roughwork;
    text-decoration: none;
    background-color: black;
    border-bottom: 5px solid;
    border-color:aliceblue;
}

.NavigationLinks a {
    color: wheat;
    text-decoration: none;
}

.NavigationLinks a:hover {
    color: green;
}

.ColumnsDivider{
    grid-template-rows: 1fr;
}

.Divider {
    max-width:100%;
    height: 100vh;
}

.LinksDescriptions {
    display: grid;
    font-size: 30px;
    font-family: roughwork;
    color:blanchedalmond;
    text-decoration: none;
    background-color: rgb(30, 30, 30);
}

</style>