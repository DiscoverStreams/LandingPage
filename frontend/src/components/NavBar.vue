<template>
<div class="Nav-Container">
  <img class="NavBackground" src="@/assets/test7.jpg">
  <router-link to="/">
  <div class="nav-child logo-container">    
    <img class="logo" src="@/assets/Logo.png" alt="Top-left LOGO which is always displayed">
    <h3 class="header">DiscoverStreams</h3>
    </div>
    </router-link>

    <!-- Nav Mobile -->

<div class="nav-child small-screen">
  <label class="smallscreen-child menu">
    <input type="checkbox" checked>
    <div>
      <span></span>
      <span></span>
      </div>
      </label>
           <!--   <router-link to="/exploreScience">Explore Science</router-link>       
                <router-link to="/explore">DiscoverStream Data</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/contact">Contact</router-link > -->
    </div>
    

    <!-- Nav for large screens -->
    <div class="nav-child large-screen">
      <div class="NavigationLinks">
      <router-link to="/exploreScience">Explore Science</router-link> 
      <router-link to="/ProjectData"> Discoverstream Data</router-link>
      <router-link to="/Information">Information</router-link>
      <router-link to="/ProjectTeam">DiscoverStream Team</router-link>
      <router-link to="/Contact">Contact</router-link>
      </div>
      </div>
  </div>
</template>


<script>

import hamburger from '../assets/hamburger.svg'

export default {
  name: "NavBar",

  data: () => ({
    Hamburger: hamburger,
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
  grid-template-columns: 1fr 3fr;
  position: relative;
  height: 100px;
  width: 100%;
  justify-content: space-between;
  padding-top: 10px;
  margin: auto 0 auto 0;
  transition: all 500ms ease-in-out;
}

.logo-container{
  display: flex;
  position: relative;
  padding: 4% 0% 0% 4%;
  margin: 0%;
  
}

.logo{
  border-radius: 60%;
  position: relative;
  width: 3.5rem;
  text-decoration: none;
}

.header{
  position: relative;
  color:azure;
  font-size: 35px;
  margin: 5px 5px;
}

.large-screen {
  display: flex;
  position: relative;;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  padding-top: 22px;
  padding-right: 100px;
}

.NavigationLinks {
  position: absolute;
  padding-left: 50px;
  width: 75%;
  left: 0;
}

.NavigationLinks a{
  text-decoration: none;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  color: rgb(255, 255, 255);
  padding: 10px;
  bottom: 0;
}

.NavigationLinks a:hover{
  text-decoration: underline;
}

.Navbar-Bottom{
  grid-column-start: 1;
  grid-column-end: 3;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}

.Navbottom1{
background-color: rgb(120, 20, 140);
}

.Navbottom2{
  background-color: rgb(70, 0, 90);
}

.Navbottom3{
  background-color: rgb(120, 20, 140);
}

.small-screen {
  display: flex;
  align-items: flex-end;
  width: 60%;
  justify-content: space-around;
  padding-top: 20px;
  padding-right: 100px;
}

.small-screen a {
  font-family: 'Open Sans', sans-serif;
  font-size: 17px;
  color: rgb(255, 255, 255);
}

@media (max-width: 1000px) {
  .large-screen {
    display: none;
  }
  .small-screen {
    display: inline;
  }
}

@media (min-width: 1000px) {
  .small-screen {
    display: none;
  }
}

</style>
