<template>
  <div class="navBar nav">  
    <div class="logo-container"> 
      <img class="img" src="@/assets/Logo.png" alt="LOGO">
      <h3 class="header">DiscoverStream</h3>
    </div>
    <div class="nav"> 
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
  name: "NavBar"
};
</script>

<style scoped>
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
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.74);
  z-index: 999;
  position: sticky;
  top: 0;
  background-color: aliceblue;
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
/* 
.nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
