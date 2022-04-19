<template>
<div class="Nav-Container">
    <router-link to="/"> <div class="nav-child logo-container">    
    <img class="LogoBackground" src="@/assets/DiscoverStreamsLogo/LogoContainer.svg">
    <img class="logo" src="@/assets/DiscoverStreamsLogo/Logo.png" alt="Top-left LOGO which is always displayed">
    <h1 class="header">DiscoverStreams</h1>
        <h2 class="ProjectDescription"> Visualizing streamflow depletion across the intercontinental USA </h2>
    </div>
    </router-link>

    <!-- Nav Mobile -->

    <!-- Nav for large screens -->
    <div class="nav-child large-screen">
      <label class="menu" >
        <input type="checkbox" checked >
        <div> <span class="open"> <div class="sidebar"> <Sidebar />  </div> </span>
              <span class="close"> <div class="MenuBar"> 
                <h2 class="MenuName"> Menu </h2> </div> </span>
            </div>
            </label>
      </div>
  </div>
</template>


<script>
import Sidebar from "@/components/HomeComponents/Sidebar.vue";

export default {
  name: "NavBar",
  components: {
    Sidebar
  },

  data: () => {
  },
  methods: {
    check: function(e) {
    }
  }
};
</script>

<style scoped>

.Nav-Container {
  display: grid;
  position: relative;
  grid-template-columns: 2fr 5fr;
  position: abs;
  width: 100%;
  height: 25vh;
  justify-content: space-between;
  margin: auto;
  transition: all 500ms ease-in-out;
  overflow-x: clip;
}

.logo-container{
  top: 10px;
  display: flex;
  position: absolute;
  margin: 0.2vw 0.2vw;
  z-index: 50;
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
  position: absolute;
  top: 25px;
  left: 80px;
  width: 70%;
  color:MintCream;
  font-size: 34px;
  margin: 5px 5px;
  font-family: "Grille";
}

.ProjectDescription {
  top: 55px;
  position: absolute;
  font-size: 20px;
  color: white;
  left: 10px;
  font-family: "typenoksidi";
}

.small-screen {
  display: flex;
  align-items: flex-end;
  width: 60%;
  padding-top: 20px;
  padding-right: 100px;
}

.large-screen {
  display: flex;
  align-items: flex-end;
  width: 60%;
  padding-top: 20px;
  padding-right: 100px;
}


.sidebar {
  position: absolute;
  top: -20px;
  right: -18px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.menu {
  display: flex;
  top: 20px;
  right: 20px;
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
  font: 30px;
  display: flex;
  position: relative;
  top: 8px;
  right: 125px;
  width: 140px;
  height: 55px;
  background-color: black;
  color: white;
  justify-content: center;
}

.MenuName{
  font-family: "Handwriting";
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

@media (max-width: 865px) {
  .LogoBackground {
    display: none;
  }
  .ProjectDescription {
    display: none;
  }
}

  @media (max-width: 710px) {
  .header {
    display: none;
  }
}

</style>
