<template>
  <div class="navBar nav">  
    <div class="logo-container"> 
      <img class="img" src="@/assets/Logo.png" alt="LOGO">
      <h3 class="header">DiscoverStream</h3>
    </div>
    <div class="nav"> 
      <router-link to="/">Home</router-link> |
      <!-- <router-link to="/explore">Explore Data</router-link> | -->
      <div class="dropdown">
        <button class="dropbtn">Explore Data 
        </button>
        <div class="dropdown-content">
          <a href="#">Explore Kansas</a>
          <a href="#">Explore Colarado</a>
          <a href="#">Explore California</a>
          <a href="#">Explore Michigan</a>
        </div>
      </div> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link> 
    </div>
  </div>
</template>


<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
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
  background-color: #f9f9f9;
  min-width: 110px;
  margin-left: 3.5rem;
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
  transition: all 500ms ease-in-out;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 1rem;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
</style>
