<template>
<div class="Nav-Container">
  <img class="NavBackground" src="@/assets/BackgroundImages/NavbarBackground.jpg">
  
  <router-link to="/">
  <div class="nav-child logo-container">    
    <img class="Logo" src="@/assets/DiscoverStreamsLogo/Logo.png" alt="Top-left LOGO which is always displayed">
    <h3 class="Header">DiscoverStreams</h3>
    </div>
    </router-link>
    <!-- Nav for large screens -->
    <div class="nav-child large-screen">
      <div class="NavigationLinks">
      <div class="Links"><router-link to="/VisualizationData"> Visualization </router-link> </div>
      <div class="LinkDividers"> <h class="LinkSpaces"> | </h> </div>
      <div class="Links"> <router-link to="/Information"> Information </router-link> </div>
      <div class="LinkDividers"> <h class="LinkSpaces"> | </h> </div>
      <div class="Links"> <router-link to="/ExploreScience"> Explore Science </router-link> </div> 
      <div class="LinkDividers"> <h class="LinkSpaces"> | </h> </div>
      <div class="Links"> <router-link to="/ProjectTeam">DiscoverStreams Team </router-link> </div>
      <div class="LinkDividers"> <h class="LinkSpaces"> | </h> </div>
      <div class="Links"> <router-link to="/Contact">Contact</router-link> </div>
      </div>
      </div>
  </div>
</template>


<script>

export default {
  name: "NavBar",

  data: () => ({
    open: false,
    information: false,
    content: false,
    exploreData: false,
  }),
  watch: {
    '$route' (){
      this.open = false;
      this.information = false;
      this.content = false;
      this.exploreData = false;
    }
  }
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');

.NavBackground {
  display: flex;
  position: absolute;
  width:100%;
  height:100%;
  filter: brightness(60%);
}

.Nav-Container {
  display: grid;
  grid-template-columns: 2.3fr 5fr;
  position: relative;
  height: 90px;
  width: 100%;
  justify-content: space-between;
  padding-top: 10px;
  margin: auto 0 auto 0;
  transition: all 500ms ease-in-out;
}

.logo-container{
  display: flex;
  position: relative;
  padding: 2% 0% 0% 2%;
  margin: 0%;
  
}

.Logo{
  border-radius: 60%;
  position: relative;
  width: 4rem;
  text-decoration: none;
}

.Header{
  position: relative;
  color:MintCream;
  font-size: 30px;
  padding-top: 10px;
  margin: 5px 5px;
  font-family: "Grille";
}

.large-screen {
  display: flex;
  position: relative;
  padding-top: 22px;
  margin-left: 10px;
  width: 100%;
  height: 100%;
  justify-content: space-around;
}

.NavigationLinks {
  display: grid;
  grid-template-columns: 1fr 8fr 1fr 8fr 1fr 8fr 1fr 8fr 1fr 8fr 1fr;
  position: absolute;
  left: 10;
  width: 95%;
}

.NavigationLinks a{
  margin: auto;
  text-decoration: none;
  font-size: 1.6vw;
  font-weight: bold;
  font-family: "OptimusPrinceps";
  color:LightSteelBlue;
}

.NavigationLinks a:hover{
  text-decoration: underline;
  color: green;
}

.LinkDividers {
  position: relative;
}

.LinkSpaces {
  position: absolute;
  bottom: 10px;
  font-size: 3vw;
  color: AliceBlue;
  z-index: 1;
}

@media (max-width: 980px) {
  .Header {
    display: none;
  }

.Nav-Container {
  display: grid;
  grid-template-columns: 1fr 5fr;
  position: relative;
  height: 90px;
  width: 100%;
  justify-content: space-between;
  padding-top: 10px;
  margin: auto 0 auto 0;
  transition: all 500ms ease-in-out;
}

.Logo {
  left: 20px;
}
}

</style>
