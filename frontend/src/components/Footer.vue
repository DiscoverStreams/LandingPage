<template>
  <div class="FooterContainer">
    <img class="FooterBackground" src="@/assets/test5.jpg">
      <div class="logo-container">
        <img class="logo" src="@/assets/Logo.png">
        <div class="FooterHeader"> DiscoverStreams</div>
      </div>
      
      <div class="footer-column">
        <div class="Links"> <router-link to="/VisualizationData"> Visualization</router-link> </div>
        </div>
        <div class="LinkDividers"> <h class="LinkSpaces"> | </h> </div>
        <div class="footer-column">
        <router-link to="/Information"> Project Information </router-link>
        </div>
        <div class="LinkDividers"> <h class="LinkSpaces"> | </h> </div>
        <div class="footer-column">
        <router-link to="/ExploreScience"> Behind The Science  </router-link>
        </div>
        <div class="LinkDividers"> <h class="LinkSpaces"> | </h> </div>
        <div class="footer-column">
        <router-link to="/ProjectTeam"> ProjectTeam </router-link>
        </div> 
    </div>
</template>

<script>

export default {
  name: "Footer",
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.FooterContainer {
  display: grid;
  grid-template-columns: 40fr 15fr 20px 15fr 20px 15fr 20px 15fr 5fr;
  position: relative;
  width: 100%;
  height: 22vh;
}

.FooterBackground{
  display: flex;
  position: absolute;
  width:100%;
  height:100%;
  filter: brightness(60%);
}

.logo-container {
  display: flex;
  margin-top: 0px;
  margin-left: 20px;
  z-index: 1;
}

.logo {
  position: relative;
  top: 25px;
  width: 10vw;
  height: 20vh;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.FooterHeader {
  display: flex;
  position: relative;
  margin: 60px 20px 60px 20px;
  font-size: 3vw;
  color: #d3ffeb;
  font-family: "JBetude";
}

.footer-column {
  display: flex;
  margin: auto;
  margin-left: 40px;
  z-index: 1;
}

.footer-column a {
  font-family: "typenoksidi";
  color: MediumSeaGreen;
  font-size: 1.5vw;
  text-decoration: none;
}

a:hover {
  color: ForestGreen;
}

.LinkDividers {
  position: relative;
}

.LinkSpaces {
  position: absolute;
  left: 30px;
  bottom: 70px;
  font-size: 3vw;
  color: DarkSlateGrey;
  z-index: 1;
}

@media only screen and (max-width: 900px) {
  .logo {
    display: none;
  }
}

@media only screen and (max-width: 680px) {
  .logo-container {
    display: none;
  }
  
  .FooterContainer {
  display: grid;
  grid-template-columns: 10fr 10px 10fr 10px 10fr 10px 10fr 1fr;
  position: relative;
  width: 100%;
  height: 25vh;
}
}

</style>
