<template>
  <div class="navBar nav">  
    <div class="logo-container"> 
      <img class="img" src="@/assets/Logo.png" alt="LOGO">
      <h3 class="header">DiscoverStream</h3>
    </div>

    <!-- Nav Mobile -->

    <div class="small-screen">
      <button class="hamburger" v-on:click="open = !open">
        <img :src="Hamburger" alt="Menu">
      </button>
      <aside v-bind:class="{ open }">
        <div>
          <button class="close" v-on:click="{open = false; information = false; exploreData = false; content = false}">
            x
          </button>
          <ul class="list-unstyled ct-sidenav-list sidebar-content">
            <li class="sidebar-text">
              <router-link class="sidebar-text" to="/">Home</router-link> 
            </li>
            <li class="sidebar-text">
              <router-link class="sidebar-text" to="/">Explore Science</router-link>       
            </li>
            <li>
              
              <button class="sidebar-dropdown-btn sidebar-text" v-on:click="exploreData = !exploreData">Explore Data 
              </button>
              <div class="sidebar-dropdown" v-show="exploreData">
                <router-link class="sidebar-text" to="/explore">Explore Kansas</router-link>
                <router-link class="sidebar-text" to="/explore">Explore Colarado</router-link>
                <router-link class="sidebar-text" to="/explore">Explore California</router-link>
                <router-link class="sidebar-text" to="/explore">Explore Michigan</router-link>
              </div>
            </li>           
            <li>
              <button class="sidebar-dropdown-btn sidebar-text" v-on:click="information = !information">Information 
              </button>
              <div class="sidebar-dropdown "  v-show="information">
                <router-link class="sidebar-text" to="/about">About</router-link>
                <router-link class="sidebar-text" to="/about">References</router-link>
                <router-link class="sidebar-text" to="/about">Documentation</router-link>
              </div>
            </li>
            <li>
              <button class="sidebar-dropdown-btn sidebar-text" v-on:click="content = !content">Content 
              </button>
              <div class="sidebar-dropdown "  v-show="content">
                <router-link class="sidebar-text" to="/contact">Contact</router-link >
                <router-link class="sidebar-text" to="/contact">Citations</router-link >
                <router-link class="sidebar-text" to="/contact">Liscense</router-link >
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </div>
    

    <!-- Nav for large screens -->
    <div class="nav large-screen"> 
      <router-link to="/">Home</router-link> |
      <router-link to="/">Explore Science</router-link> |
      <!-- <router-link to="/explore">Explore Data</router-link> | -->
      <div class="dropdown">
        <button class="dropbtn">Explore Data 
        </button>
        <div class="dropdown-content explore-sub">
          <router-link to="/explore">Explore Kansas</router-link>
          <router-link to="/explore">Explore Colarado</router-link>
          <router-link to="/explore">Explore California</router-link>
          <router-link to="/explore">Explore Michigan</router-link>
        </div>
      </div> |
      <div class="dropdown">
        <button class="dropbtn">Information 
        </button>
        <div class="dropdown-content information-sub">
          <router-link to="/about">About</router-link>
          <router-link to="/about">References</router-link>
          <router-link to="/about">Documentation</router-link>
        </div>
      </div> |
      <!-- <router-link to="/about">About</router-link> | -->
      <div class="dropdown">
        <button class="dropbtn">Content 
        </button>
        <div class="dropdown-content content-sub">
          <router-link to="/contact">Contact</router-link >
          <router-link to="/contact">Citations</router-link >
          <router-link to="/contact">Liscense</router-link >
        </div>
      </div> 
      <!-- <router-link to="/contact">Contact</router-link>  -->
    </div>
  </div>
</template>


<script>

export default {
  name: "NavBar",
  
  // components: {
  //   Hamburger
  // }
  data: () => ({
    Hamburger: require("../assets/hamburger.svg"),
    open: false,
    information: false,
    content: false,
    exploreData: false,
  }),
};
</script>

<style scoped>
aside {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background: whitesmoke;
  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.5);
  transform: translateX(110%);
  transition: transform 200ms;
  overflow-x: hidden;
  overflow-y: auto;
}

aside.open {
  transform: translateX(0);
}

.sidebar-text{
  margin: 1rem 0rem 0rem 0rem;
}

.close {
  position: absolute;
  cursor: pointer;
  top: 1rem;
  right: 1.5rem;
  text-shadow: none;
  color: black;
  -webkit-transition: color 0.2s ease-in-out;
  transition: color 0.2s ease-in-out;
  background: transparent;
  font-size: 1.5rem;
  opacity: 1;
  font-weight: lighter;
  border: none;
}

.close:focus{
  border: none;
  outline: none;
}

.close:active{
  border: none;
  outline: none;
}

.close:hover{
  opacity: 0.5;
}

.ct-sidenav-list {
  padding: 5rem 2rem 3rem;
  list-style: none;
  color: #6e6e6e;
  text-align: left;
}

/* .sidebar-content {
  text-decoration: none !important;
  
} */

.sidebar-dropdown-btn{
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  font-family: inherit;
  padding: 0;
  font-weight: bold;
  color: #2c3e50;
  font-size: 1rem;

}

.sidebar-dropdown{
  display: flex;
  flex-direction: column;
  margin: 0rem 1rem 1rem 1rem;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.explore-sub{
  margin-left: 11.75rem;
}

.information-sub{
  margin-left: 19.5rem;
}

.content-sub{
  margin-left: 26.5rem;
}

.dropdown {
  display: inline;
  overflow: hidden;
}

.dropdown .dropbtn {
  border: none;
  outline: none;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.dropbtn{
  font-weight: bold;
  font-size: 1rem;
  color: #2c3e50;
  text-decoration: underline;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  background-color: #f9f9f9;
  left: 0;
  min-width: 110px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  /* float: none; */
  color: black;
  padding: 0.5rem 0.75rem;
  display: block;
  text-align: left;
}

.dropdown:hover .dropbtn {
  color: #42b983;
}

.dropdown-content a:hover {
  background-color: #ddd;
  color: black;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.header{
  font-size: 2rem;
  margin: auto 0 auto 0;
  padding-left: 0.5rem;
}

.logo-container{
  display: flex;
}

.img{
  width: 3rem;
}

.navBar {
  display: flex;
  padding: 0.5rem 7rem 0.5rem 7rem;
  justify-content: space-between;
  box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.74);
  z-index: 999;
  position: sticky;
  top: 0;
  background-color:white;
}

.nav{
  margin: auto 0 auto 0;
  position: relative;
  transition: all 500ms ease-in-out;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 1rem;
}

.hamburger {
  cursor: pointer;
  display: block;
  border: none;
  outline: none;
  margin-top: 0.5rem;
  background: white;
}

.hamburger:focus{
  outline: none;
}

@media only screen and (max-width: 1200px) {
  .large-screen{
    display: none ;
  }
  .small-screen{
    display: inline;
  }
  .nav a {
    font-weight: bold;
    color: #2c3e50;
    font-size: 1rem;
    text-decoration: none;
  }
  .navBar {
    padding: 0.5rem 3.5rem 0.5rem 3.5rem;
  }
  
}

@media only screen and (max-width: 700px) {
  .header{
    display: none;
  }
  .navBar {
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  }
}

@media only screen and (min-width: 1200px) {
  .small-screen{
    display: none;
  }
  
}


/* 
.nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
