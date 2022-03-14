<template>
<div class="Nav-Container">
    <router-link to="/"> <div class="nav-child logo-container">    
    <img class="LogoBackground" src="@/assets/LogoContainer.svg">
    <img class="logo" src="@/assets/Logo.png" alt="Top-left LOGO which is always displayed">
    <h1 class="header">DiscoverStreams</h1>
    </div>
    </router-link>

    <!-- Nav Mobile -->

<div class="nav-child small-screen">
           <!--   <router-link to="/exploreScience">Explore Science</router-link>       
                <router-link to="/explore">DiscoverStream Data</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/contact">Contact</router-link > -->
    </div>
    

    <!-- Nav for large screens -->
    <div class="nav-child large-screen">
      <label class="menu" >
        <input type="checkbox" checked>
        <div> <span>  <div class="NavigationLinks">
              <div class="links"><router-link to="/exploreScience">Explore Science </router-link> </div>
              <div class="links"><router-link to="/ProjectData"> Data Tool </router-link> </div>
              <div class="links"><router-link to="/Information">Information </router-link> </div>
              <div class="links"><router-link to="/Contact">Contact</router-link > </div> </div> </span>
              <span class="close"> <div class="MenuBar"> 
                <h2 class="MenuName"> Menu </h2> </div> </span>
            </div>
            </label>
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

/*@import url('https://dribbble.com/shots/6350574-Hamburger-switch-animation');

@import url('https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg'); */

.Nav-Container {
  display: grid;
  grid-template-columns: 2fr 5fr;
  position: relative;
  width: 100%;
  height: 100px;
  justify-content: space-between;
  margin: auto;
  transition: all 500ms ease-in-out;
  overflow: hidden;
}

.logo-container{
  display: flex;
  position: relative;
  margin: 0;
}

.logoBackground{
  top: 10px;
  left: 10px;
  position: absolute;
}

.logo{
  top: 20px;
  left: 30px;
  position: absolute;
  border-radius: 60%;
  width: 3.2rem;
  text-decoration: none;
}

.header{
  top: 20px;
  right: 10px;
  position: absolute;
  width: 70%;
  color:rgb(255, 255, 255);
  font-size: 32px;
  margin: 5px 5px;
}

.small-screen {
  display: flex;
  align-items: flex-end;
  width: 60%;
  padding-top: 20px;
  padding-right: 100px;
}

.small-screen a {
  font-family: 'Open Sans', sans-serif;
  font-size: 17px;
  color: rgb(255, 255, 255);
}

.menu {
  display: flex;
  top: 10px;
  right: 10px;
  --front: black;
  --back: black;
  --icon: white;
  perspective: 600px;
  width: 70px;
  height: 70px;
  position: absolute;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

/*.NavPage {
  right: 1300px;
  width: 1190px;
  height: 900px;
  position: absolute;
  background: rgba(83, 80, 80, 0.925);
  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.5);
  transform: translateX(110%);
  transition: transform 200ms;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
}
.NavPage {
  transform: translateX(0);
} */

.NavigationLinks {
  display: flex;
  right: 600px;
  width: 600px;
  height: 70px;
  position: relative;
  justify-content: space-evenly;
  background-color: black;
}


.links {
  width: 100px;
  height: 100px;
  position: relative;
  color: white;
}

.links a{
  text-decoration: none;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  font-size: 20px;
  color: white;
  bottom: 0;
}

.links a:hover{
  text-decoration: underline;
}

.MenuBar{
  display: flex;
  position: relative;
  right: 125px;
  width: 120px;
  height: 60px;
  background-color: black;
  color: white;
  justify-content: center;
}

.MenuName{
  font: 10px;
  font-family: 'Courier New', Courier, monospace;
}


.menu input {
  display: none;
}

 .menu input + div span {
	 --rotateY: 0deg;
	 --background: var(--front);
	 transform: rotateY(var(--rotateY));
	 transform-style: preserve-3d;
	 position: absolute;
	 left: 0;
	 top: 0;
	 width: 100%;
	 height: 100%;
	 border-radius: 50%;
	 background: var(--background);
	 backface-visibility: hidden;
	 transition: transform 0.6s cubic-bezier(0.2, 0.64, 0.48, 1.24);
}

 .menu input + div span:before, .menu input + div span:after {
	 --rotate: 0deg;
	 content: '';
	 position: absolute;
	 width: 16px;
	 height: 2px;
	 border-radius: 1px;
	 top: 50%;
	 left: 50%;
	 background: var(--icon);
	 backface-visibility: hidden;
	 transform: translate(-50%, -50%) rotate(var(--rotate)) translateZ(6px);
}

 .menu input + div span:first-child {
	 --background: var(--back);
}

 .menu input + div span:first-child:before {
	 --rotate: -45deg;
}

 .menu input + div span:first-child:after {
	 --rotate: 45deg;
}

 .menu input + div span:last-child {
	 --rotateY: 180deg;
}

 .menu input + div span:last-child:before {
	 box-shadow: 0 -5px 0 var(--icon), 0 5px 0 var(--icon);
}

 .menu input + div span:last-child:after {
	 display: none;
}

 .menu input:checked + div span:first-child {
	 --rotateY: -180deg;
}

 .menu input:checked + div span:last-child {
	 --rotateY: 0deg;
}

 html {
	 box-sizing: border-box;
	 -webkit-font-smoothing: antialiased;
}

 * {
	 box-sizing: inherit;
}

 *:before, *:after {
	 box-sizing: inherit;
}

 body {
	 min-height: 100vh;
	 display: flex;
	 background: #f5f9ff;
}

 body .dribbble {
	 position: fixed;
	 display: block;
	 right: 20px;
	 bottom: 20px;
}

 body .dribbble img {
	 display: block;
	 height: 28px;
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
